'use strict';
import { Dimensions } from 'react-native';
const IPHONE_5_SERIES = Dimensions.get('window').height <= 568;


const FontSize = {
  h1:25,
  h2:23,
  h3:20,
  h4:18,
  large:15,
  medium:12,
  small:10,
  vsmall:9,
  tiny:8,
  verytiny:6
};

export { FontSize};
