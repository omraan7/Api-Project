
var linkToday = document.getElementById("link-today");
var linkLaunches = document.getElementById("link-launches");
var linkPlanets = document.getElementById("link-planets");

var sectionToday = document.getElementById("today-in-space");
var sectionLaunches = document.getElementById("launches");
var sectionPlanets = document.getElementById("planets");

var inputDate = document.getElementById("apod-date-input");
var btnLodeDate = document.getElementById("load-date-btn");
var mediaContainerp = document.getElementById("apod-image");
var mediaContainer = document.getElementById("mediaContainer");

var paragraphLode = document.getElementById("apod-explanation");
var DateEnd = document.getElementById("apod-date-info");
var linkImg = document.getElementById("img-link");
var dateTodaay2 = document.getElementById("dateTodaay");
var dateTodaay1 = document.getElementById("apod-date-detail");
var todayBtn = document.getElementById("today-apod-btn");
var apodDate = document.getElementById("apod-date");
var loader = document.getElementById("apod-loader");

var nameLaunch = document.getElementById("nameLaunch");
var launchDate = document.getElementById("launchDate");
var launchTime = document.getElementById("launchTime");
var LocationLaunch = document.getElementById("LocationLaunch");
var Country = document.getElementById("Country");
var pragraphLaunch = document.getElementById("pragraphLaunch");
var imgLaunch = document.getElementById("imgLaunch");
var planetThumbMercury = document.getElementById("planet-thumb-mercury");
var planetCardVenus = document.getElementById("planet-card-venus");
var planetCardEarth = document.getElementById("planet-card-earth");
var planetCardMars = document.getElementById("planet-card-mars");
var planetCardJupiter = document.getElementById("planet-card-jupiter");
var planetCardSaturn = document.getElementById("planet-card-saturn");
var planetCardUranus = document.getElementById("planet-card-uranus");
var planetCardNeptune = document.getElementById("planet-card-neptune");

var planetDetailImage = document.getElementById("planet-detail-image");
var planetDetailName = document.getElementById("planet-detail-name");
var planetDetailDescription = document.getElementById(
  "planet-detail-description"
);

var planetDistance = document.getElementById("planet-distance");
var planetRadius = document.getElementById("planet-radius");
var planetMass = document.getElementById("planet-mass");
var planetDensity = document.getElementById("planet-density");
var planetOrbital = document.getElementById("planet-orbital-period");
var planetRotation = document.getElementById("planet-rotation");
var planetMoons = document.getElementById("planet-moons");
var planetGravity = document.getElementById("planet-gravity");

var planetDiscoverer = document.getElementById("planet-discoverer");
var planetDiscoveryDate = document.getElementById("planet-discovery-date");
var planetBodyType = document.getElementById("planet-body-type");
var planetVolume = document.getElementById("planet-volume");

var planetPerihelion = document.getElementById("planet-perihelion");
var planetAphelion = document.getElementById("planet-aphelion");
var planetEccentricity = document.getElementById("planet-eccentricity");
var planetInclination = document.getElementById("planet-inclination");
var planetAxialTilt = document.getElementById("planet-axial-tilt");
var planetTemp = document.getElementById("planet-temp");
var planetEscape = document.getElementById("planet-escape");
var planetFactsList = document.getElementById("planet-facts");

var Mass=document.getElementById("Mass")
var Gravity=document.getElementById("Gravity")
var Density=document.getElementById("Density")
var Axial=document.getElementById("Axial")

var mercuryDistance = document.getElementById("planet-mercury-distance");
var mercuryDiameter = document.getElementById("planet-mercury-diameter");
var mercuryMass = document.getElementById("planet-mercury-mass");
var mercuryOrbital = document.getElementById("planet-mercury-orbital");
var mercuryMoons = document.getElementById("planet-mercury-moons");
var mercuryType = document.querySelector("#planet-comparison-tbody tr:nth-child(1) span");

var venusDistance = document.getElementById("planet-venus-distance");
var venusDiameter = document.getElementById("planet-venus-diameter");
var venusMass = document.getElementById("planet-venus-mass");
var venusOrbital = document.getElementById("planet-venus-orbital");
var venusMoons = document.getElementById("planet-venus-moons");
var venusType = document.querySelector("#planet-comparison-tbody tr:nth-child(2) span");

