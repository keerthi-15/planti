import React from 'react'
import Styles from '../styles/MyListingCard.module.scss'
import Strings from './Strings'
function MyListingsCard() {
    let cardName = Strings.cardName;
    return (
        <div>
            <span className={Styles.card}>
                <span className={Styles.card1}></span> <br/>
                <div> {cardName.annualVinca} </div>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span className={Styles.card}>
                <span className={Styles.card2}></span> <br/>
                <div> {cardName.apocnyceae} </div>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span className={Styles.card}>
                <span className={Styles.card3}></span> <br/>
                <div> {cardName.asteraceae} </div>
            </span>
        </div>
    )
}

export default MyListingsCard