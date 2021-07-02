import { Client } from '@notionhq/client'
import { database_id, auth } from '../config'

import Card from './components/Card'
import styles from '../styles/Home.module.css'

import Navigation from './components/Navigation'

export async function getStaticProps() {

  const notion = new Client({ auth })

  const database = await notion.databases.query({ 
    database_id,
    filter: {
      property: "Tags",
      multi_select: {
        contains: "Noun"
      }
    }
  })

  return {
    props: {
      database: database.results,
    },
  }
}

const Nouns = ({ database }) => {
  return (
    <div className={styles.container} id={styles.nouns}>
      <Card database={database}/>
      <Navigation/>
    </div>
  )
}

export default Nouns