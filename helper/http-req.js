import { apiClinet } from "./apiClient";

export async function authenticated(email, password) {
  const res = await apiClinet.post(`/user/login`, { email, password });
  const data = await res.data;
  return data;
}

export async function createUser(name, email, password, confirmPassword) {
  const res = await apiClinet.post(`/user/singup`, {
    name,
    email,
    password,
    confirmPassword,
  });
  const data = await res.data;
  return data;
}

export async function getCurrentUserData(token) {
  const res = await apiClinet.get(`/user/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.data;
  return data;
}

export async function updateUserName(name, token) {
  const res = await apiClinet.patch(
    `/user/updateMe`,
    { name },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.data;
  return data;
}

export async function updateUserImage(uri, token) {
  const form = new FormData();
  form.append(`photo`, {
    name: `userImage.jpg`,
    type: "image/jpg",
    uri,
  });
  try {
    const res = await apiClinet.patch(`/user/updateMe`, form, {
      headers: {
        authorization: `Bearer ${token}`,
        Accept: "*/*",
        "Content-type": "multipart/form-data",
      },
    });
    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateUserPassword(userData, token) {
  const res = await apiClinet.patch(`/user/updatePassword`, userData, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.data;
  return data;
}
