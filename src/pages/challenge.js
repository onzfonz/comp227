import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="COMP 227"
      seoDescription="To Be Determined later"
      aboutContent={[
        'Line 1.',
        'Line 2.',
        'Line 3.',
        'Line 4',
      ]}
      joinContent={[
        'Join 1',
        'Join 2.',
        'Join 3.',
      ]}
    />
  );
};

export default Challenge;
