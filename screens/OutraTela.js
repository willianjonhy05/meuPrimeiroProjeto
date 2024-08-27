import React from 'react';
import { Button, View, Text } from 'react-native';

export default function OutraTela({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Outra Tela escrita</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
