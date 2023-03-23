import React, { useEffect, Component } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = 'https://randomuser.me/api/portraits/men/34.jpg'

export default class LoginScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
                <View style={{ width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: 'blue', top: 120, position: 'absolute', transform: [{ rotate: '25deg' }] }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: 'red', bottom: 120, position: 'absolute', borderRadius: 50, transform: [{ rotate: '50deg' }] }}></View>
                <ScrollView contentContainerStyle={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <BlurView intensity={100}>
                        <View style={styles.login}>
                            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>User Name</Text>
                                <TextInput style={styles.input} placeholder="user name" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>E-mail</Text>
                                <TextInput style={styles.input} placeholder="betomoedano@outlook.com" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
                                <TextInput style={styles.input} placeholder="password" secureTextEntry={true} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Confirm password</Text>
                                <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry={true} />
                            </View>
                            <TouchableOpacity onPress={handleSignIn} style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
                                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  }

});