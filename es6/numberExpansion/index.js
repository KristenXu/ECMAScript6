import React from 'react'
import Expansion from './expansion.js'
import styles from  './styles'
class numberExpansion extends React.Component {

    getResult() {
        return(<p>haha</p>)
    }
    render () {
        let expansion = new Expansion('ES6');
        return (
            <div className={styles.main_style}>
                <h2>numberExpansion</h2>
                <h3>二进制与八进制</h3>
                <p>{expansion.binaryOctonary()}</p>
                <h3>Number.isInteger</h3>
                <p>{expansion.numberIsInteger()}</p>
                <h3>Number.EPSILON</h3>
                <p>{expansion.numberEPSILON()}</p>
                <h3>Number.isSafeInteger</h3>
                <p>{expansion.numberIsSafeInterger()}</p>
                <h3>Math.trunc</h3>
                <p>{expansion.mathTrunc()}</p>
                <h3>Math.sign</h3>
                <p>{expansion.mathSign()}</p>
            </div>
        )
    }
}

export default numberExpansion