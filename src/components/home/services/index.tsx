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
  Teams,
} from '../../../../res/assets/images/svgs';

const Services = ({navigation}: any) => {
  const services = [
    {
      id: 1,
      logo: (
        <View style={styles.iconWrapper}>
          <Attendance width={36} height={36} />
        </View>
      ),
      name: 'Attendance',
    },
    {
      id: 2,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#8DC83A1A'}]}>
          <Payroll width={36} height={36} />
        </View>
      ),
      name: 'Payroll',
    },
    {
      id: 3,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
          <MyTasks width={36} height={36} />
        </View>
      ),
      name: 'My Tasks',
    },
    {
      id: 4,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#FBD3041A'}]}>
          <Circulars width={36} height={36} />
        </View>
      ),
      name: 'Circulars',
    },
    {
      id: 5,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#F83E3E1A'}]}>
          <Calendar width={36} height={36} />
        </View>
      ),
      name: 'Calendar',
    },
    {
      id: 6,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#5059C91A'}]}>
          <Teams width={36} height={36} />
        </View>
      ),
      name: 'Teams',
    },
    {
      id: 7,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#F83E3E1A'}]}>
          <MediaCenter width={36} height={36} />
        </View>
      ),
      name: 'Media Center',
    },
    {
      id: 8,
      logo: <Neuron width={60} height={60} />,
      name: 'Neuron',
    },
    {
      id: 9,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#038756'}]}>
          <Esaad width={36} height={36} />
        </View>
      ),
      name: 'Esaad',
    },
    {
      id: 10,
      logo: (
        <View style={[styles.iconWrapper, {backgroundColor: '#C09949'}]}>
          <Fazaa width={36} height={36} />
        </View>
      ),
      name: 'Fazaa',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {services.map(service => (
          <TouchableOpacity key={service.id} style={styles.serviceItem}>
            {service.logo}
            <Text style={styles.serviceName}>{service.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PendingActions');
          }}
          style={[
            styles.iconWrapper,
            styles.addIconWrapper,
            {backgroundColor: '#177DB71A'},
          ]}>
          <Add width={36} height={36} />
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
    marginLeft: 15,
  },
  serviceName: {
    fontWeight: '400',
    fontSize: 15,
    color: '#1A1A1A',
    marginTop: 20,
  },
});

export default Services;
