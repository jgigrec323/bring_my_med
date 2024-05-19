import { View, Text } from "react-native";
import React from "react";
import ProfileBar from "../../components/ProfileBar";
import SearchBar from "../../components/SearchBar";
import FeaturedMed from "../../components/FeaturedMed";
import Symptoms from "../../components/Symptoms";
import MainProducts from "../../components/MainProducts";
import { SafeAreaView } from "react-native-safe-area-context";
import FixedBottomBtn from "../../components/FixedBottomBtn";
const Home = () => {
  return (
    <>
      <View
        style={{
          marginLeft: 25,
          marginTop: 10,
          flex: 1,
        }}
      >
        <ProfileBar></ProfileBar>
        <SearchBar></SearchBar>
        <FeaturedMed></FeaturedMed>
        <Symptoms></Symptoms>
        <MainProducts></MainProducts>
        <FixedBottomBtn></FixedBottomBtn>
      </View>
    </>
  );
};

export default Home;
