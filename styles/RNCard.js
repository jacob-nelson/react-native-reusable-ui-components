 export const card = {
  container: 
    {
      alignSelf: 'stretch',
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,  
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 15
    },
  header: {
        //backgroundColor: cardTheme,
        borderBottomWidth: 1,
        borderColor: '#ccc',

    }, 
  footer: {
        //backgroundColor: cardTheme,
        borderTopWidth: 1,
        borderColor: '#ccc',

    },    
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#142588',
        textAlign: 'center',
        lineHeight: 70   
    }, 
    body: {
        padding: 15,
    },  
    bodyText: {
        fontSize: 25,
        color: '#666',
    }
 }