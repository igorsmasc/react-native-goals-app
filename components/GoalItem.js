import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const GoalItem = ({ goal, onDelete }) => {
    return (
      <TouchableOpacity onPress={onDelete.bind(this, goal.id)}>
        <View style={styles.listItem}>
          <Text>{goal.value}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
  });

export default GoalItem;