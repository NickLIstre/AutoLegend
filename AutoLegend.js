const section_id = [
  { name: "Premium", seat_color_id: "gold" },
  { name: "Standard", seat_color_id: "red" }
];

const tier_id = [
  {
    name: "Adult",
    prices: {
      Premium: "$25 + Fee + Tax",
      Standard: "$20 + Fee + Tax"
    }
  },
  {
    name: "Child",
    prices: {
      Premium: "$20 + Fee + Tax",
      Standard: "$18 + Fee + Tax"
    }
  },
  {
    name: "Senior",
    prices: {
      Premium: "$20 + Fee + Tax",
      Standard: "$18 + Fee + Tax"
    }
  }
];


let totalColumns;

if (!tier_id || tier_id.length === 0) {
  totalColumns = section_id.length;
} else {
  totalColumns = section_id.length + 2;
}

const columnWidth = (100 / totalColumns) + "%";

const legendEl = document.createElement('div');
legendEl.id = 'auto_legend';

const headerRow = document.createElement('div');
headerRow.setAttribute('rel', 'head');
headerRow.className = 'chairs';

for (const tier of section_id) {
  const tierHeader = document.createElement('span');
  tierHeader.style.width = columnWidth;
  tierHeader.setAttribute(tier.seat_color_id, ""); // adds attribute like gold or red
  tierHeader.textContent = tier.name;
  headerRow.appendChild(tierHeader);
}

legendEl.appendChild(headerRow);

const bodyContainer = document.createElement('div');
bodyContainer.className = 'alternating';

for (const ticket of tier_id) {
  const row = document.createElement('div');
  row.setAttribute('rel', 'body');

  for (const tier of section_id) {
    const priceSpan = document.createElement('span');
    priceSpan.style.width = columnWidth;
    priceSpan.textContent = ticket.prices[tier.name];
    row.appendChild(priceSpan);
  }

  bodyContainer.appendChild(row);
}

legendEl.appendChild(bodyContainer);

document.getElementById('div-legend').appendChild(legendEl);
