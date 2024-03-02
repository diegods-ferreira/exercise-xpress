import { PropsWithChildren } from 'react';
import { FlatList, StyleProp, View, ViewProps, ViewStyle } from 'react-native';

import {
  CheckCircle2Icon,
  ChevronRightIcon,
  LucideIcon,
} from 'lucide-react-native';

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
  menuListItemBaseStyles,
  menuListItemCheckboxStyles,
  menuListItemSwitchStyles,
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

type MenuListItemBaseProps = {
  icon?: LucideIcon;
  title: string;
  helpText?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

function MenuListItemBase({
  icon: Icon,
  title,
  helpText,
  onPress,
  style,
  children,
}: PropsWithChildren<MenuListItemBaseProps>) {
  const { styles, theme } = useStyles(menuListItemBaseStyles);

  return (
    <ButtonBase
      variant="neutral"
      style={[styles.container, style]}
      onPress={onPress}
    >
      <View style={styles.leftWrapper}>
        {!!Icon && (
          <Icon
            size={theme.fontSizes.xl}
            color={theme.colors.textSecondary}
            strokeWidth={1}
          />
        )}

        <View style={styles.textWrapper}>
          <Typography>{title}</Typography>

          {!!helpText && (
            <Typography variant="subtitle3">{helpText}</Typography>
          )}
        </View>
      </View>

      {children}
    </ButtonBase>
  );
}

type MenuListItemProps = MenuListItemBaseProps & {
  value?: string;
};

function MenuListItem({ value, ...rest }: MenuListItemProps) {
  const { styles, theme } = useStyles(menuListItemStyles);

  return (
    <MenuListItemBase {...rest}>
      <View style={styles.rightWrapper}>
        {!!value && <Typography variant="subtitle3">{value}</Typography>}

        <ChevronRightIcon
          size={theme.fontSizes.xl}
          color={theme.colors.textSecondary}
          opacity={0.75}
        />
      </View>
    </MenuListItemBase>
  );
}

type MenuListItemCheckboxProps = Omit<
  MenuListItemBaseProps,
  'title' | 'style'
> & {
  label: string;
  isSelected?: boolean;
};

function MenuListItemCheckbox({
  label,
  isSelected,
  ...rest
}: MenuListItemCheckboxProps) {
  const { styles, theme } = useStyles(menuListItemCheckboxStyles);

  return (
    <MenuListItemBase {...rest} title={label} style={styles.indicatorOffset}>
      {isSelected && (
        <CheckCircle2Icon
          size={theme.fontSizes['2xl']}
          color={theme.colors.secondary}
          style={styles.checkIndicator}
        />
      )}
    </MenuListItemBase>
  );
}

type MenuListItemSwitchProps = MenuListItemBaseProps & {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

function MenuListItemSwitch({
  value,
  onValueChange,
  ...rest
}: MenuListItemSwitchProps) {
  const { styles } = useStyles(menuListItemSwitchStyles);

  return (
    <MenuListItemBase {...rest}>
      <View style={styles.switchWrapper}>
        <Switch value={value} onValueChange={onValueChange} />
      </View>
    </MenuListItemBase>
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
