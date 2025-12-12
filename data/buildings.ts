
import { Building } from '../types';
import { SURVIVAL_BUILDINGS } from './content/buildings/survival';
import { CAPITAL_BUILDINGS } from './content/buildings/capital';
import { NETWORK_BUILDINGS } from './content/buildings/network';
import { INTERNET_CULTURE_BUILDINGS } from './content/buildings/internet_culture';
import { VERIFICATION_BUILDINGS } from './content/buildings/verification';
import { HISTORY_BUILDINGS } from './content/buildings/history';
import { TECHNOCRACY_BUILDINGS } from './content/buildings/technocracy';
import { COUNTER_CULTURE_BUILDINGS } from './content/buildings/counter_culture';
import { FOLKLORE_BUILDINGS } from './content/buildings/folklore';
import { SUBVERSION_BUILDINGS } from './content/buildings/subversion';
import { ARCHIVE_BUILDINGS } from './content/buildings/archive';
import { ESOTERIC_BUILDINGS } from './content/buildings/esoteric';
import { ADULT_BUILDINGS } from './content/buildings/adult';
import { CRYPTID_BUILDINGS } from './content/buildings/cryptid'; 
import { TRUTH_BUILDINGS } from './content/buildings/truth'; // Added

export const BUILDINGS: Building[] = [
  ...SURVIVAL_BUILDINGS,
  ...CAPITAL_BUILDINGS,
  ...NETWORK_BUILDINGS,
  ...INTERNET_CULTURE_BUILDINGS,
  ...ADULT_BUILDINGS, 
  ...VERIFICATION_BUILDINGS,
  ...HISTORY_BUILDINGS,
  ...CRYPTID_BUILDINGS, 
  ...TECHNOCRACY_BUILDINGS,
  ...COUNTER_CULTURE_BUILDINGS,
  ...FOLKLORE_BUILDINGS,
  ...SUBVERSION_BUILDINGS,
  ...ARCHIVE_BUILDINGS,
  ...ESOTERIC_BUILDINGS,
  ...TRUTH_BUILDINGS // Added
];
