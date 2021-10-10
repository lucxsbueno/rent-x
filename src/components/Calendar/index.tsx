import React from 'react';

import { Feather } from '@expo/vector-icons';

import { 
    Calendar as CustomCalendar,
    LocaleConfig,
    DateCallbackHandler
} from 'react-native-calendars';

import { useTheme } from 'styled-components';

import { generateInterval } from './generateInterval';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disabledTouchEvent?: boolean;
    }
}

interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: DateCallbackHandler
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

function Calendar({ markedDates, onDayPress }: CalendarProps) {
    const theme = useTheme();

    return(
        <CustomCalendar 
            renderArrow={(direction) => 
                <Feather
                    size={24}
                    color={theme.colors.text}
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                />
            }

            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.shape,
                paddingBottom: 10,
                marginBottom: 10
            }}

            theme={{
                textDayFontFamily: theme.fonts.inter.regular,
                textDayHeaderFontFamily: theme.fonts.inter.medium,
                textMonthFontFamily: theme.fonts.archivo.medium,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}

            minDate={new Date()}

            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}

        />
    );
}

export {
    Calendar,
    MarkedDateProps,
    DayProps,
    generateInterval
}