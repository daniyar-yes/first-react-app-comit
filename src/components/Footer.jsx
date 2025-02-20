/* eslint-disable react/prop-types */
const Footer = ({ footerData }) => {
  const currentYear = new Date().getFullYear();
  const footerContent = `${currentYear} ${footerData}`;
  return (
    <footer>
      <h6>{footerContent}</h6>
    </footer>
  );
};

export default Footer;
