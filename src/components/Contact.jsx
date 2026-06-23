function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-info">
          <h3>The Sunday Oven</h3>
          <p>Address: Lucknow, Uttar Pradesh</p>
          <p>Contact no.: +91 9876543210</p>
          <p>Email ID: thesundayoven@gmail.com</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;




