import {
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../constants';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cards from './Cards';

const Home = (props) => {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: 'Ha Noi',
      image: images.HanoiImg,
    },
    {
      name: 'Da Nang',
      image: images.DaNangImg,
    },
    {
      name: 'Nha Trang',
      image: images.NhaTrangImg,
    },
  ];
  return (
    <SafeAreaView>
      <ImageBackground
        source={images.backgroundImg}
        style={{
          height: deviceHeight,
          width: deviceWidth,
        }}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View className="absolute w-full">
        <View className="px-4 py-2 flex-row justify-between items-center">
          <Icon name="bars" size={46} color="white" />
          <Icon name="user" size={46} color="white" />
        </View>
        <View className="items-center mt-6">
          <Text className="font-bold text-white text-4xl ">Hello </Text>
          <Text className="text-base text-white font-semibold">
            Search the city by the name
          </Text>
        </View>
        <View
          className="px-4 py-2 flex-row items-center justify-between rounded-2xl border
         border-white mt-3">
          <TextInput
            value={city}
            onChangeText={val => setCity(val)}
            placeholder="Search City"
            placeholderTextColor="white"
            className="py-3 text-white pr-5 text-base"
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name : city})}>
            <Icon name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-white text-2xl px-4 py-2 mt-80 mb-5">My Locations</Text>
        <FlatList
          horizontal
          data={cities}
          renderItem={({item}) => <Cards name={item.name} image={item.image} navigation={props.navigation} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
