import * as React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  useColorScheme,
} from 'react-native';
 
import Colors from '../static/theme/theme';
 
/**
 * 自定义hook
 * @param props
 * @param colorName
 */
export function useThemeColor(props:any, colorName:any) {
  const theme = useColorScheme();
  const colorFromProps = props[theme || "light"];
 
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme|| "light"][colorName];
  }
}
 
/**
 * 自定义Text组件，使其自动适配暗黑模式
 * @param props 参数
 * @returns {*}
 * @constructor
 */
export function Text(props:any) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  //使用hook获取当前的主题颜色
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');
  //设置前景色
  return <DefaultText style={[{color}, style]} {...otherProps} />;
}
 
export function View(props:any) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );
 
  //设置背景色
  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}