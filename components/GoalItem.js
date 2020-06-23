import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const GoalItem = ({value}) => {
    return (
        <View style={styles.listItem}>
          <Text>{value}</Text>
        </View>
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