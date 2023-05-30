import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#F5F5F5', 
    padding: 8, 
  }, 
  button: {
    margin: 5,
    padding: 5,
    backgroundColor: '#424242', 
    height: 80, 
    justifyContent: 'center', 
  }, 
  buttonact: {
    margin: 5,
    padding: 5,
    backgroundColor: '#424242', 
    height: 70, 
    justifyContent: 'center', 
  }, 
  textButton: {
    fontSize: 40, 
    color: '#424242', 
    textAlign: 'center', 
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
    color: '#424242', 
    textAlign: 'center',    
    fontWeight: 'bold', 
    padding: 8, 
  }
});

export default styles;