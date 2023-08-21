const BASE_URL = 'http://43.204.219.99:8080';
console.log(BASE_URL, 'BASE_URL');
export default {
  // RefreshToken: () => {
  //     return fetch(BASE_URL + 'refreshToken', {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'User-Agent': Constants.USER_AGENT,
  //             accesskey: 'nousername',
  //         },
  //     })
  //         .then((response) => Ajax.handleResponse(response))
  //         .then((data) => {
  //             if (data.status != 200) {
  //                 return Promise.reject(data);
  //             }
  //             return data;
  //         });
  // },
  Register: async params => {
    const response = await fetch(BASE_URL + '/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },

  Login: async ({params}) => {
    const response = await fetch(BASE_URL + '/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },

  Logout: async params => {
    const response = await fetch(BASE_URL + `/users/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },

  ResetPassword: async params => {
    const response = await fetch(BASE_URL + '/users/forgotPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },

  ChangePassword: async params => {
    const response = await fetch(BASE_URL + '/users/changePassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },

  sendForgotPasswordOTP: async params => {
    const response = await fetch(BASE_URL + 'forgot-password-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },

  verifyOTP: async params => {
    const response = await fetch(BASE_URL + '/users/verifyOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },

  sendOTP: async params => {
    const response = await fetch(BASE_URL + '/users/verifyOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },
};
