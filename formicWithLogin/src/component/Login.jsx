// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Formik, Form, Field, ErrorMessage } from "formik";

// import * as Yup from "yup";
 
// // Validation schema using Yup
// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email format").required("Email is required"),
//   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// });
 
// export default function Login() {
//   const [loginError, setLoginError] = useState(""); // For storing login errors
 
//   // Initial form values
//   const initialValues = { email: "", password: "" };
 
//   // Form submit handler
//   const onSubmit = (values) => {
//     const savedEmail = localStorage.getItem("email");
//     const savedPassword = localStorage.getItem("password");
 
//     if (values.email === savedEmail && values.password === savedPassword) {
//       window.location.href = "/home"; // Redirect on successful login
//     } else {
//       setLoginError("Incorrect email or password."); // Show error if credentials are wrong
//     }
//   };
 
//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
 
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//       <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg max-w-4xl w-full">
//         {/* Left Section (Image Slider) */}
//         <div className="hidden md:flex items-center justify-center p-6">
//           <Slider {...settings}>
//             {/* Slide 1 */}
//             <div className="slide">
//               <img src="imageF.png" alt="Data Tracking 1" className="mb-4" />
//               <h3 className="text-2xl font-semibold mb-2">Real-time Data Tracking</h3>
//               <p className="text-gray-600">Instantly capture and access therapy data with auto-save and real-time insights.</p>
//             </div>
//             {/* Slide 2 */}
//             <div className="slide">
//               <img src="imageF.png" alt="Data Tracking 2" className="mb-4" />
//               <h3 className="text-2xl font-semibold mb-2">Real-time Analytics</h3>
//               <p className="text-gray-600">Monitor progress and gain valuable insights to improve patient care.</p>
//             </div>
//             {/* Slide 3 */}
//             <div className="slide">
//               <img src="imageF.png" alt="Data Tracking 3" className="mb-4" />
//               <h3 className="text-2xl font-semibold mb-2">Custom Reports</h3>
//               <p className="text-gray-600">Generate custom reports with just a few clicks and optimize your workflow.</p>
//             </div>
//           </Slider>
//         </div>
 
//         {/* Right Section (Form) */}
//         <div className="p-8">
//           <h2 className="text-xl font-bold mb-4">Login</h2>
 
//           {/* Formik for Form Handling */}
//           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//             {({ values, handleChange }) => (
//               <Form>
//                 {/* Email Input */}
//                 <div className="mb-4">
//                   <Field type="email" name="email" placeholder="Email" className="border border-gray-300 rounded-md w-full py-2 px-4" />
//                   <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//                 </div>
 
//                 {/* Password Input */}
//                 <div className="mb-4">
//                   <Field type="password" name="password" placeholder="Password" className="border border-gray-300 rounded-md w-full py-2 px-4" />
//                   <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//                 </div>
 
//                 {/* Submit Button */}
//                 <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md">Login</button>
 
//                 {/* Error Message */}
//                 {loginError && <div className="text-red-500 text-sm mt-4">{loginError}</div>}
//               </Form>
//             )}
//           </Formik>
 
//           {/* Simulate saving data */}
//           <button
//             onClick={() => {
//               localStorage.setItem("email", "test@example.com");
//               localStorage.setItem("password", "password123");
//               alert("Saved default login: email 'test@example.com' and password 'password123'.");
//             }}
//             className="mt-4 bg-gray-500 text-white w-full py-2 rounded-md"
//           >
//             Save Default Credentials (for testing)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
 

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
 
// // Validation schema using Yup
// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });
 
// export default function Login() {
//   const handleSubmit = (values) => {
//     console.log({ email: values.email, password: values.password });
//   };
 
//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
 
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-[url(bg.svg)] bg-right bg-no-repeat bg-contain">
//       <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg max-w-4xl w-full">
//         {/* Left Section (with image slider) */}
//         <div className="hidden md:flex items-center justify-center p-6">
//           <div className="text-left w-96 h-96">
//             <Slider {...settings}>
//               {/* Slide 1 */}
//               <div className="slide">
//                 <img
//                   src="imageF.png"
//                   alt="Data Tracking 1 "
//                   className="mb-4 w-full h-auto max-w-[800px] mx-auto rounded-tl-[3rem] rounded-br-[3rem]"
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-950 mb-2">
//                   Real-time Data Tracking
//                 </h3>
//                 <p className="text-gray-600">
//                   Instantly capture and access therapy data with auto-save and
//                   real-time insights.
//                 </p>
//               </div>
//               {/* Slide 2 */}
//               <div className="slide">
//                 <img
//                   src="imageF.png"
//                   alt="Data Tracking 2"
//                   className="mb-4 rounded-tl-[3rem] rounded-br-[3rem]"
//                 />
//                 <h3 className="text-2xl font-semibold mb-2">
//                   Real-time Analytics
//                 </h3>
//                 <p className="text-gray-600">
//                   Monitor progress and gain valuable insights to improve patient
//                   care.
//                 </p>
//               </div>
//               {/* Slide 3 */}
//               <div className="slide">
//                 <img
//                   src="imageF.png"
//                   alt="Data Tracking 2"
//                   className="mb-4 rounded-tl-[3rem] rounded-br-[3rem]"
//                 />
//                 <h3 className="text-2xl font-semibold mb-2">Custom Reports</h3>
//                 <p className="text-gray-600">
//                   Generate custom reports with just a few clicks and optimize
//                   your workflow.
//                 </p>
//               </div>
//             </Slider>
//           </div>
//         </div>
 
