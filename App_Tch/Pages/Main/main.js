;
import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity,Linking,windowHeight } from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';



const Slider = [
  require('../Assets/İmages/pc.jpg'),
  require('../Assets/İmages/telefon.jpg'),
  require('../Assets/İmages/tv.jpg'),
  require('../Assets/İmages/toplantı.jpg'),
  require('../Assets/İmages/ben.jpg'),


]
const users = [

{
  name1: 'Telefon',
  avatar:
    'https://i2.milimaj.com/i/milliyet/75/0x0/60aca67e55428524ec4c642e.jpg',
},
{
  name2: 'Bilgisayar',
  avatar:
    'https://img.tamindir.com/2022/10/476731/ogrenciler-icin-en-iyi-dizustu-bilgisayarlar.jpg',
},
{
  name3: 'Televizyon',
  avatar:
    'https://cdn.akakce.com/x/lg/lg-43ur81006lj-4k-ultra-hd-43-109-ekran-uydu-alicili-webos-smart-led-tv.jpg',
},



];



function main ({navigation}) {
  
 function handlePhone(){
  navigation.navigate('PhonePage')
 };
 function handleTv(){
  navigation.navigate('TvPage')
 };
 function handleComputer(){
  navigation.navigate('ComputerPage')
 };

  
    
return (
  <>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title style={styles.main_title}>Seçebiliceğiniz Teknolojik Ürünler</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode='cover'
                  source={{ uri: u.avatar }}
                />
                <TouchableOpacity onPress={handlePhone}>
                <Text style={styles.name}>{u.name1}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTv}>
                <Text style={styles.name}>{u.name3}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleComputer}>
                <Text style={styles.name}>{u.name2}</Text>
                </TouchableOpacity>
               
                
              </View>
            );
          })}
        </Card>
       <View  >

     
            <Card >
            <SliderBox
            images={Slider}
             sliderBoxHeight={windowHeight * 0.3}
             
             dotColor="#FFEE58"
             inactiveDotColor="#90A4AE"
             autoplay
              circleLoop
               resizeMode="cover"
              ImageComponentStyle={{width: 450, // Görüntünün genişliği SliderBox genişliği kadar olmalı
              height: 200, // Görüntünün yüksekliği SliderBox yüksekliği kadar olmalı
              alignSelf: 'center', // Görüntüyü yatayda ortala
              resizeMode: 'contain',}}
            />
        
       
       </Card>
       </View>
        <Card>
          <Card.Title style={{fontSize:23}}>ŞİRKETİMİZ HAKKINDA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 ,borderRadius:20}}
            source={require('../Assets/İmages/DreamShaper_v7_The_logo_features_blue_and_green_tones_Blue_rep_0.jpg')}
          />
          <Text style={{ marginBottom: 5,marginTop:5,fontSize:17 }}>
            FST Teknolojileri 2023 yılından bu yana yılların vermiş olduğu tecrübe ve sağlam ekibiyle beraber siz değerli müşterilerimze yıllardır hizmet vermektedir.
          </Text>
          <Text style={{fontSize:17}}>
                Yönetim Kurulu Başkanımız Faruk Serhat Tunç ve onun izinden giden kıymetli Yönetim Kurulu Ekibimiz ile siz müşterilerimize hizmet vermek için burdayız
          </Text>
          <View style={styles.social_icons}>
            <TouchableOpacity  onPress={() => Linking.openURL('https://web.telegram.org/a/')}>
            <Icon style={styles.icon_margin}
            name='sc-telegram'
            type='evilicon'
           color='#517fa4'
           size={30}
           />
            </TouchableOpacity>
          <TouchableOpacity  onPress={() => Linking.openURL('https://www.instagram.com')}>
        <Icon style={styles.icon_margin} name="instagram"
         type="font-awesome"
          color="#E4405F" 
          size={30}
          />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => Linking.openURL('https://facebook.com')}>

          <Icon style={styles.icon_margin} name="facebook" 
          type="font-awesome" 
          color="#1877F2" 
          size={30}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
          <Icon style={styles.icon_margin} name="twitter" 
          type="font-awesome" 
          color="#1DA1F2"
          size={30} 
          />
          </TouchableOpacity>

          </View>
        
        </Card>
      </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 70,
  height: 50,
  marginRight: 10,
},
name: {
  fontSize: 23,
  marginTop: 5,
},
main_title:{
  fontSize:25,
  fontWeight:'bold'
},
social_icons:{
  marginTop:12,
  flexDirection:'row',
  justifyContent:'center',
  
},
icon_margin:{
  marginRight:20,
  
},

});

export default main;