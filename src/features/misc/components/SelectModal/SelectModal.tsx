import { useMemo, useState } from 'react';
import { Modal, ModalProps, View } from 'react-native';

import { LucideIcon } from 'lucide-react-native';

import { Button, MenuList, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';

import { selectModalStyles } from './SelectModal.styles';

export type SelectOption<TOption = string> = {
  icon?: LucideIcon;
  label: string;
  value: TOption;
  helpText?: string;
};

type SelectModalProps<TOption> = Pick<ModalProps, 'visible'> & {
  value: TOption;
  options: SelectOption<TOption>[];
  onSelect: (selectedValue: TOption) => void;
  onClose: () => void;
  footerText?: string;
};

export function SelectModal<TOption extends string>({
  onClose,
  onSelect,
  value,
  options,
  footerText,
  ...rest
}: SelectModalProps<TOption>) {
  const [selectedOption, setSelectedOption] = useState<TOption>(value);

  const hasAnyOptionWithIcon = useMemo(
    () => options.some((option) => !!option.icon),
    [options],
  );

  const { styles, theme } = useStyles(selectModalStyles);

  return (
    <Modal
      {...rest}
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerSlotLeft} />

          <Typography variant="subtitle3">Selecione um idioma</Typography>

          <View style={styles.headerSlotRight}>
            <Button
              variant="link"
              fitContent
              title="OK"
              onPress={() => onSelect(selectedOption)}
              androidRippleRadius={
                theme.measures['2xl'] + theme.measures['2xl']
              }
            />
          </View>
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
                  onPress={() => setSelectedOption(value)}
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
    </Modal>
  );
}