var earthDistance = document.getElementById("planet-earth-distance");
var earthDiameter = document.getElementById("planet-earth-diameter");
var earthMass = document.getElementById("planet-earth-mass");
var earthOrbital = document.getElementById("planet-earth-orbital");
var earthMoons = document.getElementById("planet-earth-moons");
var earthType = document.querySelector("#planet-comparison-tbody tr:nth-child(3) span");

var marsDistance = document.getElementById("planet-mars-distance");
var marsDiameter = document.getElementById("planet-mars-diameter");
var marsMass = document.getElementById("planet-mars-mass");
var marsOrbital = document.getElementById("planet-mars-orbital");
var marsMoons = document.getElementById("planet-mars-moons");
var marsType = document.querySelector("#planet-comparison-tbody tr:nth-child(4) span");

var jupiterDistance = document.getElementById("planet-jupiter-distance");
var jupiterDiameter = document.getElementById("planet-jupiter-diameter");
var jupiterMass = document.getElementById("planet-jupiter-mass");
var jupiterOrbital = document.getElementById("planet-jupiter-orbital");
var jupiterMoons = document.getElementById("planet-jupiter-moons");
var jupiterType = document.querySelector("#planet-comparison-tbody tr:nth-child(5) span");

var saturnDistance = document.getElementById("planet-saturn-distance");
var saturnDiameter = document.getElementById("planet-saturn-diameter");
var saturnMass = document.getElementById("planet-saturn-mass");
var saturnOrbital = document.getElementById("planet-saturn-orbital");
var saturnMoons = document.getElementById("planet-saturn-moons");
var saturnType = document.querySelector("#planet-comparison-tbody tr:nth-child(6) span");

var uranusDistance = document.getElementById("planet-uranus-distance");
var uranusDiameter = document.getElementById("planet-uranus-diameter");
var uranusMass = document.getElementById("planet-uranus-mass");
var uranusOrbital = document.getElementById("planet-uranus-orbital");
var uranusMoons = document.getElementById("planet-uranus-moons");
var uranusType = document.querySelector("#planet-comparison-tbody tr:nth-child(7) span");

var neptuneDistance = document.getElementById("planet-neptune-distance");
var neptuneDiameter = document.getElementById("planet-neptune-diameter");
var neptuneMass = document.getElementById("planet-neptune-mass");
var neptuneOrbital = document.getElementById("planet-neptune-orbital");
var neptuneMoons = document.getElementById("planet-neptune-moons");
var neptuneType = document.querySelector("#planet-comparison-tbody tr:nth-child(8) span");


var today = new Date();
inputDate.max =
  today.getFullYear() +
  "-" +
  String(today.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(today.getDate()).padStart(2, "0");



  var myKey = "HsqBBhjh9ccJ8CRFbeKC0Lleicp9OgTWoHf0OLuw";
var currentAPODUrl = "";

var loadAPOD = async function(date) {
  try {
    loader.classList.remove("hidden");

    var res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=" + myKey + "&date="+date
    );
    var data = await res.json();
    loader.classList.add("hidden");

    if (data.media_type === "video") {
      mediaContainer.innerHTML =
        '<iframe ' +
        'src="' + data.url + '" ' +
        'class="w-full h-full" ' +
        'style="width:100%; height:100%;" ' +
        'frameborder="0" ' +
        'allow="autoplay; fullscreen" ' +
        'allowfullscreen>' +
        '</iframe>';
    
      linkImg.style.display = "none";
    } else {
      mediaContainer.innerHTML =
        '<img ' +
        'src="' + data.url + '" ' +
        'alt="APOD Image" ' +
        'class="w-full h-full object-cover">';
    
      linkImg.style.display = "block";
    }    
  
    console.log(data.url);

    currentAPODUrl = data.url;
    paragraphLode.textContent = data.explanation;
    DateEnd.textContent = "Date: " + data.date;
    dateTodaay2.textContent = data.date;
    dateTodaay1.textContent = data.date;
    apodDate.textContent = "Astronomy Picture of the Day - " + data.date;

  } catch (err) {
    loader.classList.add("hidden");
    console.error("Error fetching APOD:", err);
    mediaContainer.innerHTML = "";
    paragraphLode.textContent = "Failed to load APOD.";
    DateEnd.textContent = "";
  }
};

btnLodeDate.onclick = function() {
  loadAPOD(inputDate.value);
};

todayBtn.onclick = function() {
  inputDate.value = inputDate.max;
  loadAPOD(inputDate.value);
};

