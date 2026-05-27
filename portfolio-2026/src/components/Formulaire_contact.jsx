import { useState } from "react"

const FormulaireContact = () => {
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState("")

  const handleClick = () => {
		setClicked(true);
	};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isMailValid = (email) => {
		const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regexp.test(email);
	};

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
			setStatus("All fields are required");
			return;
		}

		if (!isMailValid(formData.email)) {
			setStatus("Invalid email address");
			return;
		}

    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setStatus('Message send!')
    } else if (!response.ok) {
      setStatus("error server")
    }
  }

  return (
    <div>
      <div class="form">
        <h2 class="form-text">Contact me</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-inside">
            <div class="inputs-group">
              <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-background-color form-margin-right form-text"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-background-color form-text"
            />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="form-background-color form-text"
            />
            <button type="submit"
              onClick={handleClick}
              className={!clicked ? "submit-btn" : "btn-clicked"}
            >
              Send
            </button>
          </div>

        </form>
        {status && <p class="status-msg">{status}</p>}
      </div>

    </div>
  )
}

export default FormulaireContact
