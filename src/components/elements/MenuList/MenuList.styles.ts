import { StyleSheet, ViewStyle } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const menuListRootStyles = () => {
  return StyleSheet.create({
    container: {
      padding: 0,
      overflow: 'hidden',
    },
  });
};

export type MenuListItemSeparatorStylesProps = {
  addIconOffset: boolean;
};

export const menuListItemSeparatorStyles = ({
  addIconOffset,
}: MenuListItemSeparatorStylesProps) => {
  return ({ colors, measures }: StylesFunctionParams) => {
    let marginLeft: ViewStyle['marginLeft'] = measures.xl;

    if (addIconOffset) {
      marginLeft += measures['3xl'];
    }

    return StyleSheet.create({
      separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.ripple,
        marginLeft,
      },
    });
  };
};

export const menuListItemStyles = ({ measures }: StylesFunctionParams) => {
  return StyleSheet.create({
    container: {
      minHeight: measures['3xl'] + measures['3xl'],
      paddingVertical: measures.xl,
      paddingHorizontal: measures.xl,

      position: 'relative',
      overflow: 'visible',

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    leftWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: measures.xl,
    },

    rightWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: measures.xs,
    },

    textWrapper: {
      flex: 1,
      alignItems: 'flex-start',
      gap: measures.xs,
    },

    checkIndicator: {
      position: 'absolute',
      right: measures.xl,
    },
  });
};
