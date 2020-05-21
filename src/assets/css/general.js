import { StyleSheet } from 'react-native';
import Variables from './variables';

export const TextDefault = {
    color: Variables.Colors.TEXT,
    fontSize: Variables.FontSizes.Text,
    fontFamily: 'EB Garamond',
    lineHeight: 24,
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
    TextError,
    TextLabel,
    Container,
});