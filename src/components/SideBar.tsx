import { InformationContainer } from "./InformationContainer";
import { SocialNetworkContainer } from "./SocialNetworkContainer";

import '../assets/styles/components/sidebar.sass';

import Avatar from "../assets/img/eu.jpg";

export function SideBar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Alisson Oliveira" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href="#" className="btn">
                Download currículo
            </a>
        </aside>
    );
};
  