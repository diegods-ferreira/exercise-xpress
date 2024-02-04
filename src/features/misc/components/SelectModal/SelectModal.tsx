import { useMemo, useState } from 'react';
import { FlatList, Modal, ModalProps, View } from 'react-native';

import { CheckIcon, LucideIcon } from 'lucide-react-native';

import { Button, ButtonBase, Panel, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';

import * as S from './SelectModal.styles';

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

  const { styles, theme } = useStyles(
    S.selectModalStyles({ hasAnyOptionWithIcon }),
  );

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

        <Panel style={styles.optionsWrapper}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => {
              const { icon: Icon, label, value, helpText } = item;

              return (
                <ButtonBase
                  variant="secondary"
                  style={styles.option}
                  onPress={() => setSelectedOption(value as TOption)}
                >
                  <View style={styles.optionInfo}>
                    {!!Icon && (
                      <Icon
                        size={theme.fontSizes.base}
                        color={theme.colors.textSecondary}
                        style={{
                          position: 'absolute',
                          top: !!helpText && theme.measures.xs,
                        }}
                      />
                    )}

                    <View style={styles.optionTextWrapper}>
                      <Typography>{label}</Typography>

                      {!!helpText && (
                        <Typography variant="subtitle3">{helpText}</Typography>
                      )}
                    </View>
                  </View>

                  {selectedOption === value && (
                    <CheckIcon
                      size={theme.fontSizes.xl}
                      color={theme.colors.primary}
                      style={{ position: 'absolute', right: theme.measures.xl }}
                    />
                  )}
                </ButtonBase>
              );
            }}
            ItemSeparatorComponent={() => (
              <View style={styles.optionSeparator} />
            )}
          />
        </Panel>

        {!!footerText && (
          <Typography variant="subtitle3" style={styles.footerText}>
            {footerText}
          </Typography>
        )}
      </View>
    </Modal>
  );
}
