const places = [

/* =========================
   CINCINNATI, OH
========================= */

{
name: "Condado Tacos – The Banks",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Casual restaurant with a bar-forward layout and table seating throughout with steady foot traffic.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Bar area tends to be louder than dining tables.",
"Crowds increase significantly on game days."
]
},

{
name: "University Eatz & Arcade",
city: "Cincinnati",
neighborhood: "Norwood",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant and arcade with table seating, bar seating, and gaming areas throughout the space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Noise increases near arcade areas."
]
},
   
{
name: "Corner Dumpling House - Montgomery",
city: "Cincinnati",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Casual restaurant with table seating and counter ordering in a clean, open dining space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common.",
]
},

{
name: "The Davidson",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with bar seating and dining tables connected directly to an outdoor plaza.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Events on Fountain Square increase noise and crowd levels."
]
},

{
name: "Mellow Mushroom - Wilder",
city: "Wilder",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Spacious restaurant with a bar section and multiple dining areas for groups and families.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Bar area is louder in the evenings."
]
},

{
name: "New China Buffet",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large buffet-style restaurant with multiple seating sections and continuous guest movement.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Buffet lines become busier during peak hours."
]
},

{
name: "Ichiban - Alexandria",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Sushi and hibachi restaurant with table seating and a steady dine-in flow.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Lunch visits are typically quicker."
]
},

{
name: "El Ocho Loco",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Small taqueria with limited seating and a simple counter-service setup.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "unknown",
waits: "unknown",
location: "unknown"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"No traditional host stand; ordering may occur at the counter.",
"Staff may not be visible immediately when entering."
]
},

{
name: "Jade Buffet",
city: "Cincinnati",
neighborhood: "Springdale",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Buffet restaurant with a large dining area and consistent guest traffic.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Buffet lines move continuously during peak times."
]
},

{
name: "RJ Four Mile Pig",
city: "Newtown",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Local barbecue spot with counter ordering and a small indoor seating area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Newtown Village Tavern Pizza",
city: "Newtown",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood tavern with a mix of bar seating and dining tables in a compact layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fifty West Brewing Company - Burger Bar",
city: "Cincinnati",
neighborhood: "Wooster Pike",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Brewery-style restaurant with a large seating area, bar section, and frequent group gatherings.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor seating is used frequently in warm weather."
]
},

{
name: "Scramblers",
city: "Cincinnati",
neighborhood: "Wooster Pike",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast and brunch restaurant with table seating and a steady flow of diners.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Village Coffee Shop",
city: "Newtown",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with limited seating and a steady stream of walk-in customers.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Afternoons are typically quieter."
]
},

{
name: "Grove Park Grille",
city: "Cincinnati",
neighborhood: "Anderson Township",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood restaurant with bar seating and dining tables in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Salem Gardens",
city: "Cincinnati",
neighborhood: "Anderson Township",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a mix of bar seating and tables in an active social setting.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase crowd noise."
]
},

{
name: "Mio's Pizza - Mt Washington",
city: "Cincinnati",
neighborhood: "Mt. Washington",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with casual table seating and a consistent mix of dine-in and takeout orders.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are frequent."
]
},

{
name: "Angilo's Pizza",
city: "Cincinnati",
neighborhood: "Anderson Township",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Pizza spot with counter ordering and a small dining area with steady takeout activity.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "The Bridge of Mt Washington",
city: "Cincinnati",
neighborhood: "Mt. Washington",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with table seating, a bar area, and TVs throughout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase crowd noise."
]
},

{
name: "Big Ash Brewing",
city: "Cincinnati",
neighborhood: "Mt. Washington",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large brewery with indoor seating, bar space, and an open layout for groups.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor seating is used frequently in warm weather."
]
},

{
name: "Gyrolicious Grill",
city: "Cincinnati",
neighborhood: "Anderson Township",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Casual restaurant with counter ordering and a small seating area for quick meals.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Lunch visits are often quick."
]
},

{
name: "Sutton Bar & Grill",
city: "Cincinnati",
neighborhood: "Mt. Washington",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a mix of bar seating and tables in a social setting.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mercer Social House",
city: "Newtown",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café-style restaurant with table seating and a steady mix of coffee and meal service.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay for casual meetings.",
"Afternoons tend to be quieter."
]
},

{
name: "Main Street Cafe",
city: "Newtown",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Neighborhood café with table seating and a steady flow of breakfast and lunch customers.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Afternoons are usually calmer."
]
},

{
name: "Pig Candy BBQ - Kellogg Ave",
city: "Cincinnati",
neighborhood: "Anderson Township",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Barbecue spot with counter service and a casual dining area for dine-in and takeout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "BrewRiver Creole Kitchen",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with indoor seating and a dining area along the riverfront.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Riverfront location draws more visitors on weekends."
]
},

{
name: "Local Post East End Eatery",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood restaurant with bar seating and dining tables in a casual setting.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Hitching Post - Kellogg",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with table seating and a steady flow of diners.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Swampwater Grill",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with indoor seating and outdoor areas that host live music and events.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Live music events increase crowd size and noise."
]
},

{
name: "Streetside Brewery",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Brewery with indoor seating, a taproom layout, and space for groups to gather.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Food trucks are often present."
]
},

{
name: "Bandito Food Park + Cantina",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Outdoor food park with multiple vendors and shared seating areas for groups.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Food vendors rotate periodically."
]
},

{
name: "The Turf Club",
city: "Cincinnati",
neighborhood: "Linwood",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Established restaurant with bar seating and dining tables in a compact layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Eli's BBQ - Riverside",
city: "Cincinnati",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Popular barbecue spot with counter ordering, casual seating, and outdoor dining space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor seating is used frequently in warm weather.",
"Takeout orders are common."
]
},

{
name: "The Hi-Mark",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar and grill with a mix of bar seating and tables with TVs throughout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase crowd noise."
]
},

{
name: "Ghost Baby",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "High",

whatToExpect:
"Multi-level cocktail lounge and music venue with seating across different levels.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Lower level"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Live music performances increase noise and crowd levels.",
"Reservations are common for performances."
]
},

{
name: "Collective Espresso",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Modern coffee shop with casual seating and a steady flow of customers.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to work or meet."
]
},

{
name: "Proud Hound Coffee",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with table seating and a mix of espresso service and brunch-style dining.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Groups often gather for brunch."
]
},

{
name: "Sidewinder Coffee",
city: "Cincinnati",
neighborhood: "Northside",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Neighborhood coffee shop with casual seating and a relaxed setup for short visits or work.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to work or study."
]
},

{
name: "Left Bank Coffeehouse",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Local coffee shop with seating for reading, working, and casual conversation.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to read or work."
]
},

{
name: "Roebling Point Books & Coffee",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Bookstore and café with seating for reading, studying, and light conversation.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to read or study."
]
},

{
name: "Mom 'n 'em Coffee & Wine",
city: "Cincinnati",
neighborhood: "Madisonville",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café with table seating offering coffee, pastries, and light meals.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay for casual meetings."
]
},

{
name: "Carabello Coffee",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Specialty coffee shop with a focus on espresso drinks and a relaxed seating area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to work or study."
]
}, 

{
name: "Redtree Coffee and Art",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop with casual seating and rotating artwork displayed throughout the space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Artwork displays rotate periodically."
]
},

{
name: "Cincy Cafe",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Neighborhood café with table seating serving breakfast and lunch items.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Many guests stay for casual meetings or work."
]
},

{
name: "Coffee Emporium",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with indoor seating and a steady flow of customers throughout the day.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to work or study."
]
},

{
name: "The Upside Brew",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop with counter ordering and casual seating for coffee and light meals.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to study."
]
},

{
name: "Taft Theatre",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Seated theater venue hosting concerts and performances with large audiences.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Likely",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Intermission is the busiest time for restrooms.",
"Crowds exit at the same time after events."
]
},

{
name: "Ludlow Garage",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Concert venue with table seating and a focus on live music performances.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Arriving early helps secure preferred seating."
]
},

{
name: "Northside Tavern",
city: "Cincinnati",
neighborhood: "Northside",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with live music and a mix of standing and seated areas.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Live music events are frequent."
]
},

{
name: "Woodward Theater",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Theater venue hosting concerts and events with open floor space and seating areas.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Crowds typically exit together after events."
]
},

