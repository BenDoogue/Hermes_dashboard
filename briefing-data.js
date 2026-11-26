/**
 * HERMES DASHBOARD — DAILY BRIEFING & WELLINGTON MAP CONFIG
 * =========================================================
 * Updated for Thursday, 26 November 2026
 * Schedule: Work and Home daily agenda.
 */
window.BRIEFING_DATA = {
    version: "2026-11-26-v1",
    dateLabel: "Thursday, 26 Nov 2026 (NZDT)",

    animation: {
        defaultLoopSeconds: 24,
        startHour: 8.0,
        mapCenter: [-41.2895, 174.7815],
        mapZoom: 13.5
    },

    weather: {
        autoFetchLive: true,
        summary: "Pleasant late spring Wellington day with crisp sunny intervals, gentle southerly breeze, reaching a high of 19°C.",
        sunriseHour: 5.75,
        sunsetHour: 20.32,
        timeline: [
            { hour: 0,  tempC: 13, condition: "Mild Night",          type: "clear",         cloudCover: 10, windKmh: 20, windDirDeg: 180, windLabel: "S", precipMm: 0 },
            { hour: 4,  tempC: 12, condition: "Cool Pre-Dawn",       type: "clear",         cloudCover: 10, windKmh: 18, windDirDeg: 175, windLabel: "SSE", precipMm: 0 },
            { hour: 7,  tempC: 12, condition: "Crisp Morning Sun",   type: "clear",         cloudCover: 15, windKmh: 14, windDirDeg: 170, windLabel: "SSE", precipMm: 0 },
            { hour: 10, tempC: 15, condition: "Sunny Intervals",     type: "partly_cloudy", cloudCover: 25, windKmh: 12, windDirDeg: 165, windLabel: "SSE", precipMm: 0 },
            { hour: 13, tempC: 18, condition: "Warm Midday",         type: "partly_cloudy", cloudCover: 20, windKmh: 10, windDirDeg: 160, windLabel: "S", precipMm: 0 },
            { hour: 15, tempC: 19, condition: "Afternoon Peak",      type: "clear",         cloudCover: 15, windKmh: 10, windDirDeg: 155, windLabel: "SSW", precipMm: 0 },
            { hour: 17, tempC: 19, condition: "Clear Evening Sun",   type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 150, windLabel: "SSW", precipMm: 0 },
            { hour: 20, tempC: 16, condition: "Cooling Down",        type: "clear",         cloudCover: 10, windKmh: 10, windDirDeg: 145, windLabel: "SSE", precipMm: 0 },
            { hour: 23, tempC: 12, condition: "Starry Night",        type: "clear",         cloudCover: 5,  windKmh: 8,  windDirDeg: 140, windLabel: "SE", precipMm: 0 }
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
        { id: "t0", text: "🚨 URGENT: Increase or remove Gemini API spend cap in Google AI Studio to resume service", tag: "Urgent", done: false },
        { id: "t1", text: "Review and apply for 2027 student allowance and loan via StudyLink (deadline Dec 16)", tag: "Admin", done: false },
        { id: "t2", text: "Work session at 39 The Terrace (8:30 AM – 5:00 PM)", tag: "Work", done: false },
        { id: "t3", text: "Verify recent Windows sign-in security alert on Google Account", tag: "Security", done: false }
    ],

    dailySpotlight: {
        interestTopic: "Cognitive Science & Autonomous AI Systems",
        morningTask: "Resolve Gemini API spend cap, review StudyLink 2027 application deadline (Dec 16), and complete work session at 39 The Terrace.",
        factOfTheDay: "The hippocampus indexes episodic memories, binding together distributed sensory inputs across neocortical networks during sleep consolidation.",
        historyFact: "On 26 November 1922, Howard Carter and Lord Carnarvon became the first people to enter the tomb of Pharaoh Tutankhamun in over 3,000 years.",
        wordOfTheDay: {
            term: "Consolidation",
            pronunciation: "/kənˌsɒlɪˈdeɪʃən/",
            definition: "The process by which memories or neural connections become stable and permanent over time."
        }
    },

    emailSummary: [
        { date: "25 Nov 2026, 17:18 NZST", title: "Google AI Studio: API Service Paused", description: "Gemini API service paused due to spend caps. Increase or remove spend cap to resume.", important: true },
        { date: "24 Nov 2026, 23:29 NZST", title: "Google Security Alert", description: "New sign-in detected on a Windows device for your Google Account.", important: true },
        { date: "25 Nov 2026, 00:01 NZST", title: "StudyLink: 2027 Application Reminder", description: "Reminder to apply for your student allowance and loan before 16 December.", important: true }
    ]
};
