// // Page for handling logging details and routes to this page.
// import { Box, Button, Typography } from "@mui/material";
// import React, { useEffect } from "react";
// import toast from "react-hot-toast";
// import { MdLogin } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import CustomizedInput from "../components/shared/CustomizedInput";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//     const navigate = useNavigate();
//     const auth = useAuth();
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;
//         try{
//             toast.loading("Signing In",{id:"login"});
//             await auth?.login(email,password);
//             toast.success("Sign In Successful!",{id:"login"});
//         }catch(error){
//             console.log(error);
//             toast.error("Sign in failed!",{id:"login"});
//         }
        
//     };

//     useEffect(()=> {
//         if (auth?.user) {
//             return navigate("/chat");
//         }
//     })
    
//     return (
//     <Box width={'100%'} height={'90vh'} display="flex"flexDirection="row" gap="0" top="0">
//         <Box display={{md:"flex",sm:"none",xs:"none"}} sx={{ flex:{md:0.5,sm:"none",xs:"none"},justifyContent:"center",alignItems:"center"}}>
//             <img src="SelfieBot.gif" alt="FlyingRobot" className="flyingRobot" style={{width:"500px",height:"400px"}}/>
//         </Box>
//         <Box
//         display={'flex'}
//         flex={{xs:1 , md:0.5}}
//         justifyContent={'center'}
//         alignItems={"center"}
//         ml={"auto"}
//         p={1}>
//             <form
//             onSubmit={(handleSubmit)}
//             style={{
//                 margin:'auto',
//                 padding:'30px',
//                 boxShadow:'10px 10px 20px #000',
//                 borderRadius:'10px',
//                 border:'none',
//                 //maxWidth:"420px",
//                 //maxHeight:"300px",
//                 alignItems:"center"}}>
//                 <Box sx={{
//                     display:'flex',
//                     flexDirection:"column",
//                     justifyContent:"center",
//                     }}>
//                     <Typography variant="h4" textAlign="center" paddingBottom={2} fontWeight={600}>
//                     Login
//                     </Typography>
//                     <CustomizedInput type="email" name="email" label="Email" />
//                     <CustomizedInput type="password" name="password" label="Password"/>
//                     <Button
//                     type="submit"
//                     sx={{
//                         px:2,
//                         py:1,
//                         mt:2,
//                         width:"100%",
//                         borderRadius:2,
//                         bgcolor:"cyan",
//                         color: "black",
//                         ":hover":{
//                             bgcolor:"white",
//                             color:"cyan",
//                         },
//                         }}
//                         endIcon={<MdLogin/>}>
//                         Login
//                     </Button>
//                 </Box>
//             </form>
//         </Box>
//     </Box>
//     )
// };

// export default Login;


// // Page for handling logging details and routes to this page.
// import { Box, Button, Typography } from "@mui/material";
// import React, { useEffect } from "react";
// import toast from "react-hot-toast";
// import { MdLogin } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import CustomizedInput from "../components/shared/CustomizedInput";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//     const navigate = useNavigate();
//     const auth = useAuth();
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;
//         try{
//             toast.loading("Signing In",{id:"login"});
//             await auth?.login(email,password);
//             toast.success("Sign In Successful!",{id:"login"});
//         }catch(error){
//             console.log(error);
//             toast.error("Sign in failed!",{id:"login"});
//         }
        
//     };

//     useEffect(()=> {
//         if (auth?.user) {
//             return navigate("/chat");
//         }
//     })
    
//     return (
//     <Box 
//     width={'100%'} 
//     height={'90vh'} 
//     display="flex" 
//     flexDirection="column" 
//     alignItems={"center"} 
//     justifyContent={"center"}
//     p={"10px"}>
//         <Box
//         justifyContent={'center'}
//         alignItems={"center"}
//         //ml={"auto"}
//         p={1}>
//             <form
//             onSubmit={(handleSubmit)}
//             style={{
//                 margin:'auto',
//                 padding:'30px',
//                 boxShadow:'10px 10px 20px #000',
//                 borderRadius:'10px',
//                 border:'none',
//                 //maxWidth:"420px",
//                 //maxHeight:"300px",
//                 alignItems:"center"}}>
//                 <Box sx={{
//                     display:'flex',
//                     flexDirection:"column",
//                     justifyContent:"center",
//                     }}>
//                     <Typography variant="h4" textAlign="center" paddingBottom={2} fontWeight={600}>
//                     Login
//                     </Typography>
//                     <CustomizedInput type="email" name="email" label="Email" />
//                     <CustomizedInput type="password" name="password" label="Password"/>
//                     <Button
//                     type="submit"
//                     sx={{
//                         px:2,
//                         py:1,
//                         mt:2,
//                         width:"100%",
//                         borderRadius:2,
//                         bgcolor:"cyan",
//                         color: "black",
//                         ":hover":{
//                             bgcolor:"white",
//                             color:"cyan",
//                         },
//                         }}
//                         endIcon={<MdLogin/>}>
//                         Login
//                     </Button>
//                 </Box>
//             </form>
//         </Box>
//     </Box>
//     )
// };

// export default Login;

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import '../LoginSignUp.css';
import { useAuth } from "../context/AuthContext";

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const navigate = useNavigate();
    const auth = useAuth();

    const Login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
            toast.loading("Signing In", { id: "login" });
            await auth?.login(email, password);
            toast.success("Sign In Successful!", { id: "login" });
        } catch (error) {
            console.log(error);
            toast.error("Sign in failed!", { id: "login" });
        }
    };

    const SignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            toast.loading("Signing Up", { id: "signup" });
            await auth?.signup(name, email, password);
            toast.success("Account Created Successfully", { id: "signup" });
        } catch (error) {
            console.log(error);
            toast.error("Signing Up Failed", { id: "signup" });
        }
    };

    useEffect(() => {
        if (auth?.user) {
            return navigate("/chat");
        }
    }, [auth?.user, navigate]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (action === "Login") {
            Login(e);
        } else {
            SignUp(e);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className={action === "Login" ? "textLogin" : "textSignUp"}>{action}</div>
                <div className={action === "Login" ? "underlineLogin" : "underline"}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    {action === "Sign Up" && (
                        <div className="input">
                            <img src="person.png" alt="" className="" />
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                    )}
                    <div className="input">
                        <img src="email.png" alt="" className="" />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="input">
                        <img src="password.png" alt="" className="" />
                        <input type="password" name="password" placeholder="Password" required />
                    </div>
                </div>
                {action === "Login" ? (
                    <div className="signup">
                        Didn't Sign Up? <span onClick={() => setAction("Sign Up")}>Sign Up!</span>
                    </div>
                ) : (
                    <div className="login">
                        Already Signed Up? <span onClick={() => setAction("Login")}>Login!</span>
                    </div>
                )}
                <div className="submit-container">
                    <button type="submit" className={action === "Login" ? "submitLogin" : "submitSignUp"}>
                        {action}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginSignup;


