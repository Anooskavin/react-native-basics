import React, { useState } from 'react';
import { Button, FlatList, Keyboard, Modal, StyleSheet, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = reviews.length+1
        setReviews((prevReview) => {
            return [review, ...prevReview]
        })
        // setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                <MaterialIcons style={{...styles.modalToggle,...styles.modalClose}} name='close' size={24} onPress={() => setModalOpen(false)}/>
                   <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons  
            style={styles.modalToggle}
            name='add' 
            size={24} 
            onPress={() => setModalOpen(true)}/>


            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Go To Review Details' onPress={()=> navigation.navigate('Review')} /> */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.key} />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#555',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,
        
    },
    modalContent:{
        flex:1  
    }
})