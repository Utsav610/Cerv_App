const BASE_URL = 'http://43.204.219.99:8080';

export const Register = async params => {
  const response = await fetch(BASE_URL + '/users/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
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

export const Logout = async params => {
  const response = await fetch(BASE_URL + `/users/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
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

export const ChangePassword = async params => {
  const response = await fetch(BASE_URL + '/users/changePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};

export const sendForgotPasswordOTP = async params => {
  const response = await fetch(BASE_URL + 'forgot-password-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
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
