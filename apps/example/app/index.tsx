import * as React from 'react';
import { View } from 'react-native';
import { Icon } from '../components/nativewindui/Icon/Icon';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Screen() {
  return (
    <View style={{ flex: 1 }}>
      <Icon size={27} name='circle' sfSymbol={{ name: 'circle' }} />
      <MaterialCommunityIcons name='circle-outline' size={27} />
      <MaterialIcons name='10k' size={27} />
      <Icon size={27} name='circle' />
      <Icon size={27} sfSymbol={{ name: 'homekit' }} materialCommunityIcon={{ name: 'circle' }} />
      <Icon size={27} name='circle' materialIcon={{ name: 'circle' }} />
      <Icon size={27} name='circle' materialCommunityIcon={{ name: 'circle' }} />
      <Icon size={27} name='circle' materialCommunityIcon={{ name: 'circle' }} />
      <Icon size={27} materialIcon={{ name: 'circle' }} sfSymbol={{ name: 'circle' }} />
      <Icon size={27} materialCommunityIcon={{ name: 'circle' }} sfSymbol={{ name: 'circle' }} />
      <Icon size={27} materialIcon={{ name: 'circle' }} sfSymbol={{ name: 'circle' }} />
      <Icon size={27} name='circle' materialIcon={{ name: 'circle' }} />
      <Icon size={27} sfSymbol={{ name: 'circle' }} materialCommunityIcon={{ name: 'circle' }} />
    </View>
  );
}
