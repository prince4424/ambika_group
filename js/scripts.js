// Data for properties (you can replace this with dynamic data fetching)
const propertiesData = {
    location1: [
        {
            title: "AMBIKA_NAGAR", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Beautiful house with a garden.", price: "₹50 Lakh", size: "1500 sq.ft", contact: "9876543210"
        },
        {
            title: "AMBIKA GREEN", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Modern apartment in the city center.", price: "₹70 Lakh", size: "1800 sq.ft", contact: "9876543211"
        },
        {
            title: "AMBIKA HEIGHTS", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Luxury penthouse with a great view.", price: "₹1.2 Crore", size: "2500 sq.ft", contact: "9876543212"
        },
        {
            title: "DEVHOOMI BUILDERS", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Charming townhouse near the beach.", price: "₹60 Lakh", size: "2000 sq.ft", contact: "9876543213"
        }
    ],
    location2: [
        {
            title: "KURALI RAYSS", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Cozy cottage in the countryside."
        },
        {
            title: "ARIES HEIGHTS", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Spacious villa with a pool."
        },
        {
            title: "FUTURE HOMES", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Luxury penthouse with a great view."
        },
        {
            title: "DESTINY HOMES", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Charming townhouse near the beach."
        }
    ],
    location3: [
        {
            title: "Property 5", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Luxury penthouse with a great view."
        },
        {
            title: "Property 6", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Charming townhouse near the beach."
        },
        {
            title: "Property 2", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Modern apartment in the city center."
        },
        {
            title: "Property 2", imgSrc: [
                "assets/images/property1.jpg",
                "assets/images/property2.jpg",
                "assets/images/property4.jpg"
            ], description: "Modern apartment in the city center."
        },

    ],
    // Add more data for location4, location5, and location6...
};
function showProperties(location) {
    const propertiesContainer = document.getElementById("properties");
    propertiesContainer.innerHTML = "";  // Clear previous properties

    const properties = propertiesData[location];
    if (properties && properties.length > 0) {
        let row = '<div class="row properties-row">';
        properties.forEach((property, index) => {
            // Check if imgSrc is an array and use the first image, otherwise use the image directly
            const imageSrc = Array.isArray(property.imgSrc) ? property.imgSrc[0] : property.imgSrc;

            row += `
                <div class="col-md-4 d-flex">
                    <div class="card property-card" onclick="showPropertyDetails('${location}', ${index})">
                        <img src="${imageSrc}" class="card-img-top " alt="${property.title}">
                        <div class="card-body">
                            <h5 class="card-title text-center">${property.title}</h5>
                            <p class="card-text text-center">${property.description}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        row += '</div>';
        propertiesContainer.innerHTML = row;
    } else {
        propertiesContainer.innerHTML = "<p>No properties available for this location.</p>";
    }
}
function showPropertyDetails(location, index) {
    const property = propertiesData[location][index];
    const modalTitle = document.getElementById("propertyModalLabel");
    const modalBody = document.getElementById("propertyModalBody");

    // Creating carousel HTML dynamically
    let carouselIndicators = '';
    let carouselItems = '';
    property.imgSrc.forEach((img, idx) => {
        carouselIndicators += `
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" aria-label="Slide ${idx + 1}"></button>
        `;
        carouselItems += `
            <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100" alt="Property image ${idx + 1}">
            </div>
        `;
    });

    // Modal content with enhanced design
    modalBody.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">${carouselIndicators}</div>
            <div class="carousel-inner">${carouselItems}</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title text-center">${property.title}</h5>
                <p class="card-text text-center">${property.description}</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center"><strong>Price:</strong> ${property.price}</li>
                    <li class="list-group-item text-center"><strong>Size:</strong> ${property.size}</li>
                    <li class="list-group-item text-center"><strong>Contact:</strong> ${property.contact}</li>
                </ul>
            </div>
        </div>
    `;

    // Update modal title and center it
    modalTitle.innerText = "Property Details";
    modalTitle.classList.add('text-center');

    // Show the modal
    $('#propertyModal').modal('show');
}

// function showPropertyDetails(location, index) {
//     const property = propertiesData[location][index];
//     const modalTitle = document.getElementById("propertyModalLabel");
//     const modalBody = document.getElementById("propertyModalBody");

//     // Start the carousel HTML
//     let carouselIndicators = '';
//     let carouselItems = '';

//     // Generate carousel items and indicators for each image
//     property.imgSrc.forEach((img, idx) => {
//         carouselIndicators += `
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${idx}" ${idx === 0 ? 'class="active"' : ''} aria-current="${idx === 0 ? 'true' : 'false'}" aria-label="Slide ${idx + 1}"></button>
//         `;

//         carouselItems += `
//             <div class="carousel-item ${idx === 0 ? 'active' : ''}">
//                 <img src="${img}" class="d-block w-100" alt="Property image ${idx + 1}">
//             </div>
//         `;
//     });

//     // Combine everything into the modal content
//     modalBody.innerHTML = `
//         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//             <div class="carousel-indicators">
//                 ${carouselIndicators}
//             </div>
//             <div class="carousel-inner">
//                 ${carouselItems}
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//             </button>
//         </div>
//         <div class="card mt-3">
//             <div class="card-body">
//                 <h5 class="card-title">${property.title}</h5>
//                 <p class="card-text">${property.description}</p>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item"><strong>Price:</strong> ${property.price}</li>
//                     <li class="list-group-item"><strong>Size:</strong> ${property.size}</li>
//                     <li class="list-group-item"><strong>Contact:</strong> ${property.contact}</li>
//                 </ul>
//             </div>
//         </div>
//     `;

//     // Show the modal
//     $('#propertyModal').modal('show');
// }
function toggleCallbackForm() {
    var form = document.getElementById('callbackForm');
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}
function scrollToProperties() {
    document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
}