import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '../components/resumePDF'; // Import the ResumePDF component
import './resume.css';
import resumeImage from '../images/rResume.jpg'; // Import the resume image


const Resume = () => (
  <div className='resume-container'>
    <div className='resume-pdf-container'>
      <h2>Resume</h2>
      <PDFDownloadLink document={<ResumePDF />} fileName="resume.pdf" className='resume-pdf'>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
    <img src={resumeImage} alt="Resume" />

  </div>
);

export default Resume;
