// import { TypeAnimation } from "react-type-animation";

// const TypingAnim = () => {
//     return (
//     <TypeAnimation
//         sequence={[
//         // Same substring at the start will only be typed once, initially
//         "Chat With BOTify",
//         1000,
//         "Built With GPT-3.5-Turbo 🤖",
//         2000,
//         "Your Own friendly neighbourhood bot 💻",
//         1500,
//         ]}
//         speed={50}
//         style={{
//         fontSize: "40px",
//         color: "white",
//         display: "inline-block",
//         textShadow: "1px 1px 20px #000",
//         }}
//         repeat={Infinity}
//     />
//     );
// };

// export default TypingAnim;

import { TypeAnimation } from "react-type-animation";

const TypingAnim = () =>{
    return (
            <TypeAnimation
            sequence={[
                'WELCOME TO VconnectIT',
                1000,
                'YOUR DIGITAL COMPANION FOR CAMPUS LIFE',
                1000,
                'FROM CHATBOTS TO HOSTEL AND MESS MANAGEMENT',
                1000,
                'VconnectIT: SIMPLIFYING YOUR COLLEGE EXPERIENCE',
                1000
                
            ]}
            speed={15}
            style={{fontWeight:800, fontStyle:"uppercase",fontFamily: "'Roboto', sans-serif", fontSize: '20px',color: "grey",display:"inline-block",textShadow:"1px 1px 20px #000"}}
            repeat={Infinity}
            />
    );
};

export default TypingAnim;