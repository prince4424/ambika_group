// Data for properties (you can replace this with dynamic data fetching)
const propertiesData = {
    location1: [
        { title: "Property 1", imgSrc: "assets/images/property1.jpg", description: "Beautiful house with a garden." },
        { title: "Property 2", imgSrc: "assets/images/property2.jpg", description: "Modern apartment in the city center." }
    ],
    location2: [
        { title: "Property 3", imgSrc: "assets/images/property3.jpg", description: "Cozy cottage in the countryside." },
        { title: "Property 4", imgSrc: "assets/images/property4.jpg", description: "Spacious villa with a pool." }
    ],
    location3: [
        { title: "Property 5", imgSrc: "assets/images/property5.jpg", description: "Luxury penthouse with a great view." },
        { title: "Property 6", imgSrc: "assets/images/property6.jpg", description: "Charming townhouse near the beach." }
    ],
    // Add more data for location4, location5, and location6...
};

function showProperties(location) {
    
    const propertiesContainer = document.getElementById("properties");
    propertiesContainer.innerHTML = ""; // Clear previous properties

    const properties = propertiesData[location];

    if (properties && properties.length > 0) {
        properties.forEach((property) => {
            const propertyCard = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${property.imgSrc}" class="card-img-top" alt="${property.title}">
                        <div class="card-body">
                            <h5 class="card-title">${property.title}</h5>
                            <p class="card-text">${property.description}</p>
                        </div>
                    </div>
                </div>
            `;
            propertiesContainer.innerHTML += propertyCard;
        });
    } else {
        propertiesContainer.innerHTML = "<p>No properties available for this location.</p>";
    }
}

// function toggleCallbackForm() {
//     const form = document.getElementById("callbackForm");
//     form.classList.toggle("d-none");
// }
function toggleCallbackForm() {
    var form = document.getElementById('callbackForm');
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}