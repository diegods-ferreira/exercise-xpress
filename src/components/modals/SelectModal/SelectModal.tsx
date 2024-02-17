import { forwardRef, useMemo } from 'react';
import { View } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { LucideIcon } from 'lucide-react-native';

import {
  BottomSheetModalBlurBackdrop,
  MenuList,
  Typography,
} from '@/components/elements';
import { useStyles } from '@/hooks';

import { selectModalStyles } from './SelectModal.styles';

export type SelectOption<TOption = string> = {
  icon?: LucideIcon;
  label: string;
  value: TOption;
  helpText?: string;
};

type SelectModalProps<TOption> = {
  title: string;
  selectedOption: TOption;
  options: SelectOption<TOption>[];
  onSelect: (selectedValue: TOption) => void;
  onDismiss?: () => void;
  footerText?: string;
};

function SelectModalBase<TOption extends string>(
  {
    title,
    onSelect,
    onDismiss,
    selectedOption,
    options,
    footerText,
  }: SelectModalProps<TOption>,
  ref: React.ForwardedRef<BottomSheetModalMethods>,
) {
  const { styles, edgeInsets } = useStyles(selectModalStyles);

  const hasAnyOptionWithIcon = useMemo(
    () => options.some((option) => !!option.icon),
    [options],
  );

  const snapPoints = useMemo(() => ['50%', '100%'], []);

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      onDismiss={onDismiss}
      backgroundStyle={styles.bottomSheetBackground}
      handleStyle={styles.bottomSheetHandle}
      handleIndicatorStyle={styles.bottomSheetHandleIndicator}
      backdropComponent={BottomSheetModalBlurBackdrop}
      topInset={edgeInsets.top}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Typography variant="subtitle2">{title}</Typography>
        </View>

        <MenuList.Root style={styles.menuList}>
          <MenuList.List
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => {
              const { icon, label, value, helpText } = item;

              return (
                <MenuList.ItemCheckbox
                  icon={icon}
                  label={label}
                  helpText={helpText}
                  onPress={() => onSelect(value)}
                  isSelected={selectedOption === value}
                />
              );
            }}
            ItemSeparatorComponent={() => (
              <MenuList.ItemSeparator addIconOffset={hasAnyOptionWithIcon} />
            )}
          />
        </MenuList.Root>

        {!!footerText && (
          <Typography variant="subtitle3" style={styles.footerText}>
            {footerText}
          </Typography>
        )}
      </View>
    </BottomSheetModal>
  );
}

export const SelectModal = forwardRef(SelectModalBase) as <
  TOption extends string,
>(
  // eslint-disable-next-line no-use-before-define
  props: SelectModalProps<TOption> & {
    ref?: React.ForwardedRef<BottomSheetModalMethods>;
  },
) => ReturnType<typeof SelectModalBase>;