{
name: "Andrew J. Brady Music Center",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "High",

whatToExpect:
"Large concert venue with standing and seated areas hosting major live performances.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Likely",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Restroom lines increase between sets.",
"Large crowds exit at the same time after shows."
]
},

{
name: "Bogart's",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Music venue with standing-room crowds and live performances throughout the space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Most shows are standing-room events.",
"Lines may form before entry."
]
},
   
{
name: "Paycor Stadium",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "High",

whatToExpect:
"Large open-air stadium with multiple seating levels and high-capacity event crowds.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Likely",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Halftime brings the longest restroom lines.",
"Large crowds exit at the same time after events."
]
},

{
name: "Great American Ball Park",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Difficult",
noiseLevel: "High",

whatToExpect:
"Outdoor baseball stadium with multiple seating sections and steady crowd movement during games.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Inning breaks increase restroom and concession lines."
]
},

{
name: "TQL Stadium",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "High",

whatToExpect:
"Soccer stadium with open seating areas and active supporter sections during matches.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Supporter sections create consistent crowd noise throughout matches.",
"Halftime increases restroom wait times."
]
},

{
name: "Findlay Market",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Difficult",
noiseLevel: "High",

whatToExpect:
"Public market with multiple vendor stalls and indoor and outdoor walkways.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Visitors move between multiple vendors before finding seating.",
"Weekdays are typically less crowded."
]
},

{
name: "Tela Bar + Kitchen",
city: "Cincinnati",
neighborhood: "Wyoming",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a mix of indoor and patio dining.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Wyoming Community Coffee",
city: "Cincinnati",
neighborhood: "Wyoming",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop with indoor seating and a steady flow of customers throughout the day.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Afternoons attract remote workers and students."
]
},

{
name: "The Birch - Terrace Park",
city: "Cincinnati",
neighborhood: "Terrace Park",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a modern dining room setup.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Chicken on the Run",
city: "Cincinnati",
neighborhood: "Deer Park",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating for quick visits.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Los Potrillos Mexican Restaurant",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table dining in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Blue Goose Sports Cafe",
city: "Cincinnati",
neighborhood: "Sharonville",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, TVs throughout, and table seating for groups.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase activity and noise."
]
},

{
name: "The Back Porch Saloon",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with bar seating and casual table areas in a compact layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Silver Spring House Restaurant",
city: "Cincinnati",
neighborhood: "Symmes Township",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with indoor seating and a large outdoor patio area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Trio",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Maggiano's Little Italy",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Italian restaurant with multiple dining rooms and a large indoor seating layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cooper's Hawk Winery & Restaurant",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a dedicated tasting area in a structured layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Northstar Cafe",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with counter ordering and table seating in an open layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Pies & Pints - Kenwood",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with table seating and a bar area in a casual setting.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ambar India Restaurant",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Indian restaurant with table seating in a straightforward dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Krishna Indian Restaurant",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Indian restaurant with buffet service and table seating in a casual setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Buffet service increases movement during peak times."
]
},

{
name: "Sitwell’s Coffeehouse & Act II",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffeehouse with indoor seating and a relaxed setup for casual visits or work.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Afternoons attract students and remote workers."
]
},

{
name: "Chicago Gyros & Dogs",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-night traffic increases due to nearby activity."
]
},

{
name: "Gaslight Bar & Grill",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating and tables in a social setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Evenings bring increased activity."
]
},

{
name: "Ladder 19",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Sports bar with TVs, bar seating, and table seating for groups.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase noise and activity."
]
},

{
name: "Senate OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area focused on a casual dining setup.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Salazar Cincinnati",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating and a small bar area in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Kiki on Ludlow",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Japanese restaurant with bar seating and table dining in a casual setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Pony OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a large bar area and table seating in a social setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase noise and activity."
]
},

{
name: "Queen City Radio",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Outdoor bar with a large courtyard and multiple seating areas.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor space fills with groups during busy periods."
]
},

{
name: "Holiday Spirits",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood bar with bar seating and a simple indoor layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Liberty's Bar & Bottle - OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Wine bar with bar seating and small table areas in a compact space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Pins Mechanical Co.",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large entertainment venue with multiple bars, games, and open seating areas.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Groups gather for games and drinks."
]
},

{
name: "16-Bit Bar + Arcade",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Arcade bar with gaming areas and bar seating in an open layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Games and music contribute to overall noise levels."
]
},

{
name: "Five Kitchen + Bar",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a straightforward dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Northern Row Brewery & Distillery",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Brewery and distillery with a large taproom, bar seating, and open tables.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Groups gather for drinks in the taproom."
]
},

{
name: "MOTR Pub",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar and live music venue with a performance area and standing space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Live music events increase noise and crowd levels."
]
},

{
name: "Somerset Bar",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Bar with indoor seating and a large outdoor courtyard for groups.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor courtyard fills with groups during busy periods."
]
},

{
name: "Bar Saeso",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a central bar area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "1215 Wine Bar & Coffee Lab",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Wine bar with indoor seating and a small outdoor patio area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mellotone Beer Project",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Brewery taproom with bar seating and tables in an open layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Groups gather for drinks during busier periods."
]
},

{
name: "The Aperture",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café and bar space with seating for coffee service and evening gatherings.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Evenings may include hosted events."
]
},

{
name: "Etxe Basque Steakhouse",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Steakhouse with table seating in a structured dining room.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Decibel Korean Fried Chicken",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with table seating focused on quick dine-in and takeout orders.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Caffe Vivace - Jazz Lounge",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Coffeehouse and lounge with seating for live music performances.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Live music performances increase noise levels."
]
},

{
name: "Confessions Bar & Restaurant Lounge",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Lounge-style bar and restaurant with bar seating and table areas for groups.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Music and nightlife events increase activity."
]
},

{
name: "Brew House",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar and restaurant with table seating and TVs throughout the space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase noise and activity."
]
},

{
name: "The Fix Coffeehouse & Bar",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop and bar with casual seating for drinks, coffee, and small groups.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay for meetings or work."
]
},

{
name: "The Pickled Pig",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Deli-style restaurant with counter ordering and a small seating area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Heyday",
city: "Cincinnati",
neighborhood: "East Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with table seating and a central bar area in a social setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Rusk Kitchen + Bar",
city: "Cincinnati",
neighborhood: "East Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a casual dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Home Court Tavern",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating and TVs in a casual setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Sports events increase noise and activity."
]
},

{
name: "Esoteric Brewing Co",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Brewery with bar seating, dining tables, and an open taproom layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Groups gather for drinks in the taproom."
]
},

{
name: "Cafe Mochiko",
city: "Cincinnati",
neighborhood: "East Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café and bakery with table seating and a steady flow of customers.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bridges Nepali Cuisine - Walnut Hills",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating in a casual and compact dining space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Gomez Salsa - Walnut Hills",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Fast-casual restaurant with counter ordering and casual seating for quick meals.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-night visits are common.",
"Takeout orders are frequent."
]
},

{
name: "Fireside Pizza",
city: "Cincinnati",
neighborhood: "Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with a large dining room, bar seating, and table seating throughout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Pho Lang Thang",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating located near a busy market area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Nearby market traffic increases activity during peak times."
]
},

{
name: "Nada",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with multiple dining areas and a bar section in a modern layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sotto",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating and a bar area located on a lower level.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Lower level"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Lower-level layout reduces outside noise."
]
},

{
name: "Via Vite",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with indoor seating and a patio area in a central downtown location.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Tokyo Kitty",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Karaoke bar with private rooms and a central bar area in an entertainment setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Private rooms fill as the night progresses."
]
},

{
name: "Hard Rock Cafe Cincinnati",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a music-themed setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Abigail Street",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a compact dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sacred Beast Diner",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Diner-style restaurant with table seating and a bar area in a modern layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Brunch periods fill quickly."
]
},

{
name: "Quan Hapa",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and counter ordering in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ché OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a compact dining space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Losanti",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Steakhouse with multiple dining rooms and a bar area in a structured layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Teak OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area serving sushi and Thai dishes.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common during busy periods."
]
},

{
name: "LouVino OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Wine-focused restaurant with table seating and a bar area in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Happy hour brings steady traffic."
]
},

{
name: "Goodfellas Pizzeria OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Pizza spot with counter ordering and bar seating in a nightlife setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-night crowds increase activity."
]
},

