import React , {useState} from 'react'
import './Hire.scss'

const Hire = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };
  return (
    <div className='contact-hire'>
      <div className='notice'>
         <h2>
         Are you ready to indulge in a delectable journey of sweetness and sophistication? <br/>
         Look no further than <span>Erin Sweet Treats</span>, where we offer an array of premium services designed to elevate your experience to new heights.<br/>
         Whether you're celebrating a special occasion or simply craving a moment of indulgence,<br/>
         our bespoke offerings are crafted with meticulous attention to detail and an unwavering commitment to quality.
         </h2>

      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Hire