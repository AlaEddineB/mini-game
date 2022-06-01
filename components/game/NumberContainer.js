import {View ,Text, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';
export default function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
      borderWidth:4,
      borderColor:Colors.accent400,
      borderRadius: 12,
      padding:24,
      margin:24,
      alignItems:'center',
      justifyContent:'center',
      elevation: 4,
      shadowColor: "black",
      shadowOffset: { width: 5, height: 10 },
      shadowRadius: 6,
      shadowOpacity: 0.5,
    },
    numberText:{
        color: Colors.accent400,
        fontSize:36,
        fontWeight: 'bold',

    }

  });
  