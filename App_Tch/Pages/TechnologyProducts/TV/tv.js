import { Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import React, {useState} from 'react';
import styles from './tv_style';
import {Card, CheckBox} from 'react-native-elements';
import Modal from "react-native-modal";

const users = [
  {
    name: "LG",
    avatar:require("../../Assets/İmages/TV/LG-logo.jpg"),
    tv: [
      "LG OLED 77 inç B3 Serisi 4K Smart TV",
      "LG SIGNATURE OLED M3 97 inç Kablosuz TV",
      "LG UR81 86 inç 4K UHD Smart TV",
      "LG UR91 75 inç 4K UHD Smart TV",
      "LG LQ63 32 inç Full HD Smart TV",
    ]
  },
  {
    name: 'Samsung',
    avatar:require("../../Assets/İmages/TV/samsung.png"),
    tv: ["Samsung 55CU7000 55 138 Ekran Uydu Alıcılı Crystal 4K Ultra HD Smart LED TV", 
    "Samsung 75QN85C 75 189 Ekran Uydu Alıcılı 4K Ultra HD Smart Neo QLED TV", 
     "Samsung 65QN90C 65 163 Ekran Uydu Alıcılı 4K Ultra HD Smart Neo QLED TV",
     "Samsung 70CU7100 70 179 Ekran Uydu Alıcılı 4K Ultra HD Smart LED TV", 
      "Samsung 65Q67C 65 163 Ekran Uydu Alıcılı 4K Ultra HD Smart QLED TV "]
  },
  {
    name: 'TCL',
    avatar:require('../../Assets/İmages/TV/TCL.png'),
    tv: ["C845 | TCL Mini LED TV ", "C745 | TCL QLED Gaming TV ", 
                "P633 | TCL 4K HDR TV ", "C635 TCL QLED 4K TV ", 
                "P735 | TCL 4K HDR Google TV"]
    },
    {
      name: 'Philips',
      avatar:require("../../Assets/İmages/TV/phi.png"),
      tv: ["Philips 43PUS8007/62 108 CM 43 4K UHD LED Android 3 Taraflı Ambilight TV", "Philips 58PUS8507/62 146 CM 58 The One 4K UHD LED Android 3 Taraflı Ambilight TV ", 
                "Philips 65PUS8007/62 164 CM 65 4K UHD LED Android 3 Taraflı Ambilight TV ", "Philips 50PUS8507/62 126 CM 50 The One 4K UHD LED Android 3 Taraflı Ambilight TV ", 
    ]
      },
      
    
];

function Tv({navigation}) {

  function handleBuyUp() {
    navigation.navigate('BuyPage');
}

  const [isModalVisible, setModalVisible] = useState(false);
  const [checkedTV, setCheckedTV] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleCheckBoxToggle = (tvModel) => {
    setCheckedTV(prevState => ({...prevState, [tvModel]: !prevState[tvModel]}));
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

                {u.tv && u.tv.map(tv => (
                  <CheckBox
                    title = {tv}
                    checked = {checkedTV[tv] || false}
                    onPress = {() => handleCheckBoxToggle(tv)}
                  />
                ))}

                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.name}>{u.name}</Text>
                  <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1 }}>
                      <Text>Almak istediğiniz telefonu seçiniz .</Text>
                      {u.tv && u.tv.map(tv => (
                        <CheckBox
                          title={tv}
                          checked={checkedTV[tv] || false}
                          onPress={() => handleCheckBoxToggle(tv)}
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

export default Tv;
