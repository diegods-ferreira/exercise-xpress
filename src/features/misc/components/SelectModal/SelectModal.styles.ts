import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export const selectModalStyles = ({ hasAnyOptionWithIcon = false }) => {
  return ({ colors, measures, edgeInsets }: StylesFunctionParams) => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.background,
      },

      header: {
        backgroundColor: colors.bgOffset,
        paddingTop: edgeInsets.top + measures.lg,
        paddingBottom: measures.lg,
        paddingHorizontal: measures.xl,
        overflow: 'visible',

        flexDirection: 'row',
        alignItems: 'center',
      },

      headerSlotLeft: {
        flex: 1,
        alignItems: 'flex-start',
      },

      headerSlotRight: {
        flex: 1,
        alignItems: 'flex-end',
      },

      optionsWrapper: {
        padding: 0,
        margin: measures.xl,
        overflow: 'hidden',
      },

      option: {
        minHeight: measures['4xl'],
        paddingVertical: measures.xs,
        paddingRight: measures['3xl'],
        paddingLeft: measures.xl,
        overflow: 'visible',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: measures.xl,
      },

      optionSeparator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.ripple,
        marginLeft: hasAnyOptionWithIcon
          ? measures.xl + measures['3xl']
          : measures.xl,
      },

      optionInfo: {
        flex: 1,
        paddingLeft: hasAnyOptionWithIcon ? measures['3xl'] : 0,
        position: 'relative',

        flexDirection: 'row',
        alignItems: 'center',
      },

      optionTextWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        gap: measures.xs,
      },

      footerText: {
        marginVertical: 0,
        marginHorizontal: measures.xl,
      },
    });
  };
};
