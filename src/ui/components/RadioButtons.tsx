import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

interface RadioButtonsProps {
  options: Array<{
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
  }>;
  selectedId?: string;
  onSelect: (selectedId: string) => void;
  layout?: 'row' | 'column';
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  disabled?: boolean;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  options,
  selectedId,
  onSelect,
  layout = 'column',
  containerStyle,
  color = '#444',
  disabled = false,
}) => {
  const radioButtons: RadioButtonProps[] = options.map(option => ({
    id: option.id,
    label: option.label,
    value: option.value,
    disabled: disabled || option.disabled,
    color,
    borderColor: color,
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
