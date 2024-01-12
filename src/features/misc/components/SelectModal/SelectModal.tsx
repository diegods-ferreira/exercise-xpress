import { useMemo, useState } from 'react';
import { Modal, ModalProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CheckIcon, LucideIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { Button, Typography } from '@/components/elements';

import * as S from './SelectModal.styles';

export type SelectOption<TOption = string> = {
  icon?: LucideIcon;
  label: string;
  value: TOption;
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
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [selectedOption, setSelectedOption] = useState<TOption>(value);

  const hasAnyOptionWithIcon = useMemo(
    () => options.some((option) => !!option.icon),
    [options],
  );

  return (
    <Modal
      {...rest}
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <S.Container>
        <S.Header style={{ paddingTop: insets.top + theme.measures.lg }}>
          <S.HeaderSlot contentPosition="start" />

          <Typography variant="subtitle3">Selecione um idioma</Typography>

          <S.HeaderSlot contentPosition="end">
            <Button
              variant="link"
              fitContent
              title="OK"
              onPress={() => onSelect(selectedOption)}
              androidRippleRadius={
                theme.measures['2xl'] + theme.measures['2xl']
              }
            />
          </S.HeaderSlot>
        </S.Header>

        <S.OptionsWrapper>
          <S.OptionsList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => {
              const { icon: Icon, label, value } = item;

              return (
                <S.Option onPress={() => setSelectedOption(value as TOption)}>
                  <S.OptionInfo addIconOffset={hasAnyOptionWithIcon}>
                    {!!Icon && (
                      <Icon
                        size={theme.fontSizes.base}
                        color={theme.colors.textSecondary}
                        style={{
                          position: 'absolute',
                        }}
                      />
                    )}

                    <Typography>{label}</Typography>
                  </S.OptionInfo>

                  {selectedOption === value && (
                    <CheckIcon
                      size={theme.fontSizes.xl}
                      color={theme.colors.primary}
                    />
                  )}
                </S.Option>
              );
            }}
            ItemSeparatorComponent={() => (
              <S.OptionSeparator addIconOffset={hasAnyOptionWithIcon} />
            )}
          />
        </S.OptionsWrapper>

        {!!footerText && <S.FooterText>{footerText}</S.FooterText>}
      </S.Container>
    </Modal>
  );
}
