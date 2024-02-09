import React from "react";
import { Avatar } from "antd";
import styles from "./Styles/CardInfo.module.scss";

export default async function CardInfo() {
  return (
      <div className={styles.gridMain}>
        <div className={styles.avatarContainer}>
          <Avatar
            src={"/img/photo.png"}
            size={200}
            className={styles.avatarContainerPhoto}
          />
        </div>
        <div>
          <div className={styles.circularDiv}>
            <h1 className={styles.titleCustom}>Lucia Urrea</h1>
            <div className={styles.textContainer}>
              <p className={styles.textCustom}>
                Soy ingeniera catastral y geodesta con 3 años de experiencia. Mi
                enfoque ha sido como analista geográfica y desarrolladora de
                software, destacando en la construcción de SIG para ruteos
                logísticos con ArcGIS. También tengo experiencia en el
                desarrollo backend, gestionando y resolviendo bugs con
                metodologías ágiles como Scrum. Además, poseo habilidades en
                atención al cliente, trabajo en equipo, adaptabilidad y
                comunicación asertiva.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
