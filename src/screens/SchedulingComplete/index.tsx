import React from 'react';

import { useNavigation } from '@react-navigation/core';

import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';

export function SchedulingComplete() {
    const { width } = useWindowDimensions();

    const navigation = useNavigation();

    function handleConfirmRental() {
        navigation.navigate('Home');
    }

    return(
        <Container>
            <LogoSvg  width={width} />
            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>

                <Message>
                    Agira você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu atomóvel
                 </Message>

                <Footer>
                    <ConfirmButton title="Ok" onPress={handleConfirmRental}/>
                </Footer>
            </Content>
            
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
        </Container>
    );
}