import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Switch, Modal} from 'react-native';
import {styles} from './style';
import RoundedButton from '../../common/roundedButton';
import CheckboxItem from '../../common/checkboxItem';
import {colors} from '../../../../res/themes';
import {PrimaryCalender} from '../../../../res/assets/images/svgs';
import CalenderModel from '../CalenderModel';

const MyTasksFilterModel = ({onClose}: any) => {
  const [allDepartments, setAllDepartments] = useState(false);
  const [finance, setFinance] = useState(false);
  const [procurement, setProcurement] = useState(false);
  const [talentCulture, setTalentCulture] = useState(false);
  const [it, setIt] = useState(false);
  const [marketingCommunication, setMarketingCommunication] = useState(false);

  const [openModel, setOpenModel] = useState(false);
  const [isDateEnabled, setIsDateEnabled] = useState(false);
  const [isDepartmentEnabled, setIsDepartmentEnabled] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isStartDate, setIsStartDate] = useState(true);

  const onDateToggle = () => setIsDateEnabled(prev => !prev);
  const onDepartmentToggle = () => setIsDepartmentEnabled(prev => !prev);

  const handleCheckboxChange = (type: string) => {
    switch (type) {
      case 'allDepartments':
        setAllDepartments(!allDepartments);
        break;
      case 'finance':
        setFinance(!finance);
        break;
      case 'procurement':
        setProcurement(!procurement);
        break;
      case 'talentCulture':
        setTalentCulture(!talentCulture);
        break;
      case 'it':
        setIt(!it);
        break;
      case 'marketingCommunication':
        setMarketingCommunication(!marketingCommunication);
        break;
    }
  };

  const handleDateSelection = (date: string) => {
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    setOpenModel(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>Filters</Text>

        <View style={styles.flexbetween}>
          <Text style={styles.sectionTitle}>Date</Text>
          <Switch
            trackColor={{false: colors.background, true: colors.primary}}
            thumbColor={isDateEnabled ? colors.white : colors.white}
            onValueChange={onDateToggle}
            value={isDateEnabled}
          />
        </View>

        {isDateEnabled && (
          <View>
            <View>
              <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
                Start Date
              </Text>
              <View style={styles.dateInputContainer}>
                <Text
                  style={[
                    styles.dateText,
                    {color: startDate ? colors.primaryBlack : colors.lightGrey},
                  ]}>
                  {startDate || 'Select Start Date'}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsStartDate(true);
                    setOpenModel(true);
                  }}>
                  <PrimaryCalender />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
                End Date
              </Text>
              <View style={styles.dateInputContainer}>
                <Text
                  style={[
                    styles.dateText,
                    {color: endDate ? colors.primaryBlack : colors.lightGrey},
                  ]}>
                  {endDate || 'Select End Date'}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsStartDate(false);
                    setOpenModel(true);
                  }}>
                  <PrimaryCalender />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <View style={styles.flexbetween}>
          <Text style={styles.sectionTitle}>Department</Text>
          <Switch
            trackColor={{false: colors.background, true: colors.primary}}
            thumbColor={isDepartmentEnabled ? colors.white : colors.white}
            onValueChange={onDepartmentToggle}
            value={isDepartmentEnabled}
          />
        </View>

        {isDepartmentEnabled && (
          <View>
            <CheckboxItem
              label="All Departments"
              isChecked={allDepartments}
              onPress={() => handleCheckboxChange('allDepartments')}
            />
            <CheckboxItem
              label="Finance"
              isChecked={finance}
              onPress={() => handleCheckboxChange('finance')}
            />
            <CheckboxItem
              label="Procurement"
              isChecked={procurement}
              onPress={() => handleCheckboxChange('procurement')}
            />
            <CheckboxItem
              label="Talent & Culture"
              isChecked={talentCulture}
              onPress={() => handleCheckboxChange('talentCulture')}
            />
            <CheckboxItem
              label="Information Technology"
              isChecked={it}
              onPress={() => handleCheckboxChange('it')}
            />
            <CheckboxItem
              label="Marketing & Communication"
              isChecked={marketingCommunication}
              onPress={() => handleCheckboxChange('marketingCommunication')}
            />
          </View>
        )}

        <RoundedButton
          title="Apply"
          disabled={!isDateEnabled || !isDepartmentEnabled}
        />

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
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
    </View>
  );
};

export default MyTasksFilterModel;