//         {/* Right Section (Login Form) */}
//         <div className="p-8 border border-[#00FFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]">
//           <h2 className="text-3xl font-bold text-blue-950 mb-6">Welcome Back!</h2>
//           <p className="text-gray-800 mb-6">
//             Sign in with your email address and password.
//           </p>
 
//           {/* Formik Form */}
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ values, handleChange }) => (
//               <Form className="space-y-4">
//                 <div>
//                   <label htmlFor="email" className="block text-gray-700"></label>
//                   <Field
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
//                     placeholder="Email Address"
//                     value={values.email}
//                     onChange={handleChange}
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>
 
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-gray-700"
//                   ></label>
//                   <Field
//                     id="password"
//                     name="password"
//                     type="password"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
//                     placeholder="Password"
//                     value={values.password}
//                     onChange={handleChange}
//                   />
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>
 
//                 <div className="text-right">
//                   <a href="/forgot-password" className="text-sm text-gray-500">
//                     Forgot Password?
//                   </a>
//                 </div>
 
//                 <p className="text-center text-sm text-gray-800 mt-4">
//                   By logging in you agree to the terms of service.
//                 </p>
 
//                 <button
//                   type="submit"
//                   className="w-1/3 flex justify-center items-center bg-[#00FFFF] text-white p-2 rounded-lg hover:bg-[#00FFFF] focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
//                 >
//                   Login
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// }
 

import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
 
// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
 
export default function Login() {
  const navigate = useNavigate();
 
  const handleSubmit = (values) => {
    const savedEmail = "priya@gmail.com" ;
    const savedPassword = "piya123";
 
    if (values.email === savedEmail && values.password === savedPassword) {
      // Redirect to the home page on successful login
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };
 
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url(bg.svg)] bg-right bg-no-repeat bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg max-w-4xl w-full">
        {/* Left Section (with image slider) */}
        <div className="hidden md:flex items-center justify-center p-6">
          <div className="text-left w-96 h-96">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="slide">
                <img
                  src="imageF.png"
                  alt="Data Tracking 1 "
                  className="mb-4 w-full h-auto max-w-[800px] mx-auto rounded-tl-[3rem] rounded-br-[3rem]"
                />
                <h3 className="text-2xl font-semibold text-gray-950 mb-2">
                  Real-time Data Tracking
                </h3>
                <p className="text-gray-600">
                  Instantly capture and access therapy data with auto-save and
                  real-time insights.
                </p>
              </div>
              {/* Slide 2 */}
              <div className="slide">
                <img
                  src="imageF.png"
                  alt="Data Tracking 2"
                  className="mb-4 rounded-tl-[3rem] rounded-br-[3rem]"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  Real-time Analytics
                </h3>
                <p className="text-gray-600">
                  Monitor progress and gain valuable insights to improve patient
                  care.
                </p>
              </div>
              {/* Slide 3 */}
              <div className="slide">
                <img
                  src="imageF.png"
                  alt="Data Tracking 2"
                  className="mb-4 rounded-tl-[3rem] rounded-br-[3rem]"
                />
                <h3 className="text-2xl font-semibold mb-2">Custom Reports</h3>
                <p className="text-gray-600">
                  Generate custom reports with just a few clicks and optimize
                  your workflow.
                </p>
              </div>
            </Slider>
          </div>
        </div>
 
        {/* Right Section (Login Form) */}
        <div className="p-8 border border-[#00FFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Welcome Back!</h2>
          <p className="text-gray-800 mb-6">
            Sign in with your email address and password.
          </p>
 
          {/* Formik Form */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700"></label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
 
                <div>
                  <label htmlFor="password" className="block text-gray-700"></label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
 
                <div className="text-right">
                  <a href="/forgot-password" className="text-sm text-gray-500">
                    Forgot Password?
                  </a>
                </div>
 
                <p className="text-center text-sm text-gray-800 mt-4">
                  By logging in you agree to the terms of service.
                </p>
 
                <button
                  type="submit"
                  className="w-1/3 flex justify-center items-center bg-[#00FFFF] text-white p-2 rounded-lg hover:bg-[#00FFFF] focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
 