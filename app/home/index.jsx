import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ProfileBar from "../../components/ProfileBar";
import SearchBar from "../../components/SearchBar";
import FeaturedMed from "../../components/FeaturedMed";
import Symptoms from "../../components/Symptoms";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{ marginLeft: 25, marginTop: 10, flex: 1 }}>
        <ProfileBar></ProfileBar>
        <SearchBar></SearchBar>
        <FeaturedMed></FeaturedMed>
        <Symptoms></Symptoms>
      </View>
    </SafeAreaView>
  );
};

export default Home;
