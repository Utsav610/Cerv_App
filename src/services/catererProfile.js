import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://43.204.219.99:8080';

const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  console.log(token);
  return JSON.parse(token);
};

export const CatererProfileData = async id => {
  const response = await fetch(BASE_URL + `/catererInfo/${id}`, {
    headers: {
      Authorization: 'Bearer ' + (await getToken()),
    },
  });
  const data = await response.json();

  return data.caterer;
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
export const getCoupons = async () => {
  const response = await fetch(BASE_URL + '/caterer/getCoupons', {
    headers: {
      Authorization: 'Bearer ' + (await getToken()),
    },
  });
  const data = await response.json();

  return data.data;
};

export const CreateCoupon = async (
  title,
  description,
  couponCode,
  selectedDate,
  active,
) => {
  const params = {
    title: title,
    description: description,
    code: couponCode,
    is_percent: true,
    value: 40,
    expiry: selectedDate,
    is_active: active === 'Yes' ? true : false,
  };

  const response = await fetch(BASE_URL + '/caterer/addCoupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (await getToken()),
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};

export const DeleteCoupon = async id => {
  const params = {
    couponId: 1,
  };

  const response = await fetch(BASE_URL + '/caterer/deleteCoupon', {
    method: 'DEL',
    headers: {
      Authorization: 'Bearer ' + (await getToken()),
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();
  return data;
};
