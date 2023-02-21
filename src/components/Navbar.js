import React from 'react'
import Strings from './Strings';
import Styles from '../styles/Navbar.module.scss';
import HelpCenter from './HelpCenter';

function navBar(props) {
    let menuItems = Strings.navBar;
    return (
        <div className={Styles.card}>
            <img src={"six.png"} className={Styles.coffee} alt="" /> <span className={Styles.heading} >{menuItems.planti}</span>
            <ul className={Styles.options}>
                <span>
                    {menuItems.option.slice(0,4).map((menu) => <div> <img src={menu.icon} alt="" className={Styles.img} /> &nbsp; {menu.name} </div>)}
                </span>
            </ul>
            <div className={Styles.settings}> {menuItems.settings.toUpperCase()} </div>
            <ul className={Styles.options}>
                {menuItems.option.slice(4,9).map((menu) => <div> <img src={menu.icon} alt="" className={Styles.img} /> &nbsp;  {menu.name} </div>)}
            </ul>
            <HelpCenter />
        </div>

    )
}

export default navBar;