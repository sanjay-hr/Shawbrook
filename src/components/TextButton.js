import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";


const TextButton=({label,onPress})=>{
    return (
        <TouchableOpacity onPress={onPress} >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

export default TextButton


const styles = StyleSheet.create({
    label:{
        fontSize: 17,
        color:'#d3096b'
    },
});

