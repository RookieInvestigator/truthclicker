
import { GameState, ResourceType } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';

export const calculateProductionRates = (state: GameState): Record<ResourceType, number> => {
    // Final Net Production
    const production: Record<ResourceType, number> = {} as any;
    
    // Intermediate accumulators
    const grossProduction: Record<ResourceType, number> = {} as any;
    const grossConsumption: Record<ResourceType, number> = {} as any;

    // Initialize all to 0
    Object.values(ResourceType).forEach(r => {
        production[r] = 0;
        grossProduction[r] = 0;
        grossConsumption[r] = 0;
    });

    // CONSTANT DECAY FOR DEJAVU (Memories fading away)
    // This makes the prestige currency slowly degrade over time.
    grossConsumption[ResourceType.DEJAVU] = -0.001;

    // 1. Accumulate Base Values (Separated)
    Object.entries(state.buildings).forEach(([bId, count]) => {
        if (count <= 0) return;
        const building = BUILDINGS.find(b => b.id === bId);
        if (!building || !building.baseProduction) return;
        
        Object.entries(building.baseProduction).forEach(([res, amount]) => {
             const total = amount * count;
             if (total > 0) {
                 grossProduction[res as ResourceType] += total;
             } else {
                 // Amount is negative, so total is negative. We accumulate the negative value.
                 grossConsumption[res as ResourceType] += total;
             }
        });
    });

    // Calculate DejaVu Multiplier
    // Formula: Each point of Deja Vu provides +50% global production (1 + 0.5 * dejavu)
    const dejavu = state.resources[ResourceType.DEJAVU] || 0;
    const dejavuMultiplier = 1 + (dejavu * 0.5);

    // 2. Apply Multipliers to Gross Production ONLY
    // Multipliers DO NOT affect consumption (negative values).
    Object.keys(grossProduction).forEach(resKey => {
        const res = resKey as ResourceType;
        
        // No positive production? No multipliers needed.
        if (grossProduction[res] <= 0) return;

        let mult = 1.0;

        // Apply DejaVu Global Bonus
        mult *= dejavuMultiplier;

        // Tech Multipliers
        TECHS.forEach(tech => {
            if (state.researchedTechs.includes(tech.id)) {
                if (tech.effects.resourceMultipliers && tech.effects.resourceMultipliers[res]) {
                    mult += tech.effects.resourceMultipliers[res]!;
                }
            }
        });

        // Artifact Multipliers
        state.artifacts.forEach(art => {
            if (art.bonusType === 'production_multiplier' && art.targetResource === res) {
                mult += art.bonusValue;
            }
        });

        // Event Multipliers
        state.activeEvents.forEach(evt => {
            if (evt.multipliers && evt.multipliers[res]) {
                mult *= evt.multipliers[res]!;
            }
        });

        // Apply Multiplier to the Gross Gain
        grossProduction[res] *= mult;

        // 3. Global Reality Stability Bonus (Only for positive output)
        if (state.resources[ResourceType.REALITY] > 120) {
            grossProduction[res] *= 1.1;
        }
    });

    // 4. Combine Gain and Loss for Net Production
    Object.values(ResourceType).forEach(res => {
        // Gross Production is positive (boosted), Gross Consumption is negative (flat).
        production[res] = grossProduction[res] + grossConsumption[res];
    });
    
    return production;
};
