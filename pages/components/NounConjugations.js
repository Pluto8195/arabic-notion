import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

const CHARS = {
  ta: 'ت',
  ya: 'ي',
  ha: 'ه',
  nun: 'ن',
  alif: 'ا',
  kaf: 'ك',
  mim: 'م',
  waw: 'و',
  lam: 'ل',
}

const parseTaMarbutah = (word) => {
  const lastChar = word.slice(-1)
  const first = word.slice(0, -1)
  if(lastChar == '\u0629' || lastChar == '\uFE93' || lastChar == '\uFE94') {
    return [...first, CHARS.ta]
  }
  return word
}



const NounConjugations = ({Word}) => {
  const [parsedWord, setParsedWord] = useState()

  useEffect(() => {
    const parsed = parseTaMarbutah(Word)
    setParsedWord(parsed)
  }, [Word])

  

  return (
    <div className={styles.conjugationContainer}>
      <p className={styles.conjugation}> {CHARS.alif}{CHARS.lam}{ Word } </p>
      <p className={styles.conjugation}> { parsedWord }{CHARS.ya} </p>
      <p className={styles.conjugation}> { parsedWord }{CHARS.kaf} </p>
      <p className={styles.conjugation}> { parsedWord }{CHARS.ha} </p>
      <p className={styles.conjugation}> { parsedWord }{CHARS.ha}{CHARS.alif} </p>
      <p className={styles.conjugation}> { parsedWord }{CHARS.nun}{CHARS.alif} </p>
      <p className={styles.conjugation}> { parsedWord }{CHARS.kaf}{CHARS.mim} </p>
      <p className={styles.conjugation}> { parsedWord }{CHARS.ha}{CHARS.mim} </p>
    </div>
  )
}

export default NounConjugations