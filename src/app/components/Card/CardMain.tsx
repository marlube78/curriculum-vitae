import { Card, Avatar, Row, Col, Button } from 'antd';
import styles from './Card.module.scss';
import { ButtonCustom } from '../Button/Button';


export const CardMain = () => {
    const linkedin = 'https://www.linkedin.com/in/lucia-urrea/'
    const linkedinImg = '/img/github.webp'
    const linkedinDes = 'linkedid logo'

    return (<Card
        style={{ width: 1300 }}
        cover={<img alt="Mapa del mundo" src="img/brujulamapa4.png" />}
        className={styles.cardMainCustom}
    >
        {/* Avatar Github */}
        <a
            href="https://github.com/marlube78"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.avatarContainerLogoGit}
        >
            <Button
                shape="circle"
                icon={<img
                    src="/img/github.webp"
                    alt="GitHub Logo"
                    className={styles.customButtonImg}
                />}
                className={styles.customButton}
                size="large"
            />
        </a>
                    
        <ButtonCustom link={linkedin} pathImg={linkedinImg} descripImg={linkedinDes} />

        <div className={styles.gridMain}>
            <Row>
                <Col span={2}>
                    <div>
                        {/* Avatar Photo */}
                        <Avatar
                            src={'/img/photo.png'}
                            size={200}
                            className={styles.avatarContainerPhoto}
                        />
                    </div>
                </Col>
            </Row>
        </div>


    </Card >)
}
