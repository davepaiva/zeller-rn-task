import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'heading' | 'subtitle';
}

export const Text = ({
  children,
  variant = 'body',
  style,
  ...props
}: CustomTextProps) => {
  return (
    <RNText style={[styles[variant], style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
    color: '#666',
  },
});
