import React, { useState } from 'react';
import { View, Text, ScrollView,Button } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import styles from './buy_style';


const Buy = () => {
  const [cardData, setCardData] = useState({
    valid: false,
    values: {},
  });

  const handleCardChange = (formData) => {
    setCardData({
      valid: formData.valid,
      values: formData.values,
    });
  };

  return (
    <ScrollView>


      <View style={styles.container}>
        <Text style={styles.main_text}>Kart Bilgilerinizi Giriniz</Text>
        <CreditCardInput
          requiresName
          requiresCVC
          labelStyle={{ color: 'black', fontSize: 12 }}
          inputStyle={{ color: 'black', fontSize: 16 }}
          validColor="black"
          invalidColor="red"
          placeholderColor="black"
          onChange={handleCardChange}
        />
        <View style={styles.kart_container}>
          <Text style={styles.kard_text} >
            Kart Sahibi: {cardData.values.name || ''}
          </Text >
          <Text  style={styles.kard_text}>Kart Numarası: {cardData.values.number || ''}</Text>
          <Text  style={styles.kard_text}>Son Kullanma Tarihi: {cardData.values.expiry || ''}</Text>
          <Text  style={styles.kard_text}>CVC: {cardData.values.cvc || ''}</Text>
          <Button title='Ödeme İşlemine Geç' color={'red'}/>
          </View>
      </View>
      <View style={{backgroundColor:'#b8b9c1',padding:1000}}>

      </View>
    </ScrollView>
  );
};

export default Buy;
