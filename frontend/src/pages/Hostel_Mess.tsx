import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import './style.css';

const Hostel_Mess: React.FC = () => {
  const [hostelType, setHostelType] = useState('Boys Hostel');
  const [blocks, setBlocks] = useState(['A', 'B', 'C', 'D', 'D-Annexe', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R']);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupRoomVisible, setPopupRoomVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [roomLinks, setRoomLinks] = useState<string[]>([]);


  const boysBlocks = ['A', 'B', 'C', 'D', 'D-Annexe', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R'];
  const girlsBlocks = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; // Adjust as needed

  const handleHostelChange = (event: SelectChangeEvent<string>) => {
    const selectedHostel = event.target.value as string;
    setHostelType(selectedHostel);
    setBlocks(selectedHostel === 'Boys Hostel' ? boysBlocks : girlsBlocks);
  };



  const show = async (index: number) => {
    try {
        const res = await axios.get(`/hostelData?index=${index}`);

        if (res.status !== 200) {
            throw new Error('Network response was not ok');
        }

        const result = res.data;
        const d_list = result.data;

        // Update Room Links
        const room_links: string[] = Object.keys(d_list.room).map((roomKey) => d_list.room[roomKey].AC.link);
        setRoomLinks(room_links);

        // Update the Block Picture
        const pic_b = document.querySelector(".p-image") as HTMLImageElement;
        if (pic_b) {
            pic_b.src = result.B_image;
            console.log(result.B_image);
        } else {
            console.error("Block picture element not found");
        }

        // Update the Name
        const t_name = document.querySelector(".b_name") as HTMLElement;
        if (t_name) {
            t_name.textContent = result.name;
        } else {
            console.error("Block name element not found");
        }

        // Update Overview
        const text = document.querySelector(".summary") as HTMLElement;
        if (text) {
            text.textContent = d_list.sum;
        } else {
            console.error("Summary element not found");
        }

        // Update Amenities
        const amenities = d_list.ameneties;
        const list_a = document.querySelector(".A_list") as HTMLUListElement;
        if (list_a) {
            list_a.innerHTML = ''; // Clear previous items
            for (const x in amenities) {
                const row_a = document.createElement("li");
                row_a.textContent = `${x}: ${amenities[x]}`;
                list_a.appendChild(row_a);
            }
        } else {
            console.error("Amenities list element not found");
        }

        // Update Floor Plan
        const photo = document.querySelector(".photo") as HTMLIFrameElement;
        if (photo) {
            photo.src = d_list.floor_plan;
        } else {
            console.error("Floor plan iframe not found");
        }

        // Update Room Count Extraction
        const list_r = document.querySelector(".B_list") as HTMLUListElement;
        if (list_r) {
            list_r.innerHTML = ''; // Clear previous items
            for (const roomKey in d_list.room) {
                const room = d_list.room[roomKey];
                const row_roo = `Room ${roomKey} `;
                const row_r = document.createElement("li");
                row_r.textContent = `${row_roo}AC: ${room.AC.count}, NAC: ${room.NAC.count}`;
                list_r.appendChild(row_r);
            }
        } else {
            console.error("Room list element not found");
        }

        // Update Mess Options
        const mess = d_list.mess;
        const list_m = document.querySelector(".M_list") as HTMLUListElement;
        if (list_m) {
            list_m.innerHTML = ''; // Clear previous items
            for (const x in mess) {
                const row_m = document.createElement("li");
                row_m.textContent = `${x}: ${mess[x]}`;
                list_m.appendChild(row_m);
            }
        } else {
            console.error("Mess list element not found");
        }

        // Update Room Image Carousel
        const room_pic_list = document.querySelector(".carousel") as HTMLDivElement;
        if (room_pic_list) {
            room_pic_list.innerHTML = ''; // Clear previous items
            for (const link of room_links) {
                const room = document.createElement("div");
                room.className = 'carousel-slide';
                const room_pic = document.createElement("img");
                room_pic.className = 'slide';
                room_pic.src = link;
                room.appendChild(room_pic);
                room_pic_list.appendChild(room);
            }
        } else {
            console.error("Carousel list element not found");
        }

        // Logic for displaying the slides
        setCurrentSlide(0); // Reset the slide index when fetching new data

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};



  const handleFloorPlanClick = () => setPopupVisible(true);
  const handleClosePopup = () => setPopupVisible(false);
  const handleRoomImageClick = () => setPopupRoomVisible(true);
  const handleCloseRoomPopup = () => setPopupRoomVisible(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const changeSlide = (direction: number) => {
    setCurrentSlide((prev) => (prev + direction + roomLinks.length) % roomLinks.length);
  };

  useEffect(() => {
    show(0); // Load initial data
  }, []);

  useEffect(() => {
    if (!auth?.user) {
        return navigate("/login");
    }
}, [auth]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <div className="Main-box">
        <div className="nav">
          <FormControl variant="outlined" className="drop-down" sx={{ borderRadius: 2, minWidth: 200 }}>
            <InputLabel id="hostel-type-label" sx={{ fontWeight: 'bold', fontSize: "0px", color: 'black' }}>
              Hostel Type
            </InputLabel>
            <Select
              labelId="hostel-type-label"
              value={hostelType}
              onChange={handleHostelChange}
              label="Hostel Type"
              sx={{
                '& .MuiSelect-select': {
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#888',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#3f51b5',
                },
              }}
            >
              <MenuItem value="Boys Hostel" sx={{ color: 'black' }}>Men's Hostel</MenuItem>
              <MenuItem value="Girls Hostel" sx={{ color: 'black' }}>Ladies' Hostel</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="content">
          <div className="scroll">
            <div className="options">
              {blocks.map((block, index) => (
                <div key={index} onClick={() => show(index)}>
                  {block} Block
                </div>
              ))}
            </div>
          </div>
          <div className="preview">
            <div className="preview-image">
              <img className="p-image" src="M-Block.jpg" title="Hostel-pic" alt="Hostel Preview" />
            </div>
            <div className="Data">
              <div className="block_name">
                <h2 className="b_name"></h2>
              </div>
              <div className="data_div">
                <div className="head_nav"><h3>Overview</h3></div>
                <div className="data_content"><p className="summary"></p></div>
              </div>
              <div className="data_div">
                <div className="head_nav"><h3>Amenities</h3></div>
                <div className="data_content">
                  <ul className="A_list"></ul>
                </div>
              </div>
              <div className="data_div">
                <div className="head_nav"><h3>Bed-Count</h3></div>
                <div className="data_content">
                  <ul className="B_list"></ul>
                </div>
              </div>
              <div className="data_div">
                <div className="head_nav"><h3>Mess Options and Vendors</h3></div>
                <div className="data_content">
                  <ul className="M_list"></ul>
                </div>
              </div>
            </div>
            <div className="buttons-dis">
              <button className="dis" id="floor-plan" onClick={handleFloorPlanClick}>
                <h3>Floor Plan</h3>
              </button>
              <button className="dis" id="room-image" onClick={handleRoomImageClick}>
                <h3>Rooms</h3>
              </button>
            </div>
          </div>
        </div>

        {popupVisible && (
          <div className="popup" id="popup" style={{ display: "flex" }}>
            <nav className="navbar">
              <span className="close" onClick={handleClosePopup}>&times;</span>
            </nav>
            <div className="popup-content">
              <iframe
                src="https://drive.google.com/file/d/1RbGGHiXoIhbzdbn6eL7YinVjXMabRQxk/preview"
                width="900"
                height="600"
                allow="autoplay"
                className="photo"
                title="Floor-Plan"
              ></iframe>
            </div>
          </div>
        )}

        {popupRoomVisible && (
          <div className="popup-room" id="popup-room" style={{ display: "flex" }}>
            <nav className="navbar">
              <span className="close" onClick={handleCloseRoomPopup} style={{ fontSize: '30px' }}>&times;</span>
            </nav>
            <div className="popup-content-room">
              <div className="slide-previous">
                <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
              </div>
              <div className="carousel">
                {roomLinks.map((link, index) => (
                  <div key={index} className={`carousel-slide ${currentSlide === index ? 'active' : ''}`}>
                    <img className="slide" src={link} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="slide-next">
                <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
}

export default Hostel_Mess;

