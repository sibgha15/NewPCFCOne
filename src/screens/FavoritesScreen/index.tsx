import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {styles} from './styles';
import StackHeader from '../../components/header/stackHeader';
import {
  Attendance,
  Calendar,
  Circulars,
  CurrencyExchange,
  Esaad,
  Fazaa,
  HandSHake,
  MediaCenter,
  MyTasks,
  Neuron,
  Payroll,
  Recipt,
  Stars,
  Teams,
  Work,
} from '../../../res/assets/images/svgs';
import ToggleCard from '../../components/common/togglecard';

const FavoritesScreen = () => {
  const [toggleStates, setToggleStates] = useState({
    attendance: false,
    payroll: false,
    circulars: false,
    myTasks: false,
    starOfTheMonth: false,
    careerPerformance: false,
    calendar: false,
    teams: false,
    mediaCenter: false,
    surveys: false,
    neuron: false,
    esaad: false,
    fazaa: false,
    partners: false,
    currencyExchange: false,
  });

  const handleToggle = (key: string, value: boolean) => {
    setToggleStates(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader title="Favorites" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <ToggleCard
              icon={<Attendance width={22.17} height={22.17} />}
              iconBgColor="#883BA91A"
              label="Attendance"
              isEnabled={toggleStates.attendance}
              onToggle={value => handleToggle('attendance', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Payroll width={22.17} height={22.17} />}
              iconBgColor="#8DC83A1A"
              label="Payroll"
              isEnabled={toggleStates.payroll}
              onToggle={value => handleToggle('payroll', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Circulars width={22.17} height={22.17} />}
              iconBgColor="#FBD3041A"
              label="Circulars"
              isEnabled={toggleStates.circulars}
              onToggle={value => handleToggle('circulars', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<MyTasks width={22.17} height={22.17} />}
              iconBgColor="#177DB71A"
              label="My Tasks"
              isEnabled={toggleStates.myTasks}
              onToggle={value => handleToggle('myTasks', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Stars width={22.17} height={22.17} />}
              iconBgColor="#883BA91A"
              label="Star of the Month"
              isEnabled={toggleStates.starOfTheMonth}
              onToggle={value => handleToggle('starOfTheMonth', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Work width={22.17} height={22.17} />}
              iconBgColor="#883BA91A"
              label="Career & Performance"
              isEnabled={toggleStates.careerPerformance}
              onToggle={value => handleToggle('careerPerformance', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Calendar width={22.17} height={22.17} />}
              iconBgColor="#F83E3E1A"
              label="Calendar"
              isEnabled={toggleStates.calendar}
              onToggle={value => handleToggle('calendar', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Teams width={22.17} height={22.17} />}
              iconBgColor="#5059C91A"
              label="Teams"
              isEnabled={toggleStates.teams}
              onToggle={value => handleToggle('teams', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<MediaCenter width={22.17} height={22.17} />}
              iconBgColor="#F83E3E1A"
              label="Media Center"
              isEnabled={toggleStates.mediaCenter}
              onToggle={value => handleToggle('mediaCenter', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Recipt width={22.17} height={22.17} />}
              iconBgColor="#883BA91A"
              label="Surveys"
              isEnabled={toggleStates.surveys}
              onToggle={value => handleToggle('surveys', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Neuron width={43} height={43} />}
              iconBgColor="#AEAEAE"
              label="Neuron"
              isEnabled={toggleStates.neuron}
              onToggle={value => handleToggle('neuron', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Esaad width={22.17} height={22.17} />}
              iconBgColor="#038756"
              label="ESAAD"
              isEnabled={toggleStates.esaad}
              onToggle={value => handleToggle('esaad', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<Fazaa width={22.17} height={22.17} />}
              iconBgColor="#C09949"
              label="FAZAA"
              isEnabled={toggleStates.fazaa}
              onToggle={value => handleToggle('fazaa', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<HandSHake width={22.17} height={22.17} />}
              iconBgColor="#177DB71A"
              label="Partners"
              isEnabled={toggleStates.partners}
              onToggle={value => handleToggle('partners', value)}
            />
            <View style={styles.separator} />
            <ToggleCard
              icon={<CurrencyExchange width={22.17} height={22.17} />}
              iconBgColor="#8DC83A1A"
              label="Currency Exchange"
              isEnabled={toggleStates.currencyExchange}
              onToggle={value => handleToggle('currencyExchange', value)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
