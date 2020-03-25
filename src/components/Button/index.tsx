import React from 'react';
import Loading from '../Loading';
import {TouchableOpacity} from 'react-native';

import {ButtonContainer, ButtonText} from './styles';

interface ButtonProps {
  name: string;
  onPress(): void;
  isValid?: boolean;
  second?: boolean;
  withLoading?: boolean;
  loading?: boolean;
  fontSize?: number;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  name,
  fontSize,
  onPress,
  isValid,
  second,
  withLoading,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <ButtonContainer isValid={isValid} second={second}>
        {withLoading && loading ? (
          <Loading />
        ) : (
          <ButtonText fontSize={fontSize}>{name}</ButtonText>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
