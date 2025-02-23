import styles from './loading.module.css'

import loading from '../../imagens/loading.svg'


function Loading(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>
    )
}

export default Loading