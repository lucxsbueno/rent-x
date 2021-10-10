import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.header};

    padding-top: 66px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.archivo.semi_bold};

    margin-top: 40px;
`;

export const Message = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.text_detail};
    font-family: ${({theme}) => theme.fonts.inter.regular};
    line-height: ${RFValue(25)}px;
    text-align: center;

    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;

    align-items: center;
    margin: 30px 0px 40px;
`;
