import PetNavbar from "../components/PetNavbar"
import PetAccueil from "../components/PetAccueil"
import PetPropos from "../components/PetPropos"
import PetServices from "../components/PetServices"
import PetFooter from "../components/PetFooter"
import PetDessin from "../components/PetDessin"
import PetContact from "../components/PetContact"
import PetAvis from "../components/PetAvis"

import PawsBg from "../assets/images/Pets/Paws2.svg"
import Up from "../assets/images/SVG/arrow-circle-up.svg"

import "../styles/Pet-sitting.css"
// import { useState, useEffect } from "react";

// const breakpoint = 850

const PetSitting = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const [isActive, setIsActive] = useState(false);

  // const isMobile = width < breakpoint

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   const handleClick = (e) => {
  //   if (isMobile) {
  //     setIsActive((prev) => !prev);
  //   }
  //   if (onClick) onClick(e);
  // };

  return (
    <div>
      <PetNavbar />
      <div className="pet-body">
        <img src={PawsBg} alt="" className="pet-bg-paws"/>
        <div className="pet-bg-fade-mask"></div>
        {/* <p>{windowWidth}</p> */}

        <a href="#petnavbar" className="up-to-navbar-a">
          <img src={Up} alt="up logo" className="up-to-navbar"/>
        </a>

        <PetAccueil />
        <PetPropos />
        <PetServices />
        <PetDessin />
        <PetContact />
        <PetAvis />
      </div>
      <PetFooter/>
    </div>
  )
}

export default PetSitting
