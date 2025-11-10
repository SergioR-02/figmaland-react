import './Features.css';
import FeatureCard from '../FeatureCard/FeatureCard';
import SectionTexts from '../SectionTexts/SectionTexts';
import mobileVideo from '../../assets/videos/mobile.mp4';
import desktopVideo from '../../assets/videos/desktop.mp4';
import iconOpentype from '../../assets/images/icon_opentype.svg';
import iconDesign from '../../assets/images/icon_design.svg';
import iconFastest from '../../assets/images/icon_fastest.svg';

const Features = () => {
  return (
    <main className="main" id="features">
      <section className="section">
        <div className="section__container container">
          <SectionTexts
            title={'Features'}
            subtitleMobile={'Most calendars are designed for teams.'}
            subtitleDesktop={'Most calendars are designed for teams. Slate is designed for freelancers'}
          />
          <video className="section__video mobile" controls>
            <source src={mobileVideo} type="video/mp4" />
          </video>

          <section className="section__information">
            <FeatureCard
              iconSrc={iconOpentype}
              title="OpenType features Variable fonts"
              description={
                'Slate helps you see how many more days you need to work to reach your financial goal.'
              }
            />

            <FeatureCard
              iconSrc={iconDesign}
              title="Design with real data"
              description={
                'Slate helps you see how many more days you need to work to reach your financial goal.'
              }
            />

            <FeatureCard
              iconSrc={iconFastest}
              title="Fastest way to take action"
              description={
                'Slate helps you see how many more days you need to work to reach your financial goal.'
              }
            />
          </section>

          <video className="section__video desktop" controls>
            <source src={desktopVideo} type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
};

export default Features;
