
import { useCallback } from 'react';
import { GameState, ResourceType } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';

export const useGameCalculators = (gameState: GameState) => {
  
  const calculateRecycleEfficiency = useCallback(() => {
    let eff = 1.0;
    const techs = gameState.researchedTechs;
    if (techs.includes('cardboard_architecture')) eff += 0.1;
    if (techs.includes('used_hardware_flipping')) eff += 0.15;
    if (techs.includes('data_hoarding_basics')) eff += 0.25;
    if (techs.includes('deduplication')) eff += 0.15;
    if (techs.includes('cold_storage_protocols')) eff += 0.1;
    if (techs.includes('dead_theory_bot')) eff += 0.1;
    return eff;
  }, [gameState.researchedTechs]);

  const calculateGlobalCostReduction = useCallback(() => {
    let reduction = 0;
    TECHS.forEach(tech => {
        if (gameState.researchedTechs.includes(tech.id) && tech.effects.globalCostReduction) {
            reduction += tech.effects.globalCostReduction;
        }
    });
    return reduction;
  }, [gameState.researchedTechs]);

  const calculateClickPower = useCallback(() => {
    let power = 1;
    TECHS.forEach(tech => {
        if (gameState.researchedTechs.includes(tech.id) && tech.effects.clickPowerMult) {
            power += tech.effects.clickPowerMult;
        }
    });
    gameState.artifacts.forEach(art => {
        if (art.bonusType === 'click_power') power += art.bonusValue;
    });
    if (gameState.researchedTechs.includes('vacuum_decay')) power *= 5.0;
    return power;
  }, [gameState.researchedTechs, gameState.artifacts]);

  const calculateTotalProduction = useCallback((state: GameState) => {
    const production: Record<ResourceType, number> = {} as any;
    Object.values(ResourceType).forEach(r => production[r] = 0);

    Object.entries(state.buildings).forEach(([bId, count]) => {
        if (count <= 0) return;
        const building = BUILDINGS.find(b => b.id === bId);
        if (!building || !building.baseProduction) return;
        
        Object.entries(building.baseProduction).forEach(([res, amount]) => {
             production[res as ResourceType] += amount * count;
        });
    });

    Object.keys(production).forEach(resKey => {
        const res = resKey as ResourceType;
        let mult = 1.0;

        TECHS.forEach(tech => {
            if (state.researchedTechs.includes(tech.id)) {
                if (tech.effects.resourceMultipliers && tech.effects.resourceMultipliers[res]) {
                    mult += tech.effects.resourceMultipliers[res]!;
                }
            }
        });

        state.artifacts.forEach(art => {
            if (art.bonusType === 'production_multiplier' && art.targetResource === res) {
                mult += art.bonusValue;
            }
        });

        state.activeEvents.forEach(evt => {
            if (evt.multipliers && evt.multipliers[res]) {
                mult *= evt.multipliers[res]!;
            }
        });

        if (production[res] > 0) {
            production[res] *= mult;
        }
    });

    // Reality Stability Bonus (>120 Reality gives 10% Global Production Bonus to positive outputs)
    if (state.resources[ResourceType.REALITY] > 120) {
        Object.keys(production).forEach(resKey => {
            const res = resKey as ResourceType;
            if (production[res] > 0) {
                production[res] *= 1.1;
            }
        });
    }
    
    return production;
  }, []);

  return {
    calculateRecycleEfficiency,
    calculateGlobalCostReduction,
    calculateClickPower,
    calculateTotalProduction
  };
};
