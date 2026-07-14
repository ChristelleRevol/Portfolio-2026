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


const PetSitting = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div>
      <PetNavbar />
      <div className="pet-body">
        <img src={PawsBg} alt="" className="pet-bg-paws"/>
        <div className="pet-bg-fade-mask"></div>
        {/* <p>{windowWidth}</p> */}
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