{
name: "Sleepy Bee Cafe - Oakley",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast and brunch restaurant with table seating and counter ordering.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Brunch periods fill quickly."
]
},

{
name: "Mazunte Taqueria - Madisonville",
city: "Cincinnati",
neighborhood: "Madisonville",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Oakley Pub & Grill",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating and table seating in a neighborhood setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Nation Kitchen & Bar - Oakley",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a casual dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Aglamesis Brothers Ice Cream & Chocolates - Oakley",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Ice cream shop with counter service and limited seating for short visits.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Deeper Roots Coffee - Oakley",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop with indoor seating and a steady flow of customers throughout the day.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visitors often stay to work or study."
]
},

{
name: "Kitchen Social - Montgomery",
city: "Cincinnati",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a social dining layout in a large space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Condado Tacos - Oakley",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Taco restaurant with bar seating and table dining in an open layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "First Watch - Rookwood",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast and brunch restaurant with table seating in a busy daytime setting.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Near entrance"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Brunch periods fill quickly."
]
},

{
name: "Agave & Rye – Rookwood",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with a large dining room and bar seating in a high-energy setting.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ford's Garage – Norwood",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with a large dining room and bar seating in an open layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Establishment",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a compact layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Parkside – Hyde Park Square",
city: "Cincinnati",
neighborhood: "Hyde Park",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with indoor seating and patio dining in a central square location.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Echo",
city: "Cincinnati",
neighborhood: "Hyde Park",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Classic diner with counter seating and table seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Morning hours bring steady traffic."
]
},

{
name: "Neko Sushi & Korean and Japanese Restaurant",
city: "Cincinnati",
neighborhood: "Hyde Park",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating in a compact dining space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Seasons 52",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and bar seating in an open layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Taste of Belgium – Rookwood",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a casual dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Brunch periods fill quickly."
]
},

{
name: "Bronte Bistro",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating inside a bookstore setting with a quiet layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Buca di Beppo Italian Restaurant",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large restaurant with multiple dining rooms designed for group seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Group dining increases noise levels."
]
},

{
name: "E+O Kitchen – Hyde Park",
city: "Cincinnati",
neighborhood: "Hyde Park",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with indoor seating and patio space in a central location.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Rusty Bucket Restaurant and Tavern",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Arthur's",
city: "Cincinnati",
neighborhood: "Hyde Park",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with a compact dining room and bar seating.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Alfio's Buon Cibo",
city: "Cincinnati",
neighborhood: "Hyde Park",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Pub – Rookwood",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with a large dining room and bar seating in an open layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "J. Alexander's Restaurant",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and bar seating in a structured layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "BJ's Restaurant & Brewhouse - Rookwood",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large restaurant and brewery with multiple dining areas and bar seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Capital Grille - Rookwood",
city: "Cincinnati",
neighborhood: "Rookwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Upscale restaurant with multiple dining rooms and bar seating in a structured layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Pleasant Ridge Chili",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Chili parlor with booth seating and a casual diner-style layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are often quick for dine-in or carryout."
]
},

{
name: "Goodfellas Pizzeria - Pleasant Ridge",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Hooligans Pub & Eatery",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Grand Buffet",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Buffet-style restaurant with multiple seating sections and steady guest movement.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Families and groups are common."
]
},

{
name: "Loving Hut",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter ordering and table seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fine Wine O'Clock",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Wine bar with indoor seating in a relaxed lounge-style layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cafe Alma",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with counter ordering and table seating in a small dining room.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Brunch periods bring steady traffic."
]
},

{
name: "The Gas Light Cafe",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with counter ordering and indoor seating for short visits.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Hello Honey - Pleasant Ridge",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Dessert shop with counter service and limited seating for quick visits.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically short."
]
},

{
name: "Nine Giant Brewing",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Brewery and restaurant with bar seating and table seating in an open layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Overlook Lodge",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Themed bar with lounge seating and a multi-room layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Lonely Pine Steakhouse",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Steakhouse with a structured dining room and bar seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "The Coffee Exchange of Pleasant Ridge",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop with counter ordering and indoor seating for short visits or work.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Wiseguy Lounge – Pleasant Ridge",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Lounge-style bar with a compact interior and seating for small groups.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Price Hill Chili",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Chili parlor with booth seating and a diner-style layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-night visits are common."
]
},

{
name: "Golden City Restaurant",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Chinese restaurant with table seating in a casual dining room.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Taqueria Mercado",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with counter ordering and table seating in a casual setup.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Tortilleria Garcia – Price Hill",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with counter ordering and table seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Incline Public House",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with a large dining room and outdoor seating overlooking the city.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor seating is used frequently."
]
},

{
name: "El Trancazo Restaurant",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with counter ordering and table seating in a simple layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Primavista",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Restaurant with a structured dining room and table seating overlooking the city.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Veracruz Mexican Grill - Price Hill",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

verified: true,   

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and bar seating in a casual dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Restaurante y Taqueria Valle Verde",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with counter ordering and table seating in a casual setup.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sabor San Marcos",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and counter ordering in a straightforward layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "221 Restaurant",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Taqueria Doña Maria",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter ordering and table seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Hook Fish & Chicken",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are often quick."
]
},

{
name: "52 Bar",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with a compact layout and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Urbana Cafe – East Price Hill",
city: "Cincinnati",
neighborhood: "Price Hill",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with counter ordering and indoor seating for short visits or work.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "HangOverEasy - Mt. Lookout",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast and brunch restaurant with table seating in a casual dining layout.",

environment: {
parking: "Limited street parking.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Taglio Pizza - Columbia-Tusculum",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with counter ordering and table seating in a compact layout.",

environment: {
parking: "Limited street parking.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Millions Cafe",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "Low",

whatToExpect:
"Café with table seating in a relaxed neighborhood setting.",

environment: {
parking: "Limited street parking.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Aladdin's Eatery - Hyde Park",
city: "Cincinnati",
neighborhood: "Hyde Park",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "Moderate",

whatToExpect:
"Mediterranean restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Limited street parking.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "VV The Italian Experience",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Difficult",
noiseLevel: "Low",

whatToExpect:
"Italian café with counter ordering and table seating in a small dining space.",

environment: {
parking: "Limited street parking.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Stanley's Pub",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a large bar area and table seating in a social setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Delwood",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Zip's Cafe",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood restaurant with bar seating and table service in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sago",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating in a compact dining layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mt. Lookout Tavern",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large bar with multiple floors and seating areas, including an outdoor patio.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Vault - Mt. Lookout",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a central bar in a modern layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Vinology",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Wine bar and restaurant with indoor seating and patio space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor seating is used frequently."
]
},

{
name: "Ichiban - Mt. Lookout",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Sushi restaurant with table seating and bar seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ramundo's Pizzeria",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Guardia",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cloud 9 Sushi",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and bar seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Lookout Joe",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Hummus Republic",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Counter-service restaurant with a simple ordering line and casual seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Good Plates Eatery",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter ordering and a compact seating area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Hangry Joe's Hot Chicken & Wings - Clifton",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating for quick visits.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Avalanche Crepes & Waffles",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Compact café with counter ordering and small seating areas for short visits.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-evening visits are common."
]
},

{
name: "Clifton Indian Restaurant & Bar",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Martino’s on Vine",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating in a traditional dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "HangOverEasy - Clifton",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast and brunch restaurant with table seating and a compact dining room.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Morning visits bring steady traffic."
]
},

{
name: "Alabama Que",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Cincy Steak and Lemonade",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Izen’s Drunken Bento",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Baladi Restaurant & Bakery",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant and bakery with counter ordering and table seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Keystone’s Mac Shack",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},
   
{
name: "Sichuan Palace",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating in a traditional dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mz Jade’s Soul Station",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Drunken Tacos",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with counter service and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "El Taco Veloz",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Adriatico’s",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with table seating and a bar area in a large dining space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mio’s Pizzeria Pub",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and bar seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Montgomery Inn – The Boathouse",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining rooms and indoor and outdoor seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Bow Tie Cafe",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Luca Bistro",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a compact dining space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Al'Lupo Ristorante",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small restaurant with table seating in a compact dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "El Barril",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mt. Adams Bar & Grill",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood bar and restaurant with table seating and patio space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "City View Tavern",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small bar and restaurant with indoor seating and outdoor patio space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor seating is used frequently."
]
},

