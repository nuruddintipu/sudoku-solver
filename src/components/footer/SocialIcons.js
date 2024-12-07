import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

function SocialIcon({ icon, size = "1x", style = {}, className = "",  href = "" }) {
    return (
        <a href={href}
           target="_blank"
           rel="noopener noreferrer"
           className={`social-icon ${className}`} style={style}>
            <FontAwesomeIcon icon={icon} size={size} />
        </a>

    );
}
function SocialIcons() {
    return (
        <div className="social-icons">
            <SocialIcon icon={faTwitter}/>
            <SocialIcon href="https://facebook.com" icon={faFacebook}/>
            <SocialIcon icon={faInstagram}/>
            <SocialIcon icon={faLinkedin}/>
        </div>
    );
}

export default SocialIcons;
