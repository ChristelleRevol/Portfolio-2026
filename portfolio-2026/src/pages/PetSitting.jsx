import PetNavbar from "../components/PetNavbar"
import PetAccueil from "../components/PetAccueil"
import PetPropos from "../components/PetPropos"
import PetServices from "../components/PetServices"
import PetFooter from "../components/PetFooter"
import PetDessin from "../components/PetDessin"
import PetContact from "../components/PetContact"
import PetAvis from "../components/PetAvis"

import PawsBg from "../assets/images/Pets/Paws2.svg"

import "../styles/Pet-sitting.css"

import { useEffect, useState } from "react";

const PetSitting = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <PetNavbar />
      <div className="pet-body">
        <img src={PawsBg} alt="" className="pet-bg-paws"/>
        <p>{windowWidth}</p>
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
