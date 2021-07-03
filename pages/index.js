import { Client } from '@notionhq/client'

import Card from './components/Card'
import styles from '../styles/Home.module.css'

import Navigation from './components/Navigation'

const database_id = '9e0ca7ce130d495e9a4a6aee9a442919'

export async function getStaticProps() {

  const notion = new Client({ auth: process.env.NOTION_SECRET })

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