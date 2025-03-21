import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Police() {
const navigate = useNavigate()
  return (
    <div className="h-screen bg-cover opacity-90 flex justify-center items-center bg-center bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1742355389/portrait-male-security-guard-with-uniform_23-2150368732_qyyu5p.jpg')]">
   <div>
        
        <nav style={styles.navbar}>
          <h2 style={styles.logo} className='hover:cursor-pointer'
          onClick={()=>navigate("/")}>Main Portal</h2>
          <ul style={styles.navLinks}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/login" style={styles.link}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const styles = {
    navContainer: {
      position: "absolute",
      top: "10px", // Keeps it at the top
      left: "50%",
      transform: "translateX(-50%)", // Centers it horizontally
      width: "80%", // Adjust width for responsiveness
      maxWidth: "900px", // Prevents it from getting too wide on large screens
      background: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
      borderRadius: "10px", // Rounded corners
      padding: "10px 20px",
      zIndex: 1000, // Ensures it stays on top
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap", // Ensures responsiveness
    },
    logo: { 
      margin: 0, 
      color: "white", 
      fontSize: "22px", 
      fontWeight: "bold" 
    },
    navLinks: { 
      listStyle: "none", 
      display: "flex", 
      gap: "15px", 
      margin: 0, 
      padding: 0, 
      flexWrap: "wrap", // Ensures items wrap in small screens
    },
    link: { 
      textDecoration: "none", 
      color: "white", 
      fontSize: "16px", 
      padding: "8px 12px", 
      transition: "0.3s",
      borderRadius: "5px",
    }
  };
export default Police