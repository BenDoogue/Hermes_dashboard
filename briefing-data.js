/**
 * HERMES DASHBOARD — DAILY BRIEFING & WELLINGTON MAP CONFIG
 * =========================================================
 * Updated for Tuesday, 17 November 2026
 * Schedule: Work and Home only in daily agenda. University study kept in to-dos and emails.
 */
window.BRIEFING_DATA = {
    version: "2026-11-17-v1",
    dateLabel: "Tuesday, 17 Nov 2026 (NZDT)",

    animation: {
        defaultLoopSeconds: 24,
        startHour: 8.0,
        mapCenter: [-41.2895, 174.7815],
        mapZoom: 13.5
    },

    weather: {
        autoFetchLive: true,
        summary: "Pleasant spring Wellington day with decreasing cloudiness, crisp sunny intervals, and a moderate breeze, reaching a high of 17°C.",
        sunriseHour: 5.78,
        sunsetHour: 20.28,
        timeline: [
            { hour: 0,  tempC: 11, condition: "Cool Night",          type: "clear",         cloudCover: 15, windKmh: 15, windDirDeg: 180, windLabel: "S", precipMm: 0 },
            { hour: 4,  tempC: 9,  condition: "Cold Pre-Dawn",       type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 175, windLabel: "S", precipMm: 0 },
            { hour: 7,  tempC: 12, condition: "Crisp Morning Sun",   type: "clear",         cloudCover: 20, windKmh: 16, windDirDeg: 170, windLabel: "SSE", precipMm: 0 },
            { hour: 10, tempC: 15, condition: "Decreasing Clouds",   type: "partly_cloudy", cloudCover: 30, windKmh: 20, windDirDeg: 165, windLabel: "SSE", precipMm: 0 },
            { hour: 13, tempC: 17, condition: "Mild Sunny Intervals",type: "partly_cloudy", cloudCover: 25, windKmh: 22, windDirDeg: 160, windLabel: "SSE", precipMm: 0 },
            { hour: 15, tempC: 16, condition: "Afternoon Breeze",    type: "partly_cloudy", cloudCover: 35, windKmh: 22, windDirDeg: 155, windLabel: "SE", precipMm: 0 },
            { hour: 17, tempC: 15, condition: "Clear Evening",       type: "clear",         cloudCover: 15, windKmh: 18, windDirDeg: 150, windLabel: "SE", precipMm: 0 },
            { hour: 20, tempC: 13, condition: "Calm Night",          type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 145, windLabel: "SE", precipMm: 0 },
            { hour: 23, tempC: 11, condition: "Starry Sky",          type: "clear",         cloudCover: 5,  windKmh: 10, windDirDeg: 140, windLabel: "SE", precipMm: 0 }
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
        morningTask: "Resolve Gemini API spend cap, review StudyLink 2027 application, and complete work session at 39 The Terrace (8:30 AM – 5:00 PM).",
        factOfTheDay: "Hierarchical predictive processing models propose that the brain constantly generates top-down predictions of sensory input while propagating bottom-up prediction errors.",
        historyFact: "On 17 November 1869, the Suez Canal was officially opened, linking the Mediterranean Sea to the Red Sea and transforming global maritime navigation.",
        wordOfTheDay: {
            term: "Plasticity",
            pronunciation: "/plæˈstɪsɪti/",
            definition: "The adaptability of an organism or neural network to changes in its environment or internal state."
        }
    },

    emailSummary: [
        { date: "16 Nov 2026, 17:18 NZST", title: "Google AI Studio: API Service Paused", description: "Gemini API service paused due to spend caps. Increase or remove spend cap to resume.", important: true },
        { date: "15 Nov 2026, 23:29 NZST", title: "Google Security Alert", description: "New sign-in detected on a Windows device for your Google Account.", important: true },
        { date: "16 Nov 2026, 00:01 NZST", title: "StudyLink: 2027 Application Reminder", description: "Reminder to apply for your student allowance and loan before 16 December.", important: true }
    ]
};
