import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal  } from 'react-native';


const GoalInput = ({ addGoalHandler, isAddMode, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoal = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
    <Modal visible={isAddMode} animationType="slide">    
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
        <View style={ styles.buttonContainer }>
            <View style={ styles.button }>
                <Button title="CANCEL" color="red" onPress={onCancel}/>
            </View>
            <View style={ styles.button }>
                <Button title="ADD" onPress={addGoal}/>
            </View>
        </View>
      </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center", 
        alignItems: 'center' 
      },
    
    input: {
      width: '80%', 
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 10,
      marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: { 
        width: '40%' 
    }

  });

export default GoalInput;