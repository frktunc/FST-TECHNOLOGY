import { Text, View ,TextInput,TouchableOpacity,Button,Alert} from 'react-native'
import React, { useState } from 'react'
import styles from './register_style';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';


function Register({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const emailReg = /\S+@\S+\.\S+/;

    const userData = {
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
    };

    function onRegister(){
        if(!emailReg.test(email)) {
            showMessage({
                message:'Geçersiz E-posta',
                type:'danger'
            })
            return;
        }
        if(password.length<1) {
            showMessage({
                message:'Parolanız en az 1 rakam içermelidir',
                type: 'danger'
            })
            return;
        }
        if(password!==passwordConfirmation) {
            showMessage({
                message:'Şifreler Uyuşmuyor',
                type:'danger'
            })
            return;
        }
        handleRegister();
    }

    function handleRegister() { 
        axios.post('http://10.0.2.2:5126/Register', userData)
            .then(response => {
                Alert.alert('Kayıt Oluşturuldu ')
                navigation.navigate('LoginPage');
               
            })
            .catch(error => {
                console.log(error.response.userData)
                console.log("HATA::::"+error)
                // Alert.alert('Hata', 'Kayıt Yapılamadı Lütfen Tekrar deneyin')
                showMessage({
                    message: 'Kayıt Yapılamadı Lütfen Tekrar deneyin',
                    type: "danger",
                  });
            });
    }
return(
    <View style={styles.container}>
            <Text style={styles.main_text}>
                    FST TEKNOLOJİ
            </Text>
            <View style={styles.text_input_container}>
                <TextInput style={styles.Text_Input}
                    placeholder='E-mail'
                    value={email}
                    onChangeText={setEmail}
                />
                 <TextInput style={styles.Text_Input}
                    placeholder='Şifre'
                    value={password}
                    onChangeText={setPassword} 
                />
                <TextInput style={styles.Text_Input}
                    placeholder='Şifre Onay'
                    value={passwordConfirmation}
                    onChangeText={setPasswordConfirmation}
                />
                <View style={styles.Button_container}>
                <Button onPress={onRegister} style={styles.Button_onay} title='Hesap Oluştur' color={'#4e8c72'}/>
                </View>
                
               
               
               
            </View>
        </View>
)
}
export default Register;