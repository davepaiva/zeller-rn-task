import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'heading' | 'subtitle';
  color?: string;
}

const Text = ({
  children,
  variant = 'body',
  style,
  color = '#000',
  ...props
}: CustomTextProps) => {
  return (
    <RNText style={[styles[variant], {color}, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 14,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
  },
});

export default Text;
