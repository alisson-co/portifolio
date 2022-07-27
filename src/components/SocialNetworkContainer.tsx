import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../assets/styles/components/socialnetworks.sass';

const socialNetwork = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> },
];

export function SocialNetworkContainer() {
    return(
        <section id="social-network">
            {socialNetwork.map((network) => (
                <a href="#" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};