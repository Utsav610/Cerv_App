import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://43.204.219.99:8080';

export const Register = async registration => {
  const formData = new FormData();

  formData.append('email', registration.email);
  formData.append('password', registration.password);
  formData.append('name', registration.catererName);
  formData.append('role', registration.role === 'Customer' ? 1 : 0);
  formData.append('image', registration.imageUri);
  formData.append('phone_number', registration.phoneNumber);
  formData.append('country_code', registration.country_code);

  const response = await fetch(BASE_URL + '/users/register', {
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data',
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};

export const Loginn = async (email, password, role) => {
  const params = {
    email: email,
    password: password,
    role: role,
  };

  const response = await fetch(BASE_URL + '/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};

export const Logout = async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await fetch(BASE_URL + '/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + JSON.parse(token),
    },
  });
  const data = await response.json();
  return data;
};

export const ResetPassword = async params => {
  const response = await fetch(BASE_URL + '/users/forgotPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};

export const ForgotPassword = async email => {
  const response = await fetch(BASE_URL + '/users/forgotPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });
  const data = await response.json();
  return data;
};

export const verifyOTP = async (otp, phoneNumber, country_code) => {
  const params = {
    otpValue: otp,
    phone_number: phoneNumber,
    country_code: country_code,
  };

  const response = await fetch(BASE_URL + '/users/verifyOTP', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};

export const sendOTP = async (countryCode, number) => {
  const params = {
    country_code: countryCode,
    phone_number: number,
    channel: 'sms',
  };

  const response = await fetch(BASE_URL + '/users/generateOTP', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};
