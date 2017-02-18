import React from 'react'
import Destructuring from './Destructuring.js'
import styles from  './styles'
class DestructuringAssignment extends React.Component {

    getResult() {
        return(<p>haha</p>)
    }
    render () {
        let destructuring = new Destructuring('ES6');
        return (
            <div className={styles.main_style}>
                <h2>destructuring</h2>
                <p>{destructuring.getResult()}</p>
            </div>
        )
    }
}

export default DestructuringAssignment