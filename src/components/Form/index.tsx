import React, {useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import Loading from '../Loading';

import * as Yup from 'yup';
import {width} from '../../config';

import {TextField} from 'react-native-material-textfield';

import {ButtonContainer, ButtonText} from './styles';
import { IUser } from '../../types/IUser';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Mínimo 6 letras ')
    .required('Nome obrigatório')
    .trim(),
  email: Yup.string()
    .email('E-mail não é válido')
    .required('E-mail obrigatório')
    .trim(),
  password: Yup.string()
    .min(6, 'Mínimo 6 dígitos ')
    .required('Senha Obrigatória'),
});

interface FormProps {
  state: string;
  loading: boolean;
  auth(user: IUser): void;
  store(user: IUser): void;
  handleState(state: string): void;
}

const Form: React.FC<FormProps> = ({auth, store, state, loading, handleState}) => {

  const name = useRef<TextField>(null);
  const email = useRef<TextField>(null);
  const password = useRef<TextField>(null);

  const removeTrim = (values: any) => {
    return Object.keys(values).forEach(function(key) {
      values[key] = values[key].trim();
    });
  }

  const handleAuth = (user: IUser) => {
    removeTrim(user);
    auth({...user})
  }
  
  const handleStore = (user: IUser) => {
    removeTrim(user);
    store({...user})
  }

  const checkState = () => {
    return state === 'signup'
  }

  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      onSubmit={(values) => checkState() ? handleStore(values) : handleAuth(values)}
      validationSchema={validationSchema}>
      {({handleChange, handleSubmit, handleBlur, values, errors, isValid}) => (
        <View pointerEvents={loading ? 'none' : 'auto'} style={{width: width * 0.7}}>
          
          {checkState() && (
            <TextField
              ref={name}
              label="Nome"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              baseColor="#ddd"
              textColor="#ddd"
              tintColor="#ddd"
              error={errors.name}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                email.current?.focus();
              }}
            />
            )
          }
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
            <ButtonContainer isValid={!isValid}>
              {loading ? (
                <Loading />
              ) : (
                <ButtonText>{checkState() ? 'Criar' : 'Entrar'}</ButtonText>
              )}
            </ButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => checkState() ? handleState('signin') : handleState('signup')}>
            <ButtonContainer isValid={isValid} second >
            {loading ? (
                <Loading />
              ) : (
                <ButtonText>{checkState() ? 'Fazer Login' : 'Criar Conta'}</ButtonText>
              )}
            </ButtonContainer>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Form;
