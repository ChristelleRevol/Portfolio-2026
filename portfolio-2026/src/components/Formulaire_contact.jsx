import { useState } from "react"

const FormulaireContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState("")

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Envoyer</button>
    </form>
    {status && <p class="status-msg">{status}</p>}
    </div>
  )
}

export default FormulaireContact
