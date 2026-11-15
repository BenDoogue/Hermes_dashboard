/**
 * HERMES DASHBOARD — DAILY BRIEFING & WELLINGTON MAP CONFIG
 * =========================================================
 * Edit this lightweight file each morning (or ask Hermes Agent to update it)
 * to refresh the day's plan, weather, tasks, locations, and morning spotlight
 * without touching index.html.
 */
window.BRIEFING_DATA = {
    version: "2026-11-15-v2",
    dateLabel: "Sunday, 15 Nov 2026 (NZDT)",

    // Animation settings: 24 seconds = full 24h loop (1 second per hour) by default
    animation: {
        defaultLoopSeconds: 24,
        startHour: 8.0, // Start animation at 08:00 AM on load
        mapCenter: [-41.2895, 174.7815],
        mapZoom: 13.5
    },

    // Weather settings:
    weather: {
        autoFetchLive: true,
        summary: "Classic Wellington spring day — crisp sunny start, blustery midday Nor'wester, brief afternoon southerly shower, calm clear evening.",
        sunriseHour: 5.75, // 05:45 AM
        sunsetHour: 20.25, // 08:15 PM
        timeline: [
            { hour: 0,  tempC: 11, condition: "Clear Night",         type: "clear",         cloudCover: 12, windKmh: 14, windDirDeg: 320, windLabel: "NW", precipMm: 0 },
            { hour: 4,  tempC: 11, condition: "Cool Pre-Dawn",       type: "clear",         cloudCover: 15, windKmh: 16, windDirDeg: 325, windLabel: "NW", precipMm: 0 },
            { hour: 7,  tempC: 13, condition: "Crisp Sunny Morning", type: "clear",         cloudCover: 18, windKmh: 20, windDirDeg: 330, windLabel: "NW", precipMm: 0 },
            { hour: 10, tempC: 16, condition: "Partly Cloudy",       type: "partly_cloudy", cloudCover: 42, windKmh: 32, windDirDeg: 335, windLabel: "NW", precipMm: 0 },
            { hour: 13, tempC: 18, condition: "Blustery Nor'wester", type: "windy",         cloudCover: 60, windKmh: 44, windDirDeg: 340, windLabel: "NNW", precipMm: 0 },
            { hour: 15, tempC: 14, condition: "Afternoon Shower",    type: "rain",          cloudCover: 88, windKmh: 48, windDirDeg: 185, windLabel: "S",  precipMm: 2.6 },
            { hour: 17, tempC: 15, condition: "Clearing Clouds",     type: "partly_cloudy", cloudCover: 45, windKmh: 28, windDirDeg: 175, windLabel: "S",  precipMm: 0.2 },
            { hour: 20, tempC: 13, condition: "Calm Golden Dusk",    type: "clear",         cloudCover: 18, windKmh: 15, windDirDeg: 155, windLabel: "SSE", precipMm: 0 },
            { hour: 23, tempC: 11, condition: "Starry Harbour Night",type: "clear",         cloudCover: 10, windKmh: 12, windDirDeg: 150, windLabel: "SSE", precipMm: 0 }
        ]
    },

    // Places of Interest in Wellington
    locations: [
        { id: "home",                name: "Home Base (14 Essex Street)",    lat: -41.2995, lng: 174.7735, icon: "🏠", color: "#1a73e8", category: "Home",        showPin: true },
        { id: "work_terrace",        name: "39 The Terrace (Work)",          lat: -41.2838, lng: 174.7758, icon: "🏢", color: "#455a64", category: "Tech & Work", showPin: true },
        { id: "willis_presentation", name: "8 Willis Street (Presentation)", lat: -41.2848, lng: 174.7760, icon: "🎯", color: "#d81b60", category: "Events",    showPin: true },
        { id: "vic_uni",             name: "Vic Uni (Kelburn Campus)",       lat: -41.2899, lng: 174.7684, icon: "🎓", color: "#3949ab", category: "Study & AI",  showPin: true },
        { id: "te_papa",             name: "Te Papa Waterfront",             lat: -41.2903, lng: 174.7819, icon: "🏛️", color: "#d81b60", category: "Landmark",    showPin: true }
    ],

    // Ordered Day Plan & Calendar Events
    dayPlan: [
        { start: "00:00", end: "08:30", locationId: "home",                title: "Sleep & Morning Routine at 14 Essex St", type: "rest",    showOnCalendar: false },
        { start: "08:30", end: "13:45", locationId: "work_terrace",        title: "Work at 39 The Terrace",                 type: "career",  showOnCalendar: true },
        { start: "14:00", end: "15:00", locationId: "willis_presentation", title: "Presentation at 8 Willis Street",          type: "study",   showOnCalendar: true },
        { start: "15:00", end: "17:00", locationId: "work_terrace",        title: "Afternoon Work at 39 The Terrace",       type: "career",  showOnCalendar: true },
        { start: "17:00", end: "24:00", locationId: "home",                title: "Head home to 14 Essex Street & Relax",   type: "personal",showOnCalendar: true }
    ],

    // Interactive To-Do List
    todos: [
        { id: "t1", text: "Complete morning work session at 39 The Terrace (8:30 - 1:45)", tag: "Work", done: false },
        { id: "t2", text: "Attend presentation at 8 Willis Street (2:00 - 3:00)",          tag: "Event", done: false },
        { id: "t3", text: "Resume work at 39 The Terrace until 5:00 PM",                  tag: "Work", done: false },
        { id: "t4", text: "Return home to 14 Essex Street",                              tag: "Home", done: false }
    ],

    // Extensible Daily Spotlight
    dailySpotlight: {
        interestTopic: "Cognitive Science & Autonomous AI",
        morningTask: "Execute today's schedule smoothly: 39 The Terrace work, Willis St presentation, and home to Essex St.",
        factOfTheDay: "Predictive coding theory suggests the brain isn't a passive feature detector — it continuously predicts incoming sensory signals and updates internal models only on surprise (prediction error).",
        historyFact: "On 15 November 1860, the first telegraph line in New Zealand opened connecting Christchurch and Lyttelton.",
        wordOfTheDay: {
            term: "Affordance",
            pronunciation: "/əˈfɔːdəns/",
            definition: "In cognitive science & design (J.J. Gibson), an action possibility directly offered by the environment to an agent."
        }
    },

    // Email Summary (Past 24hrs)
    emailSummary: [
        { date: "15 Nov 2026, 04:30", title: "GitHub Security Alert", description: "Dependabot update alert for repository dependencies.", important: true },
        { date: "14 Nov 2026, 22:15", title: "Wellington AI meetup confirmation", description: "Your RSVP for Tuesday's meetup at BizDojo is confirmed.", important: true }
    ]
};
