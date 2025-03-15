import {Pressable, View} from 'react-native';

function MockRadioButtonsGroup({
  radioButtons,
  onPress,
}: {
  radioButtons: any;
  onPress: any;
  selectedId?: any;
}) {
  return (
    <View testID="radio-group">
      {radioButtons.map((button: any) => (
        <Pressable
          key={button.id}
          onPress={() => onPress(button.id)}
          testID={`radio-button-${button.id}`}>
          {button.label}
        </Pressable>
      ))}
    </View>
  );
}

export default MockRadioButtonsGroup;
