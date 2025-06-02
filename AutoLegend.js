 const colorMap = {
    0: "red",
    3: "gold",
    4: "yellow",
    2: "orange",
    5: "silver",
    7: "green",
    8: "purple"
  };
 
//  // Multiple tiers with descriptions, + Fee
//  const include_service_charge_on_ticket = 0; // Example value
//  const sales_tax_id = 0; // Example value
// const sections = [
//   { name: "Premium", seat_color_id: "gold" },
//   { name: "Standard", seat_color_id: "red" }
// ];

// const tiers = [
//   {
//     name: "Adult",
//     description: "Ages 18+",
//     prices: {
//       Premium: "30",
//       Standard: "25"
//     }
//   },
//   {
//     name: "Child",
//     description: "Ages 3–17",
//     prices: {
//       Premium: "20",
//       Standard: "15"
//     }
//   }
// ];


//  // Multiple tiers without descriptions, + Fee + Tax
// const include_service_charge_on_ticket = 0; // Example value
// const sales_tax_id = 1; // Example value
// const sections = [
//   { name: "Premium", seat_color_id: "gold" },
//   { name: "Standard", seat_color_id: "red" }
// ];

// const tiers = [
//   {
//     name: "Adult",
//     prices: {
//       Premium: "40",
//       Standard: "30"
//     }
//   },
//   {
//     name: "Senior",
//     prices: {
//       Premium: "35",
//       Standard: "25"
//     }
//   }
// ];


//  // Single tier with descriptions, Total
// const include_service_charge_on_ticket = 1; 
// const sales_tax_id = 0; 
// const sections = [
//   { name: "Standard", seat_color_id: "red" }
// ];

// const tiers = [
//   {
//     name: "Adult",
//     description: "Ages 19 and Older",
//     prices: {
//       "Standard": "22"
//     }
//   },
//   {
//     name: "Child",
//     description: "Ages 3 to 18",
//     prices: {
//       "Standard": "15"
//     }
//   }
// ];

//  // 5 tiers with 5 types, Total + Tax
// const include_service_charge_on_ticket = 1; 
// const sales_tax_id = 1; 
// const sections = [
//   { name: "Orchestra", seat_color_id: "gold" },
//   { name: "Mezzanine", seat_color_id: "orange" },
//   { name: "Balcony", seat_color_id: "yellow" },
//   { name: "Box", seat_color_id: "green" },
//   { name: "Gallery", seat_color_id: "red" }
// ];

// const tiers = [
//   {
//     name: "Adult",
//     prices: {
//       Orchestra: "50",
//       Mezzanine: "40",
//       Balcony: "30",
//       Box: "60",
//       Gallery: "25"
//     }
//   },
//   {
//     name: "Senior",
//     prices: {
//       Orchestra: "45",
//       Mezzanine: "35",
//       Balcony: "25",
//       Box: "55",
//       Gallery: "20"
//     }
//   },
//   {
//     name: "Student",
//     prices: {
//       Orchestra: "40",
//       Mezzanine: "30",
//       Balcony: "20",
//       Box: "50",
//       Gallery: "15"
//     }
//   },
//   {
//     name: "Child",
//     prices: {
//       Orchestra: "35",
//       Mezzanine: "25",
//       Balcony: "15",
//       Box: "45",
//       Gallery: "10"
//     }
//   },
//   {
//     name: "Military",
//     prices: {
//       Orchestra: "42",
//       Mezzanine: "32",
//       Balcony: "22",
//       Box: "52",
//       Gallery: "18"
//     }
//   }
// ];

//  // Single tier without descriptions, + Fee + tax
// const include_service_charge_on_ticket = 0; 
// const sales_tax_id = 1; 
// const sections = [
//   { name: "Standard", seat_color_id: "red" }
// ];

// const tiers = [
//   {
//     name: "Adult",
//     prices: {
//       Standard: "18"
//     }
//   },
//   {
//     name: "Senior",
//     prices: {
//       Standard: "15"
//     }
//   }
// ];


function generateLegend(sections, tiers, include_service_charge_on_ticket, sales_tax_id) {

// Determine if any ticket type has a description
const hasDescriptions = tiers.some(ticket => ticket.description);

// # of columns = tier columns + 1 ("Type") + 1 (if there are descriptions)
let totalColumns = sections.length + 1;
if (hasDescriptions) totalColumns += 1;

const columnWidth = (100 / totalColumns) + "%";

// Create main container
const legendEl = document.createElement('div');
legendEl.id = 'auto_legend';

// Create header row
const headerRow = document.createElement('div');
headerRow.setAttribute('rel', 'head');
headerRow.className = 'chairs';

// Add "Type" column
const typeHeader = document.createElement('span');
typeHeader.style.width = columnWidth;
typeHeader.textContent = "Type";
headerRow.appendChild(typeHeader);

// Add "Description" column if needed
if (hasDescriptions) {
  const descHeader = document.createElement('span');
  descHeader.style.width = columnWidth;
  descHeader.textContent = "Description";
  headerRow.appendChild(descHeader);
}

// Add columns
const singleTier = sections.length === 1;

for (const tier of sections) {
  const tierHeader = document.createElement('span');
  tierHeader.style.width = columnWidth;
  if (tier.seat_color_id) {
    tierHeader.setAttribute(tier.seat_color_id, "");
  }
  tierHeader.textContent = singleTier ? "Online Price" : tier.name;
  headerRow.appendChild(tierHeader);
}

legendEl.appendChild(headerRow);

// Create rows
const bodyContainer = document.createElement('div');
bodyContainer.className = 'alternating';

for (const ticket of tiers) {
  const row = document.createElement('div');
  row.setAttribute('rel', 'body');

  // Add Type
  const typeSpan = document.createElement('span');
  typeSpan.style.width = columnWidth;
  typeSpan.textContent = ticket.name;
  row.appendChild(typeSpan);

  // Add description if applicable
  if (hasDescriptions) {
    const descSpan = document.createElement('span');
    descSpan.style.width = columnWidth;
    descSpan.textContent = ticket.description || "—"; // Uses "—" if no description
    row.appendChild(descSpan);
  }

  // Add price for each tier
  for (const tier of sections) {
    const priceSpan = document.createElement('span');
    priceSpan.style.width = columnWidth;
    priceSpan.textContent = ticket.prices[tier.name];
    const basePrice = ticket.prices[tier.name];
    const formatted = `$${parseFloat(basePrice)}`;
        if (include_service_charge_on_ticket === 1 && sales_tax_id === 0) {
          priceSpan.textContent = `${formatted} Total`;
        } else if (include_service_charge_on_ticket === 1 && sales_tax_id === 1) {
          priceSpan.textContent = `${formatted} Total + Tax`;
        } else if (include_service_charge_on_ticket === 0 && sales_tax_id === 0) {
          priceSpan.textContent = `${formatted} + Fee`;
        } else {
          priceSpan.textContent = `${formatted} + Fee + Tax`;
        }
    row.appendChild(priceSpan);
  }

  bodyContainer.appendChild(row);
}

legendEl.appendChild(bodyContainer);

document.getElementById('div-legend').appendChild(legendEl);
}

async function loadLegendData(showId) {
  try {
    const response = await fetch(`/api/show/${showId}/tickets`);
    if (!response.ok) throw new Error("Failed to load ticket data");

    const {sections, tiers} = await response.json();

    generateLegend(sections, tiers, include_service_charge_on_ticket, sales_tax_id);
  
  } catch (err) {
    console.error(err);
    document.getElementById('div-legend').innerText = "Error loading ticket data.";
  }
}

