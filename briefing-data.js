/**
 * HERMES DASHBOARD — DAILY BRIEFING & WELLINGTON MAP CONFIG
 * =========================================================
 * Updated for Monday, 16 November 2026
 * Schedule: Work and Home only in daily agenda. University study kept in to-dos and emails.
 */
window.BRIEFING_DATA = {
    version: "2026-11-16-v5",
    dateLabel: "Monday, 16 Nov 2026 (NZDT)",

    animation: {
        defaultLoopSeconds: 24,
        startHour: 8.0,
        mapCenter: [-41.2895, 174.7815],
        mapZoom: 13.5
    },

    weather: {
        autoFetchLive: true,
        summary: "Late spring Wellington day with a fresh southerly change, crisp sunny spells, moderate SSE breeze, and clear evening skies.",
        sunriseHour: 5.73,
        sunsetHour: 20.27,
        timeline: [
            { hour: 0,  tempC: 12, condition: "Clear Night",         type: "clear",         cloudCover: 10, windKmh: 15, windDirDeg: 180, windLabel: "S", precipMm: 0 },
            { hour: 4,  tempC: 11, condition: "Cool Pre-Dawn",       type: "clear",         cloudCover: 12, windKmh: 14, windDirDeg: 175, windLabel: "S", precipMm: 0 },
            { hour: 7,  tempC: 13, condition: "Crisp Morning Sun",   type: "clear",         cloudCover: 20, windKmh: 18, windDirDeg: 170, windLabel: "SSE", precipMm: 0 },
            { hour: 10, tempC: 16, condition: "Partly Cloudy",       type: "partly_cloudy", cloudCover: 38, windKmh: 25, windDirDeg: 165, windLabel: "SSE", precipMm: 0 },
            { hour: 13, tempC: 18, condition: "Mild Afternoon Sun",  type: "partly_cloudy", cloudCover: 42, windKmh: 28, windDirDeg: 160, windLabel: "SSE", precipMm: 0 },
            { hour: 15, tempC: 16, condition: "Brief Cloud Cover",   type: "cloudy",        cloudCover: 60, windKmh: 24, windDirDeg: 155, windLabel: "SSE", precipMm: 0.2 },
            { hour: 17, tempC: 15, condition: "Clearing Sky",        type: "partly_cloudy", cloudCover: 28, windKmh: 20, windDirDeg: 150, windLabel: "SE", precipMm: 0 },
            { hour: 20, tempC: 13, condition: "Calm Evening",        type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 145, windLabel: "SE", precipMm: 0 },
            { hour: 23, tempC: 11, condition: "Starry Night",        type: "clear",         cloudCover: 5,  windKmh: 10, windDirDeg: 140, windLabel: "SE", precipMm: 0 }
        ]
    },

    locations: [
        { id: "home",          name: "Home Base (14 Essex Street)",    lat: -41.2995, lng: 174.7735, icon: "🏠", color: "#1a73e8", category: "Home",        showPin: true },
        { id: "work_terrace",  name: "39 The Terrace (Work)",          lat: -41.2838, lng: 174.7758, icon: "🏢", color: "#455a64", category: "Tech & Work", showPin: true }
    ],

    dayPlan: [
        { start: "00:00", end: "08:30", locationId: "home",          title: "Sleep & Morning Routine at 14 Essex St", type: "rest",    showOnCalendar: false },
        { start: "08:30", end: "17:00", locationId: "work_terrace",  title: "Work Session at 39 The Terrace (8:30 AM – 5:00 PM)", type: "career",  showOnCalendar: true },
        { start: "17:30", end: "24:00", locationId: "home",          title: "Return home to 14 Essex Street & Relax",   type: "personal",showOnCalendar: true }
    ],

    todos: [
        { id: "t0", text: "🚨 URGENT: Contact student success advisor regarding academic check-in", tag: "Urgent", done: false },
        { id: "t1", text: "Work session at 39 The Terrace (8:30 AM – 5:00 PM; Wed Nov 18 starts at 8:00 AM)", tag: "Work", done: false },
        { id: "t2", text: "Return home to 14 Essex Street & relax", tag: "Home", done: false }
    ],

    dailySpotlight: {
        interestTopic: "Cognitive Science & Autonomous AI Systems",
        morningTask: "Contact student success advisor, and complete work sessions at 39 The Terrace (8:30 AM – 5:00 PM, Wed Nov 18 starts at 8:00 AM). University study removed from daily schedule.",
        factOfTheDay: "Predictive coding theories of brain function model perception as a hierarchical process of minimizing top-down prediction errors against sensory inputs.",
        historyFact: "On 16 November 1945, UNESCO was founded in London with the signing of its constitution by 37 nations.",
        wordOfTheDay: {
            term: "Homeostasis",
            pronunciation: "/ˌhoʊmiəˈsteɪsɪs/",
            definition: "The self-regulating process by which biological systems maintain stability while adjusting to changing external conditions."
        }
    },

    emailSummary: [
        { date: "16 Nov 2026, 04:15", title: "Student Services Notice", description: "Reminder regarding academic progression check-in with your success advisor.", important: true },
        { date: "15 Nov 2026, 20:30", title: "GitHub Pull Request Review", description: "Review requested on repository Hermes_dashboard branch main.", important: true }
    ]
};
