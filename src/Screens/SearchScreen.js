import React ,{useState} from "react";
import { View, Text,StyleSheet, TextInput} from 'react-native';
import SearchBar from "../Components/SearchBar";

const SearchScreen = ({navigation }) =>{
    const [term , setTerm]= useState('');

    return (
        <View style={styles.backgroundStyle}>
            <SearchBar  term={term}  onTermChange = {newTerm =>setTerm(newTerm)} />
            <Text> SearchScreen</Text>
            <Text>{term}</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'black'
    }
});

export default SearchScreen;