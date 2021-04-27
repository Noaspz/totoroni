import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {TotoroniTablePage} from "./pages/totoroniTablePage/TotoroniTablePage";
import React from "react";
import {LiveScores} from "./pages/liveScores/LiveScores";
import {ParticipantsBetting} from "./pages/participantsBetting/ParticipantsBetting";
import {TournamentRules} from "./pages/tournamentRules/TournamentRules";
import {Statistics} from "./pages/statistics/Statistics";

function App() {
  return (
    <div>
      <header>
        <Router>
          <Switch>
            <Route path="/TotoroniTablePage" exact>
              <TotoroniTablePage />
            </Route>
            <Route path="/LiveScores" exact>
              <LiveScores />
            </Route>
            <Route path="/ParticipantsBetting" exact>
              <ParticipantsBetting />
            </Route>
            <Route path="/ParticipantsBetting/:id" exact>
            </Route>
            <Route path="/TournamentRules" exact>
              <TournamentRules />
            </Route>
            <Route path="/Statistics" exact>
              <Statistics />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
