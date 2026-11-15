/**
 * HERMES DASHBOARD — DAILY BRIEFING & WELLINGTON MAP CONFIG
 * =========================================================
 * Edit this lightweight file each morning (or ask Hermes Agent to update it)
 * to refresh the day's plan, weather, tasks, locations, and morning spotlight
 * without touching index.html.
 */
window.BRIEFING_DATA = {
    version: "2026-11-16-v1",
    dateLabel: "Sunday, 15 Nov 2026 (NZDT)",

    // Animation settings: 24 seconds = full 24h loop (1 second per hour) by default
    animation: {
        defaultLoopSeconds: 24,
        startHour: 6.5, // Start animation at 06:30 AM on load
        mapCenter: [-41.2895, 174.7815],
        mapZoom: 13.5
    },

    // Weather settings:
    // If autoFetchLive is true, pulls real 24h hourly Wellington forecast + sunrise/sunset
    // from Open-Meteo (free, no API key) and falls back to `timeline` below if offline.
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

    // Places of Interest in Wellington (real OpenStreetMap lat/lng coordinates)
    // Add new places here anytime — reference their `id` in `dayPlan` below!
    locations: [
        { id: "home",         name: "Home Base (Kelburn)",      lat: -41.2879, lng: 174.7684, icon: "🏠", color: "#1a73e8", category: "Home",        showPin: true },
        { id: "vic_uni",      name: "Vic Uni (Kelburn Campus)", lat: -41.2899, lng: 174.7684, icon: "🎓", color: "#3949ab", category: "Study & AI",  showPin: true },
        { id: "botanic",      name: "Botanic Garden",           lat: -41.2825, lng: 174.7669, icon: "🌿", color: "#2e7d32", category: "Outdoors",    showPin: true },
        { id: "lambton",      name: "Lambton Quay / CBD",       lat: -41.2785, lng: 174.7787, icon: "🏢", color: "#455a64", category: "Tech & Work", showPin: true },
        { id: "railway",      name: "Wellington Station",       lat: -41.2794, lng: 174.7800, icon: "🚆", color: "#00897b", category: "Transit",     showPin: true },
        { id: "cuba_st",      name: "Cuba Street",              lat: -41.2925, lng: 174.7762, icon: "☕", color: "#8e24aa", category: "Cafes",       showPin: true },
        { id: "te_papa",      name: "Te Papa Waterfront",       lat: -41.2903, lng: 174.7819, icon: "🏛️", color: "#d81b60", category: "Landmark",    showPin: true },
        { id: "courtenay",    name: "Courtenay Place",          lat: -41.2932, lng: 174.7804, icon: "🎭", color: "#fb8c00", category: "City Life",   showPin: true },
        { id: "oriental_bay", name: "Oriental Bay Parade",      lat: -41.2909, lng: 174.7903, icon: "🌊", color: "#0288d1", category: "Waterfront",  showPin: true },
        { id: "mt_vic",       name: "Mt Victoria Lookout",      lat: -41.2960, lng: 174.7943, icon: "⛰️", color: "#43a047", category: "Lookout",     showPin: true },
        { id: "airport",      name: "Wellington Airport",       lat: -41.3271, lng: 174.8080, icon: "✈️", color: "#f57c00", category: "Airport",     showPin: true }
    ],

    // Ordered Day Plan & Calendar Events
    // Ben's map marker stays at each event's location during [start..end] and smoothly
    // travels along Wellington routes to the next location in between!
    dayPlan: [
        { start: "00:00", end: "07:15", locationId: "home",         title: "Sleep & Rest",                          type: "rest",    showOnCalendar: false },
        { start: "07:15", end: "08:30", locationId: "home",         title: "Morning Coffee & Dashboard Orientation",type: "personal",showOnCalendar: true },
        { start: "09:00", end: "12:00", locationId: "vic_uni",      title: "AI & CogSci Deep Work / Research",      type: "study",   showOnCalendar: true },
        { start: "12:20", end: "13:20", locationId: "cuba_st",      title: "Lunch & Flat White on Cuba St",         type: "social",  showOnCalendar: true },
        { start: "13:45", end: "16:30", locationId: "lambton",      title: "Wellington AI Job Board & Code Sprint", type: "career",  showOnCalendar: true },
        { start: "16:50", end: "17:45", locationId: "te_papa",      title: "Waterfront Walk via Te Papa",           type: "fitness", showOnCalendar: true },
        { start: "18:05", end: "19:15", locationId: "mt_vic",       title: "Sunset Hike up Mt Victoria Lookout",    type: "fitness", showOnCalendar: true },
        { start: "19:45", end: "24:00", locationId: "home",         title: "Dinner, Reading & Evening Wind-Down",   type: "personal",showOnCalendar: true }
    ],

    // Interactive To-Do List (persisted in localStorage for the day)
    todos: [
        { id: "t1", text: "Review morning weather & plan out top 3 priorities", tag: "Morning", done: true },
        { id: "t2", text: "Shortlist 2 Wellington / remote AI graduate roles",  tag: "Career",  done: false },
        { id: "t3", text: "Ship feature update to Hermes_dashboard repo",       tag: "Code",    done: false },
        { id: "t4", text: "Read 1 paper on cognitive architectures / agents",   tag: "AI",      done: false }
    ],

    // Extensible Daily Spotlight: Morning Task, Fact of the Day, and Word of the Day
    dailySpotlight: {
        interestTopic: "Cognitive Science & Autonomous AI",
        morningTask: "Write 15 lines of clean code or notes on an active project before opening social feeds.",
        factOfTheDay: "Predictive coding theory suggests the brain isn't a passive feature detector — it continuously predicts incoming sensory signals and updates internal models only on surprise (prediction error).",
        wordOfTheDay: {
            term: "Affordance",
            pronunciation: "/əˈfɔːdəns/",
            definition: "In cognitive science & design (J.J. Gibson), an action possibility directly offered by the environment to an agent."
        }
    }
};
