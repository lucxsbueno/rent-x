import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/core';

import { BackButton } from '../../components/BackButton';

import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDateProps, generateInterval } from '../../components/Calendar';

export function Scheduling() {
    const theme = useTheme();
    const navigation = useNavigation();
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [merkedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails');
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);

        const interval = generateInterval(start, end);

        setMarkedDates(interval);
    }

    return(
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                    />
                <BackButton color={theme.colors.shape}  onPress={() => navigation.goBack()} />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={true}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg/>

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={true}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    markedDates={merkedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental}/>
            </Footer>
        </Container>
    );
}