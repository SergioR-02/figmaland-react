import SocialIcons from '../SocialIcons/SocialIcons';
import './Footer.css';
import iconLocationWhite from '../../assets/images/icon_location._white.svg';
import iconPhoneWhite from '../../assets/images/icon_phone_white.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__collaborators">
          <h3 className="footer__title mobile">Annette Steward</h3>
          <ol className="footer__list_names mobile">
            <p>Jennie Cooper</p>
            <p>Julie Henry</p>
            <p>Johnny Murphy</p>
            <p>Gregory Mccoy</p>
            <p>Marvin Mckinney</p>
          </ol>

          <h3 className="footer__title desktop">Pages</h3>
          <ol className="footer__list_names desktop">
            <p>Home</p>
            <p>Product</p>
            <p>Pricing</p>
            <p>About</p>
            <p>Contact</p>
          </ol>
        </div>
        <div className="footer__collaborators">
          <h3 className="footer__title mobile">Annette Steward</h3>
          <ol className="footer__list_names mobile">
            <p>Jennie Cooper</p>
            <p>Julie Henry</p>
            <p>Johnny Murphy</p>
            <p>Gregory Mccoy</p>
            <p>Marvin Mckinney</p>
          </ol>

          <h3 className="footer__title desktop">Tomothy</h3>
          <ol className="footer__list_names desktop">
            <p>Eleanor Edwards</p>
            <p>Ted Robertson</p>
            <p>Annette Russell</p>
            <p>Jennie Mckinney</p>
            <p>Gloria Richards</p>
          </ol>
        </div>

        <div className="footer__collaborators">
          <h3 className="footer__title mobile">Annette Steward</h3>
          <ol className="footer__list_names mobile">
            <p>Jennie Cooper</p>
            <p>Julie Henry</p>
            <p>Johnny Murphy</p>
            <p>Gregory Mccoy</p>
            <p>Marvin Mckinney</p>
          </ol>

          <h3 className="footer__title desktop">Jane Black</h3>
          <ol className="footer__list_names desktop">
            <p>Philip Jones</p>
            <p>Product</p>
            <p>Colleen Russell</p>
            <p>Marvin Hawkins</p>
            <p>Bruce Simmmons</p>
          </ol>
        </div>

        <div>
          <div className="footer__contacs">
            <div className="footer__contactMethods">
              <img src={iconLocationWhite} alt="Location icon" />
              <h6 className="footer__infromation__title">
                7480 Mockingbird Hill undefined
              </h6>
            </div>
            <div className="footer__contactMethods">
              <img src={iconPhoneWhite} alt="Phone icon" />
              <h6 className="footer__infromation__title">(239) 555-0108</h6>
            </div>
            <SocialIcons className="footer__icons"/>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
