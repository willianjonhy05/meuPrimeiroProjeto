import React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={{ height: 10 }} /> 
      <Button
        title="Acesse"
        onPress={() => navigation.navigate('Outra')}
      />
    </View>
  );
}