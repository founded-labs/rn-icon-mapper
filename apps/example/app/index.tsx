import * as React from 'react';
import { View } from 'react-native';
import { Icon } from '../components/nativewindui/Icon/Icon';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Screen() {
  return (
    <View style={{ flex: 1 }}>
      <Icon size={27} sfSymbol={{ name: 'circle' }} />
      <MaterialCommunityIcons name='circle-outline' size={27} />
      {/* ❌ // missing either name or either */}
      materialCommunityIcon or materialIcon props with a name field
      <Icon size={27} name='circle' />
      {/* ✅ */}
      <Icon size={27} materialCommunityIcon={{ name: 'circle' }} />
      {/* ❌ // missing either name or */}
      name in sfSymbol prop
      <Icon size={27} materialIcon={{ name: 'circle' }} />
      {/* ❌ // missing either name or name in */}
      sfSymbol prop
      <Icon size={27} name='circle' materialCommunityIcon={{ name: 'circle' }} />
      {/* ✅ */}
      <Icon
        size={27}
        name='circle'
        materialCommunityIcon={{ name: 'circle' }}
        sfSymbol={{ name: 'circle' }}
      />
      {/* ❌ name is not used in this case so should have type error */}
      <Icon
        size={27}
        name='circle'
        materialIcon={{ name: 'circle' }}
        sfSymbol={{ name: 'circle' }}
      />
      {/* ❌ name is not used in this case so should have type error */}
      <Icon size={27} materialCommunityIcon={{ name: 'circle' }} sfSymbol={{ name: 'circle' }} />
      {/* ✅ */}
      <Icon size={27} materialIcon={{ name: 'circle' }} sfSymbol={{ name: 'circle' }} />
      {/* ✅ */}
      <Icon size={27} name='circle' materialIcon={{ name: 'circle' }} />
      {/* ✅ */}
      <Icon
        size={27}
        sfSymbol={{ name: 'circle' }}
        materialCommunityIcon={{ name: 'circle' }}
        materialIcon={{ name: 'circle' }}
      />
      {/* ❌ // cant have both materialCommunityIcon or materialIcon props with a name for name */}
    </View>
  );
}
