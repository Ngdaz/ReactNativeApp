import { StyleSheet, Button, TextInput, FlatList, Modal } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../../components/Themed';
import GoalText from '../../components/GoalText';

type course = {
  text: string;
  key: string;
};

export default function TabOneScreen() {
  const [enterGoalText, setEnterGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<Array<course>>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const startAddGoalHandler = (value: boolean) => {
    setModalIsVisible(value);
  };
  const goalInputHandler = (enterText: string) => {
    setEnterGoalText(enterText);
  };

  const addGoalInputHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enterGoalText, key: Math.random().toString() },
    ]);
    setEnterGoalText('');
    startAddGoalHandler(false);
  };

  const deleteGoalHandler = (goalKey: string) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((item) => {
        return item.key !== goalKey;
      });
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Button
          title='Add new goal'
          color='#5e0acc'
          onPress={() => startAddGoalHandler(true)}
        ></Button>
        <Modal visible={modalIsVisible} animationType='slide'>
          <View style={styles.modalContainer}>
            <TextInput
              value={enterGoalText}
              style={styles.textInput}
              placeholder='Your course goal'
              onChangeText={goalInputHandler}
            />
            <View style={styles.buttonModalContainer}>
              <View style={styles.addGoalButton}>
                <Button title='Add goal' onPress={addGoalInputHandler} />
              </View>
              <Button
                title='Cancel'
                onPress={() => startAddGoalHandler(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            itemData.index;
            return GoalText({
              text: itemData.item.text,
              deleteGoal: () => {
                deleteGoalHandler(itemData.item.key);
              },
            });
          }}
          keyExtractor={(item) => {
            return item.key;
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
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  addGoalButton: {
    marginRight: 8,
  },

  buttonModalContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
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
