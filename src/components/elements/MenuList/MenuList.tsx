import { PropsWithChildren } from 'react';
import { FlatList, View, ViewProps } from 'react-native';

import { CheckIcon, ChevronRightIcon, LucideIcon } from 'lucide-react-native';

import { useStyles } from '@/hooks';

import { ButtonBase } from '../Button/Button';
import { Panel } from '../Panel/Panel';
import { Switch } from '../Switch/Switch';
import { Typography } from '../Typography/Typography';
import {
  MenuListItemSeparatorStylesProps,
  menuListRootStyles,
  menuListItemSeparatorStyles,
  menuListItemStyles,
} from './MenuList.styles';

function MenuListRoot({
  style,
  children,
}: PropsWithChildren<Pick<ViewProps, 'style'>>) {
  const { styles } = useStyles(menuListRootStyles);

  return <Panel style={[styles.container, style]}>{children}</Panel>;
}

type MenuListItemSeparatorProps = Partial<MenuListItemSeparatorStylesProps>;

function MenuListItemSeparator({
  addIconOffset = false,
}: MenuListItemSeparatorProps) {
  const { styles } = useStyles(menuListItemSeparatorStyles({ addIconOffset }));

  return <View style={styles.separator} />;
}

type MenuListItemProps = {
  icon?: LucideIcon;
  title: string;
  helpText?: string;
  value?: string;
  onPress: () => void;
};

function MenuListItem({
  icon: Icon,
  title,
  helpText,
  value,
  onPress,
}: MenuListItemProps) {
  const { styles, theme } = useStyles(menuListItemStyles);

  return (
    <ButtonBase variant="secondary" style={styles.container} onPress={onPress}>
      <View style={styles.leftWrapper}>
        {!!Icon && (
          <Icon
            size={theme.fontSizes.base}
            color={theme.colors.textSecondary}
          />
        )}

        <View style={styles.textWrapper}>
          <Typography>{title}</Typography>

          {!!helpText && (
            <Typography variant="subtitle3">{helpText}</Typography>
          )}
        </View>
      </View>

      <View style={styles.rightWrapper}>
        {!!value && <Typography variant="subtitle1">{value}</Typography>}

        <ChevronRightIcon
          size={theme.fontSizes.xl}
          color={theme.colors.textSecondary}
          opacity={0.75}
        />
      </View>
    </ButtonBase>
  );
}

type MenuListItemCheckboxProps = {
  icon?: LucideIcon;
  label: string;
  helpText?: string;
  isSelected?: boolean;
  onPress: () => void;
};

function MenuListItemCheckbox({
  icon: Icon,
  label,
  helpText,
  isSelected,
  onPress,
}: MenuListItemCheckboxProps) {
  const { styles, theme } = useStyles(menuListItemStyles);

  return (
    <ButtonBase variant="secondary" style={styles.container} onPress={onPress}>
      <View style={styles.leftWrapper}>
        {!!Icon && (
          <Icon
            size={theme.fontSizes.base}
            color={theme.colors.textSecondary}
          />
        )}

        <View style={styles.textWrapper}>
          <Typography>{label}</Typography>

          {!!helpText && (
            <Typography variant="subtitle3">{helpText}</Typography>
          )}
        </View>
      </View>

      {isSelected && (
        <CheckIcon
          size={theme.fontSizes.xl}
          color={theme.colors.primary}
          style={styles.checkIndicator}
        />
      )}
    </ButtonBase>
  );
}

type MenuListItemSwitchProps = {
  icon?: LucideIcon;
  title: string;
  helpText?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  onPress: () => void;
};

function MenuListItemSwitch({
  icon: Icon,
  title,
  helpText,
  value,
  onValueChange,
  onPress,
}: MenuListItemSwitchProps) {
  const { styles, theme } = useStyles(menuListItemStyles);

  return (
    <ButtonBase variant="secondary" style={styles.container} onPress={onPress}>
      <View style={styles.leftWrapper}>
        {!!Icon && (
          <Icon
            size={theme.fontSizes.base}
            color={theme.colors.textSecondary}
          />
        )}

        <View style={styles.textWrapper}>
          <Typography>{title}</Typography>

          {!!helpText && (
            <Typography variant="subtitle3">{helpText}</Typography>
          )}
        </View>
      </View>

      <Switch value={value} onValueChange={onValueChange} />
    </ButtonBase>
  );
}

export const MenuList = {
  Root: MenuListRoot,
  List: FlatList,
  ItemSeparator: MenuListItemSeparator,
  Item: MenuListItem,
  ItemCheckbox: MenuListItemCheckbox,
  ItemSwitch: MenuListItemSwitch,
};
