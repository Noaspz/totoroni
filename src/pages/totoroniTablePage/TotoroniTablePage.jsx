import {Header} from "../../components/Header";
import React from "react";
import {css} from "aphrodite";
import {styles} from "./TotoroniTablePage.styles";

export const TotoroniTablePage = () => {
return (
  <React.Fragment>
  <Header />
    <iframe className={css(styles.embedTable)} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQJuO6NK4ezIYGJxX8FicDh3RmTyrPEn7a61JuVLTUZ3OjlxFojxUzsvV8b8V5j_0aaGCvtCtcrY5lg/pubhtml?gid=1041874131&amp;single=true&amp;widget=true&amp;headers=false&amp;chrome=false&amp;range=A1:G43"></iframe>
  </React.Fragment>
    )
}
