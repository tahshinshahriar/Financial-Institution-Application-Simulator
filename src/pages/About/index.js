import React from "react";
import { Button } from "../../components/common/Button";
import './styles.css';
import { Link } from "react-router-dom";
import HeaderB from "../../components/header";





function AboutPage() {
    return (
      <div className='hero-container'>
        <HeaderB />
        <video src='/videos/HomeVid.mp4' autoPlay loop muted />
        
        <div>
        <h1>About the Financial Institution Application Simulator</h1>
        <p>
    The "Financial Institution Application Simulator" is a comprehensive project developed by Fardin Rahman and Tahshin Shahriar from the ground up, showcasing their expertise in full-stack development and their ability to deliver robust financial solutions. The application offers a suite of features akin to those found in modern mobile banking apps, providing users with a realistic and secure banking simulation experience.
  </p>
  <h3>Key Features and Technologies:</h3>
  <ul>
    <li><strong>User Authentication and Security:</strong> Leveraging Auth0, the application ensures secure and reliable authentication for its users, safeguarding sensitive information and enhancing overall trust.</li>
    <li><strong>Data Management:</strong> Initially, data is stored in Google Sheets, offering a flexible and user-friendly environment for managing and manipulating data. This setup allows for easy adjustments during the development and testing phases.</li>
    <li><strong>Scalable Database Solution:</strong> The application includes functionality to export data to MongoDB Atlas Database, a highly scalable and performant NoSQL database. This migration supports the handling of large datasets and provides robust data management capabilities.</li>
    <li><strong>Frontend Development:</strong> Utilizing React.js, the front-end of the application is designed to be highly responsive and interactive. This modern JavaScript library enables the creation of a dynamic user interface that significantly enhances user experience.</li>
    <li><strong>Backend Development:</strong> The backend server is developed using Python and Flask, providing a lightweight yet powerful framework for handling server-side logic. This combination ensures efficient processing and quick response times, essential for a seamless user experience.</li>
    <li><strong>Core Banking Features:</strong> The simulator replicates essential mobile banking functions, such as account management, transaction processing, and balance inquiries. These features are designed to engage users and offer a realistic banking experience.</li>
    <li><strong>Cross-Platform Compatibility:</strong> The application is designed to be accessible across various platforms, ensuring a wide reach and improved user accessibility.</li>
  </ul>
  <p>
    This project highlights the developers' ability to integrate modern web technologies and manage end-to-end software development. The "Financial Institution Application Simulator" not only demonstrates technical prowess but also an understanding of user-centric design and scalable architecture, making it a noteworthy contribution to the field of financial technology.
  </p>

        </div>
        

        <div className='hero-btns'>
            <Link to='/Signup'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          </Link>
          
          <Link to='/Login'>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            LOGIN
          </Button>
          </Link>
          
        </div>
      </div>
      
    );
  }
  
  export default AboutPage;