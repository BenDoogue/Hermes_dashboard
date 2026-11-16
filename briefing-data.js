/**
 * HERMES DASHBOARD — DAILY BRIEFING & WELLINGTON MAP CONFIG
 * =========================================================
 * Updated for Monday, 16 November 2026
 */
window.BRIEFING_DATA = {
    version: "2026-11-16-v1",
    dateLabel: "Monday, 16 Nov 2026 (NZDT)",

    animation: {
        defaultLoopSeconds: 24,
        startHour: 8.0,
        mapCenter: [-41.2895, 174.7815],
        mapZoom: 13.5
    },

    weather: {
        autoFetchLive: true,
        summary: "Fresh southerly change with occasional clear sunny spells, moderate wind, and a pleasant evening.",
        sunriseHour: 5.73,
        sunsetHour: 20.27,
        timeline: [
            { hour: 0,  tempC: 12, condition: "Clear Night",         type: "clear",         cloudCover: 10, windKmh: 15, windDirDeg: 180, windLabel: "S", precipMm: 0 },
            { hour: 4,  tempC: 11, condition: "Cool Pre-Dawn",       type: "clear",         cloudCover: 12, windKmh: 14, windDirDeg: 175, windLabel: "S", precipMm: 0 },
            { hour: 7,  tempC: 13, condition: "Fresh Morning Sun",   type: "clear",         cloudCover: 20, windKmh: 18, windDirDeg: 170, windLabel: "SSE", precipMm: 0 },
            { hour: 10, tempC: 15, condition: "Partly Cloudy",       type: "partly_cloudy", cloudCover: 40, windKmh: 24, windDirDeg: 165, windLabel: "SSE", precipMm: 0 },
            { hour: 13, tempC: 17, condition: "Mild Afternoon",      type: "partly_cloudy", cloudCover: 45, windKmh: 28, windDirDeg: 160, windLabel: "SSE", precipMm: 0 },
            { hour: 15, tempC: 15, condition: "Brief Cloud Cover",   type: "cloudy",        cloudCover: 65, windKmh: 25, windDirDeg: 155, windLabel: "SSE", precipMm: 0.1 },
            { hour: 17, tempC: 14, condition: "Clearing Sky",        type: "partly_cloudy", cloudCover: 30, windKmh: 20, windDirDeg: 150, windLabel: "SE", precipMm: 0 },
            { hour: 20, tempC: 12, condition: "Calm Evening",        type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 145, windLabel: "SE", precipMm: 0 },
            { hour: 23, tempC: 11, condition: "Starry Night",        type: "clear",         cloudCover: 5,  windKmh: 10, windDirDeg: 140, windLabel: "SE", precipMm: 0 }
        ]
    },

    locations: [
        { id: "home",                name: "Home Base (14 Essex Street)",    lat: -41.2995, lng: 174.7735, icon: "🏠", color: "#1a73e8", category: "Home",        showPin: true },
        { id: "work_terrace",        name: "39 The Terrace (Work)",          lat: -41.2838, lng: 174.7758, icon: "🏢", color: "#455a64", category: "Tech & Work", showPin: true },
        { id: "willis_presentation", name: "8 Willis Street (Presentation)", lat: -41.2848, lng: 174.7760, icon: "🎯", color: "#d81b60", category: "Events",    showPin: true },
        { id: "vic_uni",             name: "Vic Uni (Kelburn Campus)",       lat: -41.2899, lng: 174.7684, icon: "🎓", color: "#3949ab", category: "Study & AI",  showPin: true },
        { id: "te_papa",             name: "Te Papa Waterfront",             lat: -41.2903, lng: 174.7819, icon: "🏛️", color: "#d81b60", category: "Landmark",    showPin: true }
    ],

    dayPlan: [
        { start: "00:00", end: "08:30", locationId: "home",                title: "Sleep & Morning Routine at 14 Essex St", type: "rest",    showOnCalendar: false },
        { start: "08:30", end: "12:30", locationId: "work_terrace",        title: "Morning Work Session at 39 The Terrace", type: "career",  showOnCalendar: true },
        { start: "13:00", end: "14:30", locationId: "vic_uni",             title: "University Study & AI Research",         type: "study",   showOnCalendar: true },
        { start: "15:00", end: "17:00", locationId: "work_terrace",        title: "Afternoon Work at 39 The Terrace",       type: "career",  showOnCalendar: true },
        { start: "17:30", end: "24:00", locationId: "home",                title: "Return home to 14 Essex Street & Relax",   type: "personal",showOnCalendar: true }
    ],

    todos: [
        { id: "t0", text: "🚨 URGENT: Contact student success advisor", tag: "Urgent", done: false },
        { id: "t1", text: "Complete morning work session at 39 The Terrace", tag: "Work", done: false },
        { id: "t2", text: "Attend university study & AI research session (1:00 PM)", tag: "Study", done: false },
        { id: "t3", text: "Afternoon work at 39 The Terrace until 5:00 PM", tag: "Work", done: false },
        { id: "t4", text: "Return home to 14 Essex Street", tag: "Home", done: false }
    ],

    dailySpotlight: {
        interestTopic: "Cognitive Science & Autonomous AI",
        morningTask: "Contact student success advisor urgently, complete 39 The Terrace work sessions, and attend Vic Uni study.",
        factOfTheDay: "Active inference frameworks posit that action and perception are dual aspects of minimizing free energy in generative neural models.",
        historyFact: "On 16 November 1945, UNESCO was founded in London with the signing of its constitution by 37 nations.",
        wordOfTheDay: {
            term: "Homeostasis",
            pronunciation: "/ˌhoʊmiəˈsteɪsɪs/",
            definition: "The tendency toward a relatively stable equilibrium between interdependent elements, especially as maintained by physiological processes."
        }
    },

    emailSummary: [
        { date: "16 Nov 2026, 04:15", title: "Student Services Notice", description: "Reminder regarding academic progression check-in with your success advisor.", important: true },
        { date: "15 Nov 2026, 20:30", title: "GitHub Pull Request Review", description: "Review requested on repository Hermes_dashboard branch main.", important: true }
    ]
};
