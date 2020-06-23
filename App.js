import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList  } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = enteredGoal => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList 
        data={goals} 
        renderItem={itemData => (
          <GoalItem value={itemData.item.value}/>
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