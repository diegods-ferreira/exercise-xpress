import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

import { ButtonBase, Panel, Typography } from '@/components/elements';

import { SelectOption } from './SelectModal';

export const Container = styled.View(
  ({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `,
);

export const Header = styled.View(
  ({ theme }) => css`
    background-color: ${theme.colors.bgOffset};
    padding: ${theme.measures.lg}px ${theme.measures.xl}px;
    overflow: visible;

    flex-direction: row;
    align-items: center;
  `,
);

type HeaderSlotProps = {
  contentPosition: 'start' | 'end';
};

export const HeaderSlot = styled.View<HeaderSlotProps>(
  ({ contentPosition }) => css`
    flex: 1;
    align-items: flex-${contentPosition};
  `,
);

export const OptionsList = styled(
  FlatList as new (
    props: FlatListProps<SelectOption>,
  ) => FlatList<SelectOption>,
)``;

export const OptionsWrapper = styled(Panel)(
  ({ theme }) => css`
    padding: 0px;
    margin: ${theme.measures.xl}px;
    overflow: hidden;
  `,
);

export const Option = styled(ButtonBase).attrs({
  variant: 'secondary',
})(
  ({ theme }) => css`
    height: ${RFValue(40)}px;
    padding: ${theme.measures.xs}px ${theme.measures.xl}px;
    overflow: visible;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
);

type IconOffsetProps = {
  addIconOffset: boolean;
};

export const OptionSeparator = styled.View<IconOffsetProps>(
  ({ theme, addIconOffset }) => css`
    width: 100%;
    height: ${RFValue(1)}px;
    background-color: ${theme.colors.ripple};
    margin-left: ${(addIconOffset ? theme.measures['3xl'] : 0) +
    theme.measures.xl}px;
  `,
);

export const OptionInfo = styled.View<IconOffsetProps>(
  ({ theme, addIconOffset }) => css`
    padding-left: ${addIconOffset ? theme.measures['3xl'] : 0}px;
    position: relative;

    flex-direction: row;
    align-items: center;
  `,
);

export const OptionValueWrapper = styled.View(
  ({ theme }) => css`
    flex-direction: row;
    align-items: center;
    gap: ${theme.measures.xs}px;
  `,
);

export const FooterText = styled(Typography).attrs({
  variant: 'subtitle3',
})(
  ({ theme }) => css`
    margin: 0px ${theme.measures.xl}px;
  `,
);
