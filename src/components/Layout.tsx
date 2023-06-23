import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { IS_IOS } from '@/config';

type IProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: IProps) => {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={IS_IOS ? 'padding' : 'height'}
      keyboardVerticalOffset={IS_IOS ? -64 : 0}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
