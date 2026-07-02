import { FaRegUserCircle } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <div className="testimonial-header">
            <FaRegUserCircle className="profile-icon" />
            <h3>Priya Sharma</h3>
          </div>
          <p>
            “Absolutely loved the cakes! Fresh, soft and delicious.”
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <FaRegUserCircle className="profile-icon" />
            <h3>Rahul Verma</h3>
          </div>
          <p>
            “Best bakery experience. Their pastries are amazing!”
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <FaRegUserCircle className="profile-icon" />
            <h3>Anjali Patel</h3>
          </div>
          <p>
            “Freshly baked happiness truly describes this bakery.”
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;