import {Pressable, PressableProps} from 'react-native';
import React from 'react';
import {TCardProps} from './card.type';
import {TWColors, TWStyles} from 'twrn_styles';
import {styles} from './card.style';

const Card = (props: TCardProps & PressableProps) => {
  const {
    children,
    containerStyle,
    borderRadius = 8,
    backgroundColor = TWColors.WHITE,
  } = props;
  return (
    <Pressable
      style={[
        TWStyles.verticalDefaultPadding,
        TWStyles.horizontalDefaultPadding,
        styles.container,
        containerStyle,
        {borderRadius, backgroundColor},
      ]}
      {...props}>
      {children}
    </Pressable>
  );
};

export default Card;
