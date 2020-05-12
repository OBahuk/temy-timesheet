import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

interface ComponentProps {
    untrackedDays: Date[],
    trackedDays: Date[],
    onMonthChange: (arg: Date) => Promise<void>
}

export default function CalendarWidget({ untrackedDays, trackedDays, onMonthChange }: ComponentProps) {
    const modifiers = {
        untracked: [...untrackedDays],
        tracked: [...trackedDays]
    };

    return (
        <DayPicker
            modifiers={modifiers}
            disabledDays={{ daysOfWeek: [6, 0] }}
            onMonthChange={onMonthChange}
        />
    );
}