linkImg.onclick = function() {
  window.open(currentAPODUrl, "_blank");
};


loadAPOD(inputDate.value);

function hideAllSections() {
  sectionToday.classList.add("hidden");
  sectionLaunches.classList.add("hidden");
  sectionPlanets.classList.add("hidden");
}

function resetLinks() {
  var links = [linkToday, linkLaunches, linkPlanets];
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("bg-blue-500/10", "text-blue-400");
  }
}

linkToday.onclick = function () {
  hideAllSections();
  resetLinks();
  sectionToday.classList.remove("hidden");
  linkToday.classList.add("bg-blue-500/10", "text-blue-400");
};
linkLaunches.onclick = function () {
  hideAllSections();
  resetLinks();
  sectionLaunches.classList.remove("hidden");
  linkLaunches.classList.add("bg-blue-500/10", "text-blue-400");
};
linkPlanets.onclick = function () {
  hideAllSections();
  resetLinks();
  sectionPlanets.classList.remove("hidden");
  linkPlanets.classList.add("bg-blue-500/10", "text-blue-400");
};



function fetchLaunches(limit) {
  var fetchData = async function() {
    try {
      var res = await fetch(
        "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=" + limit
      );
      var data = await res.json();
      var launches = data.results;
      if (!launches || launches.length === 0) return;

      renderFeaturedLaunch(launches[0]);
      renderLaunchCards(launches.slice(1));
    } catch (err) {
      console.error("Error fetching launches:", err);
    }
  };

  fetchData();
}


function formatDateTime(net) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthName = months[net.getUTCMonth()];
  var day = net.getUTCDate();
  var year = net.getUTCFullYear();
  var formattedDate = monthName + " " + day + ", " + year;

  var hours = net.getUTCHours();
  var minutes = net.getUTCMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  var formattedTime =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    " " +
    ampm +
    " UTC";

  return { formattedDate: formattedDate, formattedTime: formattedTime };
}

function getFullLocation(pad) {
  if (!pad) return "Unknown Location";
  var parts = [];
  if (pad.name) parts.push(pad.name);
  if (pad.location) {
    if (pad.location.name) parts.push(pad.location.name);
    if (pad.location.state && pad.location.state.name)
      parts.push(pad.location.state.name);
    if (pad.location.country && pad.location.country.name)
      parts.push(pad.location.country.name);
  }
  return parts.join(", ");
}

function renderFeaturedLaunch(launch) {
  nameLaunch.textContent = launch.name;
  document.getElementById("SpaceX").textContent =
    (launch.launch_service_provider && launch.launch_service_provider.name) ||
    "Unknown";
  document.getElementById("Starship").textContent =
    (launch.rocket &&
      launch.rocket.configuration &&
      launch.rocket.configuration.name) ||
    "Unknown";

  var net = new Date(launch.net);
  if (!isNaN(net.getTime())) {
    var dt = formatDateTime(net);
    launchDate.textContent = dt.formattedDate;
    launchTime.textContent = dt.formattedTime;
  } else {
    launchDate.textContent = "Unknown Date";
    launchTime.textContent = "Unknown Time";
  }

  LocationLaunch.textContent = getFullLocation(launch.pad);
  Country.textContent =
    (launch.pad &&
      launch.pad.location &&
      launch.pad.location.country &&
      launch.pad.location.country.name) ||
    "Unknown";
  pragraphLaunch.textContent =
    (launch.mission && launch.mission.description) ||
    "No description available.";

  imgLaunch.src =
    (launch.image && launch.image.image_url) || "images/launch-placeholder.png";
  imgLaunch.onerror = function () {
    this.onerror = null;
    this.src = "images/launch-placeholder.png";
  };
}

