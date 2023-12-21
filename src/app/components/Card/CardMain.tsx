import { Card, Avatar, Row, Col, Button } from 'antd';
import styles from '../Styles/CardMain.module.scss';
import '../Styles/Font.scss'
import { ButtonCustom } from '../Button/Button';

export const CardMain = () => {
    const linkedin = 'https://www.linkedin.com/in/lucia-urrea/';
    const linkedinImg = '/img/LinkendinLogo.svg';
    const linkedinDes = 'linkedid logo';

    return (
        <Card style={{ width: 1300 }} cover={<img alt="Mapa del mundo" src="img/brujulamapa4.2.png" />} className={styles.cardMainCustom}>
            <div>
                <div className={styles.avatarContainerLogos}>
                    <a href="https://github.com/marlube78" target="_blank" rel="noopener noreferrer">
                        <Button
                            shape="circle"
                            icon={<img src="/img/github.svg" alt="GitHub Logo" className={styles.customButtonImg} />}
                            className={styles.customButton}
                            size="large"
                        />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.avatarContainerLogoGit}>
                        <Button
                            shape="circle"
                            icon={<img src={linkedinImg} alt={linkedinDes} className={styles.customButtonImg} />}
                            className={styles.customButton}
                            size="large"
                        />
                    </a>
                </div>
                <div>
                    <div className={styles.gridMain}>
                        <div className={styles.avatarContainer}>
                            <Avatar src={'/img/photo.png'} size={200} className={styles.avatarContainerPhoto} />
                        </div>
                        <div>
                            <div className={styles.circularDiv} >
                                <h1 className={styles.titleCustom}>Lucia Urrea</h1>
                                <div className={styles.textContainer}>
                                    <p className={styles.textCustom}> 
                                    Soy ingeniera catastral y geodesta con 3 años de experiencia. Mi enfoque ha sido como 
                                    analista geográfica y desarrolladora de software, destacando en la construcción de SIG 
                                    para ruteos logísticos con ArcGIS. También tengo experiencia en el desarrollo backend, 
                                    gestionando y resolviendo bugs con metodologías ágiles como Scrum. Además, poseo habilidades 
                                    en atención al cliente, trabajo en equipo, adaptabilidad y comunicación asertiva. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};