// Test Cases
// Test Case 1: 5 Tiers, 0 Types, Total
const data = [
  {
    price: 26,
    door_price: null,
    id: 32861,
    show_id: 47204,
    section_name: "Tier 1",
    seat_color_id: 3,
    ticket_name: null,
    description: null,
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0
  },
  {
    price: 24,
    door_price: null,
    id: 32862,
    show_id: 47204,
    section_name: "Tier 2",
    seat_color_id: 4,
    ticket_name: null,
    description: null,
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0
  },
  {
    price: 22,
    door_price: null,
    id: 32863,
    show_id: 47204,
    section_name: "Tier 3",
    seat_color_id: 8,
    ticket_name: null,
    description: null,
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0
  },
  {
    price: 20,
    door_price: null,
    id: 32864,
    show_id: 47204,
    section_name: "Tier 4",
    seat_color_id: 7,
    ticket_name: null,
    description: null,
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0
  },
  {
    price: 18,
    door_price: null,
    id: 32865,
    show_id: 47204,
    section_name: "Tier 5",
    seat_color_id: 0,
    ticket_name: null,
    description: null,
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0
  }
]

// // Test Case 2: 2 Tiers, 2 Types, Descriptions, Total
// const data = [
//   {
//     price: 35,
//     door_price: 40,
//     id: 40001,
//     show_id: 50001,
//     section_name: "Main Floor",
//     seat_color_id: 3,
//     ticket_name: "Adult",
//     description: "Ages 18+",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 25,
//     door_price: 30,
//     id: 40001,
//     show_id: 50001,
//     section_name: "Main Floor",
//     seat_color_id: 3,
//     ticket_name: "Child",
//     description: "Ages 3-17",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 28,
//     door_price: 33,
//     id: 40002,
//     show_id: 50001,
//     section_name: "Balcony",
//     seat_color_id: 4,
//     ticket_name: "Adult",
//     description: "Ages 18+",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 18,
//     door_price: 23,
//     id: 40002,
//     show_id: 50001,
//     section_name: "Balcony",
//     seat_color_id: 4,
//     ticket_name: "Child",
//     description: "Ages 3-17",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   }
// ];

// // Test Case 3: Three sections, three ticket types, no description + Fee + Tax
// const data = [
//   {
//     price: 50,
//     door_price: 60,
//     id: 50001,
//     show_id: 60001,
//     section_name: "VIP",
//     seat_color_id: 5,
//     ticket_name: "Standard",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 45,
//     door_price: 55,
//     id: 50001,
//     show_id: 60001,
//     section_name: "VIP",
//     seat_color_id: 5,
//     ticket_name: "Senior",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 40,
//     door_price: 50,
//     id: 50001,
//     show_id: 60001,
//     section_name: "VIP",
//     seat_color_id: 5,
//     ticket_name: "Student",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 30,
//     door_price: 35,
//     id: 50002,
//     show_id: 60001,
//     section_name: "Orchestra",
//     seat_color_id: 7,
//     ticket_name: "Standard",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 25,
//     door_price: 30,
//     id: 50002,
//     show_id: 60001,
//     section_name: "Orchestra",
//     seat_color_id: 7,
//     ticket_name: "Senior",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 20,
//     door_price: 25,
//     id: 50002,
//     show_id: 60001,
//     section_name: "Orchestra",
//     seat_color_id: 7,
//     ticket_name: "Student",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 15,
//     door_price: 20,
//     id: 50003,
//     show_id: 60001,
//     section_name: "Gallery",
//     seat_color_id: 8,
//     ticket_name: "Standard",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 12,
//     door_price: 17,
//     id: 50003,
//     show_id: 60001,
//     section_name: "Gallery",
//     seat_color_id: 8,
//     ticket_name: "Senior",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 10,
//     door_price: 15,
//     id: 50003,
//     show_id: 60001,
//     section_name: "Gallery",
//     seat_color_id: 8,
//     ticket_name: "Student",
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   }
// ];

