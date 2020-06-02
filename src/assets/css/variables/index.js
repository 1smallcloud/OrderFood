import { Dimensions, Platform } from 'react-native';
import Colors from './colors';
import Fonts from './fonts';

import _ from 'lodash';

export const HEIGHT_CONTROL_INPUT = 48;
export const HEIGHT_CONTROL = 52;
export const PADDING_CONTAINER = 16;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const BORDER_RADIUS = 50;
export const FULLSCREEN = Dimensions.get("window");

export const SizeIcons = {
    sm: 20,
    md: 16,
    lg: 24,
    xl: 32,
    xlg: 48,
    xxl: 64,
};

export const Space = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xlg: 40,
    xxl: 64,
    xxxl: 128,
    auto: 'auto',
};

export const keySpacing = {
    t: 'Top',
    l: 'Left',
    r: 'Right',
    b: 'Bottom',
    v: 'Vertical',
    h: 'Horizontal',
    a: '',
};

// Spacing
var ArraySpacing = {};
_.forEach(keySpacing, function(SpacingValue, keySpacing) {
    _.forEach(Space, function(value, key) {
        ArraySpacing['p' + keySpacing + '_' + key] = {
            ['padding' + SpacingValue] : value,
        };
        ArraySpacing['m' + keySpacing + '_' + key] = {
            ['margin' + SpacingValue] : value,
        }
    });
});


const btnColor = {
    primary: Colors.PRIMARY,
    secondary: '#fff',
}

// Button
var ArrayBtn = {};
_.forEach(btnColor, function(value, key) {
    ArrayBtn['btn' + '_' + key] = {
        backgroundColor: value,
        borderColor: value
    }
});

export const border = {
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: BORDER_RADIUS,
};

export default {
    PADDING_CONTAINER,
    SizeIcons,
    ...Fonts,
    Colors,
    WIDTH,
    HEIGHT,
    HEIGHT_CONTROL,
    HEIGHT_CONTROL_INPUT,
    FULLSCREEN,
    BORDER_RADIUS,
    Space,
    ArraySpacing,
    ArrayBtn,
}