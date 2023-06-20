import React from 'react';
import { Icon as RNEIcon, IconProps } from '@rneui/base';

interface IStyledIconProps extends IconProps {
  className?: string;
}
export const Icon = ({ style, ...rest }: IStyledIconProps) => (
  <RNEIcon style={style} {...rest} />
);
