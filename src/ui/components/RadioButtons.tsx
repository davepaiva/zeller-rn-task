import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

export interface RadioButtonOption {
  id: string;
  label: string;
  value: string;
  isSelected: boolean;
}

interface RadioButtonsProps {
  options: Array<RadioButtonOption>;
  selectedId?: string;
  onSelect: (selectedId: string) => void;
  layout?: 'row' | 'column';
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  options,
  selectedId,
  onSelect,
  layout = 'column',
  containerStyle,
  color = '#428BCA',
  size = 18,
}) => {
  const radioButtons: RadioButtonProps[] = options.map(option => ({
    id: option.id,
    label: option.label,
    value: option.value,
    color,
    borderColor: color,
    borderSize: 1,
    size,
    containerStyle: {
      width: '100%',
      padding: 8,
      borderRadius: 8,
      backgroundColor: option.isSelected
        ? 'rgba(66, 139, 202, 0.2)'
        : 'transparent',
    },
  }));

  return (
    <RadioGroup
      radioButtons={radioButtons}
      selectedId={selectedId}
      onPress={onSelect}
      layout={layout}
      containerStyle={containerStyle}
    />
  );
};

export default RadioButtons;
