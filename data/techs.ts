
import { Tech } from '../types';
import { TIER_0_TECHS } from './content/techs/tier0';
import { TIER_1_TECHS } from './content/techs/tier1';
import { TIER_2_TECHS } from './content/techs/tier2';
import { TIER_3_TECHS } from './content/techs/tier3';
import { TIER_4_TECHS } from './content/techs/tier4';
import { TIER_5_TECHS } from './content/techs/tier5';
import { TIER_6_TECHS } from './content/techs/tier6';
import { TIER_7_TECHS } from './content/techs/tier7';
import { TIER_8_TECHS } from './content/techs/tier8';
import { TRUTH_TECHS } from './content/techs/truth'; // Added

export const TECHS: Tech[] = [
  ...TIER_0_TECHS,
  ...TIER_1_TECHS,
  ...TIER_2_TECHS,
  ...TIER_3_TECHS,
  ...TIER_4_TECHS,
  ...TIER_5_TECHS,
  ...TIER_6_TECHS,
  ...TIER_7_TECHS,
  ...TIER_8_TECHS,
  ...TRUTH_TECHS // Added
];