// // Test Case 4: 1 Section, 2 types (Adult, Child), Total
// const data = [
//   {
//     price: 20,
//     door_price: 25,
//     id: 10001,
//     show_id: 20001,
//     section_name: "Standard",
//     seat_color_id: 3,
//     ticket_name: "Adult",
//     description: "Ages 18+",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 10,
//     door_price: 15,
//     id: 10001,
//     show_id: 20001,
//     section_name: "Standard",
//     seat_color_id: 3,
//     ticket_name: "Child",
//     description: "Ages 3-17",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   }
// ];

// // Test Case 5: 1 Balcony section, 3 types (Adult, Senior, Child), + Fee + Tax
// const data = [
//   {
//     price: 30,
//     door_price: 35,
//     id: 10002,
//     show_id: 20002,
//     section_name: "Balcony",
//     seat_color_id: 4,
//     ticket_name: "Adult",
//     description: "Ages 18+",
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 25,
//     door_price: 30,
//     id: 10002,
//     show_id: 20002,
//     section_name: "Balcony",
//     seat_color_id: 4,
//     ticket_name: "Senior",
//     description: "Ages 65+",
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   },
//   {
//     price: 15,
//     door_price: 20,
//     id: 10002,
//     show_id: 20002,
//     section_name: "Balcony",
//     seat_color_id: 4,
//     ticket_name: "Child",
//     description: "Ages 3-17",
//     service_charge: 2,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 1
//   }
// ];

// // Test Case 6: 2 sections, 1 type each, Total
// const data = [
//   {
//     price: 40,
//     door_price: 45,
//     id: 10003,
//     show_id: 20003,
//     section_name: "Orchestra",
//     seat_color_id: 7,
//     ticket_name: null,
//     description: null,
//     service_charge: 1.15,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 25,
//     door_price: 30,
//     id: 10004,
//     show_id: 20003,
//     section_name: "Mezzanine",
//     seat_color_id: 8,
//     ticket_name: null,
//     description: null,
//     service_charge: 1.15,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   }
// ];

// // Test Case 7: 1 section, 1 type, no description, + Fee
// const data = [
//   {
//     price: 18,
//     door_price: 20,
//     id: 10005,
//     show_id: 20004,
//     section_name: "Gallery",
//     seat_color_id: 0,
//     ticket_name: null,
//     description: null,
//     service_charge: 1.15,
//     include_service_charge_on_ticket: 0,
//     sales_tax_id: 0
//   }
// ];

// // Test Case 8: 1 section, 1 type, price increase, Total
// const data = [
//   {
//     price: 10,
//     door_price: 25,
//     id: 10001,
//     show_id: 20001,
//     section_name: "Standard",
//     seat_color_id: 3,
//     ticket_name: "Adult",
//     description: "Ages 18+",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0,
//     date_start: null,
//     date_end: "2025-06-05 08:59:59",
//   },
//   {
//     price: 20,
//     door_price: 15,
//     id: 10001,
//     show_id: 20001,
//     section_name: "Standard",
//     seat_color_id: 3,
//     ticket_name: "Adult",
//     description: "Ages 18+",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0,
//     date_start: "2025-06-18 08:59:59",
//     date_end: null,
//   },
//   {
//     price: 5,
//     door_price: 25,
//     id: 10001,
//     show_id: 20001,
//     section_name: "Standard",
//     seat_color_id: 3,
//     ticket_name: "Child",
//     description: "Ages 3-17",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0,
//     date_start: null,
//     date_end: "2025-06-02 08:59:59",
//   },
//   {
//     price: 10,
//     door_price: 15,
//     id: 10001,
//     show_id: 20001,
//     section_name: "Standard",
//     seat_color_id: 3,
//     ticket_name: "Child",
//     description: "Ages 3-17",
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0,
//     date_start: "2025-06-02 08:59:59",
//     date_end: null,
//   }
// ];