{
name: "The Hilltop",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with indoor seating and a patio area in a nightlife-focused setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Your Mom’s Pizzeria",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Pizza spot with counter ordering and limited seating in a compact space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-night visits are common."
]
},

{
name: "The Blind Lemon",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small bar with indoor seating and an outdoor patio area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Live music is hosted regularly."
]
},

{
name: "Crowley’s Highland House Cafe",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood bar with a compact interior and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Monk’s Cove",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with a compact interior and close seating arrangement.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The View at Mt. Adams",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and outdoor patio space overlooking the city.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Outdoor seating is used frequently."
]
},

{
name: "Hi-Fi Cincy",
city: "Cincinnati",
neighborhood: "Mt. Adams",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with indoor seating in a nightlife-focused layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Court Street Kitchen",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with a compact dining room and bar seating in a casual layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Alcove by MadTree Brewing",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with indoor seating and patio space in an open layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Eagle OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant with table seating and a bar area across multiple levels.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Likely",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ruth’s Chris Steak House",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Steakhouse with a structured dining room and table seating.",

environment: {
parking: "Valet or Street parking/lots nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "The Precinct",
city: "Cincinnati",
neighborhood: "Columbia Tusculum",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Large restaurant with multiple dining rooms in a structured layout.",

environment: {
parking: "Valet.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Jeff Ruby’s Steakhouse",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and a bar in a formal layout.",

environment: {
parking: "Valet or Street parking/lots nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Red Roost Tavern",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood bar with a compact interior and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The 1931",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with structured seating inside a larger venue space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Biscuit Love Cincinnati",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast restaurant with compact seating and a steady morning crowd.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Jefferson Social",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large bar with indoor seating and outdoor space in a social setting.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: [
"Outdoor seating is used frequently."
]
},

{
name: "Krueger’s Tavern",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Tavern with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bakersfield OTR",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in an open layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "MadTree Brewing - Oakley",
city: "Cincinnati",
neighborhood: "Oakley",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large brewery with indoor and outdoor seating in an open layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Maplewood Kitchen + Bar",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Bright café with table seating focused on breakfast and lunch service.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Moerlein Lager House",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large restaurant and brewery with multiple seating areas and outdoor space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "O’Malley’s in the Alley",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Bar with a compact interior located on a lower level.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Lower level"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Pepp & Dolores",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating in a compact dining room.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Red Leprechaun",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with a compact layout and bar seating in a social setting.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Rhinegeist Brewery",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large brewery with multiple levels and open seating areas.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Samuel Adams Cincinnati Taproom",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Taproom with table seating and outdoor seating in a structured layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Pitch Cincy",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with an open layout and table seating focused on live sports viewing.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Live matches increase noise and crowd levels."
]
},

{
name: "Yard House",
city: "Cincinnati",
neighborhood: "The Banks",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large restaurant and bar with multiple seating areas in an open layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Otto’s",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating in a compact dining room.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Brothers Bar & Grill – Newport",
city: "Newport",
neighborhood: "Newport on the Levee",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large sports bar with multiple seating areas and bar seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Southgate House Revival",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Music venue with multiple rooms and bar service throughout the space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Likely",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "KungBrew Cafe",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop with table seating in a relaxed layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cold Stone Creamery - Newport",
city: "Newport",
neighborhood: "Newport on the Levee",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Ice cream shop with counter service and limited seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Villa Fiesta",
city: "Covington",
neighborhood: "Latonia",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table dining in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Del Gardo’s Cannoli",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Dessert shop with counter service and limited seating in a compact space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Lisse Steakhuis",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Steakhouse with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Eighteen at the Radisson",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating in a structured dining room layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bard’s Burgers & Chili",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with counter ordering and table seating in a simple layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Knowledge Bar & Social Room",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Bar with lounge seating and a compact layout for small groups.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Well",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with a casual layout and bar seating in a social setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Gypsy’s Mainstrasse",
city: "Covington",
neighborhood: "Mainstrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Barbecue restaurant with table seating in a casual dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Second Story Bar",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Bar with lounge seating located above street level in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Juniper’s - Covington",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Cocktail bar with lounge seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Frida 602",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Larry’s - Covington",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Diner with booth seating and counter service in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Morning visits are common."
]
},

{
name: "The Standard Covington",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with indoor seating and patio space in an open layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Braxton Brewing Company",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Brewery with open seating areas and bar service in a large space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "KungFood Chu’s AmerAsia",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a casual dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Goodfellas Pizzeria - Covington",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Pizza restaurant with counter ordering and bar seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-night visits are common."
]
},

{
name: "Mac’s Pizza Pub - Covington",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Pizza pub with bar seating and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Gruff",
city: "Covington",
neighborhood: "Roebling/Riverfront",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Multi-level restaurant and bar with indoor seating and outdoor space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Blinkers Tavern",
city: "Covington",
neighborhood: "Roebling/Riverfront",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Carmelo’s Restaurant",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with closely arranged table seating in a compact dining space.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Coppin’s Restaurant & Bar",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with a structured dining room in a hotel setting.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Anchor Grill",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small diner with counter seating and a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Limited capacity",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Late-night visits are common."
]
},

{
name: "Wiseguy Lounge – Mainstrasse",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Lounge-style bar with a compact interior and close seating.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mama’s on Main",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Italian restaurant with a compact dining room and table seating.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cedar",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in an open layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cock & Bull Public House",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood pub with bar seating and table seating in a traditional layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Madres Modern Mexican",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with table seating and a bar area in a modern layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Doubt It Bar",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Small bar with a compact interior and close seating.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Zazou",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and lounge areas in a modern layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Libby’s Southern Comfort",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a traditional dining layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Agave & Rye",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large restaurant and bar with an open layout and prominent bar seating.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bouquet Restaurant",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating in a compact and structured dining room.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Hofbräuhaus Newport",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large beer hall with communal seating across multiple levels.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Chart House",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with multiple dining rooms and table seating in a waterfront setting.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "La Mexicana Restaurant",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Coaches Corner",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Bar and grill with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Brio Italian Grille",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and table seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Pepper Pod",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Diner with counter seating and table seating in a simple layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Limited capacity",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mi Cozumel",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Par 3 Newport",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Entertainment-focused bar with open seating and activity areas.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mansion Hill Tavern",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small neighborhood bar with a compact layout and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cov Yard",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Outdoor bar with open seating areas in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Doner House",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Limited capacity",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Purple Poulet",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small restaurant with table seating in a compact dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "McCollum’s on York",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood bar with a compact interior and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Limited capacity",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sake Bomb Sushi & Korean BBQ",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large restaurant with table seating and grill tables in an open layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "The Baker’s Table",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with table seating in a structured dining layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Reservations are common."
]
},

{
name: "Shiners on the Levee",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large bar with open seating and entertainment areas.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Bridgeview Box Park",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Outdoor venue with multiple vendors and open seating areas.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Jerry’s Jug House",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small bar with a compact interior and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "New Riff Distilling",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Distillery with tasting areas and seating across multiple levels.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Buffalo Bar",
city: "Ludlow",
neighborhood: "",
state: "KY",
type: "full",

verified: true,  

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with a compact interior and bar seating.",

environment: {
parking: "Lot in the back or street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},
   
{
name: "Ludlow Tavern",
city: "Ludlow",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and bar seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Second Sight Spirits",
city: "Ludlow",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Distillery with bar seating and small table areas in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ludlow Coffee",
city: "Ludlow",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with counter ordering and indoor seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Morning visits are common."
]
},

{
name: "Lagoon Saloon",
city: "Ludlow",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with a compact interior and outdoor seating areas.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Ludlow-Bromley Yacht Club",
city: "Ludlow",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Riverfront club with indoor seating and outdoor areas.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Cork N Crust",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and wine bar with table seating and patio space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Catch & Cut",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Seafood restaurant with table seating and a bar area in a structured layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Schneider’s Sweet Shop",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Dessert shop with counter service and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Avenue Brew",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with counter ordering and indoor seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Morning visits are common."
]
},

