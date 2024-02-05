import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";



const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");


    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <Image 
                   source={require('../assets/goal.png')}
                   style={styles.image}
                />
                <TextInput
                    placeholder="your course goal !"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD GOAL" onPress={addGoalHandler} color="#f31282" />
                    </View>

                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#b180f0"  />
                    </View>

                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        color:'#123048',
        borderRadius:6,
        padding:16,
        width: "90%",
        padding: 5,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#311b6b',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image:{
        width:100,
        height:100,
        margin:20,
    }
});

export default GoalInput;