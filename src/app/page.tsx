import CardMain from './components/CardMain'
import styles from './page.module.css'
import Head from 'next/head'
import CardInfo from './components/CardInfo'
import { useEffect, useState } from 'react'

export default async function Home() {
  // Declaramos el estado con useState
  // const [description, setDescription] = useState('profile');

   // Marcar como Client Component usando useEffect
  // useEffect(() => {
    // console.log(description, ' hola soy description');
    // Este efecto no hace nada, simplemente marca el componente como un "Client Component"
  //}, []);

  return (
    <main className={styles.main}>

      <Head>
        <title>Mi Página Principal</title>
      </Head>

      <CardMain />
      

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          // onClick={ () => setDescription("meli") }
        >
          <h2>
            Experiencia <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          // onClick={ () => setDescription("b2b") }
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          // onClick={ () => setDescription("ejercito") }

        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel. 
          </p>
        </a>
      </div>
    </main>
  )
}