{
name: "Cancun Mexican Bar & Grill - Newport",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Tulum",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a modern layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "MRBL",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a modern dining space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bellevue Bistro",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating in a compact dining room.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Pompilios - Newport",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining rooms and table seating.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Wayfarer Tavern",
city: "Dayton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and patio space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Buckhead Mountain Grill",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and outdoor seating.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "The Pretzel Place",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small shop with counter service and limited seating for quick visits.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "unknown",
waits: "unknown",
location: "unknown"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Fessler's Legendary Pizza & Hoagies",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with counter ordering and table seating in a simple layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Three Spirits Tavern",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with a compact interior and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Prost Bellevue Tavern",
city: "Bellevue",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with indoor seating and a backyard patio area.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Rose Room",
city: "Dayton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Lounge-style bar with a compact interior and close seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Galactic Fried Chicken",
city: "Dayton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Highland Square Deli",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Deli with counter service and table seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Graeter’s Ice Cream - Newport",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Ice cream shop with counter service and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Tickle Pickle Restaurant - Ft. Thomas",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with counter ordering and table seating in a small dining space.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Padrino",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a neighborhood layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Post Taphouse – Pours and Rations",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Grassroots & Vine",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant and wine bar with table seating in a structured dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fort Thomas Pizza & Tavern",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Midway Cafe",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with a compact interior and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Olde Fort Pub",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood pub with table seating and bar seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "New Garden",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating in a compact dining room.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fort Thomas Coffee",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small café with counter ordering and indoor seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Morning visits are common."
]
},

