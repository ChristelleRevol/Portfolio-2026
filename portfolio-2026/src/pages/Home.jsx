import HomeAbout from "../components/Home_about"
import HomeDescription from "../components/Home_description"
import HomeServices from "../components/Home_services"

const Home = () => {
  return (
    <div className="home-container">
      <HomeDescription />
      <HomeServices />
      <HomeAbout />
    </div>

  )
}

export default Home
