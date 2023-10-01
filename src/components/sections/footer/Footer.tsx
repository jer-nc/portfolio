import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-4 w-full flex justify-center'>
      <h3 className='text-muted-foreground text-sm'>Jer - Portfolio {currentYear}</h3>
    </footer>
  );
};

export default Footer;
