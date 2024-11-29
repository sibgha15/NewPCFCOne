import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  CheckRadioIcon,
  DisSatisfyFaceIcon,
  NeutralFaceIcon,
  SatisfyFaceIcon,
  UnCheckRadioIcon,
} from '../../../res/assets/images/svgs';
import RoundedButton from '../../components/common/roundedButton';
import SuccessModel from '../../components/Models/SuccessModel';

const FeedBackScreen = () => {
  const [ratings, setRatings] = useState({
    design: null,
    easeOfUse: null,
    dailyUse: null,
    recommend: null,
    overallExperience: null,
  });

  const [device, setDevice] = useState(null);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleRating = (criteria, value) => {
    setRatings(prev => ({...prev, [criteria]: value}));
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="Feedback" backgroundColor="#FFFFFF" />
      <ScrollView
        style={[styles.mainContainer, {flexGrow: 1}]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.flexBetween}>
            <Text style={styles.heading}>Criteria</Text>
            <View style={styles.flexView}>
              <DisSatisfyFaceIcon />
              <NeutralFaceIcon />
              <SatisfyFaceIcon />
            </View>
          </View>
          <View style={styles.darkDvider}></View>

          {[
            {label: 'Design', key: 'design'},
            {label: 'Ease of use', key: 'easeOfUse'},
            {label: 'I will use this daily', key: 'dailyUse'},
            {
              label: 'I will recommend PCFC One to friends and colleagues',
              key: 'recommend',
            },
            {label: 'My overall PCFC One experience', key: 'overallExperience'},
          ].map(({label, key}) => (
            <React.Fragment key={key}>
              <View style={styles.flexBetween}>
                <Text style={styles.text}>{label}</Text>
                <View style={styles.flexView}>
                  {[1, 2, 3].map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => handleRating(key, value)}>
                      {ratings[key] === value ? (
                        <CheckRadioIcon />
                      ) : (
                        <UnCheckRadioIcon />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={styles.divider}></View>
            </React.Fragment>
          ))}
        </View>

        <View style={[styles.card, {padding: 16}]}>
          <Text style={[styles.heading, {paddingBottom: hp(1.5)}]}>
            Which device do you use?
          </Text>
          <View>
            {['Laptop', 'Tablet', 'Mobile'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioContainer}
                onPress={() => setDevice(item)}>
                {device === item ? <CheckRadioIcon /> : <UnCheckRadioIcon />}
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={[styles.card, {padding: 16}]}>
          <Text style={[styles.heading, {paddingBottom: hp(1.5)}]}>
            Additional Comments (Optional)
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.inputBox}
          />
        </View>

        <RoundedButton
          onPress={() => setSuccessModalVisible(true)}
          title="Submit"
          disabled={!ratings || !device}
        />
        <View style={{marginBottom: hp(4)}}></View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={successModalVisible}
        animationType="fade"
        onRequestClose={() => setSuccessModalVisible(false)}>
        <SuccessModel
          onClose={() => setSuccessModalVisible(false)}
          title="Submitted!"
          message="You have successfully submitted your feedback."
          buttonText="Go back to Homepage"
        />
      </Modal>
    </View>
  );
};

export default FeedBackScreen;
