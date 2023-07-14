// import React, { useState } from "react";
// import { View , Text, StyleSheet, Button, TextInput} from 'react-native';

// const LoginPage = ({onSubmit, initialValues}) =>{
//     const [user, setUser ]=useState(initialValues.user);
//     const [email, setEmail]=useState(initialValues.email);


//     return (
//         <View>
//             <Text style={styles.text}> LoginPage</Text>
//             <Text> Enter Name:</Text>
//             <TextInput style={styles.input}
//                 value={user}
//                 onChangeText={text => setUser(text)}>
                
//             </TextInput>

//             <Text> Enter Email:</Text>
//             <TextInput 
//                 style={styles.input} 
//                 value={email} 
//                 onChangeText={text => setEmail(text)}>

//             </TextInput>
//             <Button title="save" onPress={() =>onSubmit(user, email)}/>

//         </View>
//     );
// };

// LoginPage.defaultProps = {
//     initialValues: {
//         user: '',
//         email: ''
//     }
// };

// const styles= StyleSheet.create({
//     text: {
//         fontSize: 30,
//         marginBottom: 5,
//         marginLeft: 5
//     },

//     input:{
//         fontSize: 18,
//         borderWidth: 1,
//         borderColor: 'black',
//         marginBottom: 15,
//         padding: 5,
//         margin: 5
//     }
// });

// export default LoginPage;





