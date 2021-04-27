import React from "react";
import {css} from "aphrodite/no-important";
import {activeLink, styles} from "./Header.styles";
import {NavLink} from "react-router-dom";
import logo from '../totoroniLogo.png'

export const Header = () => {
  return (
    <div className={css(styles.headerWrapper)}>
      <div className={css(styles.linksWrapper)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
      <NavLink activeStyle={activeLink} className={css(styles.link)} to={"/TotoroniTablePage"}>TotoRoni Table</NavLink>
      <NavLink activeStyle={activeLink} className={css(styles.link)} to={"/LiveScores"}>Live Scores</NavLink>
      <NavLink activeStyle={activeLink} className={css(styles.link)} to={"/ParticipantsBetting"}>Participants Betting</NavLink>
      <NavLink activeStyle={activeLink} className={css(styles.link)} to={"/TournamentRules"}>Tournament Rules</NavLink>
      <NavLink activeStyle={activeLink} className={css(styles.link)} to={"/Statistics"}>Statistics</NavLink>
      </div>
  </div>
  )
}
