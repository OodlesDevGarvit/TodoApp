import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {

 function deleteGoalHandler(id){
    console.log("Did",id);
    props.onDeleteItem(id);
 }
        
    return (
        <View style={styles.goalView}  >
            <Pressable
                android_ripple={{ color: "#5e0acc" }}
                onPress={deleteGoalHandler}
            >
                <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
        </View >

    )
}

const styles = StyleSheet.create({
    goalView: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})

export default GoalItem;