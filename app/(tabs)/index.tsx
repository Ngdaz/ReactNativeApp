import { StyleSheet, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [enterGoalText, setEnterGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);
  const goalInputHandler = (enterText: string) => {
    setEnterGoalText(enterText);
  };

  const addGoalInputHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enterGoalText]);
    setEnterGoalText('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enterGoalText}
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
        />
        <Button title='Click me' onPress={addGoalInputHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            itemData.index
            return <Text style={styles.goalItem}>{itemData.item}</Text>;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    marginRight: 8,
  },
  goalsContainer: {
    width: '100%',
    flex: 5,
  },
  goalItem: {
    backgroundColor: '#5e0acc',
    padding: 8,
    borderRadius: 5,
    margin: 8,
  },
});
