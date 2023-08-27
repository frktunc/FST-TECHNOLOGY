import { Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import React, {useState} from 'react';
import styles from './computer_style';
import {Card, CheckBox} from 'react-native-elements';
import Modal from "react-native-modal";

const users = [
  {
    name: "Asus",
    avatar:require("../../Assets/İmages/pc/asus.png"),
    pc: [
      "Asus ROG Flow Z13 GZ301VU-MU008",
      "Asus ROG Flow Z13 GZ301VF-MU007",
      "Asus ROG Flow Z13 GZ301VF-MU007",
      "Asus TUF Gaming F15 FX506HF-HN014",
      "Asus Tuf Gaming A15 FA507XI-LP043 ",
    ]
  },
  {
    name: 'Apple',
    avatar:require("../../Assets/İmages/pc/apple.jpg"),
    pc: ["Apple MacBook Air M2 ", 
    "Apple MacBook Air M1 ", 
     "Apple Macbook Pro Z16R00075/ Mac Pro",
  ]
  },
  {
    name: 'Hp',
    avatar:require('../../Assets/İmages/pc/hp.jpg'),
    pc: ["Victus Gaming Laptop 16-s0045nt  ", "Victus Dizüstü Oyun Bilgisayarı 16-s0000nt (7Z4P7EA)", 
                "Victus Dizüstü Oyun Bilgisayarı 16-s0021nt (7Z4N0EA) ", "HP Envy x360 2-in-1 Laptop 15-fe0001nt (81L69EA) ", 
                "Victus Dizüstü Oyun Bilgisayarı 16-s0035nt (7Z5Z2EA)"]
    },
    {
      name: 'Lenova',
      avatar:require("../../Assets/İmages/pc/lenova.png"),
      pc: ["LENOVO IdeaPad Gaming", "LENOVO Yoga Slim 6 ", 
                "LENOVO LOQ  ", "LENOVO IdeaPad Slim 3 ", 
                "LENOVO IP Gaming",
    ]
      },
      
    
];

function Computer({navigation}) {

  function handleBuyUp() {
    navigation.navigate('BuyPage');
}
  const [isModalVisible, setModalVisible] = useState(false);
  const [checkedPC, setCheckedPC] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleCheckBoxToggle = (pcModel) => {
    setCheckedPC(prevState => ({...prevState, [pcModel]: !prevState[pcModel]}));
  };
 
  return(
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.main_text}>FST TECHNOLOGY</Text>
        <Text style={styles.yrd_teext}>TELEVİZYONLAR</Text>

        <Card containerStyle={styles.card_container} >
          <Card.Title style={styles.yrd_text}>Tarafını Seç</Card.Title>
          <Card.Divider />

          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image style={styles.image} resizeMode='cover' source={u.avatar} />

                {u.pc && u.pc.map(pc => (
                  <CheckBox
                    title = {pc}
                    checked = {checkedPC[pc] || false}
                    onPress = {() => handleCheckBoxToggle(pc)}
                  />
                ))}

                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.name}>{u.name}</Text>
                  <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1 }}>
                      <Text>Almak istediğiniz telefonu seçiniz .</Text>
                      {u.pc && u.pc.map(pc => (
                        <CheckBox
                       
                          title={pc}
                          checked={checkedPC[pc] || false}
                          onPress={() => handleCheckBoxToggle(pc)}
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

export default Computer;
