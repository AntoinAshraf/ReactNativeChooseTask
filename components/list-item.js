import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default ({item})=>{
    return (
        <View key={Number.toString(item.id)} style={styles.listItem}>
            <Text style={{fontSize:20, alignSelf:"center"}}> {item.name}</Text>
        </View>
    )
}