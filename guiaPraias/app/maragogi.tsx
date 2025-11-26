import React from 'react';
import {
StyleSheet,
View,
Text,
Image,
ScrollView
} from 'react-native';
import { Stack } from 'expo-router';
export default function MaragogiScreen() {
return (
<ScrollView style={styles.container}>
{/* 1. Header com o Título "Maragogi"
Isso garante que o nome da praia apareça na barra de navegação.
*/}
<Stack.Screen
options={{
title: 'Maragogi',
}}
/>
{/* 2. Imagem Principal */}
<Image
// O caminho da pasta `app/` para `assets/` é apenas um nível (../)
source={require('../assets/images/Maragogi.jpg')}
style={styles.headerImage}
/>
{/* 3. Conteúdo da Página */}
<View style={styles.contentContainer}>
{/* Título e Subtítulo */}
<Text style={styles.title}>Maragogi</Text>
<Text style={styles.subtitle}>São Paulo</Text>
{/* Texto de Descrição */}
<Text style={styles.description}>
Maragogi é uma cidade turística na costa do Oceano Atlântico, no leste do Brasil. É conhecida pelas suas longas praias como Burgalhau, perto do Rio dos Paus. Os recifes de coral ao largo da costa e os bancos de areia criaram uma lagoa pouco profunda, que serve de piscina natural. A sul de Maragogi encontra-se São Bento, uma aldeia piscatória com uma praia repleta de palmeiras. Aqui, a costa faz parte da área protegida da Costa dos Corais, que é rica em flora e fauna.
</Text>
{/* Imagem do Mapa */}
<Image
source={require('../assets/maragogi-map.png')}
style={styles.mapImage}
/>

</View>
</ScrollView>
);
}
// --- Estilos ---
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
headerImage: {
width: '100%',
height: 280, // Um pouco maior para a tela de detalhe
resizeMode: 'cover',
borderBottomLeftRadius: 20, // Bordas arredondadas no canto
borderBottomRightRadius: 20, // Bordas arredondadas no canto
},
contentContainer: {
padding: 20, // Espaçamento interno para todo o conteúdo
},
title: {
fontSize: 36,
fontWeight: 'bold',
color: '#005FFF', // Azul principal
marginBottom: 5,
},
subtitle: {
fontSize: 18,
color: '#20C0C0', // Ciano/Verde-água
marginBottom: 20,
},
description: {
fontSize: 16,
color: '#333333', // Cor de texto padrão (escuro)
lineHeight: 24, // Espaçamento entre linhas para melhor leitura
marginBottom: 25,
},
mapImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
borderRadius: 10, // Bordas arredondadas para o mapa
},
});