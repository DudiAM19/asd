import React from 'react';
import {
    View,
    Text, 
    Dimensions,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import style from './style';

import {createBottomTabNavigator} from 'react-navigation-tabs';

const width_x   = Dimensions.get('window').width
const height_X  = Dimensions.get('window').height

const DATA = [
    {
        id: 1,
        icon: require('../asset/icon/go-ride.png'),
        name: 'GO-RIDE',
    },
    {
        id: 2,
        icon: require('../asset/icon/go-bluebird.png'),
        name: 'GO-BLUEBIRD',
    },
    {
        id: 3,
        icon: require('../asset/icon/go-food.png'),
        name: 'GO-FOOD',
    },
    {
        id: 4,
        icon: require('../asset/icon/go-deals.png'),
        name: 'GO-POINTS',
    },
    {
        id: 5,
        icon: require('../asset/icon/go-pulsa.png'),
        name: 'GO-PULSA',
    },
    {
        id: 6,
        icon: require('../asset/icon/go-send.png'),
        name: 'GO-BOX',
    },
    {
        id: 7,
        icon: require('../asset/icon/go-car.png'),
        name: 'GO-CAR',
    },
    {
        id: 8,
        icon: require('../asset/icon/go-more.png'),
        name: 'LAINNYA',
    }
]

const Bar = () => {
    return(
        <View style={{backgroundColor: 'white'}}>
            <View style={{
                flexDirection: 'row', 
                backgroundColor: 'white', 
                margin: 15}}>
            <View style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#cccccc',
                flexDirection: 'row',
                height: height_X/19,
                width: width_x/1.3, 
                backgroundColor: 'white'}}>
                <Image source={require('../asset/icon/search.png')} style={{
                    marginTop: 6, 
                    marginLeft: 7, 
                    width: width_x/20, 
                    height: height_X/30}}/>
                <TextInput style={{marginLeft: 8}} placeholder='Mau makan apa hari ini ?' />
            </View>
            <TouchableOpacity>
                <Image source={require('../asset/icon/promo.png')} style={{margin: 5, marginLeft: 25}} />
            </TouchableOpacity>
        </View>
        </View>
    );
}

const GopayMenu = () => {
    return(
        <View style={{
            backgroundColor: 'white',
            alignItems: 'center'}}>
            <View style={{
                backgroundColor: '#2b5fb3', 
                height: height_X/6, 
                width: width_x/1.1,
                borderRadius: 5
                }}>
                <View style={{
                    backgroundColor: '#116bfa',
                    height: height_X/22, 
                    width: width_x/1.1,
                    flexDirection: 'row',
                    borderTopStartRadius: 5,
                    borderTopRightRadius: 5
                }}>
                    <View style={{
                        backgroundColor: '#356cc4', 
                        flex: 1, 
                        borderTopLeftRadius: 5}}>
                        <Image source={require('../asset/icon/gopay.png')} style={{margin: 5}}/>
                    </View>
                    <View style={{
                        backgroundColor: '#356cc4', 
                        flex: 1,
                        borderTopRightRadius: 5}}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            margin: 5,
                            marginLeft: 70
                        }}>Rp 1.000.000</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', margin: 5}}>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center', marginTop: 5}}>
                        <Image source={require('../asset/icon/pay.png')}/>
                        <Text style={{
                            marginTop: 7,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Bayar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center', marginTop: 5}}>
                        <Image source={require('../asset/icon/nearby.png')}/>
                        <Text style={{
                            marginTop: 7,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Nearby</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center', marginTop: 5}}>
                        <Image source={require('../asset/icon/topup.png')}/>
                        <Text style={{
                            marginTop: 7,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Isi Saldo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center', marginTop: 5}}>
                        <Image source={require('../asset/icon/more.png')}/>
                        <Text style={{
                            marginTop: 7,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Lainnya</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}



const Item = (props) => {
    return(
        <View style={{
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <TouchableOpacity style={{
                borderWidth: 1,
                width: width_x/6.5,
                height: height_X/12.5,
                borderRadius: 20,
                borderColor: '#d4d4d4',
                alignItems: 'center',
                backgroundColor: 'white',
                marginHorizontal: 10,
                marginVertical: 9
            }}>
                <Image source={props.icon} style={{marginTop: 6}}/>
            </TouchableOpacity>
            <View style={{
                alignItems: 'center', 
                marginTop: 7}}>
               <Text style={{textAlign: 'center', fontSize: 10}}>{props.name}</Text>
            </View>
        </View>
    
    );
}

const Layanan = () => {
    return(
        <View style={{
            alignItems: 'center',
            marginHorizontal: 15,
            width: width_x/1.1,
            backgroundColor: 'white',
            marginTop: 30
        }}>
            <FlatList 
                style={{margin: 10}}
                data={DATA}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <Item 
                        icon={item.icon}
                        name={item.name}
                    />
                )}
            />
        </View>
    );
}

const Banner = () => {
    return(
        <View style={{alignItems: 'center'}}>
            <ScrollView style={{width: width_x/1.1}} horizontal={true}>
                <View style={style.banner}>
                    <Image style={style.image} source={require('../asset/img/amien-rais.jpg')}/>
                    <Text style={style.text}>Amien Rais</Text>
                    <Text>hmmmasdlms;aldka;slkda; </Text>
                </View>
                <View style={style.banner}>
                    <Image style={style.image} source={require('../asset/img/sepak-bola.jpg')}/>
                    <Text style={style.text}>Ega Da2</Text>
                    <Text>Ega Da2 main bola</Text>
                </View>
                <View style={style.banner}>
                    <Image style={style.image} source={require('../asset/img/amien-rais.jpg')}/>
                    <Text style={style.text}>Amien Rais</Text>
                    <Text>hmmmasdlms;aldka;slkda; </Text>
                </View>
                <View style={style.banner}>
                    <Image style={style.image} source={require('../asset/img/amien-rais.jpg')}/>
                    <Text style={style.text}>Amien Rais</Text>
                    <Text>hmmmasdlms;aldka;slkda; </Text>
                </View>
                <View style={style.banner}>
                    <Image style={style.image} source={require('../asset/img/amien-rais.jpg')}/>
                    <Text style={style.text}>Amien Rais</Text>
                    <Text>hmmmasdlms;aldka;slkda; </Text>
                </View>
                <View style={style.banner}>
                    <Image style={style.image} source={require('../asset/img/amien-rais.jpg')}/>
                    <Text style={style.text}>Amien Rais</Text>
                    <Text>hmmmasdlms;aldka;slkda; </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const screnOne = () => {
    return(
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Bar />
            <GopayMenu />
            <Layanan />
            <Banner />
        </View>
    );
}
const screnTwo = () => {
    return(
        <View style={style.container}>
        </View>
    );
}
const Three = () => {
    return(
        <View></View>
    )
}

const BottomTabNavigator = createBottomTabNavigator({
    One: screnOne,
    Two: screnTwo,
    Three: Three
})


export default BottomTabNavigator;