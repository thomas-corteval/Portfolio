import Header from '../components/header'
import '../variable.css'
import './contact.css'

function Contact() {
  return (
    <>
      <Header/>
      <div id='contact'>
        <h1>Me contacter</h1>
        <p>N'hésitez pas à m'envoyer un message via ce formulaire.</p>

        <form
          action="https://formspree.io/f/mvgalnbd" // Remplace par ton lien Formspree
          method="POST"
          className="contact-form"
        >
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="message">Message :</label>
          <textarea name="message" id="message" rows="5" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  )
}

export default Contact
