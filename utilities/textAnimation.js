import styles from '../styles/Home.module.css'

export const textAnimation = (text) => {
    // Use Intl.Segmenter for proper Unicode grapheme splitting (Bangla support)
    const characters = typeof Intl !== 'undefined' && Intl.Segmenter
      ? Array.from(new Intl.Segmenter().segment(text)).map(s => s.segment)
      : Array.from(text);

    return characters.map((value,index)=>{
        return(
          <p key={index} className={`${value ==='.' ?'opacity-0': ''} ${styles.name}`}>
            {value}
          </p>
        )
      })
//   return (
//     <div>textAnimation</div>
//   )
}

