/**
 * HERMES DASHBOARD — DAILY BRIEFING & WELLINGTON MAP CONFIG
 * =========================================================
 * Updated for Friday, 27 November 2026
 * Schedule: Work and Home daily agenda.
 */
window.BRIEFING_DATA = {
    version: "2026-11-27-v1",
    dateLabel: "Friday, 27 Nov 2026 (NZDT)",

    animation: {
        defaultLoopSeconds: 24,
        startHour: 8.0,
        mapCenter: [-41.2895, 174.7815],
        mapZoom: 13.5
    },

    weather: {
        autoFetchLive: true,
        summary: "Pleasant late spring Wellington day with warm sunny intervals, light northerly breeze, reaching a high of 20°C.",
        sunriseHour: 5.74,
        sunsetHour: 20.33,
        timeline: [
            { hour: 0,  tempC: 13, condition: "Mild Night",          type: "clear",         cloudCover: 10, windKmh: 15, windDirDeg: 350, windLabel: "N", precipMm: 0 },
            { hour: 4,  tempC: 12, condition: "Cool Pre-Dawn",       type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 355, windLabel: "NNW", precipMm: 0 },
            { hour: 7,  tempC: 13, condition: "Crisp Morning Sun",   type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 360, windLabel: "N", precipMm: 0 },
            { hour: 10, tempC: 16, condition: "Sunny Intervals",     type: "partly_cloudy", cloudCover: 20, windKmh: 15, windDirDeg: 10,  windLabel: "NNE", precipMm: 0 },
            { hour: 13, tempC: 19, condition: "Warm Midday",         type: "partly_cloudy", cloudCover: 25, windKmh: 18, windDirDeg: 15,  windLabel: "NNE", precipMm: 0 },
            { hour: 15, tempC: 20, condition: "Afternoon Peak",      type: "clear",         cloudCover: 15, windKmh: 18, windDirDeg: 20,  windLabel: "NNE", precipMm: 0 },
            { hour: 17, tempC: 19, condition: "Clear Evening Sun",   type: "clear",         cloudCover: 10, windKmh: 16, windDirDeg: 15,  windLabel: "NNE", precipMm: 0 },
            { hour: 20, tempC: 16, condition: "Cooling Down",        type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 355, windLabel: "NNW", precipMm: 0 },
            { hour: 23, tempC: 13, condition: "Starry Night",        type: "clear",         cloudCover: 5,  windKmh: 10, windDirDeg: 350, windLabel: "N", precipMm: 0 }
        ]
    },

    locations: [
        { id: "home",          name: "Home Base (14 Essex Street)",    lat: -41.2995, lng: 174.7735, icon: "🏠", color: "#1a73e8", category: "Home",        showPin: true },
        { id: "work_terrace",  name: "39 The Terrace (Work)",          lat: -41.2838, lng: 174.7758, icon: "🏢", color: "#455a64", category: "Tech & Work", showPin: true }
    ],

    dayPlan: [
        { start: "00:00", end: "08:30", locationId: "home",          title: "Sleep & Morning Routine at 14 Essex St", type: "rest",    showOnCalendar: false },
        { start: "08:30", end: "17:00", locationId: "work_terrace",  title: "Work Session at 39 The Terrace (8:30 AM – 5:00 PM)", type: "career",  showOnCalendar: true },
        { start: "17:30", end: "24:00", locationId: "home",          title: "Return home to 14 Essex Street & Friday Evening Relax",   type: "personal",showOnCalendar: true }
    ],

    todos: [
        { id: "t0", text: "Check and follow up on Wellington graduate AI and software engineering roles", tag: "Career", done: false },
        { id: "t1", text: "Review and apply for 2027 student allowance and loan via StudyLink (deadline Dec 16)", tag: "Admin", done: false },
        { id: "t2", text: "Work session at 39 The Terrace (8:30 AM – 5:00 PM)", tag: "Work", done: false },
        { id: "t3", text: "Verify recent Windows sign-in security alert on Google Account", tag: "Security", done: true }
    ],

    dailySpotlight: {
        interestTopic: "Cognitive Science & Autonomous AI Systems",
        morningTask: "Complete Friday work session at 39 The Terrace, review StudyLink application requirements, and check graduate tech opportunities in Wellington.",
        factOfTheDay: "Neural plasticity allows the brain to reorganize synaptic connections in response to learning, new experiences, and environmental adaptation.",
        historyFact: "On 27 November 1742, Swedish astronomer Anders Celsius described his centigrade temperature scale in a presentation to the Royal Swedish Academy of Sciences.",
        wordOfTheDay: {
            term: "Plasticity",
            pronunciation: "/plæsˈtɪsɪti/",
            definition: "The adaptability of an organism or neural system to changes in its environment or internal state."
        }
    },

    emailSummary: [
        { date: "24 Nov 2026, 23:29 NZST", title: "Google Security Alert", description: "New sign-in detected on a Windows device for your Google Account. (Verified)", important: false },
        { date: "25 Nov 2026, 00:01 NZST", title: "StudyLink: 2027 Application Reminder", description: "Reminder to apply for your student allowance and loan before 16 December.", important: true }
    ]
};
