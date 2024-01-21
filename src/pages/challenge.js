import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="COMP227 -challenge | COMP 227"
      seoDescription="COMP 227 will have many challenges that students will face.  Be a team player"
      aboutContent={[
        'COMP 227 is largely offered as a new asynchronously online course here at the University. Asynchronous courses are notorious for not providing as many opportunities for feedback or to get help when you are in dire need of it. The course is even more challenging when you think you have to go it alone.',
        'Be active in the class discord so that you all can support each other and at the same time you can help yourself have a stronger understanding of the material. Make a habit of helping someone out via the discord and to look for problems as they do.',
        'On the other hand, you must have a solid grasp of basic programming fundamentals. If you get stuck, do not immediately ask for help, but ensure you have some understanding of what is happening. The course was built by coders for coders, and offers something for both newcomers and seasoned industry veterans alike.',
      ]}
      joinContent={[
        'By accepting the challenge you are encouraging and empowering the members of your working community to acquire new skills.',
        'Taking this course will make a great addition to your programming toolkit and will serve well as self-study material amongst your other classes.',
        'By partaking in the challenge, you will send a strong message to the outside world about your expertise — this will help build Pacific’s image and increase your visibility to software industry professionals.',
      ]}
    />
  );
};

export default Challenge;
