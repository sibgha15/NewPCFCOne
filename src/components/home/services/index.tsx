import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Add,
  Attendance,
  Calendar,
  Circulars,
  Esaad,
  Fazaa,
  MediaCenter,
  MyTasks,
  Neuron,
  Payroll,
  Stars,
  Teams,
} from '../../../../res/assets/images/svgs';
import {fonts} from '../../../../res/themes';

const Services = ({navigation}: any) => {
  const services = [
    // {
    //   id: 1,
    //   logo: (
    //     <View style={styles.iconWrapper}>
    //       <Attendance width={36} height={36} />
    //     </View>
    //   ),
    //   name: 'Attendance',
    //   routeName: 'AttendanceScreen',
    // },
    // {
    //   id: 2,
    //   logo: (
    //     <View style={[styles.iconWrapper, {backgroundColor: '#8DC83A1A'}]}>
    //       <Payroll width={36} height={36} />
    //     </View>
    //   ),
    //   name: 'Payroll',
    //   routeName: 'PayrollScreen',
    // },
    {
      id: 3,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
          <MyTasks width={36} height={36} />
        </View>
      ),
      name: 'My Tasks',
      routeName: 'taskScreen',
    },
    {
      id: 4,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#FBD3041A'}]}>
          <Circulars width={36} height={36} />
        </View>
      ),
      name: 'Circulars',
      routeName: 'circularsScreen',
    },
    {
      id: 5,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#883BA91A'}]}>
          <Stars width={36} height={36} />
        </View>
      ),
      name: 'Star of the Month',
      routeName: 'StarOfYTheMonthScreen',
    },
    {
      id: 6,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#F83E3E1A'}]}>
          <Calendar width={36} height={36} />
        </View>
      ),
      name: 'Calendar',
      routeName: 'CalendarScreen',
    },
    {
      id: 7,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#5059C91A'}]}>
          <Teams width={36} height={36} />
        </View>
      ),
      name: 'Teams',
      routeName: 'TeamsScreen',
    },
    {
      id: 8,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#F83E3E1A'}]}>
          <MediaCenter width={36} height={36} />
        </View>
      ),
      name: 'Media Center',
      routeName: 'MediaCenterScreen',
    },
    {
      id: 9,
      logo: <Neuron width={60} height={60} />,
      name: 'Neuron',
      routeName: 'NeuronScreen',
    },
    {
      id: 10,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#038756'}]}>
          <Esaad width={36} height={36} />
        </View>
      ),
      name: 'ESAAD',
      routeName: 'EsaadScreen',
    },
    {
      id: 11,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#C09949'}]}>
          <Fazaa width={36} height={36} />
        </View>
      ),
      name: 'FAZAA',
      routeName: 'FazaaScreen',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {services.map(service => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceItem}
            onPress={() => navigation.navigate(service.routeName)}>
            {service.logo}
            <Text
              style={styles.serviceName}
              numberOfLines={1}
              ellipsizeMode="tail">
              {service.name}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => navigation.navigate('PendingActions')}
          style={styles.serviceItem}>
          <View
            style={[
              styles.iconWrapper,
              styles.addIconWrapper,
              {backgroundColor: '#177DB71A'},
            ]}>
            <Add width={36} height={36} />
          </View>
          <Text style={styles.serviceName}>Add More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1881BB',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    backgroundColor: '#F5F7FC',
    paddingHorizontal: hp(2),
    paddingTop: hp(3),
  },
  serviceItem: {
    width: '25%',
    marginBottom: 20,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#883BA91A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIconWrapper: {
    borderWidth: 2,
    borderColor: '#0095CF',
    borderStyle: 'dashed',
  },
  serviceName: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: 15,
    color: '#1A1A1A',
    marginTop: hp(2),
    textAlign: 'center',
  },
});

export default Services;