function getActiveData(data) {
  // Get current time in EST (Eastern Standard Time)
  const nowUTC = new Date();
  // EST is UTC-5 or UTC-4 (EDT); for simplicity, use America/New_York
  const nowEST = new Date(nowUTC.toLocaleString("en-US", { timeZone: "America/New_York" }));

  // Filter data for entries where now is between date_start and date_end (inclusive)
 return data.filter(entry => {
  const now = nowEST; // Use the EST time for comparison
  const start = entry.date_start ? new Date(entry.date_start + " EST") : null; // Convert date_start to EST
  const end = entry.date_end ? new Date(entry.date_end + " EST") : null; // Convert date_end to EST
  if (start && end) return now >= start && now <= end; // If both date_start and date_end are set, check if now is between them
  if (start && !end) return now >= start; // If only date_start is set, check if now is after or at date_start
  if (!start && end) return now <= end; // If only date_end is set, check if now is before or at date_end
  return true;
})};

function scheduleLegendUpdate(data, renderLegendFn) {
  // Get current time in EST
  const nowUTC = new Date(); // Get current time in UTC
  const nowEST = new Date(nowUTC.toLocaleString("en-US", { timeZone: "America/New_York" })); // Convert to EST

  // Find the next relevant date_start or date_end in the future
  let nextTime = null; 
  data.forEach(entry => { // Check each entry for date_start and date_end
    if (entry.date_start) {
      const start = new Date(entry.date_start + " EST");
      if (start > nowEST && (!nextTime || start < nextTime)) nextTime = start;
    }
    if (entry.date_end) {
      const end = new Date(entry.date_end + " EST");
      if (end > nowEST && (!nextTime || end < nextTime)) nextTime = end;
    }
  });

  if (nextTime) { // if there is a future date_start or date_end
    const msUntilNext = nextTime - nowEST; // Calculate milliseconds until the next change
    setTimeout(() => { // Schedule the next update
      renderLegendFn(); // Call the render function to update the legend
      // Reschedule in case there are more future changes
      scheduleLegendUpdate(data, renderLegendFn);
    }, msUntilNext);
  }
}

// Function to transform data into sections and tiers
function transformData(data) {
  const colorMap = {
    0: "red",
    2: "orange",
    3: "gold",
    4: "yellow",
    5: "silver",
    7: "green",
    8: "purple"
  };

  // Check values for fee and tax, default to 0 if not present
  const includeFee = data[0]?.include_service_charge_on_ticket ?? 0;
  const salesTax = data[0]?.sales_tax_id ?? 0;

  // Map sections by section_name and color
  const sectionMap = {};
  data.forEach(entry => {
    if (!sectionMap[entry.section_name]) {
      sectionMap[entry.section_name] = {
        name: entry.section_name,
        seat_color_id: colorMap[entry.seat_color_id] || "red" // Default to red if color not found
      };
    }
  });
  const sections = Object.values(sectionMap);

  // Group by ticket type (type_name or fallback)
  const ticketGroups = {};

data.forEach(entry => {
  const key = entry.ticket_name || null;
  if (!ticketGroups[key]) {
    ticketGroups[key] = {
      name: key,
      description: entry.description || null,
      prices: {},
      service_charges: {}
    };
  }
  ticketGroups[key].prices[entry.section_name] = entry.price; // Use price as the base price
  ticketGroups[key].service_charges[entry.section_name] = entry.service_charge || 0; // Use service_charge if available, otherwise default to 0
});

  const tiers = Object.values(ticketGroups); // Each ticket type with its price and fee

  return { sections, tiers, includeFee, salesTax };
}

