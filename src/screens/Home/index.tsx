import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { CarDTO } from '../../dtos/CarDTO';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Logo from '../../assets/logo.svg';

import { RFValue } from 'react-native-responsive-fontsize';

import {
   Container,
   Header,
   HeaderContent,
   TotalCars,
   CarList
} from './styles';

import Car from '../Car';

import { Loading } from '../../components/Loading';

export function Home() {
   const [cars, setCars] = useState<CarDTO[]>([]);
   const [loading, setLoading] = useState(true);
   const navigation = useNavigation();

   function handleCarDetails(car: CarDTO) {
      navigation.navigate('CarDetails', { car });
   }

   useEffect(() => {
      async function fetchCars() {
         try {
            const response = await api.get('/cars');
            setCars(response.data);
         } catch(error) {
            console.log(error)
         } finally {
            setLoading(false);
         }
      }

      fetchCars();
   }, []);

   return(
      <Container>
         <Header>
            <HeaderContent>
               <Logo width={RFValue(108)} height={RFValue(12)}/>
               <TotalCars>Total de 12 carros</TotalCars>
            </HeaderContent>
         </Header>

         { loading ? <Loading/> :
            <CarList
               data={cars}
               keyExtractor={item => String(item.id)}
               renderItem={({item}) => <Car data={item} onPress={() => handleCarDetails(item)} />}
            />
         }

         <StatusBar
            backgroundColor="transparent"
            style="light"
            translucent/>
      </Container>
   );
}