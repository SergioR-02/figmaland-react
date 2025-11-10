import ContactForm from '../ContactForm/ContactForm';
import SocialIcons from '../SocialIcons/SocialIcons';
import SectionTexts from '../SectionTexts/SectionTexts';
import iconLocation from '../assets/images/icon_location.svg';
import iconPhone from '../assets/images/icon_phone.svg';
import iconMail from '../assets/images/icon_mail.svg';
import './Contact.css';

const Contact = () => {
  

  return (
    <section className="section__contact container" id="contact">
      
      <SectionTexts
            title={'Contact Us'}
            subtitleMobile={'Most calendars are designed for teams.'}
            subtitleDesktop={'Most calendars are designed for teams. Slate is designed for freelancers'}
          />

      <div className="contact__content">
        <ContactForm />

        <div className="contact__info">
          <div className="contact__info__icons">
            <div className="contact__info-item">
              <img src={iconLocation} alt="" aria-hidden="true" className="contact__icon" width={26} height={32} />
              <p className="contact__text">6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
            </div>

            <div className="contact__info-item">
              <img src={iconPhone} alt="" aria-hidden="true" className="contact__icon" width={26} height={32} />
              <p className="contact__text">(843) 555-0130</p>
            </div>

            <div className="contact__info-item">
              <img src={iconMail} alt="" aria-hidden="true" className="contact__icon" width={26} height={32} />
              <p className="contact__text">willie.jennings@example.com</p>
            </div>
          </div>
          

          
          <div className="contact__map desktop">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.731317476032!2d-74.08365202501694!3d4.638193542252347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3ecaa94b4f%3A0x3f5419df51e8185b!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1ses-419!2sco!4v1731182012000!5m2!1ses-419!2sco"
              
              style={{ border: 0 }}
              className='contact__map-iframe'
              loading="lazy"
              >
            </iframe>
          </div>


          <SocialIcons  className="contact__icons" color='blue'/>
        </div>
      </div>

    </section>
  );
};

export default Contact;
