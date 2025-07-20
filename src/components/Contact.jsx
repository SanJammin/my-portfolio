'use client';
import '../app/globals.css';

export default function Contact() {
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <p className="heading-sec__sub heading-sec__sub--lt">
            Please reach out if you have any questions! I'm happy to jump on a video call to
            brainstorm projects and ideas. Send me an email at{' '}
            <a href="mailto:freddie.farr893@gmail.com">freddie.farr893@gmail.com</a> or message me
            on LinkedIn.
          </p>
        </h2>
      </div>
    </section>
  );
}
