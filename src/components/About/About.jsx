import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>        
                            <h3>Software Developer</h3>
                            <p>
                                I am a dedicated software developer with over 5 years of experience in designing, developing, and optimizing software solutions across various platforms.
                                Proficient in C/C++, Java, and Python, I have successfully delivered high-quality applications that enhance user experience and meet business needs.
                                My expertise extends to Android development, where I have built robust mobile applications, and web development using JavaScript and CSS, 
                                allowing me to create seamless, responsive interfaces.
                            </p>

                            <p>
                                I have a solid foundation in file systems, particularly WAFL, and a strong understanding of database management with MySQL,
                                enabling efficient data storage and retrieval. Additionally, my experience with artificial intelligence and machine learning has 
                                equipped me with the skills to implement intelligent algorithms that drive data-driven decision-making.
</p>
<p>
I thrive in collaborative environments, leveraging agile methodologies to deliver projects on time while maintaining high standards of code quality. I am passionate about continuous learning and staying updated with industry trends, which helps me to innovate and adapt in a fast-paced technological landscape. </p>
                        </div>   
                    </li>
                    {/* <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="server icon"
                        />
                        <div className={styles.aboutItemText}>        
                            <h3>Software Developer</h3>
                            <p>I am system develop at samsung</p>
                        </div>   
                    </li> */}
                </ul>
            </div>
        </section>
    );
};

