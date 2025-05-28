
const section_id = [
  { name: "Premium", seat_color_id: "gold" },
  { name: "Standard", seat_color_id: "red" }
];

const tier_id = [
  {
    name: "Adult",
    description: "Ages 18+",
    prices: {
      Premium: "$30 + Fee + Tax",
      Standard: "$25 + Fee + Tax"
    }
  },
  {
    name: "Child",
    description: "Ages 3–17",
    prices: {
      Premium: "$20 + Fee + Tax",
      Standard: "$15 + Fee + Tax"
    }
  }
];



function generateLegend(section_id, tier_id) {
// Determine if any ticket has a description
const hasDescriptions = tier_id.some(ticket => ticket.description);

// Base column count = tier columns + 1 ("Type") + 1 (if descriptions)
let totalColumns = section_id.length + 1;
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
const singleTier = section_id.length === 1;

for (const tier of section_id) {
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

for (const ticket of tier_id) {
  const row = document.createElement('div');
  row.setAttribute('rel', 'body');

  // Add Type
  const typeSpan = document.createElement('span');
  typeSpan.style.width = columnWidth;
  typeSpan.textContent = ticket.name;
  row.appendChild(typeSpan);

  // Add Description if applicable
  if (hasDescriptions) {
    const descSpan = document.createElement('span');
    descSpan.style.width = columnWidth;
    descSpan.textContent = ticket.description || "—";
    row.appendChild(descSpan);
  }

  // Add price for each tier
  for (const tier of section_id) {
    const priceSpan = document.createElement('span');
    priceSpan.style.width = columnWidth;
    priceSpan.textContent = ticket.prices[tier.name] || "—";
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

    const { section_id, tier_id } = await response.json();

    generateLegend(section_id, tier_id);
  
  } catch (err) {
    console.error(err);
    document.getElementById('div-legend').innerText = "Error loading ticket data.";
  }
}

