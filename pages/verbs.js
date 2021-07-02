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
        contains: "Verb"
      }
    }
  })

  return {
    props: {
      database: database.results,
    },
  }
}

const Verbs = ({ database }) => {
  return (
    <div className={styles.container} id={styles.verbs}>
      <Card database={database}/>
      <Navigation/>
    </div>
  )
}

export default Verbs