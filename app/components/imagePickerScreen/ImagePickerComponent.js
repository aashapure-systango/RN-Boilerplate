import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';

export default function ImagePickerComponent() {
  const [avatar, setAvatar] = useState(null);
  const showPicker = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setAvatar(source);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text>Image Picker Screen</Text>
        <View>
          <TouchableOpacity onPress={() => showPicker()}>
            <View style={[styles.avatar, styles.avatarContainer]}>
              {avatar === null ? (
                <Text>Select a Photo</Text>
              ) : (
                <Image style={styles.avatar} source={avatar} />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
