import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from 'react-native';
import {
  WhiteArrowIconLeft,
  WhiteFilterIcon,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import MediaCard from '../../components/common/MediaCard';
import DateFilterModel from '../../components/Models/DateFilterModel';

const NewsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [openModel, setOpenModel] = useState(false);

  const newsData = [
    {
      imageSource: require('../../../res/assets/images/image.png'),
      title:
        'PCFC signs MoU with TDRA to enhance business practices within the maritime sector',
      date: '03-Mar-2024',
    },
    {
      imageSource: require('../../../res/assets/images/image.png'),
      title:
        'Tech conference 2024: Innovations in AI and blockchain technology',
      date: '10-Apr-2024',
    },
    {
      imageSource: require('../../../res/assets/images/image.png'),
      title: 'New sustainable energy projects launched across the globe',
      date: '20-May-2024',
    },
    {
      imageSource: require('../../../res/assets/images/image.png'),
      title: 'New sustainable energy projects launched across the globe',
      date: '20-May-2024',
    },
    {
      imageSource: require('../../../res/assets/images/image.png'),
      title: 'New sustainable energy projects launched across the globe',
      date: '20-May-2024',
    },
    {
      imageSource: require('../../../res/assets/images/image.png'),
      title: 'New sustainable energy projects launched across the globe',
      date: '20-May-2024',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1881BB"
        translucent={false}
      />
      <LinearGradient
        colors={['#1881BB', '#20AAE2']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.header}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteArrowIconLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>News</Text>
          <TouchableOpacity onPress={() => setOpenModel(true)}>
            <WhiteFilterIcon />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          {newsData.map((newsItem, index) => (
            <MediaCard
              onPress={() => navigation.navigate('NewsDetailScreen')}
              key={index}
              imageSource={newsItem.imageSource}
              title={newsItem.title}
              date={newsItem.date}
            />
          ))}
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <DateFilterModel onClose={() => setOpenModel(false)} />
      </Modal>
    </View>
  );
};

export default NewsScreen;
