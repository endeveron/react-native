import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Search = () => {
  const { query } = useLocalSearchParams();

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