function renderLaunchCards(launches) {
  var container = document.getElementById("launchCards");
  container.innerHTML = "";

  for (var i = 0; i < launches.length; i++) {
    var launch = launches[i];
    var net = new Date(launch.net);
    var dt = formatDateTime(net);
    var location = getFullLocation(launch.pad);

    var card = document.createElement("div");
    card.className =
      "bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer";

    card.innerHTML = `
      <div class="relative h-48 bg-slate-900/50 flex items-center justify-center overflow-hidden">
        <img src="${
          (launch.image && launch.image.image_url) ||
          "images/launch-placeholder.png"
        }" class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        <div class="absolute top-3 right-3">
          <span class="px-3 py-1 text-white backdrop-blur-sm rounded-full text-xs font-semibold">
            ${(launch.status && launch.status.abbrev) || "TBD"}
          </span>
        </div>
      </div>

      <div class="p-5">
        <h4 class="font-bold text-lg mb-2 group-hover:text-blue-400">${
          launch.name
        }</h4>
        <p class="text-sm text-slate-400 mb-3">
          <i class="fas fa-building text-xs"></i> ${
            (launch.launch_service_provider &&
              launch.launch_service_provider.name) ||
            "Unknown Agency"
          }
        </p>
        <div class="space-y-2 text-sm text-slate-300">
          <div><i class="fas fa-calendar text-slate-500 w-4"></i> ${
            dt.formattedDate
          }</div>
          <div><i class="fas fa-clock text-slate-500 w-4"></i> ${
            dt.formattedTime
          }</div>
          <div><i class="fas fa-rocket text-slate-500 w-4"></i> ${
            (launch.rocket &&
              launch.rocket.configuration &&
              launch.rocket.configuration.name) ||
            "Unknown Rocket"
          }</div>
          <div><i class="fas fa-map-marker-alt text-slate-500 w-4"></i> ${location}</div>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
        <button class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">Details</button>
        <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"><i class="far fa-heart"></i></button>
        <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"><i class="fas fa-bell"></i></button>
      </div>
    `;
    container.appendChild(card);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  fetchLaunches(10);
});


var planetsData = [];

fetchPlanets();

async function fetchPlanets() {
  var response = await fetch(
    "https://solar-system-opendata-proxy.vercel.app/api/planets"
  );
  var data = await response.json();
  planetsData = data.bodies;

  updateComparisonTable();
}

function updateComparisonTable() {
  var order = ["mercure", "venus", "terre", "mars", "jupiter", "saturne", "uranus", "neptune"];
  
  for (var i = 0; i < order.length; i++) {
    var id = order[i];
    var planet = null;
    
    for (var j = 0; j < planetsData.length; j++) {
      if (planetsData[j].id.toLowerCase() === id) {
        planet = planetsData[j];
        break;
      }
    }
    if (!planet) continue;
    
    var distanceAU = (planet.semimajorAxis / 1.496e8).toFixed(2);
    var diameter = (planet.meanRadius * 2).toLocaleString();
    var mass = planet.mass ? planet.mass.massValue : "N/A";
    var orbital = "N/A";
    if (planet.sideralOrbit) {
        if (planet.sideralOrbit < 365) {
            orbital = planet.sideralOrbit.toFixed(1) + " days";
        } else {
            orbital = (planet.sideralOrbit / 365).toFixed(1) + " years";
        }
    }
        var moons = planet.moons ? planet.moons.length : 0;
    var type = planet.bodyType || "Planet";
    
    if (id === "mercure") {
      mercuryDistance.textContent = distanceAU;
      mercuryDiameter.textContent = diameter;
      mercuryMass.textContent = mass;
      mercuryOrbital.textContent = orbital;
      mercuryMoons.textContent = moons;
      mercuryType.textContent = planet.englishName;
    } else if (id === "venus") {
      venusDistance.textContent = distanceAU;
      venusDiameter.textContent = diameter;
      venusMass.textContent = mass;
      venusOrbital.textContent = orbital;
      venusMoons.textContent = moons;
      venusType.textContent = planet.englishName;
    } else if (id === "terre") {
      earthDistance.textContent = distanceAU;
      earthDiameter.textContent = diameter;
      earthMass.textContent = mass;
      earthOrbital.textContent = orbital;
      earthMoons.textContent = moons;
      earthType.textContent = planet.englishName;
    } else if (id === "mars") {
      marsDistance.textContent = distanceAU;
      marsDiameter.textContent = diameter;
      marsMass.textContent = mass;
      marsOrbital.textContent = orbital;
      marsMoons.textContent = moons;
      marsType.textContent = planet.englishName;
    } else if (id === "jupiter") {
      jupiterDistance.textContent = distanceAU;
      jupiterDiameter.textContent = diameter;
      jupiterMass.textContent = mass;
      jupiterOrbital.textContent = orbital;
      jupiterMoons.textContent = moons;
      jupiterType.textContent = planet.englishName;
    } else if (id === "saturne") {
      saturnDistance.textContent = distanceAU;
      saturnDiameter.textContent = diameter;
      saturnMass.textContent = mass;
      saturnOrbital.textContent = orbital;
      saturnMoons.textContent = moons;
      saturnType.textContent = planet.englishName;
    } else if (id === "uranus") {
      uranusDistance.textContent = distanceAU;
      uranusDiameter.textContent = diameter;
      uranusMass.textContent = mass;
      uranusOrbital.textContent = orbital;
      uranusMoons.textContent = moons;
      uranusType.textContent = planet.englishName;
    } else if (id === "neptune") {
      neptuneDistance.textContent = distanceAU;
      neptuneDiameter.textContent = diameter;
      neptuneMass.textContent = mass;
      neptuneOrbital.textContent = orbital;
      neptuneMoons.textContent = moons;
      neptuneType.textContent = planet.englishName;
    }
  }
}

