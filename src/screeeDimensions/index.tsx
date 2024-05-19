

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPercentage = (percentage: number) => (windowWidth * percentage) / 100;
const hightPercentage = (percentage: number) => (windowHeight * percentage) / 100;

export { widthPercentage, hightPercentage };
