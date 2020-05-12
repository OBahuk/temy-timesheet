import React from "react";
import Chip from "@material-ui/core/Chip";

interface ComponentProps {
    label: string
}

export default function DayChip({ label }: ComponentProps) {
    return (
        <Chip variant="outlined" size="small" label={label} color="secondary" />
    );
}