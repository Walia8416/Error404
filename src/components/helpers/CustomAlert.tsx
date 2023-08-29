import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors';
import {Regular} from '../../constants/Fonts';

interface CustomModelProps {
  visible: boolean;
  handleClose: () => void;
  onAccept: () => void;
  title: string;
  message: string;
}

const CustomAlert = ({
  visible,
  handleClose,
  title,
  message = '',
  onAccept,
}: CustomModelProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={'fade'}
      animated={true}>
      <TouchableOpacity onPressOut={handleClose} style={styles.wrapper}>
        <View style={styles.modalContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{message}</Text>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.button} onPress={handleClose}>
              <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default React.memo(CustomAlert);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.blueTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    width: '90%',
    paddingTop: 20,

    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: Regular,
    marginLeft: 10,
    alignSelf: 'center',
    color: '#565656',
  },
  divider: {
    backgroundColor: '#00000033',
    height: 1,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00000033',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Regular,
    alignSelf: 'center',
    color: '#565656',
  },
});
