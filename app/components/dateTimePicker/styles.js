import {StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';
import { Colors } from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
     backgroundColor: "#DDDDDD",
     padding:12,
     margin:5,
   },
});
