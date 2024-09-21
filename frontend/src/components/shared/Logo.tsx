import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
    <div style={{
        display:'flex',
        marginRight:"auto",
        alignItems:"center",
        gap:"15px",
    }}>
        <Link to={"/"}>
            <img style={{borderRadius:"100px"}} src="VconnectIT.png" 
            alt="botify" 
            width={"35px"} 
            height={"35px"}
            className="image-inverted" 
            />
        </Link>
            <Typography sx={{ display: {md:"block",sm:"none",xs:"none"} ,
            marginRight:"auto",
            fontWeight:"600",
            textShadow:"2px 2px 20px #000",}}>
                <span style={{ fontSize:"29px",color:"cyan"}} >V</span>
                <span style={{ fontSize:"25px"}}>connect</span>
                <span style={{ fontSize:"29px",color:"cyan"}} >IT</span>
            </Typography>
        </div>
    );
};

export default Logo;