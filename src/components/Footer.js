// FOOTER //
import React from "react";

function Footer() {
  const getYear = () => {
    const year = new Date();
    return year.getFullYear();
  }
  return (
    <footer>
      <p>For educational use only &copy; {getYear()}</p>
      <p>Designed and coded by: 
        <a className="github-link" href="https://github.com/omcdanielfeilden"> Olivia Feilden</a> • <a className="github-link" href="https://github.com/seraphinawhite">Seraphina White</a> • <a className="github-link" href="https://github.com/robynabe">Robyn Abe</a> </p>
    </footer>
  );
}

export default Footer;
