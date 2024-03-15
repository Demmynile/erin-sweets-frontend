import React , {useState} from 'react'
import './Hire.scss'
import nodeMailjet from 'node-mailjet'

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

// mailing connection


const mailjet = new nodeMailjet.apiConnect(
  process.env.REACT_APP_MJ_APIKEY_PUBLIC,
  process.env.REACT_APP_MJ_APIKEY_PRIVATE,
);


const handleSubmit = (e) => {
    e.preventDefault();
    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": formData.email,
            "Name": formData.name
          },
          "To": [
            {
              "Email": "info@erinsweettreats.com",
              "Name": "Erin manley"
            }
          ],
          "Subject": "Hiring Purpose.",
          "TextPart": formData.message,
          "HTMLPart": "",
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })
    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })


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