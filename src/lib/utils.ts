export function formatDate(date: Date): string {
    const now = new Date();
    const dayDifference = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    let dayLabel: string;
    if (dayDifference === 0) {
        dayLabel = 'Today';
    } else if (dayDifference === 1) {
        dayLabel = 'Yesterday';
    } else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
        dayLabel = `${day}/${month}/${year}`;
    }

    return dayLabel
}

