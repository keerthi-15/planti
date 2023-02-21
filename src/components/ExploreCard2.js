import React from 'react'
import Strings from './Strings'
import Styles from '../styles/ExploreCard.module.scss'
import RecentActivity from './RecentActivity';
function ExploreCard2() {
    let exploreCard = Strings.exploreCard2;
    let cardHeading = Strings.cardHeading;
    return (
        <div>
            <div className={Styles.card2} >
                <h1 className={Styles.headings}> {exploreCard.headings} </h1>
                <span className={Styles.headings}> {exploreCard.subheading1} </span> &nbsp;
                <span className={Styles.headings}> {exploreCard.subheading2} </span>
                <div><span className={Styles.subheadings}> {exploreCard.order1} </span>&nbsp; &nbsp;
                    <span className={Styles.subheadings}> {exploreCard.order2} </span></div>
                <br />
                <div className={Styles.btn}> {exploreCard.button1} <i class="fa fa-arrow-right" aria-hidden="true"></i> </div> &nbsp;
            </div>
            <br /> <br />
            <div className={[Styles.myListings,Styles.recentActivity].join(' ')} >
                {cardHeading.recentActivity}
                <span className={Styles.viewAll}> {cardHeading.viewAll} <i class="fa fa-arrow-right" aria-hidden="true"></i> </span>
            </div><br /> 
            <RecentActivity />
        </div>
    )
}

export default ExploreCard2