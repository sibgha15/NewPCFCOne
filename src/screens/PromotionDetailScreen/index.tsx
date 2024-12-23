import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './styles';

const PromotionDetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="Promotions" backgroundColor="#ffffff" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Image
            style={styles.bannerImage}
            source={require('../../../res/assets/images/image.png')}
          />
          <Text style={styles.date}>03-Mar-2024</Text>
          <Text style={styles.title}>Private Pool UAE Staycations</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Text style={styles.description}>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </Text>
          <Text style={styles.description}>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PromotionDetailScreen;
