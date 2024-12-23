import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import {styles} from './style';
import {
  ExpandMoreIcon,
  FilterIcon,
  GoldenStar,
  HotelClassIcon,
  SearchIcon,
  StarIcon,
  UserAvatar,
  WhiteArrowIconLeft,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../res/themes';
import CalenderModel from '../../components/Models/CalenderModel';
import RoundedButton from '../../components/common/roundedButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StarOfYTheMonth = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Give Stars');
  const [openCalenderModel, setOpenCalenderModel] = useState(false);
  const [selectStar, setSelectStar] = useState('Select');
  const [selectStarModel, setSelectStarModel] = useState(false);
  const [justification, setJustification] = useState('');

  interface TableRow {
    rank: number;
    id: string;
    name: string;
    stars: number;
  }

  const handleStarSelect = (option: string) => {
    setSelectStar(option);
    setSelectStarModel(false);
  };

  const handleReset = () => {
    setJustification('');
    setSelectStar('Select');
  };

  const rankingData: TableRow[] = Array.from({length: 25}, (_, index) => ({
    id: `${900000 + index}`,
    name: `Employee ${index + 1}`,
    stars: Math.floor(Math.random() * 300) + 1,
    rank: index + 1,
  }));

  const renderTableRow = ({item}: {item: TableRow}) => (
    <>
      <View style={styles.tableRow}>
        <Text style={[styles.tableText, styles.col15]}>{item.rank}</Text>
        <Text style={[styles.tableText, styles.col25]}>{item.id}</Text>
        <Text
          style={[styles.tableText, styles.col40]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {item.name}
        </Text>
        <View style={[styles.ratingFlex, styles.col20]}>
          <HotelClassIcon />
          <Text style={styles.tableText}>{item.stars}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </>
  );

  const adminCardData = [
    {id: '1', name: 'Ahmed Mustafa', date: '17-Feb-2024', status: 'APPROVE'},
    {id: '2', name: 'Ahmed Mustafa', date: '17-Feb-2024', status: 'PENDING'},
    {id: '3', name: 'Ahmed Mustafa', date: '17-Feb-2024', status: 'REJECT'},
    {id: '4', name: 'Ahmed Mustafa', date: '17-Feb-2024', status: 'APPROVE'},
    {id: '5', name: 'Ahmed Mustafa', date: '17-Feb-2024', status: 'PENDING'},
    {id: '6', name: 'Ahmed Mustafa', date: '17-Feb-2024', status: 'REJECT'},
    {id: '7', name: 'Ahmed Mustafa', date: '17-Feb-2024', status: 'APPROVE'},
  ];

  const renderAdminCard = ({item}: any) => {
    const statusStyle =
      item.status === 'APPROVE'
        ? styles.approveStatusWrapper
        : item.status === 'PENDING'
        ? styles.pendingStatusWrapper
        : styles.rejectStatusWrapper;

    const statusTextStyle =
      item.status === 'APPROVE'
        ? styles.approveStatusText
        : item.status === 'PENDING'
        ? styles.pendingStatusText
        : styles.rejectStatusText;

    return (
      <View style={styles.adminViewCad}>
        <View style={styles.flexView}>
          <View style={styles.iconWrapper}>
            <UserAvatar width={40} height={40} />
          </View>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        <View style={statusStyle}>
          <Text style={statusTextStyle}>{item.status}</Text>
        </View>
      </View>
    );
  };

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
          <Text style={styles.headerText}>Star of the Month</Text>
          <TouchableOpacity
            onPress={() => setOpenCalenderModel(!openCalenderModel)}>
            <StarIcon />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.tabContainer,
            {paddingBottom: activeTab === 'Ranking' ? hp(2) : hp(5)},
          ]}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Give Stars' && {backgroundColor: colors.white},
            ]}
            onPress={() => setActiveTab('Give Stars')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Give Stars' && {color: colors.primary},
              ]}>
              Give Stars
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Ranking' && {
                backgroundColor: colors.white,
              },
            ]}
            onPress={() => setActiveTab('Ranking')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Ranking' && {
                  color: colors.primary,
                },
              ]}>
              Ranking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Admin View' && {
                backgroundColor: colors.white,
              },
            ]}
            onPress={() => setActiveTab('Admin View')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Admin View' && {color: colors.primary},
              ]}>
              Admin View
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'Ranking' && (
          <View style={styles.searchBarContainer}>
            <View style={styles.flexView}>
              <SearchIcon />
              <TextInput
                placeholder="Search Employees"
                placeholderTextColor={colors.lightGrey}
                style={styles.searchBarText}
              />
            </View>
            <FilterIcon />
          </View>
        )}
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        {activeTab === 'Give Stars' && (
          <View style={styles.card}>
            <Text style={styles.title}>Star of the February, 2024</Text>
            <View style={styles.flexView}>
              <Text style={styles.info}>Stars Left</Text>
              <Text style={styles.info}>3/3</Text>
              <View style={styles.ratingStarContainer}>
                <GoldenStar />
                <GoldenStar />
                <GoldenStar />
              </View>
            </View>
            <View style={styles.titleRow}>
              <Text style={styles.title}>Give Star To</Text>
              <Text style={[styles.title, {color: colors.red}]}>*</Text>
            </View>
            <TouchableOpacity
              onPress={() => setSelectStarModel(!selectStarModel)}
              style={styles.selectInput}>
              <Text style={[styles.selectInputText]}>
                {selectStar || 'Select'}
              </Text>
              <ExpandMoreIcon />
            </TouchableOpacity>
            <View style={styles.flexBetween}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>Justification</Text>
                <Text style={[styles.title, {color: colors.red}]}>*</Text>
              </View>
              <Text style={styles.evaluationText}>Evaluation Criteria</Text>
            </View>
            <TextInput
              value={justification}
              onChangeText={setJustification}
              multiline
              style={styles.textArea}
            />
          </View>
        )}
        {activeTab === 'Ranking' && (
          <View>
            <Text style={styles.title}>Top Stars Ranking</Text>
            <View style={styles.tableContainer}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderText, styles.col15]}>#</Text>
                <Text style={[styles.tableHeaderText, styles.col25]}>ID #</Text>
                <Text style={[styles.tableHeaderText, styles.col40]}>NAME</Text>
                <Text style={[styles.tableHeaderText, styles.col20]}>
                  STARS
                </Text>
              </View>
              <View style={styles.divider} />

              <FlatList
                data={rankingData}
                renderItem={renderTableRow}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        )}
        {activeTab === 'Admin View' && (
          <View>
            <FlatList
              data={adminCardData}
              renderItem={renderAdminCard}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </ScrollView>
      {activeTab === 'Give Stars' && (
        <View style={styles.footer}>
          <RoundedButton
            title="Submit"
            disabled={!justification || selectStar === 'Select'}
          />
          <TouchableOpacity onPress={handleReset}>
            <Text style={styles.closebtn}>Reset</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        transparent={true}
        visible={openCalenderModel}
        animationType="fade"
        onRequestClose={() => setOpenCalenderModel(false)}>
        <CalenderModel onClose={() => setOpenCalenderModel(false)} />
      </Modal>
      <Modal
        transparent={true}
        visible={selectStarModel}
        animationType="fade"
        onRequestClose={() => setSelectStarModel(false)}>
        <View style={styles.dropdownModel}>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={() => handleStarSelect('Attendees')}>
              <Text style={styles.dropdownOption}>Attendees</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStarSelect('Children')}>
              <Text style={styles.dropdownOption}>Children</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStarSelect('Adults')}>
              <Text style={styles.dropdownOption}>Adults</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StarOfYTheMonth;
