/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList, StatusBar } from 'react-native';
import GoalItem from './app/components/GoalItem';
import GoalInput from './app/components/GoalInput';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisble] = useState(false);


  // setCourseGoals([...courseGoals , enteredGoalText]);
  //this is not a good way to setstate when your state depends on previou state 

  //if your use state depend on previous state the best way is a to pass a function . a function is called automatically 
  //by react 



  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals =>
      [...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
      ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log(courseGoals);
  }

  function startAddGoalHandler() {
    setModalIsVisble(true);
  }

  function endGoalHandler() {
    setModalIsVisble(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appLayout}>
      <Button
        title='Add New Goal'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        >
        </FlatList>
      </View>



    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appLayout: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },

  goalContainer: {
    flex: 5,
    marginLeft: 5,
  },

});

export default App;
