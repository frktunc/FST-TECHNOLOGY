import { Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './login_style';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    function handleSignUp() {
        navigation.navigate('RegisterPage');
    }

    useEffect(() => {
        AsyncStorage.getItem('Kullanıcı Bilgileri')
            .then(value => {
                if (value !== null) {
                    const storedValue = JSON.parse(value);
                    setEmail(storedValue.email);
                    setPassword(storedValue.password);
                }
            })
            .catch(error => {
                console.log('Bir hata oluştu:', error);
            });
    }, []);

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    const handleLoginAndNavigate = () => {
        axios.post('http://10.0.2.2:5126/Login', {
            email: email,
            password: password
        })
            .then(response => {
                const responseData = response.data;

                if (responseData.success) {
                    showMessage({
                        message: 'Giriş Başarılı',
                        type: 'success'
                    })
                    if (rememberMe) {
                        AsyncStorage.setItem('Kullanıcı Bilgileri', JSON.stringify({ email, password }))
                            .then(() => {
                                console.log('Giriş bilgileri kaydedildi');
                            })
                            .catch(error => {
                                console.log('Giriş bilgileri kaydedilemedi:', error);
                            });
                    }
                    navigation.navigate('MainPage');
                } else {
                    showMessage({
                        message: 'Hata: Giriş Yapılamadı E-Posta veya Şifre Hatalı',
                        type: 'danger',
                    })
                }

            })
            .catch(error => {
                showMessage({
                    message: 'Hata: Giriş Yapılamadı Böyle Bir Kullanıcı Bulunamadı',
                    type: 'danger',
                })


            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>
                FST TEKNOLOJİ
            </Text>
            <View style={styles.text_input_container}>
                <TextInput style={styles.Text_Input}
                    placeholder='E-mail'
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput style={styles.Text_Input}
                    placeholder='Şifre'
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <View style={styles.Button_container}>
                    <Button style={styles.Button_onay} title='Onayla' color={'#4e8c72'} onPress={handleLoginAndNavigate} />
                </View>
                <View style={{ marginTop: 10,marginLeft:230}}>
                    <CheckBox
                        title='Beni Hatırla'
                        checked={rememberMe}
                        onPress={toggleRememberMe}
                    />
                </View>
                <View style={styles.text_kayıt_container}>
                    <Text style={{ fontSize: 18, color: 'white' }}>
                        Henüz Bir Hesabınız Yok mu ?
                    </Text>
                </View>
                <TouchableOpacity style={styles.Opacity} onPress={handleSignUp}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;
