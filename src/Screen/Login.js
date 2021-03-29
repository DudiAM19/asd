import React, {useState} from 'react';
import {View,
        Text,
        Image,
        Dimensions,
        TextInput,
        TouchableOpacity} from 'react-native';

const width_x   = Dimensions.get('window').width
const height_x  = Dimensions.get('window').height

const Login = ({navigation}) => {
    const [text, setText] = useState('');
    return(
        <View style={{alignItems: 'center'}}>
            <Image source={require('../asset/img/1.png')} 
                    style={{
                        width: width_x/3, 
                        height: height_x/20, 
                        margin: 25}}/>
            <Text style={{
                marginLeft: 22, 
                marginTop: 150}}>Now login is password free. Please input the One Time Password (OTP) sent to your registed phone number.</Text>
            <View style={{
                flexDirection: 'row',
                margin: 30}}>
                <Image source={require('../asset/icon/1.jpg')} 
                style={{
                    width: width_x/14, 
                    height: height_x/25,
                    marginTop: 17,
                    marginLeft: -26}}/>
                <TextInput placeholder='Phone number or email' 
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#cfcfcf',
                        width: width_x/1.4,
                        marginLeft: 27}}
                    onChangeText={text => setText(text)}
                    defaultValue={text}/>
            </View>
            <Text>{text}</Text>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: '#0fd12f',
                    width: width_x/1.1,
                    height: height_x/13,
                    borderRadius: 5,
                    margin: 15}} onPress={() => navigation.navigate('home')}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        marginTop: 16,
                        fontWeight: 'bold'}}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={{
                    marginTop: 10,
                    textAlign: 'center'}}>Don't have acces to your registered phone number?</Text>
                <TouchableOpacity>
                    <Text style={{
                        textAlign: 'center',
                        color: '#0fd12f'}}>CONTACT US</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 140,
            }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity style={{marginLeft: 10}}>
                    <Text style={{color: '#0fd12f'}}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;