
import { GameState, ResourceType } from '../types';

/**
 * FlagLogic is a function that takes the current GameState and returns boolean.
 * This allows for complex, dynamic checks beyond simple "has this flag been set".
 */
export type FlagLogic = (state: GameState) => boolean;

/**
 * DEFINITIONS for Complex Flags.
 * 
 * Simple flags (like "EVENT_X_OPTION_Y_CHOSEN") do NOT need to be defined here.
 * They are just strings stored in `state.flags`.
 * 
 * This file is for "Computed Flags" that combine multiple conditions.
 * Example: 'can_see_secret_ending' might depend on 3 other flags + specific resources.
 */
export const COMPLEX_FLAGS: Record<string, FlagLogic> = {
    // --- EXAMPLES (Scaffolding) ---
    
    // Example: Check if player has gone deep enough AND has specific knowledge
    'is_deep_diver_ready': (state) => {
        return state.depth > 1000 && state.resources[ResourceType.ANCIENT_WISDOM] > 50;
    },

    // Example: Check if player is focusing on "Evil" tech path
    'is_villain_path': (state) => {
        return state.researchedTechs.includes('neurolinguistic_programming') && 
               state.researchedTechs.includes('subliminal_msg_station') &&
               state.resources[ResourceType.MIND_CONTROL] > 1000;
    },

    // Example: Meta check
    'has_broken_fourth_wall': (state) => {
        return state.researchedTechs.includes('fourth_wall_break');
    }
};

/**
 * Main helper to check if a Flag is active.
 * 
 * @param flagId The ID of the flag to check.
 * @param state The current GameState.
 * @returns true if the flag is active (either present in persistent flags OR condition met).
 */
export const checkFlag = (flagId: string, state: GameState): boolean => {
    // 1. First check if it's a defined Complex Flag with logic
    if (COMPLEX_FLAGS[flagId]) {
        return COMPLEX_FLAGS[flagId](state);
    }

    // 2. Fallback: Check if it's a simple persistent flag stored in state
    return state.flags ? state.flags.includes(flagId) : false;
};

/**
 * Helper to check multiple flags (ALL must be true).
 */
export const checkAllFlags = (flagIds: string[], state: GameState): boolean => {
    return flagIds.every(id => checkFlag(id, state));
};

/**
 * Helper to check multiple flags (ANY must be true).
 */
export const checkAnyFlag = (flagIds: string[], state: GameState): boolean => {
    return flagIds.some(id => checkFlag(id, state));
};
