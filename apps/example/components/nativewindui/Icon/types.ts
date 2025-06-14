import type { SfSymbols } from 'rn-icon-mapper';
import type { SymbolViewProps } from 'expo-symbols';
import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type MaterialIcons from '@expo/vector-icons/MaterialIcons';

type MaterialCommunityIconsProps = React.ComponentProps<typeof MaterialCommunityIcons>;
type MaterialIconsProps = React.ComponentProps<typeof MaterialIcons>;

type OptionalName = { name?: SfSymbols; color?: string; size?: number };
type RequiredName = { name: SfSymbols; color?: string; size?: number };

type MaterialIconVariant =
  | { materialCommunityIcon: MaterialCommunityIconsProps; materialIcon?: undefined }
  | { materialIcon: MaterialIconsProps; materialCommunityIcon?: undefined }
  | { materialIcon?: undefined; materialCommunityIcon?: undefined };

type SfSymbolOptional = { sfSymbol?: SymbolViewProps };

type IconProps =
  | (MaterialIconVariant & SfSymbolOptional & RequiredName)
  | ({
      sfSymbol: SymbolViewProps & { name: string };
    } & MaterialIconVariant &
      OptionalName)
  | ({
      materialCommunityIcon: MaterialCommunityIconsProps & { name: string };
      materialIcon?: undefined;
    } & SfSymbolOptional &
      OptionalName)
  | ({
      materialIcon: MaterialIconsProps & { name: string };
      materialCommunityIcon?: undefined;
    } & SfSymbolOptional &
      OptionalName);

export type { IconProps };
