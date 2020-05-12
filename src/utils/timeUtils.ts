import { TimeEntry } from "../types/types";

export function getMonthDaysMap(month: number, year: number) {
    const today = new Date();
    let date = new Date(year, month, 1);

    const days = new Map();
    while (date.getMonth() === month) {
        const newDate = new Date(date);
        // index of sunday is 0 and saturday is 6
        if (newDate < today && newDate.getDay() && newDate.getDay() < 6) {
            days.set(newDate.getDate(), newDate);
        }

        date.setDate(date.getDate() + 1);
    }
    return days;
}

export function getUntrackedDaysInMonth(entries: TimeEntry[], date = new Date()) {
    const days = getMonthDaysMap(date.getMonth(), date.getFullYear());
    console.log(days.size);
    entries.forEach(entry => {
        const entryDate = new Date(entry.timeInterval.start);
        days.delete(entryDate.getUTCDate());
    });
    return Array.from(days.values());
}
