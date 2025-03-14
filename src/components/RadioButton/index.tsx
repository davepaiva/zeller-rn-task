import theme from '@styles/theme';
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
}

export const getRadioButtonStyle = (isSelected: boolean) => {
  return {
    width: '100%' as const,
    padding: 8,
    borderRadius: 8,
    backgroundColor: isSelected ? theme.colors.accent : 'transparent',
  };
};
const RadioButtons: React.FC<RadioButtonsProps> = ({
  options,
  selectedId,
  onSelect,
  layout = 'column',
  containerStyle,
}) => {
  const radioButtons: RadioButtonProps[] = options.map(option => ({
    id: option.id,
    label: option.label,
    value: option.value,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderSize: 1,
    size: 18,
    containerStyle: getRadioButtonStyle(option.isSelected),
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
