import React, {useState} from 'react';
import {
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './style';
import RoundedButton from '../../components/common/roundedButton';
import {
  ExpandMoreIcon,
  GrayInfoIcon,
  PrimaryCalender,
} from '../../../res/assets/images/svgs';
import {colors} from '../../../res/themes';
import CalenderModel from '../../components/Models/CalenderModel';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';

const EditEventDetailScreen = () => {
  const [openModel, setOpenModel] = useState(false);
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [attendees, setAttendees] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time' | null>(null);
  const [timePickerFor, setTimePickerFor] = useState<'start' | 'end' | null>(
    null,
  );

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const [isReservationDropdownOpen, setIsReservationDropdownOpen] =
    useState(false);
  const [reservationselectedOption, setreservationSelectedOption] =
    useState('Select type');

  const [bookingMenu, setBookingMenu] = useState(false);
  const [bookingOption, setBookingOption] = useState('Select type');

  const [audienceDropdown, setAudienceDropdown] = useState(false);
  const [audienceOption, setAudienceOption] = useState('Select audience');

  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res[0].name);
      console.log('File details:', res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled file upload');
      } else {
        console.error('File upload error:', err);
      }
    }
  };

  const handleReservationSelect = option => {
    setreservationSelectedOption(option);
    setIsReservationDropdownOpen(false);
  };

  const handleBookingSelect = option => {
    setBookingOption(option);
    setBookingMenu(false);
  };

  const handleAudienceSelect = option => {
    setAudienceOption(option);
    setAudienceDropdown(false);
  };

  const handleDateSelection = (date: string) => {
    setStartDate(date);
    setOpenModel(false);
  };

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    if (event.type === 'dismissed') {
      setShowPicker(false);
      return;
    }
    if (selectedTime) {
      const formattedTime = selectedTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      if (timePickerFor === 'start') {
        setStartTime(formattedTime);
      } else {
        const start = new Date();
        const end = new Date();
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [endHours, endMinutes] = formattedTime.split(':').map(Number);

        start.setHours(startHours, startMinutes);
        end.setHours(endHours, endMinutes);

        if (end < start) {
          alert('End time cannot be earlier than start time!');
        } else {
          setEndTime(formattedTime);
        }
      }
    }
    setShowPicker(false);
  };

  const showTimePicker = (type: 'start' | 'end') => {
    setPickerMode('time');
    setTimePickerFor(type);
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <StackHeader title="Camp Reservations" />
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.flexView}>
            <View style={styles.titleFlex}>
              <Text style={styles.title}>Banner Image</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <GrayInfoIcon width={14} height={14} />
          </View>
          <View>
            <TextInput
              onPress={handleFileUpload}
              placeholderTextColor={colors.primary}
              placeholder={selectedFile || 'Upload a file'}
              style={styles.fileInput}
              editable={false}
            />
            {selectedFile && (
              <Text style={styles.fileName}>Selected File: {selectedFile}</Text>
            )}
          </View>

          <View style={styles.titleFlex}>
            <Text style={styles.title}>Event Name</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TextInput
            placeholderTextColor={colors.lightGrey}
            placeholder="Enter here"
            value={eventName}
            onChangeText={setEventName}
            style={styles.textInput}
          />
          <View style={styles.titleFlex}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TextInput
            placeholderTextColor={colors.lightGrey}
            placeholder="Add description"
            value={description}
            multiline
            onChangeText={setDescription}
            style={[styles.textInput, {lineHeight: 24}]}
          />
          <View style={styles.titleFlex}>
            <Text style={styles.title}>Date</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <View style={styles.selectInput}>
            <Text
              style={[
                styles.selectInputText,
                {color: startDate ? colors.primaryBlack : colors.lightGrey},
              ]}>
              {startDate || 'Select date'}
            </Text>
            <TouchableOpacity onPress={() => setOpenModel(!openModel)}>
              <PrimaryCalender />
            </TouchableOpacity>
          </View>
          <View style={styles.flexView}>
            <TouchableOpacity
              onPress={() => showTimePicker('start')}
              style={[styles.halfWidth, {marginRight: 10}]}>
              <View style={styles.titleFlex}>
                <Text style={styles.title}>Start Time</Text>
                <Text style={styles.star}>*</Text>
              </View>
              <View style={styles.selectInput}>
                <Text
                  style={[
                    styles.selectInputText,
                    {color: startTime ? colors.primaryBlack : colors.lightGrey},
                  ]}>
                  {startTime || 'Start Time'}
                </Text>
                <TouchableOpacity>
                  <ExpandMoreIcon />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => showTimePicker('end')}
              style={styles.halfWidth}>
              <View style={styles.titleFlex}>
                <Text style={styles.title}>End Time</Text>
                <Text style={styles.star}>*</Text>
              </View>
              <View style={styles.selectInput}>
                <Text
                  style={[
                    styles.selectInputText,
                    {color: endTime ? colors.primaryBlack : colors.lightGrey},
                  ]}>
                  {endTime || 'End Time'}
                </Text>
                <TouchableOpacity>
                  <ExpandMoreIcon />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.titleFlex}>
            <Text style={styles.title}>Reservation Type</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              setIsReservationDropdownOpen(!isReservationDropdownOpen)
            }
            style={styles.selectInput}>
            <Text
              style={[
                styles.selectInputText,
                {
                  color:
                    reservationselectedOption !== 'Select type'
                      ? colors.primaryBlack
                      : colors.lightGrey,
                },
              ]}>
              {reservationselectedOption || 'Select type'}
            </Text>
            <TouchableOpacity>
              <ExpandMoreIcon />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.titleFlex}>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TextInput
            placeholderTextColor={colors.lightGrey}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
            style={styles.textInput}
          />
          <View style={styles.titleFlex}>
            <Text style={styles.title}>Booking Type</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TouchableOpacity
            onPress={() => setBookingMenu(!bookingMenu)}
            style={styles.selectInput}>
            <Text
              style={[
                styles.selectInputText,
                {
                  color:
                    bookingOption !== 'Select type'
                      ? colors.primaryBlack
                      : colors.lightGrey,
                },
              ]}>
              {bookingOption || 'Select type'}
            </Text>
            <ExpandMoreIcon />
          </TouchableOpacity>

          <View style={styles.titleFlex}>
            <Text style={styles.title}>No. of Attendees</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TextInput
            placeholderTextColor={colors.lightGrey}
            placeholder="Enter attendees"
            value={attendees}
            onChangeText={setAttendees}
            style={styles.textInput}
          />
          <View style={styles.titleFlex}>
            <Text style={styles.title}>Audience</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TouchableOpacity
            onPress={() => setAudienceDropdown(!audienceDropdown)}
            style={styles.selectInput}>
            <Text
              style={[
                styles.selectInputText,
                {
                  color:
                    audienceOption !== 'Select audience'
                      ? colors.primaryBlack
                      : colors.lightGrey,
                },
              ]}>
              {audienceOption || 'Select audience'}
            </Text>
            <ExpandMoreIcon />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <RoundedButton
          disabled={
            !eventName ||
            !description ||
            !location ||
            !endTime ||
            !startTime ||
            !startDate ||
            !attendees ||
            !selectedFile ||
            !bookingOption ||
            !audienceOption
          }
          title="Save Changes"
        />
        <TouchableOpacity>
          <Text style={styles.detailBtn}>Delete</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <CalenderModel
          onClose={() => setOpenModel(false)}
          onSelectDate={handleDateSelection}
        />
      </Modal>
      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode={pickerMode}
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleTimeChange}
        />
      )}
      <Modal
        transparent={true}
        visible={isReservationDropdownOpen}
        animationType="fade"
        onRequestClose={() => setIsReservationDropdownOpen(false)}>
        <View style={styles.dropdownModel}>
          <View style={[styles.dropdownContainer, {zIndex: 1000}]}>
            <TouchableOpacity
              onPress={() => handleReservationSelect('Winter Camp')}>
              <Text style={styles.dropdownOption}>Winter Camp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleReservationSelect('Summer Camp')}>
              <Text style={styles.dropdownOption}>Summer Camp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={bookingMenu}
        animationType="fade"
        onRequestClose={() => setBookingMenu(false)}>
        <View style={styles.dropdownModel}>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={() => handleBookingSelect('Individual')}>
              <Text style={styles.dropdownOption}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBookingSelect('Group')}>
              <Text style={styles.dropdownOption}>Group</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={audienceDropdown}
        animationType="fade"
        onRequestClose={() => setAudienceDropdown(false)}>
        <View style={styles.dropdownModel}>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={() => handleAudienceSelect('Attendees')}>
              <Text style={styles.dropdownOption}>Attendees</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAudienceSelect('Children')}>
              <Text style={styles.dropdownOption}>Children</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAudienceSelect('Adults')}>
              <Text style={styles.dropdownOption}>Adults</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditEventDetailScreen;
