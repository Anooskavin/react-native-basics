import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function Review({ route, navigation }) {
    const item = route.params;
    const rating = item.rating;
    console.log(images.ratings[rating]);
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <View style = {style.lineStyle} />
                <View style={style.rating}>
                    <Text>Rating : </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    );
}

const style = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    lineStyle:{

        borderWidth: 0.5,
        borderColor:'#555',
        margin:10,
   }
})


