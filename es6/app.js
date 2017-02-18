import React from 'react'
import DestructuringAssignment from './destructuringAssignment/index.js'
import NumberExpansion from './numberExpansion/index.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <DestructuringAssignment></DestructuringAssignment>
                <NumberExpansion></NumberExpansion>
            </div>
        )
    }
}

export default App