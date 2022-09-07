import React from 'react'
import styles from '../../styles/Home.module.css'

import Link from 'next/link'

const Navigation = props => (
  <div className={styles.navigation}>
    <Link href="/">
      <a>all</a>
    </Link>
    <Link href="/verbs">
      <a>verbs</a>
    </Link>
    <Link href="/nouns">
      <a>nouns</a>
    </Link>
    <Link href="/nouns">
      <a>adverbs</a>
    </Link>
  </div>
)

export default Navigation