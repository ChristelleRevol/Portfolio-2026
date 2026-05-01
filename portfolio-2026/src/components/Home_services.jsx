import "../styles/Home_services.css"

import banner from "../assets/images/SVG/Services_banner.svg"

const HomeServices = () => {
  return (
    <div className="services-container">
      <div className="banner-container">
        <img src={banner} alt="services sumup" className="services-banner"/>
      </div>
    </div>
  )
}

export default HomeServices
