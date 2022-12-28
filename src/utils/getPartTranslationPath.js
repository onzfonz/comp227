const getPartTranslationPath = (language, part, path = '') => {
  return language === 'en' ? `/part${part}${path}` : `/${language}/part${part}${path}`;
};

export default getPartTranslationPath;
