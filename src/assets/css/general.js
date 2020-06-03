import { StyleSheet } from 'react-native';
import Variables from './variables';

export const TextDefault = {
    color: Variables.Colors.TEXT,
    fontSize: Variables.FontSizes.Text,
    fontFamily: 'PTSerif-Regular',
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
    fontFamily: 'PTSerif-Regular',
    color: Variables.Colors.RED,
}

export const TextLabel = {
    fontSize: Variables.FontSizes.SmallText,
    color: Variables.Colors.BLACK,
    fontFamily: 'PTSerif-Bold',
    lineHeight: 16,
}

export const TitleLabel = {
    fontSize: Variables.FontSizes.Text,
    color: Variables.Colors.BLACK,
    fontFamily: 'PTSerif-Bold',
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
    TitleLabel,
    Container,
    ...Variables.ArraySpacing,
    ...Variables.ArrayBtn,
});