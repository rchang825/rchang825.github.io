import React from 'react';

function AboutMe() {
  return (
    <div className="about" id="about">
      <div>
        <h2>About Me</h2>
        <p>
            My name is Ruby Chang, a former people-pleaser turned fullstack software engineer based in Seattle. I love working on thoughtful and user-friendly software that can proactively solve problems before they arise.
        </p>
        <p>
            I recently graduated from the Software Engineering Immersive program at Hack Reactor. Through this rigorous program, I was able to apply my strong foundation in computer programming and the soft skills I had from previous roles to excel in team projects and further develop my sense of autonomy as an engineer. I spent 1000+ hours pair programming on algorithmic code challenges and building fullstack web applications that were deployed and tested.
        </p>
        <p>
            My journey in software engineering actually started with people, not code. Although I have a computer science academic background, working with small teams in customer service, marketing, and sales for previous professional roles taught me the importance of integrity and communication, and made me a receptive, eager student always interested in making something better, doing more, learning more. The satisfaction I get from debugging a tricky piece of code, applying a newly learned principle to enhance a feature, and seeing the impact of my work on users is what drives me as an engineer. I would love to bring my energy and skillset to a team that values empathy and creativity as much as I do.
        </p>
        <p>
            When I'm not programming in front of a computer, I may still be in front of a screen gaming, or reading with my cats stepping on me every 30 minutes to remind me to blink. I also love to cook, bake, and crochet.
        </p>
      </div>
      <div>
        <img src="./images/renfair.jpeg" alt="Ruby at Ren Fair" />
      </div>
    </div>
  );
}

export default AboutMe;