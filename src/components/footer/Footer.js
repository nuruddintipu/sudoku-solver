import React, {useState} from 'react';
import SocialIcons from './SocialIcons'; // Reuse the SocialIcons component

function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        footer: {
            backgroundColor: '#eaeaea',
            color: '#222',
            padding: '20px 0',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 10px',
            color: '#222'
        },
        brand: {
            flex: '1',
            marginBottom: '10px',
        },
        brandTitle: {
            fontSize: '1.5rem',
            margin: '0 0 10px 0',
        },
        brandText: {
            fontSize: '0.8rem',
            lineHeight: '1.5',
        },
        links: {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#222'
        },
        link: {
            color: '#222',
            textDecoration: 'none',
            marginBottom: '5px',
            fontSize: '0.9rem',
            transition: 'color 0.3s',
        },
        linkHover: {
            color: '#00aaff',
        },
        social: {
            flex: '1',
            textAlign: 'center',
            marginBottom: '30px'
        },
        socialTitle: {
            fontSize: '1rem',
            marginBottom: '10px',
        },
        copyright: {
            fontSize: "0.6rem",
            textAlign: 'center',
            marginTop: '15px'
        },
        githubLink: {
            color: isHovered ? '#ffffff' : '#00aaff',
            textDecoration: 'none',
            marginLeft: '5px'
        }
    };

    return (
        <footer style={styles.footer}>
            <>
                <div style={styles.container}>
                    <div style={styles.brand}>
                        <h2 style={styles.brandTitle}>MyApp</h2>
                        <p style={styles.brandText}>Where success is a tradition.</p>
                    </div>


                    <div style={styles.links}>
                        <a style={styles.link} href="/about">About</a>
                        <a style={styles.link} href="/contact">Contact</a>
                        <a style={styles.link} href="/privacy-policy">Privacy Policy</a>
                    </div>


                    <div style={styles.social}>
                        <h3 style={styles.socialTitle}>Follow Us</h3>
                        <SocialIcons/>
                    </div>
                </div>
                <div style={styles.copyright}>
                    © {new Date().getFullYear()} MyApp. All rights reserved | Designed & Developed By
                    <a
                        href="https://github.com/nuruddintipu"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={()=> setIsHovered(true)}
                        onMouseLeave={()=> setIsHovered(false)}
                        style={styles.githubLink}>
                        Nuruddin Tipu
                    </a>.
                </div>
            </>
        </footer>
    );
}


export default Footer;
