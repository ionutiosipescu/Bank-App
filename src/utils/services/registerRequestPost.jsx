// import { useSelector } from "react-redux";
// import { selectRegisterUser } from "../../state-management/registerUser/registerUser.selector";
// import { selectRegisterPlan } from "../../state-management/registerUser/registerUser.selector";

// const userProfile = useSelector(selectRegisterUser);
// const userPlan = useSelector(selectRegisterPlan);
// const {
//   firstname,
//   lastname,
//   country,
//   address,
//   age,
//   gender,
//   email,
//   displayName,
//   mobile,
//   password,
//   confirmPassword,
//   createdAt,
// } = userProfile;
// const cleaProfile = {
//   firstname: firstname,
//   lastname: lastname,
//   country: country,
//   address: address,
//   age: age,
//   gender: gender,
//   email: email,
//   displayName: displayName,
//   mobile: mobile,
//   password: password,
//   confirmPassword: confirmPassword,
//   createdAt: createdAt,
// };
// const finalObject = {
//   userProfile: { ...cleaProfile },
//   userPlan: [...userPlan],
// };

// export const test = () => {
//   console.log(finalObject);
// };
// // export const fetchRegisterObject = async (url) => {

// //   try {
// //     axios.post(url, registerObject).then((res) => console.log(res.data));
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };
