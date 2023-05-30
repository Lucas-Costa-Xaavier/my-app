import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#F5F5F5', 
    padding: 20, 
  },  
  button: {
    margin: 30,
    padding: 10,
    backgroundColor: '#9E9E9E', 
    height: 90, 
    justifyContent: 'center', 
  }, 
  textButton: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 40, 
    color: 'black', 
    textAlign: 'center',
    margin: 0, 
    padding: 10,
  }, 
  counter: {
    borderWidth: 4, 
    borderColor: '#9E9E9E', 
    padding: 8,  
    marginTop: 8, 
    justifyContent: 'center',
  }, 
  textCounter: {
    fontSize: 32, 
    color: '#15a', 
    textAlign: 'center',    
    fontWeight: 'bold', 
    padding: 5, 
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCol: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numcont: {
    fontSize: 40,
    color: 'black',
    margin: 10,
    padding: 10,

  }
});

export default styles;