{
name: "The Green Line Kitchen & Cocktails",
city: "Fort Thomas",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a neighborhood layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "PeeWee's Place",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with booth seating and a bar area in a relaxed layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Grandview Tavern",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with a central bar area and table seating.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Behle Street by Sheli",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a structured dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Osaka Ramen House KY",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small restaurant with counter seating and table seating in a compact layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "La Torta Loca - Crescent Springs",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with counter ordering and table seating in a compact layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Oriental Wok - Lakeside Park",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and a bar in a structured layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cancun Mexican Bar & Grill - Crescent Springs",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Mexican restaurant with booth seating and a bar area in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Asian Place Chinese Restaurant",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter service and a simple dining area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Soco's Mexican Restaurant & Bar",
city: "Fort Mitchell",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Mexican restaurant with booth seating and a bar area in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "BRU Burger Bar - Fort Mitchell",
city: "Fort Mitchell",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant with table seating and a bar area in a modern layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cincy Seafood",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Casual restaurant with counter ordering and a small dining area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "The Block Deli",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Deli with counter ordering and a compact seating area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Bonefish Grill - Buttermilk Pike",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with multiple dining areas and a bar in a structured layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sweet Basil Thai & Sushi",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Restaurant with table seating in a compact and relaxed layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Miyako Steakhouse & Sushi",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant with grill tables and table seating in an open layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Guru India Restaurant",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Indian restaurant with table seating in a compact dining room.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "KJ's - Buttermilk",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Antonio's Pizza Pub",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with table seating and bar seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Empire Buffet",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large buffet restaurant with multiple dining areas and self-serve stations.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bleachers Sports Bar",
city: "Crescent Springs",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with a central bar and table seating throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Poseidons Pizza - Florence",
city: "Florence",
neighborhood: "unknown",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Pizza restaurant with counter ordering and a small dining area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Drake's - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Large restaurant with a central bar and multiple dining areas.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ford's Garage - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area across multiple dining sections.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Blind Squirrel - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with a large bar area and table seating throughout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Thai Tea House",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with table seating in a compact layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Barleycorn's - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Maple Street Biscuit Company - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "KPOT Korean BBQ & Hot Pot - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant with grill tables and table seating across a large dining area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Churchill's Bourbon & Brew Bar & Grille - Turfway Park",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a central bar and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Twin Peaks - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with a central bar and table seating throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},
   
{
name: "Chin Fusion Restaurant & Sushi",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a sushi bar in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Queen's Tacos Mexican Bar & Grill",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Mexican restaurant with booth seating and a bar area in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Spear Ridge Cafe - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Small café with table seating in a simple layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Kopan - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and grill-style dining in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cheddar's Scratch Kitchen - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and a bar in a structured layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Tin Cup",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a central bar and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "BJ's Restaurant & Brewhouse - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and a bar in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "La Catrina Mexican Bar & Grill",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Mexican restaurant with booth seating and a bar area in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Yamato Steak House of Japan",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant with grill tables and table seating in a large dining space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Acapulco Mexican & Grill - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Oishi Express Japanese Grill",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with counter ordering and limited seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Matsuya Japanese Restaurant",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a sushi bar in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Chuy's - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "City Barbeque - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Fast-casual restaurant with counter ordering and table seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Wich Doctor",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Sandwich shop with counter ordering and a small seating area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Tom's Papa Dino's",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with counter ordering and table seating in a casual tighter layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Breakers Grill - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with table seating, bar seating, and activity areas.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The 859 Taproom and Grill",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a central bar and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Dave & Buster's - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large venue with dining areas, bar seating, and arcade space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Red Robin Gourmet Burgers and Brews - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with booth seating and a bar area in a casual dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Honey Baked Ham Company - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small deli with counter ordering and limited seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Hooters - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with a central bar and table seating throughout the space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fillmore's Dairy Hut - Burlington Pike",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Walk-up dessert stand with outdoor seating nearby.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Good Times Only Bar & Grill",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a central bar and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Papa's Bourbon and Beer House",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with a central bar and surrounding table seating.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "China City Buffet",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large buffet restaurant with multiple dining areas and self-serve stations.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Smokin' This and That BBQ",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Barbecue restaurant with table seating in a casual dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Mai Thai Restaurant",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a sushi bar in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "3 Ladies Thai Cuisine",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Small restaurant with table seating in a compact dining room.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Mad Mike's Burgers & Fries - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Burger restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Bourbon House Pizza - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with table seating in a casual dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Buffalo Bob's Family Restaurant",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Family-style restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Lita's Tacos - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with counter ordering and a small dining area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Rafferty's Restaurant & Bar - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with booth seating, table seating, and a bar area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "First Watch - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast restaurant with table seating in an open dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Texas Roadhouse - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large restaurant with multiple dining areas and a bar in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Likely",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "LongHorn Steakhouse - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Steakhouse with booth seating, table seating, and a bar area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Outback Steakhouse - Florence",
city: "Florence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Steakhouse with booth seating and a bar area in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Crewitts Creek Kitchen & Bar",
city: "Independence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Peppers Mexican Grill - Independence",
city: "Independence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Peecox Bar & Grill - Independence",
city: "Independence",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Log Cabin Inn",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a casual dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Knuk-N-Futz",
city: "Taylor Mill",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with table seating and bar seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "El Jinete Mexican Restaurant - Taylor Mill",
city: "Taylor Mill",
neighborhood: "unknown",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a large dining area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Blue Ash Chili",
city: "Blue Ash",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Diner-style restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Caruso's Ristorante & Bar - Fairfield",
city: "Fairfield",
neighborhood: "Fairfield",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Italian restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},
   
{
name: "Kanpai Japanese Steakhouse & Sushi",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Japanese restaurant with grill tables and a sushi bar in a large dining space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Near entrance"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Rhino's Frozen Yogurt & Soft Serve",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Dessert shop with counter service and limited seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Sleepy Bee Cafe - Blue Ash",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast restaurant with table seating in a bright, open dining space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sammy's Craft Burgers & Beers",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant with bar seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Slatt's Pub & Grill",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Neighborhood pub with bar seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Ando Japanese Restaurant",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Japanese restaurant with table seating and a sushi bar in a calm dining space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Firehouse Grill & Private Event Rooms",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Park Pour",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar with indoor seating and outdoor gathering space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Tahona Taqueria + Tequila Bar",
city: "Blue Ash",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

/* =========================
MONTGOMERY, OH
========================= */

{
name: "Stone Creek Dining Company - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with multiple dining rooms and a bar area in a structured layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Wholy Beans Coffee Co.",
city: "New Richmond",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and casual seating in a small layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "513 Coffee",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter ordering and casual seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Elliott Coffee",
city: "Dayton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Small coffee shop with counter service and limited seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Roost Latonia",
city: "Covington",
neighborhood: "Latonia",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café with counter service and table seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Birdie's Coffee Co.",
city: "Norwood",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and seating for guests.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Trailhead Coffee",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter ordering and seating in a small layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fulton Yards Coffeehouse and Spirits",
city: "Cincinnati",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffeehouse and bar with seating for daytime and evening use.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cinergy Cafe",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Café inside an entertainment complex with counter service and seating.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Kings Arms Coffee Roasters",
city: "Cincinnati",
neighborhood: "OTR",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and seating for guests in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Reality Tuesday Cafe",
city: "Park Hills",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Café with counter service and seating in a quiet setting.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Unataza Coffee",
city: "Dayton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and casual seating in a small layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cream + Sugar Coffeehouse",
city: "Cincinnati",
neighborhood: "Norwood",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and casual seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Luckman Coffee - Beechmont Ave",
city: "Cincinnati",
neighborhood: "",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Point Perk Coffee",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and casual seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Daylily",
city: "Cincinnati",
neighborhood: "Columbia-Tusculum",
state: "OH",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café and bakery with counter service and seating in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Lola's Coffee + Bar",
city: "Cincinnati",
neighborhood: "Downtown",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop and bar with seating for daytime and evening use.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fable Cafe",
city: "Cincinnati",
neighborhood: "Westwood",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café with counter service and casual seating in a small layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bean & Barley",
city: "Cincinnati",
neighborhood: "East Walnut Hills",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Café with table seating and counter service in a casual dining layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Little Spoon Bakery & Cafe",
city: "Newport",
neighborhood: "The Levee",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Bakery and café with counter service and table seating in a shared complex.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Ferrari's Little Italy & Bakery",
city: "Madeira",
neighborhood: "Madeira",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Italian restaurant with table seating and a bar area in a structured layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "S.W. Clyborne Co. Provision & Spirits",
city: "Mason",
neighborhood: "Mason",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with multiple dining areas in a social layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "El Rancho Grande - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Original Pancake House - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast restaurant with table seating in a busy dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Near entrance"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Dingle House Irish Pub",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Irish pub with bar seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Servatii Pastry Shop - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Bakery with counter service and limited seating in a compact layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Montgomery Inn - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining areas and table seating.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Bones' Burgers",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Burger restaurant with table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Toast & Berry - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast restaurant with table seating in a bright dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Livery - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with multiple seating areas in a social layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Kitchen Social - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a bar area in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "BRU Burger Bar - Montgomery",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Burger restaurant with bar seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Aroma Restaurant & Sushi",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Sushi restaurant with table seating and booth seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Cafe Bistro at Nordstrom",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Café inside a retail space with table seating in an open layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Crazy Fox Saloon",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with a compact interior and bar seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Dewey's Pizza - Kenwood",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with table seating and an open dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Embers Restaurant",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Steakhouse with multiple dining rooms and table seating in a structured layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "First Watch - Kenwood",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Breakfast restaurant with table seating in an open dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fratelli's Pizzeria",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Hoppin' Vines - Kenwood",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Restaurant and bar with seating areas and activity space in a social layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Globe",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Neighborhood bar with bar seating and small tables in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Hannaford",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating and a bar area in a casual layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Lagoon Saloon",
city: "Ludlow",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with a compact interior and outdoor seating areas.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Wooden Cask Brewery",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Brewery with open seating and a large taproom layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Wunderbar",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Bar with communal seating and bar seating in a social layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Hotel Covington Lobby Bar",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Hotel bar with lounge seating in an open lobby layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Liberty's Bar & Bottle - Covington",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Wine bar with bar seating and small table seating in a relaxed layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Legends Bar & Grill",
city: "Covington",
neighborhood: "Latonia",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with bar seating and TVs in a casual layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Logo's Sports Bar & Grill - Blue Ash",
city: "Cincinnati",
neighborhood: "Blue Ash",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Molly Malone's - Covington",
city: "Covington",
neighborhood: "MainStrasse",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Irish pub with bar seating and table seating in a social layout.",

environment: {
parking: "Street parking nearby; limited during peak hours.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Plan B Flights",
city: "Newport",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Wine and bourbon bar with lounge seating and small tables.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Bodega at Roebling",
city: "Covington",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Moderate",

whatToExpect:
"Market-style restaurant with counter service and casual seating.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Tuba Baking Co.",
city: "Dayton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Bakery with counter service and limited seating for short visits.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Cheesecake Factory - Kenwood",
city: "Cincinnati",
neighborhood: "Kenwood",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large restaurant with multiple dining areas and a bar in a busy layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "The Coffee Exchange - Pleasant Ridge",
city: "Cincinnati",
neighborhood: "Pleasant Ridge",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Coffee shop with counter service and seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Artemis Mediterranean Bistro",
city: "Montgomery",
neighborhood: "Montgomery",
state: "OH",
type: "full",

parkingLevel: "Moderate",
noiseLevel: "Low",

whatToExpect:
"Mediterranean restaurant with table seating in a structured dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Matt the Miller's Tavern",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Tavern-style restaurant with bar seating and multiple dining areas.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Strato Artisanal European Delights",
city: "Liberty Township",
neighborhood: "Liberty Township",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Café with counter service and casual seating in a shopping center setting.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "The Cone",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Walk-up ice cream stand with outdoor seating and open space for visitors.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Multiple exits available."
},

insights: []
},
   
{
name: "Smokey Bones - West Chester",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Barbecue restaurant with large dining areas, TVs, and bar seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "King Corona Latin Kitchen & Cantina",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Latin restaurant with table seating and a bar area in a lively layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Saigon Noodle Bar",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating in a casual dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sonder Brewing Taphaus & Kitchen",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Brewery with open seating, long tables, and a large taproom layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Jag's Steak & Seafood",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Steakhouse with multiple dining rooms and bar seating in a structured layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "El Trompo Mexican Grill - West Chester",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Wise Owl Wine Bar",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Wine bar with small table seating in a compact and relaxed layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Dingle House Irish Pub & Grub",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Irish pub with bar seating and table seating in a social layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Yummy Bowl - West Chester",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with table seating and a self-serve grill area in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Chuy's - West Chester",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large restaurant with multiple dining areas and a bar in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Thai Koon Kitchen",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Thai restaurant with table seating in a calm dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Flame India Restaurant",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Indian restaurant with table seating in a calm dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sawasdee Thai Cuisine & Sushi",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Thai and sushi restaurant with table seating in a relaxed dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Charis Coffee & Creamery",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop and ice cream spot with counter service and casual seating.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Voodoo Brewing Co - West Chester",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Brewery taproom with bar seating and table seating in a social layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sushi Samurais",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Sushi restaurant with table seating in a relaxed dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Topgolf - West Chester",
city: "West Chester Township",
neighborhood: "West Chester",
state: "OH",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large entertainment venue with multiple levels, golf bays, and dining areas.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Multiple exits available."
},

insights: []
},

{
name: "Knotty Pine on the Bayou",
city: "Cold Spring",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a casual dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Longnecks Sports Grill - Wilder",
city: "Wilder",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Barleycorn's - Cold Spring",
city: "Cold Spring",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar and grill with bar seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Peppers Mexican Grill - Cold Spring",
city: "Cold Spring",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Skyline Tavern",
city: "Highland Heights",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Moderate",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with bar seating and small tables in a compact layout.",

environment: {
parking: "Multiple lots nearby.",
restrooms: {
capacity: "Two restrooms",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Wing Snob - Highland Heights",
city: "Highland Heights",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Wings restaurant with counter ordering and a small seating area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Nittha Siam Kitchen",
city: "Highland Heights",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Thai restaurant with table seating in a calm dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Maki Asian Bowls - Cold Spring",
city: "Cold Spring",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Fast-casual restaurant with counter ordering and table seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "City Barbeque - Highland Heights",
city: "Highland Heights",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Barbecue restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "El Nopal - Cold Spring",
city: "Cold Spring",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Chan's Asian Wok - Cold Spring",
city: "Cold Spring",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Asian restaurant with counter ordering and limited seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Four Mile Pig",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Barbecue restaurant with counter ordering and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Bender's Pub Grub",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Inside of Alexandria Brewing Company. Bar and grill with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Spare-Time Grill",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a casual dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Honey Hole Bar & Grill",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Slice is Right Pizzeria",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizzeria with counter ordering and a small seating area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Barrett's Pour House",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with bar seating and TVs in a compact layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "TRU Healthy Spot",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Low",

whatToExpect:
"Small café with counter service and limited seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Generally quiet with a relaxed atmosphere.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Alexandria Brewing Company",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

verified: true,   

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Brewery with bar seating and table seating in a social layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "El Rio Bravo Mexican Restaurant - Alexandria",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Veracruz Mexican Grill - Alexandria",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Brass Key Coffee",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Coffee shop with counter service and casual seating in a compact layout.",

environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sharky's - Alexandria",
city: "Alexandria",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Pelle's - Silver Grove",
city: "Silver Grove",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a casual dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Camp Springs Tavern",
city: "Melbourne",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Neighborhood tavern with bar seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Pepperoncini's Pizza - Silver Grove",
city: "Silver Grove",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with counter ordering and a small seating area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Bambooz Bar & Grill",
city: "Wilder",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and grill with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},   

{
name: "Cattleman's Roadhouse - Richwood/Walton",
city: "Walton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with multiple dining rooms and table seating.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Longnecks Sports Grill - Richwood/Walton",
city: "Walton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "The Hideout - Walton",
city: "Walton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Neighborhood bar with bar seating in a compact layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Zenshi Handcrafted Sushi - Walton",
city: "Walton",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Sushi restaurant with table seating in a relaxed dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Julias Tacos - Mt Zion",
city: "Florencec",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with counter ordering and a small dining area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "The Pub - Crestview Hills",
city: "Crestview Hills",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Large restaurant and bar with table seating and TVs throughout the space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Asiana Crestview Hills Thai & Sushi",
city: "Crestview Hills",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Thai and sushi restaurant with table seating in a relaxed dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "MacKenzie River Pizza, Grill & Pub",
city: "Crestview Hills",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Large restaurant with table seating, booth seating, and a bar area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Dewey's Pizza - Crestview Hills",
city: "Crestview Hills",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with table seating and an open dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Wings and Rings - Crestview Hills",
city: "Crestview Hills",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Noce's Pizzeria",
city: "Edgewood",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizzeria with counter ordering and a small seating area.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Gobblin' Goblin",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Deli-style restaurant with counter ordering and limited seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Visits are typically quick."
]
},

{
name: "Garzelli's Pub & Pizza - Erlanger",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Bar and pizzeria with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Sake Bomb Sushi - Dixie Hwy",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Sushi restaurant with table seating in a relaxed dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "El Nopal Mexican Restaurant - Dixie Hwy",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with table seating in a casual dining layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "1st Wok Chinese Restaurant - Erlanger",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Chinese restaurant with counter ordering and a small dining area.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "The Hive - East Coast Kitchen & Coffee Bar",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Café with counter service and table seating in a relaxed layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Greek To Me - Erlanger",
city: "Erlanger",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mediterranean restaurant with counter ordering and table seating.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Single stall",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Camporosso - Ft Mitchell",
city: "Fort Mitchell",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Pizza restaurant with table seating and a bar area in a large dining space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Greyhound Tavern",
city: "Fort Mitchell",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with multiple dining rooms and table seating in a traditional layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Barleycorn's - Lakeside Park",
city: "Lakeside Park",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Fort Mitchell Public House",
city: "Fort Mitchell",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant and bar with table seating in a casual dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Harmon's Barbecue",
city: "Fort Wright",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Barbecue restaurant with table seating in a casual dining layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: [
"Takeout orders are common."
]
},

{
name: "Braxton Barrel House - Ft Mitchell",
city: "Fort Mitchell",
neighborhood: "",
state: "KY",
type: "full",

verified: true,

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Brewery restaurant with bar seating and table seating in a social layout.",

environment: {
parking: "Shared lot with nearby businesses.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Mi Tierra - Ft Wright",
city: "Fort Wright",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Mexican restaurant with booth seating and table seating in a casual layout.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Rare",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Dickmann's Sports Barn",
city: "Fort Wright",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "High",

whatToExpect:
"Sports bar with bar seating, table seating, and TVs throughout the space.",

environment: {
parking: "Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Loud during busy times.",
exits: "Front entrance; easy step outside."
},

insights: []
},

{
name: "Walt's Hitching Post",
city: "Fort Wright",
neighborhood: "",
state: "KY",
type: "full",

parkingLevel: "Easy",
noiseLevel: "Moderate",

whatToExpect:
"Restaurant with multiple dining rooms and table seating in a traditional layout.",

environment: {
parking: "Valet and Large dedicated parking lot available.",
restrooms: {
capacity: "Multiple stalls",
waits: "Possible",
location: "Inside main area"
},
noise: "Moderate noise with steady conversation.",
exits: "Front entrance; easy step outside."
},

insights: []
},

   
];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function showRandomPlace() {

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const randomPlace = places[Math.floor(Math.random() * places.length)];

  const patternsHTML =
    randomPlace.insights && randomPlace.insights.length
      ? `<ul>${randomPlace.insights.map(i => `<li>${i}</li>`).join("")}</ul>`
      : "<p>No observed patterns yet.</p>";

  const isVerified = randomPlace.verified === true;

  resultDiv.innerHTML = `
    <div class="card">

      <div class="label">Featured CalmPath Profile</div>

      <div class="place-header">
        <div class="place-name">
          ${randomPlace.name}
          ${isVerified ? `
            <span class="verified-badge" title="Confirmed by CalmPath users">
              <span class="check">✔</span>
              Verified
            </span>
          ` : ``}
        </div>
        <div class="place-location">
          ${randomPlace.neighborhood ? randomPlace.neighborhood + " • " : ""}${randomPlace.city}, ${randomPlace.state}
        </div>
      </div>

      <div class="snapshot">
        <div class="snapshot-grid">

          <div class="snapshot-item">
            <div class="snapshot-label">Parking</div>
            <div class="snapshot-value">${randomPlace.environment.parking}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Noise</div>
            <div class="snapshot-value">${randomPlace.environment.noise}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Restrooms</div>
            <div class="snapshot-value">${randomPlace.environment.restrooms.capacity}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Exits</div>
            <div class="snapshot-value">${randomPlace.environment.exits}</div>
          </div>

        </div>
      </div>

      <!-- ✅ VERIFICATION (same as profile) -->
      <div class="verification">

        <p class="verification-question">Did this match your experience?</p>

        <div class="verification-actions">
          <button class="verify-btn" data-action="up">👍 Yes, this matches</button>
          <button class="verify-btn" data-action="down">👎 Not quite</button>
        </div>

        <div class="verification-confirmation hidden">
          Thanks for confirming
        </div>

        <div class="verification-correction hidden">

          <div class="correction-group" data-field="parking">
            <p>Parking:</p>
            <button data-value="Easy">Easy</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Difficult">Difficult</button>
          </div>

          <div class="correction-group" data-field="noise">
            <p>Noise:</p>
            <button data-value="Quiet">Quiet</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Loud">Loud</button>
          </div>

          <div class="correction-group" data-field="restrooms">
            <p>Restrooms:</p>
            <button data-value="Easy">Easy</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Limited">Limited</button>
          </div>

          <div class="correction-group" data-field="exits">
            <p>Exits:</p>
            <button data-value="Easy">Easy</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Tight">Tight</button>
          </div>

          <button class="submit-correction">Submit update</button>

        </div>

      </div>

      <h3>What to expect</h3>
      <p>${randomPlace.whatToExpect}</p>

      <h3>Observed patterns</h3>
      ${patternsHTML}

    </div>
  `;

  // ✅ IMPORTANT: attach handlers
  attachVerificationHandlers(randomPlace);
}

function selectPlace(placeName) {

  const place = places.find(p => p.name === placeName);

  document.getElementById("suggestions").innerHTML = "";

  if (typeof gtag !== "undefined" && place) {
    gtag('event', 'venue_selected', {
      venue_name: place.name || "",
      neighborhood: place.neighborhood || "",
      city: place.city || ""
    });
  }

  renderPlace(place);
}

function searchPlace() {

  const inputRaw = document.getElementById("search").value;

  const input = normalize(inputRaw);
  const resultDiv = document.getElementById("result");
  const suggestionsDiv = document.getElementById("suggestions");

  resultDiv.innerHTML = "";

  if (input.length === 0) {
    suggestionsDiv.innerHTML = "";
    showRandomPlace();
    return;
  }

  if (input.length === 1) {
    suggestionsDiv.innerHTML = "";
    resultDiv.innerHTML = `
      <p style="margin-top:16px; color:#666;">
        Keep typing to search.
      </p>
    `;
    return;
  }

  const matches = places
    .filter(place =>
      normalize(place.name).includes(input) ||
      normalize(place.city).includes(input) ||
      (place.neighborhood && normalize(place.neighborhood).includes(input))
    )
    .slice(0, 8);

  suggestionsDiv.innerHTML = matches.map(place => `
    <div class="suggestion-item" onclick="selectPlace(\`${place.name}\`)">
      ${place.name} — ${place.city}${place.neighborhood ? " • " + place.neighborhood : ""}
    </div>
  `).join("");

  if (typeof gtag !== "undefined") {
    gtag('event', 'search_performed', {
      search_term: inputRaw || "",
      results_count: matches.length
    });
  }

  if (matches.length === 0) {
    resultDiv.innerHTML = `
      <p style="margin-top:16px;">
        We don’t have a CalmPath profile for that place yet.
      </p>
    `;
    return;
  }
}

function renderPlace(place) {

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!place) return;

  const patternsHTML =
    place.insights && place.insights.length
      ? `<ul>${place.insights.map(i => `<li>${i}</li>`).join("")}</ul>`
      : "<p>No observed patterns yet.</p>";

  const isVerified = place.verified === true;

  resultDiv.innerHTML = `
    <div class="card">

      <div class="label">CalmPath Profile</div>

      <div class="place-header">
        <div class="place-name">
          ${place.name}
          ${isVerified ? `
            <span class="verified-badge" onclick="toggleVerifiedTooltip(event)">
              <span class="check">✔</span>
              Verified
              <span class="verified-tooltip">Confirmed by CalmPath users</span>
            </span>
          ` : ``}
        </div>
        <div class="place-location">
          ${place.neighborhood ? place.neighborhood + " • " : ""}${place.city}, ${place.state}
        </div>
      </div>

      <div class="snapshot">
        <div class="snapshot-grid">

          <div class="snapshot-item">
            <div class="snapshot-label">Parking</div>
            <div class="snapshot-value">${place.environment?.parking || ""}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Noise</div>
            <div class="snapshot-value">${place.environment?.noise || ""}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Restrooms</div>
            <div class="snapshot-value">${place.environment?.restrooms?.capacity || ""}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Exits</div>
            <div class="snapshot-value">${place.environment?.exits || ""}</div>
          </div>

        </div>
      </div>

      <!-- VERIFICATION -->
      <div class="verification">

        <p>Was this accurate?</p>

        <div class="verification-actions">
          <button class="verify-btn" data-action="up">👍 Yes, this matches</button>
          <button class="verify-btn" data-action="down">👎 Not quite</button>
        </div>

        <div class="verification-confirmation hidden">
          Thanks for confirming
        </div>

        <div class="verification-correction hidden">

          <div class="correction-group" data-field="parking">
            <p>Parking:</p>
            <button data-value="Easy">Easy</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Difficult">Difficult</button>
          </div>

          <div class="correction-group" data-field="noise">
            <p>Noise:</p>
            <button data-value="Quiet">Quiet</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Loud">Loud</button>
          </div>

          <div class="correction-group" data-field="restrooms">
            <p>Restrooms:</p>
            <button data-value="Easy">Easy</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Limited">Limited</button>
          </div>

          <div class="correction-group" data-field="exits">
            <p>Exits:</p>
            <button data-value="Easy">Easy</button>
            <button data-value="Moderate">Moderate</button>
            <button data-value="Tight">Tight</button>
          </div>

          <button class="submit-correction">Submit update</button>

        </div>

      </div>

      <h3>What to expect</h3>
      <p>${place.whatToExpect}</p>

      <h3>Observed patterns</h3>
      ${patternsHTML}

    </div>
  `;

  // ✅ Fire AFTER render completes (accurate tracking)
  if (typeof gtag !== "undefined") {
    gtag('event', 'profile_view', {
      venue_name: place.name || "",
      neighborhood: place.neighborhood || "",
      city: place.city || "",
      source: "search"
    });
  }

  attachVerificationHandlers(place);
}

function toggleVerifiedTooltip(event) {
  event.stopPropagation();

  const badge = event.currentTarget;
  const tooltip = badge.querySelector(".verified-tooltip");

  document.querySelectorAll(".verified-tooltip.show").forEach(t => {
    if (t !== tooltip) t.classList.remove("show");
  });

  tooltip.classList.add("show");

  setTimeout(() => {
    tooltip.classList.remove("show");
  }, 2000);
}

if (!window._verifiedTooltipListenerAdded) {
  document.addEventListener("click", () => {
    document.querySelectorAll(".verified-tooltip.show").forEach(t => {
      t.classList.remove("show");
    });
  });
  window._verifiedTooltipListenerAdded = true;
}

function attachVerificationHandlers(place) {

  const verification = document.querySelector(".verification");
  if (!verification) return;

  const buttons = verification.querySelectorAll(".verify-btn");
  const confirmation = verification.querySelector(".verification-confirmation");
  const correction = verification.querySelector(".verification-correction");

  let selectedCorrections = {};

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      if (verification.classList.contains("handled")) return;
      verification.classList.add("handled");

      const action = btn.dataset.action;

      // Hide buttons + question
      verification.querySelector(".verification-actions").style.display = "none";
      const question = verification.querySelector(".verification-question");
      if (question) question.remove();

      if (action === "up") {

        // ✅ Show confirmation
        confirmation.classList.remove("hidden");

        // 🔥 Send VERIFIED to Airtable
        fetch("https://hook.us2.make.com/82lmf35fe4jgl0ums1poz3js98fs57g2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            place_name: place.name,
            type: "Verified"
          })
        });

        // ✅ Analytics
        if (typeof gtag !== "undefined") {
          gtag("event", "place_verified", {
            place_name: place.name || ""
          });
        }

      } else {

        // Show correction UI
        correction.classList.remove("hidden");

        if (typeof gtag !== "undefined") {
          gtag("event", "place_correction_started", {
            place_name: place.name || ""
          });
        }
      }
    });
  });

  // Handle selection buttons
  const groups = verification.querySelectorAll(".correction-group");

  groups.forEach(group => {
    const field = group.dataset.field;
    const options = group.querySelectorAll("button");

    options.forEach(option => {
      option.addEventListener("click", () => {
        options.forEach(btn => btn.classList.remove("selected"));
        option.classList.add("selected");
        selectedCorrections[field] = option.dataset.value;
      });
    });
  });

  // Submit corrections
  const submitBtn = verification.querySelector(".submit-correction");

  submitBtn.addEventListener("click", () => {

    const required = ["parking", "noise", "restrooms", "exits"];

    for (let key of required) {
      if (!selectedCorrections[key]) {
        alert("Please select all fields");
        return;
      }
    }

    // 🔥 Send CORRECTION to Airtable
    fetch("https://hook.us2.make.com/82lmf35fe4jgl0ums1poz3js98fs57g2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        place_name: place.name,
        type: "Correction",
        parking: selectedCorrections.parking,
        noise: selectedCorrections.noise,
        restrooms: selectedCorrections.restrooms,
        exits: selectedCorrections.exits
      })
    });

    // ✅ Analytics
    if (typeof gtag !== "undefined") {
      gtag("event", "place_correction_submitted", {
        place_name: place.name || "",
        parking: selectedCorrections.parking,
        noise: selectedCorrections.noise,
        restrooms: selectedCorrections.restrooms,
        exits: selectedCorrections.exits
      });
    }

    correction.innerHTML = `<p>Thanks for the update</p>`;
  });
}

/* =========================
   ROTATING PLACEHOLDER
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("search");

  if (!searchInput || !places || places.length === 0) return;

  const examplePlaces = places.map(place => place.name);

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const shuffledPlaces = shuffleArray(examplePlaces);
  let exampleIndex = 0;

  function rotatePlaceholder() {
    searchInput.placeholder = `Try "${shuffledPlaces[exampleIndex]}"`;
    exampleIndex = (exampleIndex + 1) % shuffledPlaces.length;
  }

  rotatePlaceholder();
  setInterval(rotatePlaceholder, 2500);

  showRandomPlace();

});
