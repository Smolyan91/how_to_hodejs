import * as React from 'react'
import Buttom from '../../ui/buttom'

import './Pane.css';


const Pane = () => {
    return (
        <div className="pane">
            <div className='pane__actions'>
                <Buttom className="pane__action-refresh"/>
                <Buttom className="pane__action-run"/>
            </div>
        </div>
    )
}

export default Pane;