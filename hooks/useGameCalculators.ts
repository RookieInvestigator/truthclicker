
import { useCallback } from 'react';
import { GameState } from '../types';
import { TECHS } from '../data/techs';
import { calculateProductionRates } from '../utils/productionUtils';

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

  // Use the utility function to keep logic in one place
  const calculateTotalProduction = useCallback((state: GameState) => {
    return calculateProductionRates(state);
  }, []);

  return {
    calculateRecycleEfficiency,
    calculateGlobalCostReduction,
    calculateClickPower,
    calculateTotalProduction
  };
};
