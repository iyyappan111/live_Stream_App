import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface featureIconComponentProps {
  name: string;
  size: number;
  color: string;
  style?: ViewStyle;
  onPress? : () => void
}

const FeatureIconComponent: React.FC<featureIconComponentProps> = ({ name, size, color, style,onPress }) => {
  const iconProps = { name, size, color };
  const Icon = determineIconComponent(name);
  
  return (
    <TouchableOpacity style={[defaultStyle, style]} onPress={onPress}>
      <Icon {...iconProps} />
      
    </TouchableOpacity>
  );
};

const determineIconComponent = (name: string) => {
  switch (name) {
    case 'arrow-redo-sharp':
      return Ionicons;
    case 'bar-chart':
      return FontAwesome;
    case 'shopping-bag':
      return FontAwesome5;
    default:
      return Ionicons; 
  }
};

const defaultStyle: ViewStyle = {
    width: 35,
    height: 35,
    borderRadius: 1000,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#808080'
};

export default FeatureIconComponent;
