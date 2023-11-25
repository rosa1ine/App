import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: 'auto',
      height: 'auto',
    },
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#6e6e6e',
    },

    timeContainer:{
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#fff"
    },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },

});

export default styles;



