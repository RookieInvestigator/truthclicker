
import { Artifact, BuildingCategory } from '../types';
import { PROCEDURAL_DATA, TECH_LORE_INJECTIONS } from '../data/artifacts';

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
    let filePrefixes = { ...PROCEDURAL_DATA.files.document.prefixes }; // Start with doc prefixes as base
    
    // Add Tech-Unlocked Content to the Pools
    researchedTechs.forEach(techId => {
        const injection = TECH_LORE_INJECTIONS[techId];
        if (injection) {
            if (injection.topics) availableTopics.push(...injection.topics);
            // We just mix prefixes into a generic bag for now
            if (injection.prefixes) {
                // Ugly hack to mix array into object for randomness later, 
                // simpler to just pick from a merged list during generation
            }
        }
    });

    // 2. Determine Type (File vs Bookmark)
    const isFile = Math.random() < 0.65;
    
    // 3. Determine Rarity
    // Depth slightly increases rarity chance
    const depthBonus = Math.min(0.1, depth * 0.005);
    const roll = Math.random();
    let rarity: Artifact['rarity'] = 'common';
    
    if (roll > 0.995 - depthBonus) { rarity = 'legendary'; }
    else if (roll > 0.95 - depthBonus) { rarity = 'rare'; }
    
    // Anomaly Chance (Very low, requires depth)
    if (depth > 20 && Math.random() > 0.99) rarity = 'anomaly'; 

    let name = '';
    let description = '';
    let flavorText = '';
    let details = '';
    let category = BuildingCategory.SURVIVAL;
    let subtype: 'file' | 'bookmark' = 'file';

    // Helper to get random tech template if available
    const getTechTemplate = (techId: string): string | undefined => {
        const injection = TECH_LORE_INJECTIONS[techId];
        if (injection && injection.templates && injection.templates.length > 0) {
            return pick(injection.templates);
        }
        return undefined;
    };

    // Helper to see if we should force a "Themed" drop (20% chance)
    // A themed drop uses a specific tech's templates strictly, rather than the mixed pool
    const relevantTechIds = researchedTechs.filter(id => TECH_LORE_INJECTIONS[id]);
    const forceTheme = relevantTechIds.length > 0 && Math.random() < 0.25;
    let activeTechId = forceTheme ? pick(relevantTechIds) : null;

    // Use topics from the specific tech if forced, otherwise mixed pool
    let selectedTopic = activeTechId && TECH_LORE_INJECTIONS[activeTechId]?.topics 
        ? pick(TECH_LORE_INJECTIONS[activeTechId]!.topics!) 
        : pick(availableTopics);

    if (isFile) {
        subtype = 'file';
        category = BuildingCategory.ARCHIVE;
        
        // Select Content Type
        const fileTypes = ['document', 'image', 'data', 'log', 'archive'] as const;
        const contentTypeKey = pick(fileTypes as any) as keyof typeof PROCEDURAL_DATA.files;
        const contentTypeData = PROCEDURAL_DATA.files[contentTypeKey];

        // Name Generation
        let ext = pick(contentTypeData.exts);
        let prefix = pick(contentTypeData.prefixes);
        
        // Inject tech prefix if available
        if (activeTechId && TECH_LORE_INJECTIONS[activeTechId]?.prefixes) {
            prefix = pick(TECH_LORE_INJECTIONS[activeTechId]!.prefixes!);
        }

        if (contentTypeKey === 'log' || activeTechId) {
             // More formal names for logs or tech items
             name = `${prefix}${selectedTopic.replace(/\s+/g, '_').substring(0, 15)}${ext}`;
        } else {
             // Random names for junk
             name = `${prefix}${Math.floor(Math.random()*1000)}${ext}`;
        }
        
        // Description Generation
        let template = pick(contentTypeData.templates);
        
        // Override with Tech Template if forced
        if (activeTechId) {
            const techTempl = getTechTemplate(activeTechId);
            if (techTempl) template = techTempl;
        }

        description = interpolate(template, { topic: selectedTopic });

        // Flavor Text
        const hash = Math.random().toString(16).substr(2, 8).toUpperCase();
        flavorText = `MD5: ${hash} | Owner: ${pick(PROCEDURAL_DATA.common.users)}`;

        // Details
        const size = (Math.random() * 15).toFixed(1);
        const unit = Math.random() > 0.8 ? 'MB' : 'KB';
        details = `${size} ${unit}`;

        // Category adjustments
        if (contentTypeKey === 'data') category = BuildingCategory.TECHNOCRACY;
        if (contentTypeKey === 'log') category = BuildingCategory.FOLKLORE;
        
        // Adjust category based on Tech Category (simple mapping based on string analysis of ID)
        if (activeTechId) {
            if (activeTechId.includes('magic') || activeTechId.includes('history')) category = BuildingCategory.HISTORY;
            else if (activeTechId.includes('conspiracy') || activeTechId.includes('state')) category = BuildingCategory.SUBVERSION;
            else if (activeTechId.includes('aklo') || activeTechId.includes('occult')) category = BuildingCategory.ESOTERIC;
        }

    } else {
        // BOOKMARK GENERATION
        subtype = 'bookmark';
        category = BuildingCategory.FOLKLORE;
        
        const data = PROCEDURAL_DATA.bookmarks;
        let title = pick(data.titles);
        let prefix = pick(data.prefixes);
        
        if (activeTechId) {
            // Use topic as title for tech bookmarks
            title = selectedTopic.replace(/\s+/g, '_'); 
        }

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

        // Path / Server Info
        if (Math.random() > 0.5) {
             const pathUser = pick(PROCEDURAL_DATA.common.users);
             const path = Math.random() > 0.5 ? `/var/www/${pathUser}/` : `C:\\Inetpub\\${pathUser}\\`;
             details = `Path: ${path}`;
        } else {
             details = `Server: Apache/${(Math.random() * 2 + 1).toFixed(1)}.x`;
        }
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
        dropChanceWeight: 0 
    };
};
