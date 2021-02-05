import {StyleSheet} from 'react-native';
import {rh, rw, rbr,  } from '../../Utils/Layout.util';


export const Styles = StyleSheet.create({
button:{
    height: rh(30),
    width: rw(80),
    backgroundColor: 'white',
    borderRadius: rbr(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: rw(10),
    marginTop: rh (15)
},
textButton: {
    color: 'black',
},
});