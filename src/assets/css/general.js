import { StyleSheet } from 'react-native';
import Variables from './variables';

export const TextDefault = {
    color: Variables.Colors.TEXT,
    fontSize: Variables.FontSizes.Text,
    fontFamily: 'EB Garamond',
    lineHeight: 24,
}

export const TextTitle = {
    color: Variables.Colors.TEXT,
    fontSize: Variables.FontSizes.H5,
    fontFamily: 'PTSerif-Bold',
    fontWeight: '700'
}

export const TextError = {
    fontSize: Variables.FontSizes.SuperSmallText,
    fontFamily: 'EB Garamond',
    color: Variables.Colors.RED,
}

export const TextLabel = {
    fontSize: Variables.FontSizes.SmallText,
    color: Variables.Colors.BLACK,
    fontFamily: 'EB Garamond',
    lineHeight: 16,
}

export const Container = {
    padding: Variables.PADDING_CONTAINER,
    flex: 1,
}

export default StyleSheet.create({
    TextDefault,
    TextTitle,
    TextError,
    TextLabel,
    Container,
    ...Variables.ArraySpacing,
    ...Variables.ArrayBtn,
});