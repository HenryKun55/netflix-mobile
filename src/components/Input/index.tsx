import React, {useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import * as Yup from 'yup';
import {width} from '../../config';

import {TextField} from 'react-native-material-textfield';

import {ButtonContainer, ButtonText} from './styles';
import { IUser } from '../../types/IUser';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail não é válido')
    .required('E-mail obrigatório')
    .trim(),
  password: Yup.string()
    .min(6, 'Mínimo 6 dígitos ')
    .required('Senha Obrigatória'),
});

interface FormProps {
  auth(user: IUser): void;
}

const Form: React.FC<FormProps> = ({auth}) => {
  const email = useRef<TextField>(null);
  const password = useRef<TextField>(null);

  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      onSubmit={values => auth({...values})}
      validationSchema={validationSchema}>
      {({handleChange, handleSubmit, handleBlur, values, errors, isValid}) => (
        <View style={{width: width * 0.7}}>
          <TextField
            ref={email}
            label="Email"
            autoCapitalize="none"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            baseColor="#ddd"
            textColor="#ddd"
            tintColor="#ddd"
            error={errors.email}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              password.current?.focus();
            }}
          />
          <TextField
            ref={password}
            label="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            baseColor="#ddd"
            textColor="#ddd"
            tintColor="#ddd"
            secureTextEntry
            error={errors.password}
          />
          <TouchableOpacity onPress={() => handleSubmit()} disabled={!isValid}>
            <ButtonContainer style={{opacity: !isValid ? 0.7 : 1}}>
              <ButtonText>Entrar</ButtonText>
            </ButtonContainer>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Form;
