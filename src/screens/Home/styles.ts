import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: "#131019",
      padding: 20
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: 'white',
    padding: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height:56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    fontSize: 5,
    backgroundColor: '#31CF67',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 16
  }

})