import React from 'react'
import Strings from './Strings'
import Styles from '../styles/ExploreCard.module.scss'
import { Button } from '@material-ui/core';
import MyListingsCard from './MyListingsCard';
function ExploreCard() {
    let exploreCard = Strings.exploreCard;
    let cardHeading = Strings.cardHeading;
    return (
        <div>
            <div className={Styles.card} >
            <h1 className={Styles.headings}> {exploreCard.heading1} </h1>
            <div className={Styles.headings}> {exploreCard.heading2} </div>
            <div className={Styles.headings}> {exploreCard.heading3} </div>
            <br />
            <Button variant='outlined'> {exploreCard.button1} </Button> &nbsp;
            <Button variant='outlined'> {exploreCard.button2} </Button>
        </div>
        <br /> <br />
        <div className={Styles.myListings}>
            {cardHeading.myListings}
            <span className={Styles.viewAll}> {cardHeading.viewAll} <i class="fa fa-arrow-right" aria-hidden="true"></i> </span>
        </div>
        <br /> 
            <MyListingsCard /> 
        </div>
    )
}

export default ExploreCard