import type { MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS } from '../src/material-community-icons-to-sf-symbols';
import type { MATERIAL_ICONS_TO_SF_SYMBOLS } from '../src/material-icons-to-sf-symbols';

type MaterialCommunityIconsFromSfSymbols = keyof typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS;
type MaterialIconsFromSfSymbols = keyof typeof MATERIAL_ICONS_TO_SF_SYMBOLS;

type SfSymbolsFromMaterialCommunityIcons =
  (typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS)[keyof typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS];
type SfSymbolsFromMaterialIcons =
  (typeof MATERIAL_ICONS_TO_SF_SYMBOLS)[keyof typeof MATERIAL_ICONS_TO_SF_SYMBOLS];

type SfSymbols = SfSymbolsFromMaterialCommunityIcons | SfSymbolsFromMaterialIcons;

export type {
  SfSymbolsFromMaterialCommunityIcons,
  MaterialCommunityIconsFromSfSymbols,
  SfSymbolsFromMaterialIcons,
  MaterialIconsFromSfSymbols,
  SfSymbols,
};
