import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import DayChip from "./DayChip";

interface ComponentProps {
    days: Date[]
}

export default function UntrackedDaysWidget({ days }: ComponentProps) {
    const dateOptions = { year: "numeric", month: "short", day: "numeric" };

    return (
        <Box>
            <h2>Not Tracked Days ({days.length})</h2>
            <Box className="untracked">
                {days.map((day) => {
                    const label = day.toLocaleDateString("en-US", dateOptions);
                    return <DayChip label={label} key={label} />;
                })}
            </Box>
            <Button
                variant="contained"
                color="primary"
                href="https://clockify.me/tracker"
                target="_blank"
            >
                VIEW CLOCKIFY
            </Button>
        </Box>
    );
}