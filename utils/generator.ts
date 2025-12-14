
import { Artifact, BuildingCategory } from '../types';
import { PROCEDURAL_DATA, TECH_LORE_INJECTIONS, UNIQUE_ARTIFACTS } from '../data/artifacts';

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const interpolate = (template: string, overrides: { topic?: string, user?: string } = {}) => {
    const year = Math.floor(Math.random() * (2024 - 1990 + 1)) + 1990;
    const number = Math.floor(Math.random() * 999) + 1;
    // We expect valid arrays, but safe check in case unlocked pool is empty
    const topic = overrides.topic || pick(PROCEDURAL_DATA.common.topics) || "Unknown";
    const user = overrides.user || pick(PROCEDURAL_DATA.common.users) || "User";
    
    return template
        .replace(/{year}/g, year.toString())
        .replace(/{number}/g, number.toString())
        .replace(/{topic}/g, topic)
        .replace(/{user}/g, user);
};

export const generateArtifact = (depth: number, researchedTechs: string[]): Artifact => {
    
    // 1. Build Dynamic Pools based on Techs
    let availableTopics = [...PROCEDURAL_DATA.common.topics];
    
    // Add Tech-Unlocked Content to the Pools
    researchedTechs.forEach(techId => {
        const injection = TECH_LORE_INJECTIONS[techId];
        if (injection) {
            if (injection.topics) availableTopics.push(...injection.topics);
        }
    });

    // 2. Determine Type (New Logic with new types)
    const roll = Math.random();
    let subtype: Artifact['subtype'] = 'file';
    
    if (roll < 0.50) subtype = 'file';
    else if (roll < 0.70) subtype = 'bookmark';
    else if (roll < 0.80) subtype = 'media';
    else if (roll < 0.90) subtype = 'hardware';
    else if (roll < 0.96) subtype = 'signal';
    else subtype = 'creature'; // 4% rare chance for creature

    // 3. Determine Rarity (NERFED: High rarities now come mostly from Investigation)
    const rarityRoll = Math.random();
    let rarity: Artifact['rarity'] = 'common';
    
    // Anomaly is depth based, extremely rare direct drop
    if (depth > 50 && Math.random() > 0.995) rarity = 'anomaly'; 
    else if (rarityRoll > 0.98) rarity = 'rare'; // Significantly reduced
    else rarity = 'common';

    // 4. Investigation / Hidden Loot Logic
    let hiddenLootId: string | undefined = undefined;
    let hasHint = false;
    let forcedProceduralType: 'document' | 'image' | 'data' | 'log' | 'archive' | 'code' | undefined = undefined;

    // Base chance for hidden content
    const investigationChance = 0.05 + (depth * 0.001); // Increases with depth
    
    if (Math.random() < investigationChance) {
        const secretRoll = Math.random();
        if (secretRoll < 0.1) { // NERFED: 30% -> 10% chance of UNIQUE
            // 10% chance of hidden loot being a UNIQUE item
            const targetUnique = pick(UNIQUE_ARTIFACTS);
            hiddenLootId = targetUnique.id;
            // FORCE TYPE to match hidden loot if it specifies one
            if (targetUnique.linkedProceduralType) {
                forcedProceduralType = targetUnique.linkedProceduralType as any;
                if (forcedProceduralType) subtype = 'file'; // Most uniques hide in files
            }
        } else {
            // 90% chance of just being a "High Value" resource bundle
            hiddenLootId = 'resource_bundle';
        }
        
        // Visual Hint Logic
        let detectionChance = 0.2; 
        if (researchedTechs.includes('steganography')) detectionChance += 0.3;
        if (researchedTechs.includes('pattern_recognition')) detectionChance += 0.3;
        
        if (Math.random() < detectionChance) {
            hasHint = true;
        }
    }

    let name = '';
    let description = '';
    let flavorText = '';
    let details = '';
    let category = BuildingCategory.SURVIVAL;

    // Helper to get random tech template if available
    const getTechTemplate = (techId: string): string | undefined => {
        const injection = TECH_LORE_INJECTIONS[techId];
        if (injection && injection.templates && injection.templates.length > 0) {
            return pick(injection.templates);
        }
        return undefined;
    };

    // Helper to see if we should force a "Themed" drop
    const relevantTechIds = researchedTechs.filter(id => TECH_LORE_INJECTIONS[id]);
    const forceTheme = relevantTechIds.length > 0 && Math.random() < 0.25;
    let activeTechId = forceTheme ? pick(relevantTechIds) : null;

    let selectedTopic = activeTechId && TECH_LORE_INJECTIONS[activeTechId]?.topics 
        ? pick(TECH_LORE_INJECTIONS[activeTechId]!.topics!) 
        : pick(availableTopics);

    // --- GENERATION SWITCH ---
    if (subtype === 'file') {
        category = BuildingCategory.ARCHIVE;
        const fileTypes = ['document', 'image', 'data', 'log', 'archive', 'code'] as const;
        let contentTypeKey = pick(fileTypes as any) as keyof typeof PROCEDURAL_DATA.files;
        if (forcedProceduralType && fileTypes.includes(forcedProceduralType as any)) {
            contentTypeKey = forcedProceduralType as any;
        }
        const contentTypeData = PROCEDURAL_DATA.files[contentTypeKey];

        let ext = pick(contentTypeData.exts);
        let prefix = pick(contentTypeData.prefixes);
        if (activeTechId && TECH_LORE_INJECTIONS[activeTechId]?.prefixes) {
            prefix = pick(TECH_LORE_INJECTIONS[activeTechId]!.prefixes!);
        }

        if (contentTypeKey === 'log' || activeTechId) {
             name = `${prefix}${selectedTopic.replace(/\s+/g, '_').substring(0, 15)}${ext}`;
        } else {
             name = `${prefix}${Math.floor(Math.random()*1000)}${ext}`;
        }
        
        let template = pick(contentTypeData.templates);
        if (activeTechId) {
            const techTempl = getTechTemplate(activeTechId);
            if (techTempl) template = techTempl;
        }
        description = interpolate(template, { topic: selectedTopic });

        const hash = Math.random().toString(16).substr(2, 8).toUpperCase();
        flavorText = `MD5: ${hash} | Owner: ${pick(PROCEDURAL_DATA.common.users)}`;
        const size = (Math.random() * 15).toFixed(1);
        const unit = Math.random() > 0.8 ? 'MB' : 'KB';
        details = `${size} ${unit}`;

        if (contentTypeKey === 'data') category = BuildingCategory.TECHNOCRACY;
        if (contentTypeKey === 'log') category = BuildingCategory.FOLKLORE;
        if (contentTypeKey === 'code') category = BuildingCategory.TECHNOCRACY;

    } else if (subtype === 'bookmark') {
        category = BuildingCategory.FOLKLORE;
        const data = PROCEDURAL_DATA.bookmarks;
        let title = pick(data.titles);
        let prefix = pick(data.prefixes);
        if (activeTechId) title = selectedTopic.replace(/\s+/g, '_'); 
        name = `${prefix} ${title}`;
        
        let template = pick(data.description_templates);
        if (activeTechId) {
            const techTempl = getTechTemplate(activeTechId);
            if (techTempl) template = techTempl;
        }
        description = interpolate(template, { topic: selectedTopic });

        const code = [200, 404, 503, 403, 301][Math.floor(Math.random() * 5)];
        const ms = Math.floor(Math.random() * 800) + 20;
        flavorText = `HTTP ${code} | Ping: ${ms}ms`;
        details = `Server: Apache/${(Math.random() * 2 + 1).toFixed(1)}.x`;

    } else if (subtype === 'hardware') {
        category = BuildingCategory.TECHNOCRACY;
        name = interpolate(pick(PROCEDURAL_DATA.hardware.names), { topic: selectedTopic });
        description = interpolate(pick(PROCEDURAL_DATA.hardware.templates), { topic: selectedTopic });
        flavorText = `Condition: ${['Poor', 'Fair', 'Damaged', 'Burnt', 'Salvaged'][Math.floor(Math.random()*5)]}`;
        details = `Weight: ${(Math.random() * 2).toFixed(2)} kg`;

    } else if (subtype === 'media') {
        category = BuildingCategory.ARCHIVE;
        name = interpolate(pick(PROCEDURAL_DATA.media.names), { topic: selectedTopic });
        description = interpolate(pick(PROCEDURAL_DATA.media.templates), { topic: selectedTopic });
        flavorText = `Format: Analog/Digital`;
        details = `Capacity: Unknown`;

    } else if (subtype === 'creature') {
        category = BuildingCategory.FOLKLORE;
        name = interpolate(pick(PROCEDURAL_DATA.creature.names), { topic: selectedTopic });
        description = interpolate(pick(PROCEDURAL_DATA.creature.templates), { topic: selectedTopic });
        flavorText = `DNA: UNKNOWN`;
        details = `Bio-Hazard Class: ${Math.floor(Math.random()*4)+1}`;

    } else if (subtype === 'signal') {
        category = BuildingCategory.NETWORK;
        name = interpolate(pick(PROCEDURAL_DATA.signal.names), { topic: selectedTopic });
        description = interpolate(pick(PROCEDURAL_DATA.signal.templates), { topic: selectedTopic });
        flavorText = `Freq: ${Math.floor(Math.random()*9000)} kHz`;
        details = `Signal Strength: -${Math.floor(Math.random()*100)} dBm`;
    }

    // Override category if active tech suggests a theme
    if (activeTechId) {
        if (activeTechId.includes('magic') || activeTechId.includes('history')) category = BuildingCategory.HISTORY;
        else if (activeTechId.includes('conspiracy') || activeTechId.includes('state')) category = BuildingCategory.SUBVERSION;
        else if (activeTechId.includes('aklo') || activeTechId.includes('occult')) category = BuildingCategory.ESOTERIC;
    }

    return {
        id: `proc_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        name: name,
        description: description,
        flavorText: flavorText,
        subtype: subtype,
        details: details,
        category: category,
        rarity: rarity,
        isProcedural: true,
        bonusType: 'none',
        bonusValue: 0, 
        dropChanceWeight: 0,
        hiddenLootId,
        hasHint
    };
};
