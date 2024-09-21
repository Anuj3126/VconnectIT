// import { Box, useMediaQuery, useTheme } from "@mui/material";
// import Footer from "../components/footer/Footer";
// import TypingAnim from "../components/typer/TypingAnim";

// const Home = () => {
//     const theme = useTheme();
//     const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
// return (
//     <Box width={"100%"} height={"100%"}>
//         <Box
//         sx={{
//             display: "flex",
//             width: "100%",
//             flexDirection: "column",
//             alignItems: "center",
//             mx: "auto",
//             mt: 3,
//         }}
//         >
//         <Box>
//             <TypingAnim />
//         </Box>
//         <Box
//             sx={{
//             width: "100%",
//             display: "flex",
//             flexDirection: { md: "row", xs: "column", sm: "column" },
//             gap: 5,
//             my: 10,
//             }}
//         >
//         <img
//             src="robot.png"
//             alt="robot"
//             style={{ width: "100px", margin: "auto" }}
//         />
//         <img
//             src="chatbot_logo.png"
//             alt="openai"
//             style={{ width: "100px", margin: "auto" , borderRadius:"50px",}}
//         />
//         </Box>
//         <Box sx={{ display: "flex", mx: "auto" }}>
//         <img
//             src="Chatss.png"
//             alt="chatbot"
//             style={{
//             display: "flex",
//             margin: "auto",
//             width: isBelowMd ? "80%" : "60%",
//             borderRadius: 20,
//             boxShadow: "-5px -5px 105px #64f3d5",
//             marginTop: 20,
//             marginBottom: 20,
//             padding: 10,
//             }}
//         />
//         </Box>
//         </Box>
//     <Footer />
//     </Box>
//     );
// };

// export default Home;

// import { Box } from "@mui/material";
// import { useNavigate } from "react-router-dom"; // Import useNavigate to handle navigation
// import GlowButton from "../components/cards/GlowButton";
// import TypingAnim from "../components/typer/TypingAnim";
// import { useAuth } from "../context/AuthContext";

// const Home = () => {
//   const auth = useAuth();
//   const navigate = useNavigate(); // Initialize the useNavigate hook for programmatic navigation

//   // Function to handle button click and navigate to the correct path
//   const handleButtonClick = (path: string) => {
//     // If the user is authenticated, route to the specific path, else route to login
//     if (auth?.user) {
//       navigate(path); // Navigate to the specific path if authenticated
//     } else {
//       navigate("/login"); // Redirect to login if not authenticated
//     }
//   };

//   return (
//     <Box width={"100%"} height={"100%"}>
//       <Box
//         sx={{
//           display: "flex",
//           width: "100%",
//           flexDirection: "column",
//           alignItems: "center",
//           mt: 7,
//           gap: 4,
//         }}
//       >
//         <h1
//           style={{
//             margin: "auto",
//             marginLeft: "38%", // Move the text a bit to the left
//             textAlign: "center",
//             background:
//               "linear-gradient(90deg, #20b2aa, #6f42c1, #ffffff)", // Gradient: light sea blue, purple, white
//             WebkitBackgroundClip: "text", // Clip the background to text
//             WebkitTextFillColor: "transparent", // Clip the background to text
//             fontSize: "5rem",
//             fontWeight: "100",
//             fontFamily: "Jura, sans-serif", // Apply Jura font
//             marginTop: 20,
//             marginBottom: 15,
//           }}
//         >
//           Hello There
//         </h1>
//         <Box sx={{ display: "flex", marginLeft: "3%" }}>
//           <TypingAnim />
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             justifyContent: "center",
//             gap: 10,
//             marginTop: 15,
//           }}
//         >
//           {/* Pass different paths as props to each GlowButton */}
//           <GlowButton onClick={() => handleButtonClick("/chat")} />
//           <GlowButton onClick={() => handleButtonClick("/hostel")} />
//           <GlowButton onClick={() => handleButtonClick("/map")} />
//           <GlowButton onClick={() => handleButtonClick("/community")} />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle navigation
import GlowButton from "../components/cards/GlowButton";
import TypingAnim from "../components/typer/TypingAnim";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate(); // Initialize the useNavigate hook for programmatic navigation

  // Function to handle button click and navigate to the correct path
  const handleButtonClick = (path: string) => {
    // If the user is authenticated, route to the specific path, else route to login
    if (auth?.user) {
      navigate(path); // Navigate to the specific path if authenticated
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mt: 7,
          gap: 4,
        }}
      >
        <h1
          style={{
            margin: "auto",
            marginLeft: "38%", // Move the text a bit to the left
            textAlign: "center",
            background:
              "linear-gradient(90deg, #20b2aa, #6f42c1, #ffffff)", // Gradient: light sea blue, purple, white
            WebkitBackgroundClip: "text", // Clip the background to text
            WebkitTextFillColor: "transparent", // Clip the background to text
            fontSize: "5rem",
            fontWeight: "100",
            fontFamily: "Jura, sans-serif", // Apply Jura font
            marginTop: 20,
            marginBottom: 15,
          }}
        >
          Hello There
        </h1>
        <Box sx={{ display: "flex", marginLeft: "3%" }}>
          <TypingAnim />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: 10,
            marginTop: 15,
          }}
        >
          {/* Pass different paths and labels as props to each GlowButton */}
          <GlowButton onClick={() => handleButtonClick("/chat")} label="ChatBot" />
          <GlowButton onClick={() => handleButtonClick("/hostel")} label="Hostel & Mess" />
          <GlowButton onClick={() => handleButtonClick("/map")} label="Maps" />
          <GlowButton onClick={() => handleButtonClick("/community")} label="Community" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

