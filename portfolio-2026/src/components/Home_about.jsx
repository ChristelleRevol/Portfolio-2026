import "../styles/Home_about.css"
import photo from "../assets/images/Photo_2.png"
import path from "../assets/images/Path.png"
import BtnContact from "./Btn_contact"

const HomeAbout = () => {
  return (
    <div className="about-container">
      <div className="about-top">
        <img src={photo} alt="my photo" className="photo"/>
        <div className="about-right">
          <p className="about-text">After studying <span className="text-orange">foreign languages</span> and gaining several years of experience in <span className="text-orange">storyboard and illustration,</span>
            I transitioned into full-stack web development. Being surrounded by developers for most of my life sparked
            my passion for this field, along with a constant desire to keep learning about it and exploring its possibilities. <br />
            <br />
            My background in <span className="text-orange">graphic design</span> has also given me a strong sensitivity to <span className="text-orange">UI/UX,</span> which has allowed me to
            work in this area on certain projects alongside my <span className="text-orange">web development work.</span> <br />
            <br />
            Independent, detail-oriented, and highly curious, I am very motivated to contribute to your upcoming
            solutions!</p>

            <div className="text-and-btn">
              <p className="question-text">You would like to present a project, have me join your team, or ask a question?</p>
              <BtnContact />
            </div>
          </div>
        </div>
        <div className="about-bottom">
          <img src={path} alt="education path illustration" className="path-img"/>
        </div>
    </div>
  )

}

export default HomeAbout
