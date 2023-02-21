import React from 'react'
import Strings from './Strings'
import Styles from '../styles/MainPage.module.scss'
import ExploreCard from './ExploreCard';
import ExploreCard2 from './ExploreCard2';


function WelcomePage() {
  let mainPage = Strings.mainPage;
  return (
    <div className={Styles.mainPage}>
      <h1 className={Styles.welcome}>{mainPage.welcome}</h1> &nbsp;
      <span className={Styles.searchBar}> <i className="fa fa-search" aria-hidden="true"></i> <input type="text" placeholder='Search DashBoard' /></span> &nbsp;
      <img className={Styles.imgIcon} src='./two.png' alt='' /> &nbsp; <img className={Styles.imgIcon} src='./ten.png' alt='' /> &nbsp; <img className={Styles.imgIcon} src='./six.png' alt='' />
      <div>{mainPage.welcomeUser}</div>
      <br />
      <br />
      <span className={Styles.cardAlign}>
        <ExploreCard />
        &nbsp;
        <span className={Styles.cardAlignLeft} >
          <ExploreCard2 />
        </span>
      </span>
    </div>
  )
}

export default WelcomePage