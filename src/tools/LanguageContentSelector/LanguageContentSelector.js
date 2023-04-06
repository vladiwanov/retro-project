import heroUa from 'db/ua/hero-ua';
import navigationUa from 'db/ua/navigation-ua';
// import submitFormUa from 'db/ua/submitForm-ua';
import contactUsUa from 'db/ua/contactUs-ua';
import benefitsUa from 'db/ua/benefits-ua';
import teamUa from 'db/ua/team-ua';
import portfolioUa from 'db/ua/potfolio-ua';
import communitiesUa from 'db/ua/communities-ua';

import heroEn from 'db/en/hero-en';
import navigationEn from 'db/en/navigation-en';
// import submitFormEn from 'db/en/submitForm-en';
import contactUsEn from 'db/en/contactUs-en';
import benefitsEn from 'db/en/benefits-en';
import teamEn from 'db/en/team-en';
import portfolioEn from 'db/en/potfolio-en';
import communitiesEn from 'db/en/communities-en';

const LangContentSelector = currentLanguage => {
  const ua = {
    hero: heroUa,
    navigation: navigationUa,
    benefits: benefitsUa,
    team: teamUa,
    portfolio: portfolioUa,

    // submitForm: submitFormUa,
    contactUs: contactUsUa,
    communities: communitiesUa,
  };
  const en = {
    hero: heroEn,
    navigation: navigationEn,
    benefits: benefitsEn,
    team: teamEn,
    portfolio: portfolioEn,

    // submitForm: submitFormEn,
    contactUs: contactUsEn,
    communities: communitiesEn,
  };
  switch (currentLanguage) {
    case 'UA':
      return ua;
    case 'EN':
      return en;
    default:
      return ua;
  }
};
export default LangContentSelector;
