// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import '../LoginSignUp.css';
// import { useAuth } from "../context/AuthContext";

// const LoginSignup = () => {
//     const [action, setAction] = useState("Login");
//     const navigate = useNavigate();
//     const auth = useAuth();

//     const Login = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;
//         try {
//             toast.loading("Signing In", { id: "login" });
//             await auth?.login(email, password);
//             toast.success("Sign In Successful!", { id: "login" });
//         } catch (error) {
//             console.log(error);
//             toast.error("Sign in failed!", { id: "login" });
//         }
//     };

//     const SignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const name = formData.get("name") as string;
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;

//         try {
//             toast.loading("Signing Up", { id: "signup" });
//             await auth?.signup(name, email, password);
//             toast.success("Account Created Successfully", { id: "signup" });
//         } catch (error) {
//             console.log(error);
//             toast.error("Signing Up Failed", { id: "signup" });
//         }
//     };

//     useEffect(() => {
//         if (auth?.user) {
//             return navigate("/");
//         }
//     }, [auth?.user, navigate]);

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         if (action === "Login") {
//             Login(e);
//         } else {
//             SignUp(e);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="header">
//                 <div className={action === "Login" ? "textLogin" : "textSignUp"}>{action}</div>
//                 <div className={action === "Login" ? "underlineLogin" : "underline"}></div>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div className="inputs">
//                     {action === "Sign Up" && (
//                         <div className="input">
//                             <img src="person.png" alt="" className="" />
//                             <input type="text" name="name" placeholder="Name" required />
//                         </div>
//                     )}
//                     <div className="input">
//                         <img src="email.png" alt="" className="" />
//                         <input type="email" name="email" placeholder="Email" required />
//                     </div>
//                     <div className="input">
//                         <img src="password.png" alt="" className="" />
//                         <input type="password" name="password" placeholder="Password" required />
//                     </div>
//                 </div>
//                 {action === "Login" ? (
//                     <div className="signup">
//                         Didn't Sign Up? <span onClick={() => setAction("Sign Up")}>Sign Up!</span>
//                     </div>
//                 ) : (
//                     <div className="login">
//                         Already Signed Up? <span onClick={() => setAction("Login")}>Login!</span>
//                     </div>
//                 )}
//                 <div className="submit-container">
//                     <button type="submit" className={action === "Login" ? "submitLogin" : "submitSignUp"}>
//                         {action}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default LoginSignup;



// import emailjs from '@emailjs/browser';
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import "../LoginSignup.css";

// const LoginSignup = () => {
//     const [isActive, setIsActive] = useState(false);
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [signupPasswordVisible, setSignupPasswordVisible] = useState(false);
//     const [otp, setOtp] = useState(""); // OTP entered by the user
//     const [generatedOtp, setGeneratedOtp] = useState(""); // OTP generated
//     const [showOtpPopup, setShowOtpPopup] = useState(false); // Show OTP popup window
//     const [signupDetails, setSignupDetails] = useState({ name: "", email: "", password: "" }); // Signup details
//     const navigate = useNavigate();
//     const auth = useAuth();

//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://apis.google.com/js/platform.js";
//         script.async = true;
//         script.defer = true;
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const toggleSignupPasswordVisibility = () => {
//         setSignupPasswordVisible(!signupPasswordVisible);
//     };

//     const generateOtp = () => {
//         const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
//         setGeneratedOtp(otp);
//         return otp;
//     };

//     const sendOtpEmail = async (name: string, email: string, otp: string) => {
//         const serviceId = 'service_7zr610b';
//         const templateId = 'template_u9z5qx9'; // New template for OTP email
//         const publicKey = 'f4o1VHA4HDAPofz6Y';

//         const templateParams = {
//             to_name: name,
//             to_email: email,
//             message: otp, // Send generated OTP
//         };

//         try {
//             await emailjs.send(serviceId, templateId, templateParams, publicKey);
//             toast.success("OTP Sent to Email", { id: "otp-sent" });
//         } catch (error) {
//             console.log("Error sending OTP email: ", error);
//             toast.error("Failed to send OTP", { id: "otp-failed" });
//         }
//     };

//     const sendConfirmationEmail = async (name: string, email: string) => {
//         const serviceId = 'service_7zr610b';
//         const templateId = 'template_872ou4d'; // Same template ID as before for confirmation email
//         const publicKey = 'f4o1VHA4HDAPofz6Y';

//         const templateParams = {
//             to_name: name,
//             to_email: email,
//         };

//         try {
//             const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
//             console.log("Confirmation Email Sent Successfully!", response);
//             toast.success("Confirmation Email Sent!", { id: "email-sent" });
//         } catch (error) {
//             console.log("Error sending confirmation email: ", error);
//             toast.error("Failed to send confirmation email", { id: "email-failed" });
//         }
//     };

//     const verifyOtp = async () => {
//         if (otp === generatedOtp) {
//             toast.success("OTP Verified!", { id: "otp-verified" });
//             try {
//                 // Proceed with the actual sign-up process
//                 await auth?.signup(signupDetails.name, signupDetails.email, signupDetails.password);

//                 // Send confirmation email after successful OTP verification and sign-up
//                 await sendConfirmationEmail(signupDetails.name, signupDetails.email);

//                 toast.success("Account Created Successfully", { id: "signup" });
//                 navigate("/");
//             } catch (error) {
//                 console.log(error);
//                 toast.error("Sign-up failed!", { id: "signup" });
//             }
//         } else {
//             toast.error("Invalid OTP!", { id: "invalid-otp" });
//         }
//     };

//     const onSignIn = (googleUser: { getBasicProfile: () => any; }) => {
//         const profile = googleUser.getBasicProfile();
//         console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
//         console.log("Name: " + profile.getName());
//         console.log("Image URL: " + profile.getImageUrl());
//         console.log("Email: " + profile.getEmail());
//     };

//     const Login = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;

//         try {
//             toast.loading("Signing In", { id: "login" });
//             await auth?.login(email, password);
//             toast.success("Sign In Successful!", { id: "login" });
//             navigate("/");
//         } catch (error) {
//             console.log(error);
//             toast.error("Sign in failed!", { id: "login" });
//         }
//     };

//     const SignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const name = formData.get("name") as string;
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;

//         setSignupDetails({name,email,password});

//         const otpGenerated = generateOtp();
//         await sendOtpEmail(name,email,otpGenerated);

//         setShowOtpPopup(true);
        
//     };

//     return (
//         <div className="mainContainer">
//             <div className={`container ${isActive ? "active" : ""}`} id="container">
//                 {/* Sign Up Form */}
//                 <div className="form-container sign-up">
//                     <form onSubmit={SignUp}>
//                         <h1>Create Account</h1>
//                         <input type="text" placeholder="Name" name="name" required />
//                         <input type="email" placeholder="Email" name="email" required />
//                         <div className="password_box_signup">
//                             <input
//                                 type={signupPasswordVisible ? "text" : "password"}
//                                 placeholder="Password"
//                                 name="password"
//                                 required
//                             />
//                             <img
//                                 src={signupPasswordVisible ? "eye_open.png" : "eye_closed.png"}
//                                 alt="eye icon"
//                                 onClick={toggleSignupPasswordVisibility}
//                             />
//                         </div>
//                         <span>Use your email for registration</span>
//                         <h3>OR</h3>
//                         {/* <div className="social-icons">
//                             <div className="g-signin2" data-onsuccess="onSignIn"></div>
//                         </div> */}
//                         <button type="submit">Sign Up</button>
//                     </form>
//                 </div>

//                 {/* Sign In Form */}
//                 <div className="form-container sign-in">
//                     <form onSubmit={Login}>
//                         <h1>Sign In</h1>
//                         <input type="email" placeholder="Email" name="email" required />
//                         <div className="password_box">
//                             <input
//                                 type={passwordVisible ? "text" : "password"}
//                                 placeholder="Password"
//                                 name="password"
//                                 required
//                             />
//                             <img
//                                 src={passwordVisible ? "eye_open.png" : "eye_closed.png"}
//                                 alt="eye icon"
//                                 onClick={togglePasswordVisibility}
//                             />
//                         </div>
//                         <span>Use your email password</span>
//                         <h3>OR</h3>
//                         {/* <div className="social-icons">
//                             <div className="g-signin2" data-onsuccess="onSignIn"></div>
//                         </div> */}
//                         <a href="/forgotPassword" className="href">Forgot your password?</a>
//                         <button type="submit">Sign In</button>
//                     </form>
//                 </div>

//                 {/* Toggle Between Sign In and Sign Up */}
//                 <div className="toggle-container">
//                     <div className="toggle">
//                         <div className="toggle-panel toggle-left">
//                             <h1>Welcome Back!</h1>
//                             <p>Enter your personal details to use all of site features</p>
//                             <button className="hidden" onClick={() => setIsActive(false)}>Sign In</button>
//                         </div>
//                         <div className="toggle-panel toggle-right">
//                             <h1>Hello, VITian!</h1>
//                             <p>Register with your personal details to use all of site features</p>
//                             <button className="hidden" onClick={() => setIsActive(true)}>Sign Up</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* OTP Popup */}
//                 {showOtpPopup && (
//                     <div className="otp-popup">
//                         <h2>Enter OTP</h2>
//                         <input
//                             type="text"
//                             placeholder="Enter OTP"
//                             value={otp}
//                             onChange={(e) => setOtp(e.target.value)}
//                         />
//                         <button onClick={verifyOtp}>Submit OTP</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default LoginSignup;

import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../LoginSignup.css";

const LoginSignup = () => {
    const [isActive, setIsActive] = useState(false); // For toggling between sign-up and login
    const [passwordVisible, setPasswordVisible] = useState(false); // For login password visibility
    const [signupPasswordVisible, setSignupPasswordVisible] = useState(false); // For signup password visibility
    const [otp, setOtp] = useState(""); // OTP entered by the user
    const [generatedOtp, setGeneratedOtp] = useState(""); // OTP generated
    const [showOtpPopup, setShowOtpPopup] = useState(false); // Show OTP popup window
    const [isResendEnabled, setIsResendEnabled] = useState(false); // Resend OTP enabled
    const [countdown, setCountdown] = useState(60); // Countdown for 60 seconds
    const [signupDetails, setSignupDetails] = useState({ name: "", email: "", password: "" }); // Signup details
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Timer logic for OTP countdown
    useEffect(() => {
        if (showOtpPopup && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (countdown === 0) {
            setIsResendEnabled(true);
        }
    }, [showOtpPopup, countdown]);

    // Toggle login password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Toggle signup password visibility
    const toggleSignupPasswordVisibility = () => {
        setSignupPasswordVisible(!signupPasswordVisible);
    };


    // OTP generator
    const generateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
        setGeneratedOtp(otp);
        setCountdown(60); // Reset countdown
        setIsResendEnabled(false); // Disable resend button
        return otp;
    };

    // Function to send OTP via email using EmailJS
    const sendOtpEmail = async (name: string, email: string, otp: string) => {
        const serviceId = 'service_7zr610b';
        const templateId = 'template_u9z5qx9'; // New template for OTP email
        const publicKey = 'f4o1VHA4HDAPofz6Y';

        const templateParams = {
            to_name: name,
            to_email: email,
            message: otp, // Send generated OTP
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            toast.success("OTP Sent to Email", { id: "otp-sent" });
        } catch (error) {
            console.log("Error sending OTP email: ", error);
            toast.error("Failed to send OTP", { id: "otp-failed" });
        }
    };

    const sendConfirmationEmail = async (name: string, email: string) => {
        const serviceId = 'service_7zr610b';
        const templateId = 'template_872ou4d'; // Same template ID as before for confirmation email
        const publicKey = 'f4o1VHA4HDAPofz6Y';

        const templateParams = {
            to_name: name,
            to_email: email,
        };

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log("Confirmation Email Sent Successfully!", response);
            toast.success("Confirmation Email Sent!", { id: "email-sent" });
        } catch (error) {
            console.log("Error sending confirmation email: ", error);
            toast.error("Failed to send confirmation email", { id: "email-failed" });
        }
    };
    
    const handleOtpClose = () => {
        setShowOtpPopup(false); // Hide OTP popup
        toast.error("OTP Verification Failed!Try Again",{id:"otp-fail"});
    };

    // Verify OTP
    const verifyOtp = async () => {
        if (otp === generatedOtp) {
            toast.success("OTP Verified!", { id: "otp-verified" });
            try {
                await auth?.signup(signupDetails.name, signupDetails.email, signupDetails.password);
                await sendConfirmationEmail(signupDetails.name, signupDetails.email);
                toast.success("Account Created Successfully", { id: "signup" });
                navigate("/");
            } catch (error) {
                console.log(error);
                toast.error("Sign-up failed!", { id: "signup" });
            }
        } else {
            toast.error("Invalid OTP!", { id: "invalid-otp" });
        }
    };

    // Resend OTP
    const resendOtp = async () => {
        const otpGenerated = generateOtp();
        await sendOtpEmail(signupDetails.name, signupDetails.email, otpGenerated);
        setCountdown(60); // Reset countdown when OTP is resent
        setIsResendEnabled(false);
    };

    // Sign-up handler
    const SignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        setSignupDetails({ name, email, password });

        const otpGenerated = generateOtp();
        await sendOtpEmail(name, email, otpGenerated);

        setShowOtpPopup(true);
    };

    const Login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            toast.loading("Signing In", { id: "login" });
            await auth?.login(email, password);
            toast.success("Sign In Successful!", { id: "login" });
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Sign in failed!", { id: "login" });
        }
    };

    return (
        <div className="mainContainer">
            <div className={`container ${isActive ? "active" : ""}`} id="container">
                {/* Sign-up Form */}
                <div className="form-container sign-up">
                    <form onSubmit={SignUp}>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" name="name" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <div className="password_box_signup">
                            <input
                                type={signupPasswordVisible ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                required
                            />
                            <img
                                src={signupPasswordVisible ? "eye_open.png" : "eye_closed.png"}
                                alt="eye icon"
                                onClick={toggleSignupPasswordVisibility}
                            />
                        </div>
                        <span>Use your email for registration</span>
                        <h3>OR</h3>
                        <div className="social-icons">
                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>

                {/* Sign-in Form */}
                <div className="form-container sign-in">
                    <form onSubmit={Login}>
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Email" name="email" required />
                        <div className="password_box">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                required
                            />
                            <img
                                src={passwordVisible ? "eye_open.png" : "eye_closed.png"}
                                alt="eye icon"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        <span>Use your email password</span>
                        <h3>OR</h3>
                        <div className="social-icons">
                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                        </div>
                        <a href="/forgotPassword" className="href">Forgot your password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>

                {/* OTP Popup */}
                {showOtpPopup && (
                    <div className="otp-overlay">
                        <div className="otp-popup">
                            {/* Close button */}
                            <span className="close-button" onClick={handleOtpClose}>
                                &times;
                            </span>
                            <h2>Enter OTP</h2>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <button onClick={verifyOtp}>Submit OTP</button>
                            <div className="otp-countdown">
                                {isResendEnabled ? (
                                    <button onClick={resendOtp}>Resend OTP</button>
                                ) : (
                                    <p>Resend OTP in {countdown}s</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Toggle Between Sign In and Sign Up */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" onClick={() => setIsActive(false)}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, VITian!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="hidden" onClick={() => setIsActive(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;

