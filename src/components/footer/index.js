import React from 'react';
import {
  MDBFooter
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <MDBFooter className='bg-dark text-center text-white'>
      
      <br></br>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {currentYear} Copyright: 
        <a className='text-white' href='/'>
           T Bank Inc.
        </a>
      </div>
    </MDBFooter>
  );
}
