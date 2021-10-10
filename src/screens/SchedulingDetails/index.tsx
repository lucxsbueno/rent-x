import React from 'react';

import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

/**
 * 
 * Components
 */
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

/**
 * 
 * SVG's
 */
import speedSvg from '../../assets/speed.svg'; 
import accelerationSvg from '../../assets/acceleration.svg'; 
import forceSvg from '../../assets/force.svg'; 
import gasolineSvg from '../../assets/gasoline.svg'; 
import exchangeSvg from '../../assets/exchange.svg'; 
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Accessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles';
import { useTheme } from 'styled-components';

export function SchedulingDetails() {
    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirmRental() {
        navigation.navigate('SchedulingComplete');
    }

    return(
        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>AO DIA</Period>
                        <Price>R$580</Price>
                    </Rent>
                </Details>

                <Accessories>
                    <Accessory name="380Km/h" icon={speedSvg}/>
                    <Accessory name="3.2s" icon={accelerationSvg}/>
                    <Accessory name="800 HP" icon={forceSvg}/>
                    <Accessory name="Gasolina" icon={gasolineSvg}/>
                    <Accessory name="Auto" icon={exchangeSvg}/>
                    <Accessory name="2 pessoas" icon={peopleSvg}/>
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(24)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$2.900,00</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button color={theme.colors.success} title="Alugar agora" onPress={handleConfirmRental}/>
            </Footer>
        </Container>
    );
}