import {
  Dimensions,
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Medium, Regular} from '../../../constants/Fonts';
import React, {useState} from 'react';

import {Colors} from '../../../constants/colors';
import {Container} from '../../../styled_components/layout';

import Images from '../../../constants/icon';

import Touch from '../Touch';

const {width} = Dimensions.get('window');

interface props {
  onPressModel?: ((event: GestureResponderEvent) => void) | undefined;
  onPress?: () => void;
  navigation?: any;
  showMore: Boolean;
  headerTopLeftTitle: string;

  showMore: boolean;
  searchTitle: string;
}

const HeaderBody = ({
  onPressModel,
  onPress,
  navigation,
  type,
  headerTopLeftTitle,
  searchTitle,

  showMore,
}: props) => {
  const [value, setValue] = useState<string>('');
  const [check, setcheck] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [state, setState] = useState({top: 100});
  const [items, setItems] = useState({
    name: 'Hoarding',
    image: Images.graygame,
    key: '0',
  });
  const [items2, setItems2] = useState({
    name: 'All Campaigns',
    image: Images.graygame,
    key: '0',
  });
  const props = {
    check: check,
    setCheck: setcheck,
    items: items2,

    state: state,
    setState: setState,
    setItems: setItems,
  };

  const props2 = {
    check: check,
    setCheck: setcheck,
    items: items,

    state: state,
    setState: setState,
    setItems: setItems,
  };
  return (
    <View>
      <Container>
        <View style={styles.headerView}>
          <Text style={styles.headerTextLeft}>{headerTopLeftTitle}</Text>
        </View>
      </Container>

      <Modal
        visible={modalState}
        transparent={true}
        animated={true}
        animationType={'fade'}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Touch testID={'Touch'} onPress={() => setModalState(false)}>
              <Image source={Images.bigX} style={{margin: 10}} />
            </Touch>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HeaderBody;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 40,
    paddingTop: 10,
  },
  headerTextLeft: {
    fontSize: 16,
    color: Colors.DarkGrey,
    fontFamily: Medium,
  },
  headerViewRight: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: Colors.Silver,
    borderRadius: 4,
  },
  headerTextRight: {
    color: Colors.DimGray,
    fontSize: 12,
    fontFamily: Regular,
  },
  links: {
    color: Colors.link,
    fontFamily: Medium,
    fontSize: 13,
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 40,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.blueTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: Colors.white,
    width: '85%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
