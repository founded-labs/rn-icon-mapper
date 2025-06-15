import type { MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS } from '../src/material-community-icons-to-sf-symbols';
import type { MATERIAL_ICONS_TO_SF_SYMBOLS } from '../src/material-icons-to-sf-symbols';

type MaterialCommunityIconsFromSfSymbols = keyof typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS;
type MaterialIconsFromSfSymbols = keyof typeof MATERIAL_ICONS_TO_SF_SYMBOLS;

type SfSymbolsFromMaterialCommunityIcons =
  (typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS)[keyof typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS];
type SfSymbolsFromMaterialIcons =
  (typeof MATERIAL_ICONS_TO_SF_SYMBOLS)[keyof typeof MATERIAL_ICONS_TO_SF_SYMBOLS];

type SfSymbols = SfSymbolsFromMaterialCommunityIcons | SfSymbolsFromMaterialIcons;

/**
 * Base for IconMapper
 */
type Base = {
  color?: string;
  size?: number;
};

type NameAndSfSymbol<
  T extends { name: string },
  U extends { name: string },
  V extends { name: string }
> = Base & {
  name: SfSymbols;
  sfSymbol?: T;
  materialIcon?: Omit<Partial<U>, 'name'>;
  materialCommunityIcon?: never;
};

type NameAndMaterialCommunityIcon<
  T extends { name: string },
  U extends { name: string },
  V extends { name: string }
> = Base & {
  name: SfSymbols;
  sfSymbol?: Omit<Partial<T>, 'name'>;
  materialIcon?: never;
  materialCommunityIcon?: V;
};

type NameAndMaterialIcon<
  T extends { name: string },
  U extends { name: string },
  V extends { name: string }
> = Base & {
  name: SfSymbols;
  sfSymbol?: Omit<Partial<T>, 'name'>;
  materialIcon?: U;
  materialCommunityIcon?: never;
};

type SfSymbolAndMaterialCommunityIcon<
  T extends { name: string },
  U extends { name: string },
  V extends { name: string }
> = Base & {
  name?: never;
  sfSymbol: T;
  materialIcon: U;
  materialCommunityIcon?: never;
};
type SfSymbolAndMaterialIcon<
  T extends { name: string },
  U extends { name: string },
  V extends { name: string }
> = Base & {
  name?: never;
  sfSymbol: T;
  materialIcon?: never;
  materialCommunityIcon: V;
};

type IconMapper<
  T extends { name: string },
  U extends { name: string },
  V extends { name: string }
> =
  | NameAndSfSymbol<T, U, V>
  | NameAndMaterialCommunityIcon<T, U, V>
  | NameAndMaterialIcon<T, U, V>
  | SfSymbolAndMaterialCommunityIcon<T, U, V>
  | SfSymbolAndMaterialIcon<T, U, V>;

export type {
  SfSymbolsFromMaterialCommunityIcons,
  MaterialCommunityIconsFromSfSymbols,
  SfSymbolsFromMaterialIcons,
  MaterialIconsFromSfSymbols,
  SfSymbols,
  IconMapper,
};
