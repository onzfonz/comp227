import React from 'react';
import { useTranslation } from 'react-i18next';

import Arrow from '../components/Arrow/Arrow';
import Element from '../components/Element/Element';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/Image/Image';
import teddy from '../images/ohnodalle.png'
import colors from '../colors';
import getTranslationPath from '../utils/getPartTranslationPath';

const NotFoundPage = () => {
  const { i18n, t } = useTranslation();

  const title = t('notFoundPage:title');
  const siteLanguage = i18n.language;

  return (
    <Layout>
      <SEO title={`${title} | COMP 227`} lang={siteLanguage} />

      <Element className="container spacing--large spacing--after">
        <h1>404 - {title}</h1>
        <p className="col-10 spacing--small spacing--after">
        <Image 
            // contain
            style={{ margin: 0 }}
            alt="Classic 404 Image"
            src={teddy}
        />
        </p>
        <h4 className="col-10 spacing--none spacing--after">
          Oh no! You have the wrong URL.  Did I mistype something, or did you? 🕵️‍♀️
        </h4>



        <Arrow
          className="col-10 arrow__container--with-link"
          bold
          thickBorder
          link="/"
          content={[{ backgroundColor: colors['main'], text: 'Go back home' }]}
        />
      </Element>
    </Layout>
  );
};

export default NotFoundPage;
