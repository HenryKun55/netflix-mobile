import AsyncStorage from '@react-native-community/async-storage';

export const setStorage = async (key: string, value: object) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = async (key: string) => {
  const value = await AsyncStorage.getItem(key);
  return value && JSON.parse(value);
};

export const removeStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
  return true;
};
