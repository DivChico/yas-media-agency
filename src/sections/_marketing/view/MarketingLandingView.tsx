//
import ContactMarketing from '../../contact/marketing';
import {
  MarketingLandingFaqs,
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingFreeSEO,
  MarketingLandingProcess,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
  MarketingLandingWhatsApp,
} from '../landing';

// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  return (
    <>
      <MarketingLandingHero />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <MarketingLandingCaseStudies />

      <MarketingLandingFaqs />

      <MarketingLandingFreeSEO />

      <ContactMarketing />

      <MarketingLandingWhatsApp />
    </>
  );
}
