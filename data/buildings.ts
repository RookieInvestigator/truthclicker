
import { Building } from '../types';
import { SURVIVAL_BUILDINGS } from './content/buildings/survival';
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

export const BUILDINGS: Building[] = [
  ...SURVIVAL_BUILDINGS,
  ...NETWORK_BUILDINGS,
  ...INTERNET_CULTURE_BUILDINGS,
  ...VERIFICATION_BUILDINGS,
  ...HISTORY_BUILDINGS,
  ...TECHNOCRACY_BUILDINGS,
  ...COUNTER_CULTURE_BUILDINGS,
  ...FOLKLORE_BUILDINGS,
  ...SUBVERSION_BUILDINGS,
  ...ARCHIVE_BUILDINGS,
  ...ESOTERIC_BUILDINGS
];
