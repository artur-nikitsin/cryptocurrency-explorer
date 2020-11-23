import React from 'react';
import './footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>{`Artur Nikitsin ${currentYear}. All rights reversed ©`}</p>
    </div>
  );
};
export default Footer;
