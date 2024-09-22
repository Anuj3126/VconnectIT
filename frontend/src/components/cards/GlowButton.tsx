import React from 'react';

interface GlowButtonProps {
  onClick: () => void; // Define an onClick prop for handling button click
  label: string;       // Add a label prop for dynamic text
  imageSrc: string;    // Add an imageSrc prop for the image
}

const GlowButton: React.FC<GlowButtonProps> = ({ onClick, label, imageSrc }) => {
  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',   // Set flex direction to column to stack image and label
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: '200px',            // Adjust the width of the button
    height: '250px',           // Adjust the height to accommodate both image and label
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#05101c',
    borderRadius: '15px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const buttonHoverStyle: React.CSSProperties = {
    boxShadow: '0 0 40px #20b2aa, 0 0 40px #6f42c1, 0 0 40px #ffffff',
  };

  const imageStyle: React.CSSProperties = {
    width: '90%',          // Image takes most of the button's width
    height: '70%',         // Image occupies the upper portion
    objectFit: 'cover',    // Ensure the image maintains its aspect ratio
    borderRadius: '10px',  // Optional: add a border radius to the image
  };

  const textStyle: React.CSSProperties = {
    marginTop: '10px',     // Add space between the image and the label
    textAlign: 'center',   // Center the label text
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick} // Attach the onClick handler passed via props
    >
      {/* Top part: Image */}
      <img src={imageSrc} alt="Button Icon" style={imageStyle} />

      {/* Bottom part: Label */}
      <span style={textStyle}>{label}</span>
    </button>
  );
};

export default GlowButton;
