import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList  } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
    setIsAddMode(false);
  }

  const onDelete = (goalId) => {
    setGoals(currentGoals => currentGoals.filter(item => item.id !== goalId));
  }

  const onCancel = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput addGoalHandler={addGoalHandler} isAddMode={isAddMode} onCancel={onCancel} />
      <FlatList 
        data={goals} 
        renderItem={itemData => (
          <GoalItem goal={itemData.item} onDelete={onDelete}/>
         )}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection:"row", 
    justifyContent: "space-between", 
    alignItems: 'center' 
  },
  
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10 
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});