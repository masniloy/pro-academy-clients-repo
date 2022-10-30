import React from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PdfDownload = ({ courseid, filename }) => {
    const downlodeCourseDetails = () => {
        const input = document.getElementById(courseid);
        html2canvas(input).then((convas) => {
            const imagedata = convas.toDataURL('image/pdf');
            const pdf = new jsPDF('p', "pt", "a1");
            pdf.addImage(imagedata, "JPEGA", 0, 0);
            pdf.save(`${filename}`);
        });
    }

    return (
        <div>
            <Link className='buttons mt-5' onClick={downlodeCourseDetails}><b> Downlode Course Detail</b></Link><br />
        </div>
    );
};

export default PdfDownload;