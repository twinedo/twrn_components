import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { TButtonProps } from './button.type'
import { styles } from './button.style';


export default function Button(props: TButtonProps & TouchableOpacity) {
  const {style, text = 'Button', textStyle, backgroundColor = 'red', borderRadius = 8, loading, children, prefix, postfix} = props;
  return (
    <TouchableOpacity style={[style, styles.container, {backgroundColor, borderRadius}]} {...props}>
      {prefix && (
        <View>
          {prefix}
        </View>
      )}
      {loading && (
        <ActivityIndicator size="large" />
      )}
      {typeof children === 'string' && !loading && (
        <Text style={[styles.textWhite, textStyle]}>{text}</Text>
      )}
      {postfix && (
        <View>
          {postfix}
        </View>
      )}
    </TouchableOpacity>
  )
}