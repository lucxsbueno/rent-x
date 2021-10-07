import React from 'react';

import { StatusBar } from 'expo-status-bar';

import Logo from '../../assets/logo.svg';

import { RFValue } from 'react-native-responsive-fontsize';

import {
   Container,
   Header,
   HeaderContent,
   TotalCars
} from './styles';
import Car from '../Car';

export function Home() {

   const carData = {
      brand: "AUDI",
      name: "RS 5 Coupé",
      rent: { period: "AO DIA", price: 120.0 },
      thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
   }

   return(
      <Container>
         <Header>
            <HeaderContent>
               <Logo width={RFValue(108)} height={RFValue(12)}/>
               <TotalCars>Total de 12 carros</TotalCars>
            </HeaderContent>
         </Header>

         <Car data={carData} />

         <Car data={carData} />

         <Car data={carData} />

         <StatusBar
            backgroundColor="transparent"
            style="light"
            translucent/>
      </Container>
   );
}