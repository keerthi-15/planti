import React from 'react'
import Strings from './Strings';
import Styles from '../styles/HelpCenter.module.scss';
import { Button } from '@material-ui/core';
function HelpCenter() {
    let description = Strings.navBar;
    return (
        <div className={Styles.card}>
            <div className={Styles.helpCenter}> {description.helpCenter} </div><br/>
            <div className={Styles.helpCenterDescription} > {description.helpCenterDescription} <br />
                {description.helpCenterDescription2}
            </div><br />
            <Button className={Styles.goToHelpCenter} variant="outlined"> {description.helpButton} </Button>
        </div>
    )
}

export default HelpCenter