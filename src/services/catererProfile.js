import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://43.204.219.99:8080';

const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  console.log(token);
  return JSON.parse(token);
};

export const CatererProfileData = async () => {
  const response = await fetch(BASE_URL + '/caterer/getProfile', {
    headers: {
      Authorization: 'Bearer ' + (await getToken()),
    },
  });
  const data = await response.json();

  return data.data;
};

export const UpdateCatererProfile = async name => {
  try {
    const data = {
      name,
    };
    const response = await fetch(BASE_URL + '/edit-profile', {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + (await getToken()),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (response.ok) {
      return true;
    } else {
      console.error('Failed to update profile');
      return false;
    }
  } catch (error) {
    console.error('Error while updating profile:', error);
    throw error;
  }
};

// export const FetchCard = async () => {
//   const response = await fetch(BASE_URL + '/getCards', {
//     headers: {
//       Authorization: 'Bearer ' + (await getToken()),
//     },
//   });
//   const data = await response.json();

//   return data.message.data;
// };

// export const AddCard = async (cardNumber, cvv, name, fdate) => {
//   const params = {
//     number: cardNumber,
//     expire: fdate,
//     cvc: cvv,
//     name: name,
//   };

//   const response = await fetch(BASE_URL + '/addCard', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + (await getToken()),
//     },
//     body: JSON.stringify(params),
//   });
//   const data = await response.json();
//   return data;
// };

// export const ChangePassword = async (password, newPassword) => {
//   const params = {
//     currentPassword: password,
//     newPassword: newPassword,
//   };

//   const response = await fetch(BASE_URL + '/users/changePassword', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + (await getToken()),
//     },
//     body: JSON.stringify(params),
//   });
//   const data = await response.json();
//   return data;
// };
