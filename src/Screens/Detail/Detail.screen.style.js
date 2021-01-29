import {StyleSheet} from 'react-native';
import {rh, rw, rbr, rf} from '../../Utils/Layout.util';
import {COLORS} from '../../Themes';

export const Styles = StyleSheet.create({
button:{
    height: rh(30),
    width: rw(80),
    backgroundColor: 'black',
    borderRadius: rbr(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: rw(10),
    marginTop: rh (15)
},
textButton: {
    color: 'white',
},
});