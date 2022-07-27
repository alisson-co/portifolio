import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from "react-icons/Di"

import '../assets/styles/components/techcontainer.sass';

export function TechnologiesContainer() {

    const technologies = [
        { id: "html", name: "HTML5", icon: <DiHtml5 /> },
        { id: "css", name: "CSS3", icon: <DiCss3 /> },
        { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
        { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
        { id: "mysql", name: "MySQL", icon: <DiMysql /> },
        { id: "react", name: "React", icon: <DiReact /> },
    ];

    return(
        <section className="tech-container">
            <h2>Tecnologias</h2>
            <div className="tech-div">
                {technologies.map((tech) => (
                    <div className="tech-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tech-info">
                            <h3>{tech.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};