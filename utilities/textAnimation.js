import styles from '../styles/Home.module.css'

export const textAnimation = (text) => {

    text.split('').map((value,index)=>{
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

