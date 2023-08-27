import { Text, View } from 'react-native'
import React from 'react'
import styles from './UserCard_style'

const UserCard = props => {
    return(
        <View style={styles.container}>
        <Text style={styles.username_text}> {props.item.username}  </Text>
        <View style={styles.inner_container}>
            <Text> {props.item.name}</Text>
            <Text style={styles.email_text}> {props.item.email}</Text>
        </View>
        
        </View>
    )
}
export default UserCard