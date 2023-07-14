import React from "react";
import { View, Text,StyleSheet, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const SearchBar = ({ term , onTermChange }) =>{
    return(
            <View style={styles.TextInputstyle}>
                <FontAwesome name="search" style={styles.iconStyle} color="white" />
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder = "Search" color="white"
                    value={term}
                    onChangeText={newTerm => onTermChange(newTerm)} /> 
            </View>
    );
};

const styles= StyleSheet.create({
    TextInputstyle: {
        // marginTop: 10,
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        
    },

    inputStyle: {
        flex: 1,
        fontSize: 14,
    },

    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;