function updatePlanetDetails(planetId) {
  var planet = null;
  
  for (var i = 0; i < planetsData.length; i++) {
    if (planetsData[i].id.toLowerCase() === planetId.toLowerCase()) {
      planet = planetsData[i];
      break;
    }
  }
  if (!planet) return;
  
  planetDetailImage.src = planet.image || "images/placeholder.png";
  planetDetailName.textContent = planet.englishName;
  planetDetailDescription.innerHTML = planet.description || "No description available.";

  planetDistance.textContent = (planet.semimajorAxis / 1e6).toFixed(2) + "M km";
  planetRadius.textContent = planet.meanRadius.toLocaleString() + " km";
  planetMass.textContent = planet.mass ? planet.mass.massValue + " × 10^" + planet.mass.massExponent + " kg" : "N/A";
  planetDensity.textContent = planet.density ? planet.density + " g/cm³" : "N/A";
  planetOrbital.textContent = planet.sideralOrbit + " days";
  planetRotation.textContent = planet.sideralRotation + " hours";
  planetMoons.textContent = planet.moons ? planet.moons.length : 0;
  planetGravity.textContent = planet.gravity ? planet.gravity + " m/s²" : "N/A";

  planetDiscoverer.textContent = planet.discoveredBy || "Unknown";
  planetDiscoveryDate.textContent = planet.discoveryDate || "Unknown";
  planetBodyType.textContent = planet.bodyType || "Planet";
  planetVolume.textContent = planet.vol ? planet.vol.volValue + " × 10^" + planet.vol.volExponent : "N/A";

  planetPerihelion.textContent = (planet.perihelion / 1e6).toFixed(2) + "M km";
  planetAphelion.textContent = (planet.aphelion / 1e6).toFixed(2) + "M km";
  planetEccentricity.textContent = planet.eccentricity;
  planetInclination.textContent = planet.inclination + "°";
  planetAxialTilt.textContent = planet.axialTilt ? planet.axialTilt + "°" : "N/A";
  planetTemp.textContent = planet.avgTemp + "°C";
  planetEscape.textContent = planet.escape + " m/s";

  planetFactsList.innerHTML = "";
  var facts = [];
  if (planet.mass && planet.mass.massValue) facts.push("Mass: " + planet.mass.massValue + " × 10^" + planet.mass.massExponent + " kg");
  if (planet.gravity) facts.push("Surface gravity: " + planet.gravity + " m/s²");
  if (planet.density) facts.push("Density: " + planet.density + " g/cm³");
  if (planet.axialTilt) facts.push("Axial tilt: " + planet.axialTilt + "°");

  for (var j = 0; j < facts.length; j++) {
    var li = document.createElement("li");
    li.className = "flex items-start";
    li.innerHTML = '<i class="fas fa-check text-green-400 mt-1 mr-2"></i>' +
                   '<span class="text-slate-300">' + facts[j] + "</span>";
    planetFactsList.appendChild(li);
  }
}

planetThumbMercury.onclick = function() { updatePlanetDetails("mercure"); };
planetCardVenus.onclick = function() { updatePlanetDetails("venus"); };
planetCardEarth.onclick = function() { updatePlanetDetails("terre"); };
planetCardMars.onclick = function() { updatePlanetDetails("mars"); };
planetCardJupiter.onclick = function() { updatePlanetDetails("jupiter"); };
planetCardSaturn.onclick = function() { updatePlanetDetails("saturne"); };
planetCardUranus.onclick = function() { updatePlanetDetails("uranus"); };
planetCardNeptune.onclick = function() { updatePlanetDetails("neptune"); };
