import "../styles/image_cards.css"

const ImageCards = ({ src, alt, className, title, description, keywords }) => {
  return(
<div className={`image-card ${className}`}>
      <img src={src} alt={alt} />
      <div className="overlay">
        <div className="overlay-content">
          <h3 className="overlay-title">{title}</h3>
          <p className="overlay-description">{description}</p>
          <div className="overlay-keywords">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="keyword-tag"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCards
