import { FlatList, FlatListProps } from 'react-native';

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
    min-height: ${theme.measures['4xl']}px;
    padding: ${theme.measures.xs}px ${theme.measures['3xl']}px
      ${theme.measures.xs}px ${theme.measures.xl}px;
    overflow: visible;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.measures.xl}px;
  `,
);

type IconOffsetProps = {
  addIconOffset: boolean;
};

export const OptionSeparator = styled.View<IconOffsetProps>(
  ({ theme, addIconOffset }) => {
    let marginLeft = theme.measures.xl;

    if (addIconOffset) {
      marginLeft += theme.measures['3xl'];
    }

    return css`
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.ripple};
      margin-left: ${marginLeft}px;
    `;
  },
);

export const OptionInfo = styled.View<IconOffsetProps>(
  ({ theme, addIconOffset }) => css`
    flex: 1;
    padding-left: ${addIconOffset ? theme.measures['3xl'] : 0}px;
    position: relative;

    flex-direction: row;
    align-items: center;
  `,
);

export const OptionTextWrapper = styled.View(
  ({ theme }) => css`
    flex: 1;
    align-items: flex-start;
    gap: ${theme.measures.xs}px;
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
