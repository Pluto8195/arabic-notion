import React, { useEffect, useState } from 'react'
import useKeyPress from '../hooks/useKeyPress'

import styles from '../../styles/Home.module.css'

const Card = ({ database }) => {
  const [words, setWords] = useState([])
  const [wordIndex, setWordIndex] = useState(0)
  const [showWord, setShow] = useState(false)
  const [hover, setHover] = useState(false)
  const right = useKeyPress('ArrowRight')
  const left = useKeyPress('ArrowLeft')
  const space = useKeyPress(' ')

  const shuffle = (array) => {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  const getNextWord = () => setWordIndex((((wordIndex + 1)%words.length)+words.length)%words.length)
  const getPreviousWord = () => setWordIndex((((wordIndex - 1)%words.length)+words.length)%words.length)
  
  // Shuffle list of words
  useEffect(() => setWords(shuffle(database)),[database])-2

  useEffect(() => {
    if(!right) return
    getNextWord()
  }, [right])

  useEffect(() => {
    if(!left) return
    getPreviousWord()
  }, [left])

  useEffect(() => setShow(space), [space])

  const onMouseUp = () => setShow(false)

  const onClick = () => getNextWord()

  const { properties={} } = words[wordIndex] || {}


  const {
    Diacritic={},
    Word={},
    Eng={},
    Franco={}
  } = properties

  return (
    <div onClick={onClick} onMouseUp={onMouseUp} className={styles.card}>
      <div>{'<'}</div>
      { words[wordIndex] &&
      <div className={styles.wordContainer}>
        <p className={styles.word} onMouseOut={() => setHover(false)} onMouseOver={() => setHover(true)}>
            {
              hover
              ? Diacritic?.rich_text[0]?.plain_text || Word?.title[0]?.plain_text
              : Word?.title[0]?.plain_text
            }
        </p>
        { showWord 
          ? <p className={styles.franco}>{ Eng?.rich_text[0]?.plain_text || '-'}</p>
          : <p className={styles.franco}>{ Franco?.rich_text[0]?.plain_text  || '-'}</p>
        }
      </div>
      }
      <div>
       {'>'}
      </div>
    </div>
  )
}

export default Card