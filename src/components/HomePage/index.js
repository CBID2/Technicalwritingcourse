import React from "react";
import styles from "./styles.module.css";

export default function Homepage() {
  return (
    <>
      { }
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              WELCOME TO THE TECHNICAL WRITING MENTORSHIP PROGRAM
            </h1>
            <a
              className={styles.button}
              href="https://discord.gg/UC4QEsE8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join us on Discord
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dmvphwhvc/image/upload/v1746784638/transparent_1746727403_8269_fbdc3y.svg"
              alt="Technical writing illustration"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      { }
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dmvphwhvc/image/upload/v1746783075/transparent_1746727524_6550_t2uoah.svg"
              alt="Direct mentorship"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>DIRECT MENTORSHIP</h1>
            <p className={styles.subtitle} style={{}}>
              Our Direct Mentorship program is designed to provide personalized guidance and one-on-one support to aspiring or early-career technical writers.
              Whether you're transitioning into technical writing or looking to refine your skills, direct mentorship gives you access to experienced professionals who are
              here to help you grow with intention and clarity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
