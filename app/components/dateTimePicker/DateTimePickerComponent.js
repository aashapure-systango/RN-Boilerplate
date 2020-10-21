import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Platform} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateTimeString from './strings';

export default function DateTimePickerComponent() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.mainContainer}>
      <Text>{dateTimeString.title}</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={showDatePicker} >
          <Text>{dateTimeString.displayDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showTimePicker} >
          <Text>{dateTimeString.displayTime}</Text>
        </TouchableOpacity>
      </View>
      {show && (
          <DateTimePicker
            testID={dateTimeString.testID}
            value={date}
            mode={mode}
            is24Hour={true}
            display={dateTimeString.displayType}
            onChange={onChange}
          />
        )}
    </View>
  );
}
