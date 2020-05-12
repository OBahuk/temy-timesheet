import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import theme from "./assets/styles";

import UntrackedDaysWidget from "./components/UntrackedDaysWidget";
import CalendarWidget from "./components/CalendarWidget";
import ClockifyAPI from "./api";
import { getUntrackedDaysInMonth } from "./utils/timeUtils";

import{ TimeEntry } from "./types/types";

export default function App() {
  const [timeEntries, setEntries] = React.useState<TimeEntry[]>([]);
  React.useEffect(() => {
    ClockifyAPI.autenticate()
        .then(() => ClockifyAPI.getTimeEntries())
        .then(result => setEntries(result));
  }, []);

  const entriesDate = timeEntries.length ? new Date(timeEntries[0].timeInterval.start) : undefined;
  const untrackedDaysArr = getUntrackedDaysInMonth(timeEntries, entriesDate);

  const trackedDaysArr = timeEntries.map(
      entry => new Date(entry.timeInterval.start)
  );

  const onMonthChange = (date : Date) => ClockifyAPI.getTimeEntries(date).then(result => {setEntries(result)});

  return (
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="sm" className="App">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <CalendarWidget
                  untrackedDays={untrackedDaysArr}
                  trackedDays={trackedDaysArr}
                  onMonthChange={onMonthChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UntrackedDaysWidget days={untrackedDaysArr} />
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
  );
}
