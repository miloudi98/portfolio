import styles from "./aboutme.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h3>About me</h3>
      <p>
        Hi, my name is Ghait and I am a 4th year software engineering 
        student at the university of Ottawa.
        <br/>
        <br/>
        I am interested in compilers and operating systems and I generally like to understand how
        things work under the hood.
        <br/>
        <br/>
        I program mostly in C++.
      </p>

      <h3>Work</h3>
      <p>
        I am not very experienced in user interface design, but I am slowly learning.
        <br/> <br/>
        I am currently taking a user interface design course at the university of Ottawa. I also try to learn from other resources as well.
        <br/> <br/>
        Relevant links: <a className={styles.link} href="https://catalogue.uottawa.ca/en/courses/seg/">SEG3125</a> and <a className={styles.link} href="https://www.nngroup.com/"> NNGroup </a>
      </p>
        
      <h3>Projects</h3>

      <div className={styles.projects}>

        <a href="/bikeshop">
          <img
            src="/microprocessor.png"
            alt="Microprocessor"
          />

          <p className={styles.project_title}>
            Design #1
          </p>

          <p className={styles.project_description}>
            Bikeshop platform.
            <br/>
            Allows users to buy/repair bikes or even book appointments with specialists.
          </p>
        </a>

        <a href="/memoize">
          <img
            src="/cube.png"
            alt="Cube"
          />

          <p className={styles.project_title}>
            Memoize
          </p>

          <p className={styles.project_description}>
            Memory game website.
            <br/>
            Fun memory game that challenges your memory.
          </p>
        </a>

        <a href="/pcbuilder">
          <img
            src="/forest.png"
            alt="Microprocessor"
          />

          <p className={styles.project_title}>
            PCBuilder
          </p>

          <p className={styles.project_description}>
            E-commerce site.
            <br/>
            E-commerce platform for selling pc parts.
          </p>
        </a>

        <a href="/project/4">
          <img
            src="/tunnel.png"
            alt="Microprocessor"
          />

          <p className={styles.project_title}>
            Design #4
          </p>

          <p className={styles.project_description}>
            Analytics site + final portfolio.
            <br/>
            The full description will be available at a later date.
          </p>
        </a>

      </div>
    </div>
  );
}
