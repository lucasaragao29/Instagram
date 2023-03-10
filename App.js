import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import {  StyleSheet,
          Text, 
          View , 
          TouchableOpacity,
          FlatList,
          Image } from 'react-native';
import Lista from './src/Lista';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    feed: [
      {
        id: '1', 
        nome: 'Lucas Aragão', 
        descricao: 'Mais um dia de muitos bugs :)', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
        likeada: false, 
        likers: 2
       },
      {
        id: '2', 
        nome: 'Kleiton', 
        descricao: 'Isso sim é ser raiz!!!!!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
        likeada: false, 
        likers: 0
      },
      {
        id: '3', 
        nome: 'Ralisson Matias', 
        descricao: 'Bora trabalhar Haha', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
        likeada: false, 
        likers: 3
      },
      {
        id: '4', 
        nome: 'Ruan Henrique', 
        descricao: 'Isso sim que é TI!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
        likeada: false, 
        likers: 1
      },
      {
        id: '5', 
        nome: 'Johnatan', 
        descricao: 'Boa tarde galera do insta...', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
        likeada: false, 
        likers: 32
      },
      {
        id: '6', 
        nome: 'Fernando Hartung', 
        descricao: 'Boa tarde galera do insta...', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
        likeada: false, 
        likers: 58
      }
    ]

  };
}

  render(){
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <TouchableOpacity>
      <Image
        source={require('./src/img/logo.png')}
        style={styles.logo}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
        source={require('./src/img/send.png')}
        style={styles.send}
       />
       </TouchableOpacity>
     </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={this.state.feed}
        renderItem={({item}) => <Lista data={item}/>}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    marginTop:30,
    height:55,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:5,
    borderBottomWidth:0.5,
    shadowColor:'#000',
    elevation:0.1
  },
  logo:{

  },
  send:{
    width:23,
    height:23,
  }
});


export default App;
