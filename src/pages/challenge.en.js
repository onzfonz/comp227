import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="COMP227 -challenge | COMP 227"
      seoDescription="COMP 227 will have many challenges that students will face.  Be a team player"
      aboutContent={[
        'COMP 227 is largely offered as an asynchronous course, while still providing regular updates',
        'Asynchronous courses are notorious for not providing as many opportunities for feedback and to help each other out',
        'Be active in the class discord so that you all can support each other and at the same time you can help yourself have a stronger understanding of the material',
        'The course was built by coders for coders, and offers something for both newcomers and seasoned industry veterans alike. The only prerequisite is a solid grasp of basic programming fundamentals.',
      ]}
      joinContent={[
        'By accepting the challenge you are encouraging and empowering the members of your working community to acquire new skills. The fully-online Full Stack course will make a great addition to your internal training and development programs and will serve well as self-study material amongst your other in-company training offerings.',
        'By partaking in the challenge, you will send a strong message to the outside world about your company’s technical expertise — this will help build your employer image and increase your visibility to software industry professionals.',
        'Joining the challenge is free of charge. Companies that heed the call and accept the challenge will have their logo proudly placed on the Full Stack course webpage.',
      ]}
    />
  );
};

export default Challenge;
