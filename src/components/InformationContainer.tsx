import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../assets/styles/components/informationcontainer.sass'

export function InformationContainer(){
    return(
        <section id="information-container">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(47) 99999-9999</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>email@email.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Cidade / BR</p>
                </div>
            </div>
        </section>
    );
};