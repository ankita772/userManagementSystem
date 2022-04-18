const createUser = async (val) => {
  let fetchData = {
    method: "POST",
    body: JSON.stringify({
      username: val.username,
      mobile: val.mobile,
      email: val.email,
      password: val.password,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  const res = await fetch("http://localhost:5000/create-user", fetchData);
  const data = await res.json();
  return data;
};
const loginUser = async (val) => {
  let fetchData = {
    method: "POST",
    body: JSON.stringify({
      email: val.email,
      password: val.password,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  const res = await fetch("http://localhost:5000/login-user", fetchData);
  const data = await res.json();
  return data;
};

const getAllUser = async () => {
  const res = await fetch("http://localhost:5000/get-all-user");
  const data = await res.json();
  return data;
};

// const getUser = async (userId) => {
//   let fetchData = {
//     method: "POST",
//     body: JSON.stringify({
//       id: userId,
//     }),
//     headers: new Headers({
//       "Content-Type": "application/json",
//     }),
//   };
//   const res = await fetch("http://localhost:5000/get-user", fetchData);
//   const data = await res.json();
//   return data;
// };

const updateUser = async (userId, username, mobile) => {
  let fetchData = {
    method: "POST",
    body: JSON.stringify({
      id: userId,
      username: username,
      mobile: mobile,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  const res = await fetch("http://localhost:5000/update-user", fetchData);
  const data = await res.json();
  return data;
};

const deleteUser = async (userId) => {
  let fetchData = {
    method: "POST",
    body: JSON.stringify({
      id: userId,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  const res = await fetch("http://localhost:5000/delete-user", fetchData);
  const data = await res.json();
  return data;
};

export { createUser, getAllUser, updateUser, deleteUser, loginUser };
