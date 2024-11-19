import React from 'react';
import { Document, Page, Image, StyleSheet } from '@react-pdf/renderer';
import resumeImage from '../images/resume.jpg'; // Import the resume image

// Create styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={resumeImage} style={styles.image} />
    </Page>
  </Document>
);

export default ResumePDF;
