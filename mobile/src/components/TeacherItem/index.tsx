import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';



import styles from './styles';


function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGmY5JoRjElKg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=O124jVqdWFaVuufaaf4EtHDyB7NTdJeuyS14jPd2Y9g' }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Guilherme M.Munis</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Programador Web Full Stack, desenvolvendo aplicações da API ao deploy.
        {'\n'}{'\n'}
        Atualmente trabalho como programador onde eu desenvolvo aplicações que utilizam HTML, CSS, PHP, Javascript, NodeJS entre outras coisas que fazem parte do dia a dia =)
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />

          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;