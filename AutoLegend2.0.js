
// // Five tiers, 1 Type, no descriptions, Total, no tax)
//  const  include_service_charge_on_ticket = 0;
//  const sales_tax_id = 1; // Assuming no sales tax for this example
// const data = [
//   {
//     "price": 26,
//     "door_price": null,
//     "admin_user_id": 91,
//     "is_default": 1,
//     "date_start": null,
//     "date_end": null,
//     "date_door_pricing_start": null,
//     "max_capacity": null,
//     "is_hc": 0,
//     "ticket_graphic_image_id": null,
//     "ticket_color": null,
//     "ticket_corner": null,
//     "seat_low": null,
//     "seat_high": null,
//     "id": 32861,
//     "show_id": 47204,
//     "name": "Tier 1",
//     "is_ada_seating": 0,
//     "priority_required": 0,
//     "is_general_seating": 0,
//     "ga_capacity": null,
//     "max_order_seats": null,
//     "seat_color_id": 1,
//     "ticket_graphic_image_id_2": 3,
//     "ticket_color_2": null,
//     "ticket_corner_2": null
//   },
//   {
//     "price": 24,
//     "door_price": null,
//     "admin_user_id": 91,
//     "is_default": 1,
//     "date_start": null,
//     "date_end": null,
//     "date_door_pricing_start": null,
//     "max_capacity": null,
//     "is_hc": 0,
//     "ticket_graphic_image_id": null,
//     "ticket_color": null,
//     "ticket_corner": null,
//     "seat_low": null,
//     "seat_high": null,
//     "id": 32862,
//     "show_id": 47204,
//     "name": "Tier 2",
//     "is_ada_seating": 0,
//     "priority_required": null,
//     "is_general_seating": 0,
//     "ga_capacity": null,
//     "max_order_seats": null,
//     "seat_color_id": 0,
//     "ticket_graphic_image_id_2": 4,
//     "ticket_color_2": null,
//     "ticket_corner_2": null
//   },
//   {
//     "price": 22,
//     "door_price": null,
//     "admin_user_id": 91,
//     "is_default": 1,
//     "date_start": null,
//     "date_end": null,
//     "date_door_pricing_start": null,
//     "max_capacity": null,
//     "is_hc": 0,
//     "ticket_graphic_image_id": null,
//     "ticket_color": null,
//     "ticket_corner": null,
//     "seat_low": null,
//     "seat_high": null,
//     "id": 32863,
//     "show_id": 47204,
//     "name": "Tier 3",
//     "is_ada_seating": 0,
//     "priority_required": null,
//     "is_general_seating": 0,
//     "ga_capacity": null,
//     "max_order_seats": null,
//     "seat_color_id": 0,
//     "ticket_graphic_image_id_2": 0,
//     "ticket_color_2": null,
//     "ticket_corner_2": null
//   },
//   {
//     "price": 20,
//     "door_price": null,
//     "admin_user_id": 91,
//     "is_default": 1,
//     "date_start": null,
//     "date_end": null,
//     "date_door_pricing_start": null,
//     "max_capacity": null,
//     "is_hc": 0,
//     "ticket_graphic_image_id": null,
//     "ticket_color": null,
//     "ticket_corner": null,
//     "seat_low": null,
//     "seat_high": null,
//     "id": 32864,
//     "show_id": 47204,
//     "name": "Tier 4",
//     "is_ada_seating": 0,
//     "priority_required": null,
//     "is_general_seating": 0,
//     "ga_capacity": null,
//     "max_order_seats": null,
//     "seat_color_id": 0,
//     "ticket_graphic_image_id_2": 7,
//     "ticket_color_2": null,
//     "ticket_corner_2": null
//   },
//   {
//     "price": 18,
//     "door_price": null,
//     "admin_user_id": 91,
//     "is_default": 1,
//     "date_start": null,
//     "date_end": null,
//     "date_door_pricing_start": null,
//     "max_capacity": null,
//     "is_hc": 0,
//     "ticket_graphic_image_id": null,
//     "ticket_color": null,
//     "ticket_corner": null,
//     "seat_low": null,
//     "seat_high": null,
//     "id": 32865,
//     "show_id": 47204,
//     "name": "Tier 5",
//     "is_ada_seating": 0,
//     "priority_required": null,
//     "is_general_seating": 0,
//     "ga_capacity": null,
//     "max_order_seats": null,
//     "seat_color_id": 0,
//     "ticket_graphic_image_id_2": 8,
//     "ticket_color_2": null,
//     "ticket_corner_2": null
//   }
// ]
 
 
function transformData(data) {
  const colorMap = {
    0: "red",
    3: "gold",
    4: "yellow",
    2: "orange",
    5: "silver",
    7: "green",
    8: "purple"
  };

  // Generate section_id array
  const sections = data.map(entry => ({
    name: entry.name,
    seat_color_id: colorMap[entry.ticket_graphic_image_id_2] || "default"
  }));

  // Generate tier_id array with a single tier: "Online Price"
  const tiers = [
    {
      name: "Standard",
      prices: data.reduce((acc, entry) => {
        acc[entry.name] = entry.price;
        return acc;
      }, {})
    }
  ];

  return { sections, tiers };
}

const {sections, tiers,} = transformData(data);
 
const generateLegend = (sections, tiers, include_service_charge_on_ticket, sales_tax_id) => {
 
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

    const basePrice = ticket.prices[tier.name];
    if (!basePrice) {
      priceSpan.textContent = "—";
    } else {
      if (include_service_charge_on_ticket === 1 && sales_tax_id === 0) {
        priceSpan.textContent = `$${basePrice} Total`;
      } else if (include_service_charge_on_ticket === 1 && sales_tax_id !== 0) {
        priceSpan.textContent = `$${basePrice} Total + Tax`;
      } else if (include_service_charge_on_ticket === 0 && sales_tax_id === 0) {
        priceSpan.textContent = `$${basePrice} + Fee`;
      } else {
        priceSpan.textContent = `$${basePrice} + Fee + Tax`;
      }
    }

    row.appendChild(priceSpan);
  }
    bodyContainer.appendChild(row);
}
 
    legendEl.appendChild(bodyContainer);
 
    document.getElementById('div-legend').appendChild(legendEl);
}
 
const loadLegendData = async (showId) => {
  try {
    const response = await fetch(`/api/show/${showId}/tickets`);
    if (!response.ok) throw new Error("Failed to load ticket data");

    const rawData = await response.json();
const { sections, tiers } = transformData(rawData);

const include_service_charge_on_ticket = rawData[0]?.include_service_charge_on_ticket ?? 0;
const sales_tax_id = rawData[0]?.sales_tax_id ?? 0;

generateLegend(sections, tiers, include_service_charge_on_ticket, sales_tax_id);


  } catch (err) {
    console.error(err);
    document.getElementById('div-legend').innerText = "Error loading ticket data.";
  }
}
