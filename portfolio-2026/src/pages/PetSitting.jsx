import PetNavbar from "../components/PetNavbar"
import PetAccueil from "../components/PetAccueil"
import PetPropos from "../components/PetPropos"
import PetServices from "../components/PetServices"
import PetFooter from "../components/PetFooter"
import PetDessin from "../components/PetDessin"

import PawsBg from "../assets/images/Pets/Paws.png"

import "../styles/Pet-sitting.css"

const PetSitting = () => {
  return (
    <div>
      <PetNavbar />
      <div className="pet-body">
        <img src={PawsBg} alt="" className="pet-bg-paws"/>
        <PetAccueil />
        <PetPropos />
        <PetServices />
        <PetDessin />
      </div>
      <PetFooter/>
    </div>
  )
}

export default PetSitting
