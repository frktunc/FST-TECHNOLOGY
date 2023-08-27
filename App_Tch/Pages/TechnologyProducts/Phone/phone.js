

  import { Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
  import React, {useState} from 'react';
  import styles from './phone_style';
  import {Card, CheckBox} from 'react-native-elements';
  import Modal from "react-native-modal";
  
  const users = [
    {
      name: "Apple",
      avatar: require("../../Assets/İmages/apple.jpg"),
      phones: [
        "Apple iPhone X 256 GB Silver",
        "iPhone 13 128 GB",
        "iPhone 14 128 GB",
        "iPhone 14 Pro Max 256 GB",
        "Yeni iPhone SE 64 GB (3.Nesil)",
      ]
    },
    {
      name: 'Xiaomi',
      avatar:require('../../Assets/İmages/Xiaomi.jpg'),
      phones: ["Xiaomi Redmi 12C 128 GB 4 GB Ram", "Xiaomi Redmi Note 11S 8/128 GB Gri", 
                  "Xiaomi Redmi Note 11 128 GB 6 GB Ram", "Xiaomi Redmi Note 12 Pro 256 GB 8 GB", 
                  "Xiaomi 12 Lite 256 GB 8 "]
    },
    {
      name: 'Samsung',
      avatar:require('../../Assets/İmages/samsung.jpg'),
      phones: ["Samsung Galaxy S22 128GB ", "Samsung Galaxy A34 5G ", 
                  "Samsung Galaxy S22 128GB ", "Samsung Galaxy A13 128GB ", 
                  "Samsung Galaxy S23 256GB "]
      },
      {
        name: 'General Mobile',
        avatar:require('../../Assets/İmages/gm.jpg'),
        phones: ["General Mobile GM 23 SE ", "General Mobile Gm 22 Pro ", 
                  "General Mobile Gm 22 Plus ", "General Mobile GM 23 128 ", 
                  "General Mobile GM 20 64 "]
        },
        {
          name: 'Realme',
          avatar:require('../../Assets/İmages/realme-logo.jpg'),
          phones: ["Realme C55 256 GB 8 GB ", "Realme C55 128 GB 6 GB ", 
                  " Realme C21Y 64 GB 4 GB ", "Realme 10 256 GB 8 GB Ram ", 
                  "Realme GT 2 Pro 256 GB 12 "]
          },
  
      
  ];
  
  function Phone({navigation}) {
  
    function handleBuyUp() {
      navigation.navigate('BuyPage');
  }
  
    const [isModalVisible, setModalVisible] = useState(false);
    const [checkedPhones, setCheckedPhones] = useState({});
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const handleCheckBoxToggle = (phoneModel) => {
      setCheckedPhones(prevState => ({...prevState, [phoneModel]: !prevState[phoneModel]}));
    };
   
    return(
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.main_text}>FST TECHNOLOGY</Text>
          <Text style={styles.yrd_teext}>TELEFONLAR</Text>
  
          <Card containerStyle={styles.card_container} >
            <Card.Title style={styles.yrd_text}>Tarafını Seç</Card.Title>
            <Card.Divider />
  
            {users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image style={styles.image} resizeMode='cover' source={u.avatar} />
  
                  {u.phones && u.phones.map(phone => (
                    <CheckBox
                      title = {phone}
                      checked = {checkedPhones[phone] || false}
                      onPress = {() => handleCheckBoxToggle(phone)}
                    />
                  ))}
  
                  <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.name}>{u.name}</Text>
                    <Modal isVisible={isModalVisible}>
                      <View style={{ flex: 1 }}>
                        <Text>Almak istediğiniz telefonu seçiniz .</Text>
                        {u.phones && u.phones.map(phone => (
                          <CheckBox
                            title={phone}
                            checked={checkedPhones[phone] || false}
                            onPress={() => handleCheckBoxToggle(phone)}
                          />
                        ))}
                        <Button title="Satın Al" onPress={toggleModal} />
                      </View>
                    </Modal>
                    
                  </TouchableOpacity>
                </View>
              );
            })}
          </Card>
          <Button  title='SATIN AL' onPress={handleBuyUp}/>
        </View>
      </ScrollView>
    )
  }
  
  export default Phone;
  