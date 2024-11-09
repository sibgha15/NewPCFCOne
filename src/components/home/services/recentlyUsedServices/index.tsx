import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {
  AdminServices,
  ArrowIcon,
  MediaCoverage,
  Payroll,
  ThreeDots,
} from '../../../../../res/assets/images/svgs';

const serviceData = [
  {
    id: '1',
    name: 'Media Coverage',
    icon: <MediaCoverage width={28} height={28} />,
    backgroundColor: '#F83E3E1A',
  },
  {
    id: '2',
    name: 'Installment Request',
    icon: <Payroll width={28} height={28} />,
    backgroundColor: '#8DC83A1A',
  },
  {
    id: '3',
    name: 'Admin Services',
    icon: <AdminServices width={28} height={28} />,
    backgroundColor: '#883BA91A',
  },
];

const RecentlyUsedServices = () => {
  const renderServiceCard = ({item}) => (
    <TouchableOpacity style={styles.serviceCard}>
      <View style={styles.iconContainer}>
        <View
          style={[styles.iconWrapper, {backgroundColor: item.backgroundColor}]}>
          {item.icon}
        </View>
        <Text style={styles.serviceName}>{item.name}</Text>
      </View>
      <ArrowIcon width={16} height={16} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Recently Used Services</Text>
        <ThreeDots width={20} height={20} />
      </View>
      <FlatList
        data={serviceData}
        renderItem={renderServiceCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.serviceCardContainer}
      />
    </View>
  );
};

export default RecentlyUsedServices;
