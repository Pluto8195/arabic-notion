import { Client } from '@notionhq/client'

import Card from './components/Card'
import styles from '../styles/Home.module.css'

import Navigation from './components/Navigation'


const database_id = '9e0ca7ce130d495e9a4a6aee9a442919'

export async function getStaticProps() {

  const notion = new Client({ auth: process.env.NOTION_SECRET })

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