// Function to generate the legend HTML
function generateLegend(sections, tiers, includeFee, salesTax) {

const hasDescriptions = tiers.some(ticket => ticket.description); // Determine if any ticket type has a description
const uniqueTicketNames = new Set(data.map(entry => entry.ticket_name).filter(Boolean)); // Get unique ticket names
const hasTypes = uniqueTicketNames.size > 1; // Check if there are multiple ticket types


// # of columns = tier columns + 1 ("Type") + 1 (if there are descriptions)
let totalColumns = sections.length;
if (hasTypes) totalColumns += 1; // Add "Type" column
if (hasDescriptions) totalColumns += 1; // Add "Description" column

const columnWidth = (100 / totalColumns) + "%";

// Create main container
const legendEl = document.createElement('div');
legendEl.id = 'auto_legend';

// Create header row (the first row in the legend)
const headerRow = document.createElement('div');
headerRow.setAttribute('rel', 'head');
headerRow.className = 'chairs';

// Add "Type" column
if (hasTypes) {
const typeHeader = document.createElement('span');
typeHeader.style.width = columnWidth;
typeHeader.textContent = "Type";
headerRow.appendChild(typeHeader);
}

// Add "Description" column if needed
if (hasDescriptions) {
  const descHeader = document.createElement('span');
  descHeader.style.width = columnWidth;
  descHeader.textContent = "Description";
  headerRow.appendChild(descHeader);
}

// Add columns depending on the number of tiers
const singleTier = sections.length === 1;

for (const tier of sections) {
  const tierHeader = document.createElement('span');
  tierHeader.style.width = columnWidth;
  if (sections.length > 1) { // If there are multiple tiers, add the seat color to to legend
    tierHeader.setAttribute(tier.seat_color_id, "");
  }
  tierHeader.textContent = singleTier ? "Online Price" : tier.name;
  headerRow.appendChild(tierHeader);
}

legendEl.appendChild(headerRow);

// Create rows (everything under this is the body of the legend)
const bodyContainer = document.createElement('div');
bodyContainer.className = 'alternating';

for (const ticket of tiers) {
  const row = document.createElement('div');
  row.setAttribute('rel', 'body');

  // Add Type
  if (hasTypes) {
  const typeSpan = document.createElement('span');
  typeSpan.style.width = columnWidth;
  typeSpan.textContent = ticket.name;
  row.appendChild(typeSpan);
  }

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
  const basePrice = ticket.prices[tier.name];
  const serviceCharge = ticket.service_charges ? ticket.service_charges[tier.name] || 0 : 0;
  let formatted = `$${parseFloat(basePrice)}`; // Format base price
  if (includeFee === 1 && salesTax == 0) {
    // Total
    const total = parseFloat(basePrice) + parseFloat(serviceCharge); // Calculate total price with fee
    formatted = Number.isInteger(total) ? `$${total}` : `$${total.toFixed(2)}`; // Format price, two decimal places if needed
    priceSpan.textContent = `${formatted} Total`;
    // Total + Tax
  } else if (includeFee === 1 && salesTax !== 0) {
    const total = parseFloat(basePrice) + parseFloat(serviceCharge);
    formatted = Number.isInteger(total) ? `$${total}` : `$${total.toFixed(2)}`;
    priceSpan.textContent = `${formatted} Total + Tax`;
    // + Fee
  } else if (includeFee === 0 && salesTax == 0) {
    priceSpan.textContent = `${formatted} + Fee`;
    // + Fee + Tax
  } else {
    priceSpan.textContent = `${formatted} + Fee + Tax`;
  }
  row.appendChild(priceSpan);
}
  bodyContainer.appendChild(row); // Add the row to the body container
}

legendEl.appendChild(bodyContainer);

document.getElementById('div-legend').appendChild(legendEl);
}

// Function to load legend data dynamically
async function loadLegendData(showId) {
  try {
    const response = await fetch(`/api/show/${showId}/tickets`);
    if (!response.ok) throw new Error("Failed to load ticket data");

    const data = await response.json();
const { sections, tiers, includeFee, salesTax } = transformData(data);
    generateLegend(sections, tiers, includeFee, salesTax); // generate the legend HTML

  } catch (err) {
    console.error(err);
    document.getElementById('div-legend').innerText = "Error loading ticket data.";
  }
}

function renderLegend() {
  const activeData = getActiveData(data);
  const { sections, tiers, includeFee, salesTax } = transformData(activeData);
  generateLegend(sections, tiers, includeFee, salesTax);
}

  renderLegend(); // Initial render of the legend
  scheduleLegendUpdate(data, renderLegend); // Schedule updates based on date_start and date_end

// const { sections, tiers, includeFee, salesTax } = transformData(data);
// generateLegend(sections, tiers, includeFee, salesTax);

// // If you want to load data dynamically, uncomment the line below and provide a valid showId
// loadLegendData(50301); // Replace with actual showId