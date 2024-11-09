import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import RoundedButton from '../../common/roundedButton';
import CheckboxItem from '../../common/checkboxItem';

const ActionsFilter = ({onClose}: any) => {
  const [allActions, setAllActions] = useState(false);
  const [leaves, setLeaves] = useState(false);
  const [permissions, setPermissions] = useState(false);
  const [surveys, setSurveys] = useState(false);
  const [services, setServices] = useState(false);

  const handleCheckboxChange = (type: string) => {
    switch (type) {
      case 'allActions':
        setAllActions(!allActions);
        break;
      case 'leaves':
        setLeaves(!leaves);
        break;
      case 'permissions':
        setPermissions(!permissions);
        break;
      case 'surveys':
        setSurveys(!surveys);
        break;
      case 'services':
        setServices(!services);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>Filters</Text>

        <CheckboxItem
          label="All Actions"
          isChecked={allActions}
          onPress={() => handleCheckboxChange('allActions')}
        />
        <CheckboxItem
          label="Leaves"
          isChecked={leaves}
          onPress={() => handleCheckboxChange('leaves')}
        />
        <CheckboxItem
          label="Permissions"
          isChecked={permissions}
          onPress={() => handleCheckboxChange('permissions')}
        />
        <CheckboxItem
          label="Surveys"
          isChecked={surveys}
          onPress={() => handleCheckboxChange('surveys')}
        />
        <CheckboxItem
          label="Services"
          isChecked={services}
          onPress={() => handleCheckboxChange('services')}
        />

        <RoundedButton title="Apply" />
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionsFilter;
