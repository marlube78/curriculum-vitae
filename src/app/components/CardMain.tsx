import React from "react";
import { Card, Avatar, Row, Col, Button } from "antd";
import styles from "./Styles/CardMain.module.scss";
import { ButtonCustom } from "./Button";
import CardInfo from "./CardInfo";
import Image from 'next/image';

export default async function CardMain() {
  const linkedin = "https://www.linkedin.com/in/lucia-urrea/";
  const linkedinImg = "/img/LinkendinLogo.svg";
  const linkedinDes = "linkedid logo";

  return (
    <>
      <Card
        style={{ width: 1300 }}
        bodyStyle={{ padding: 0 }}
        className={styles.cardMainCustom}
      >
        <div>
          <img
            alt="Mapa del mundo"
            src="/img/mundo2.png"
            className={styles.cardMainImg}
          />
        </div>
        <div>
          <div className={styles.avatarContainerLogos}>
            <a
              href="https://github.com/marlube78"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                shape="circle"
                icon={
                  <img
                    src="/img/github.svg"
                    alt="GitHub Logo"
                    className={styles.customButtonImg}
                  />
                }
                className={styles.customButton}
                size="large"
              />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.avatarContainerLogoGit}
            >
              <Button
                shape="circle"
                icon={
                  <img
                    src={linkedinImg}
                    alt={linkedinDes}
                    className={styles.customButtonImg}
                  />
                }
                className={styles.customButton}
                size="large"
              />
            </a>
          </div>
          <CardInfo></CardInfo>
        </div>
      </Card>
    </>
  );
}
