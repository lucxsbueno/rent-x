import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 31%;
    height: ${RFValue(92)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.background_primary};

    padding: 10px;
    margin-bottom: 10px;
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.inter.medium};
    color: ${({theme}) => theme.colors.text};
`;