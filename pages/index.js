import { Client } from '@notionhq/client'
import { database_id, auth } from '../config'

import Card from './components/Card'
import styles from '../styles/Home.module.css'

import Navigation from './components/Navigation'


export async function getStaticProps() {

// Initializing a client
  const notion = new Client({ auth })

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const database = await notion.databases.query({ database_id })

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      database: database.results,
    },
  }
}

const Home = ({ database }) => {
  return (
    <div className={styles.container} id={styles.index}>
      <Card database={database}/>
      <Navigation/>
    </div>
  )
}

export default Home