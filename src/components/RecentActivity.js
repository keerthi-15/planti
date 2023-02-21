import React from 'react'
import Strings from './Strings'
import Styles from '../styles/RecentActivity.module.scss'

function RecentActivity() {
    let  RecentActivity = Strings.dp;
    //let persons = RecentActivity.persons.map(persons => <span><div> {persons.name} </div> <div> {persons.order} </div> </span> );
  return (
    <div>
        <div>
            {RecentActivity.persons.map(dp => <span> <span className={Styles.flex}> <img src={dp.dpArr} alt='' /> <br /> <br /> <br />  &nbsp; &nbsp; &nbsp; <span> <div> {dp.name} </div>  <div> {dp.order} </div> </span>  </span><span className={Styles.float}> {dp.viewed} </span> </span>  )}
        </div>
    </div>
  )
}

export default RecentActivity