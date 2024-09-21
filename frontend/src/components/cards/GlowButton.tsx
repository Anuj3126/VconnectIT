// import React from 'react';

// interface GlowButtonProps {
//   onClick: () => void; // Define an onClick prop for handling button click
// }

// const GlowButton: React.FC<GlowButtonProps> = ({ onClick }) => {
//   const buttonStyle: React.CSSProperties = {
//     display: 'inline-block',
//     padding: '10px 20px',
//     width: '200px',
//     height: '80px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: 'white',
//     backgroundColor: '#05101c',
//     border: '2px solid white',
//     borderRadius: '30px',
//     cursor: 'pointer',
//     outline: 'none',
//     boxShadow: '0 0 20px #FF8080, 0 0 20px #FF8080',
//     transition: 'box-shadow 0.3s ease-in-out',
//   };

//   const buttonHoverStyle: React.CSSProperties = {
//     boxShadow: '0 0 30px #FF8080, 0 0 30px #FF8080',
//   };

//   const [hover, setHover] = React.useState(false);

//   return (
//     <button
//       style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       onClick={onClick} // Attach the onClick handler passed via props
//     >
//       Glow Button
//     </button>
//   );
// };

// export default GlowButton;

import React from 'react';

interface GlowButtonProps {
  onClick: () => void; // Define an onClick prop for handling button click
  label: string;       // Add a label prop for dynamic text
}

const GlowButton: React.FC<GlowButtonProps> = ({ onClick, label }) => {
  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '10px 20px',
    width: '200px',
    height: '80px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#05101c',
    border: '2px solid white',
    borderRadius: '30px',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 0 20px #FF8080, 0 0 20px #FF8080',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const buttonHoverStyle: React.CSSProperties = {
    boxShadow: '0 0 30px #FF8080, 0 0 30px #FF8080',
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick} // Attach the onClick handler passed via props
    >
      {label} {/* Render the label prop here */}
    </button>
  );
};

export default GlowButton;
