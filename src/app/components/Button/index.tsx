import { Button } from 'antd';
import styles from '../Card/Card.module.scss';

interface ButtonCustomProps {
    link: string;
    pathImg: string;
    descripImg: string;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({ link, pathImg, descripImg }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.avatarContainerLogoGit}
    >
        <Button
            shape="circle"
            icon={<img
                src={pathImg}
                alt={descripImg}
                className={styles.customButtonImg}
            />}
            className={styles.customButton}
            size="large"
        />
    </a>
);