// // Test Cases
// // Test Case 1: 5 Tiers, 0 Types, Total
// const data = [
//   {
//     price: 26,
//     door_price: null,
//     id: 32861,
//     show_id: 47204,
//     section_name: "Tier 1",
//     seat_color_id: 3,
//     ticket_name: null,
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 24,
//     door_price: null,
//     id: 32862,
//     show_id: 47204,
//     section_name: "Tier 2",
//     seat_color_id: 4,
//     ticket_name: null,
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 22,
//     door_price: null,
//     id: 32863,
//     show_id: 47204,
//     section_name: "Tier 3",
//     seat_color_id: 8,
//     ticket_name: null,
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 20,
//     door_price: null,
//     id: 32864,
//     show_id: 47204,
//     section_name: "Tier 4",
//     seat_color_id: 7,
//     ticket_name: null,
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   },
//   {
//     price: 18,
//     door_price: null,
//     id: 32865,
//     show_id: 47204,
//     section_name: "Tier 5",
//     seat_color_id: 0,
//     ticket_name: null,
//     description: null,
//     service_charge: 2,
//     include_service_charge_on_ticket: 1,
//     sales_tax_id: 0
//   }
// ]

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
//     price: 15,
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
//     date_end: "2025-06-05 08:59:59",
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
//     date_start: "2025-06-18 08:59:59",
//     date_end: null,
//   }
// ];

// Test Case 9: 1 section, 1 type, price increase, Total
const data = [
  {
    price: 10,
    door_price: 25,
    id: 10001,
    show_id: 20001,
    section_name: "Standard",
    seat_color_id: 3,
    ticket_name: "Adult",
    description: "Ages 18+",
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0,
    date_start: null,
    date_end: "2025-06-18 08:59:59",
    client_timezone: "PT"
  },
  {
    price: 28,
    door_price: 15,
    id: 10001,
    show_id: 20001,
    section_name: "Standard",
    seat_color_id: 3,
    ticket_name: "Adult",
    description: "Ages 18+",
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0,
    date_start: "2025-06-18 08:59:59",
    date_end: null,
    client_timezone: "PT"
  },
  {
    price: 5,
    door_price: 25,
    id: 10001,
    show_id: 20001,
    section_name: "Standard",
    seat_color_id: 3,
    ticket_name: "Child",
    description: "Ages 3-17",
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0,
    date_start: null,
    date_end: "2025-06-18 08:59:59",
    client_timezone: "PT"
  },
  {
    price: 28,
    door_price: 15,
    id: 10001,
    show_id: 20001,
    section_name: "Standard",
    seat_color_id: 3,
    ticket_name: "Child",
    description: "Ages 3-17",
    service_charge: 2,
    include_service_charge_on_ticket: 1,
    sales_tax_id: 0,
    date_start: "2025-06-18 08:59:59",
    date_end: null,
    client_timezone: "PT"
  }
];

function getTimezoneInfo(clientTimezone) {
  switch ((clientTimezone || "").toUpperCase()) {
    case "NT": case "NST": case "NDT":
      return { zone: "America/St_Johns", label: "NT" };

    case "AT": case "AST": case "ADT":
      return { zone: "America/Halifax", label: "AT" };

    case "ET": case "EST": case "EDT":
      return { zone: "America/New_York", label: "ET" };

    case "CT": case "CST": case "CDT":
      return { zone: "America/Chicago", label: "CT" };

    case "SK":
      // Saskatchewan does NOT observe DST, so use Regina
      return { zone: "America/Regina", label: "SK" };

    case "YT":
      // Yukon switched to permanent UTC-7 (similar to MST without DST)
      return { zone: "America/Whitehorse", label: "YT" };

    case "MST":
      // MST specifically implies *no DST* (e.g., Arizona)
      return { zone: "America/Phoenix", label: "MST" };

    case "MT": case "MDT":
      return { zone: "America/Denver", label: "MT" };

    case "PT": case "PST": case "PDT":
      return { zone: "America/Los_Angeles", label: "PT" };

    case "AK": case "AKST": case "AKDT":
      return { zone: "America/Anchorage", label: "AK" };

    case "HT": case "HAST": case "HADT":
      return { zone: "Pacific/Honolulu", label: "HT" };

    default:
      // Default to ET if unrecognized
      return { zone: "America/New_York", label: "ET" };
  }
}

// Formats the date for the legend with timezone information
function formatLegendDateWithZone(dateStr, zoneLabel, timeZone) {
  if (!dateStr) return "";
  const baseDate = new Date(dateStr.replace(" ", "T") + "-04:00");
  const options = {
    timeZone,
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(baseDate);
  const month = parts.find(p => p.type === "month").value;
  const day = parts.find(p => p.type === "day").value;
  const hour = parts.find(p => p.type === "hour").value;
  const min = parts.find(p => p.type === "minute").value;
  const ampm = parts.find(p => p.type === "dayPeriod").value.toLowerCase();
  return `${month}/${day} at ${hour}:${min} ${ampm} (${zoneLabel})`;
}

// Loads legend data dynamically from the server
function getActiveData(data) {
  const nowUTC = new Date();
  const nowEST = new Date(nowUTC.toLocaleString("en-US", { timeZone: "America/New_York" }));
  return data.filter(entry => {
    const now = nowEST;
    const start = entry.date_start ? new Date(entry.date_start + " EST") : null;
    const end = entry.date_end ? new Date(entry.date_end + " EST") : null;
    if (start && end) return now >= start && now <= end;
    if (start && !end) return now >= start;
    if (!start && end) return now <= end;
    return true;
  });
}

// Schedules the legend update based on the next relevant date in the data
function scheduleLegendUpdate(data, renderLegendFn) {
  const nowUTC = new Date();
  const nowEST = new Date(nowUTC.toLocaleString("en-US", { timeZone: "America/New_York" }));
  let nextTime = null;
  data.forEach(entry => {
    if (entry.date_start) {
      const start = new Date(entry.date_start + " EST");
      if (start > nowEST && (!nextTime || start < nextTime)) nextTime = start;
    }
    if (entry.date_end) {
      const end = new Date(entry.date_end + " EST");
      if (end > nowEST && (!nextTime || end < nextTime)) nextTime = end;
    }
  });
  if (nextTime) {
    const msUntilNext = nextTime - nowEST;
    setTimeout(() => {
      renderLegendFn();
      scheduleLegendUpdate(data, renderLegendFn);
    }, msUntilNext);
  }
}

// Transforms the data into sections and tiers for the legend
function transformData(data) {
  const colorMap = {
    0: "red", 2: "orange", 3: "gold", 4: "yellow", 5: "silver", 7: "green", 8: "purple"
  };
  const includeFee = data[0]?.include_service_charge_on_ticket ?? 0;
  const salesTax = data[0]?.sales_tax_id ?? 0;
  const sectionMap = {}; // Map to hold unique sections
  data.forEach(entry => {
    if (!sectionMap[entry.section_name]) {
      sectionMap[entry.section_name] = {
        name: entry.section_name,
        seat_color_id: colorMap[entry.seat_color_id] || "red"
      };
    }
  });
  const sections = Object.values(sectionMap);
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
    ticketGroups[key].prices[entry.section_name] = entry.price; // Store price for each section
    ticketGroups[key].service_charges[entry.section_name] = entry.service_charge || 0; // Store service charge for each section
  });
  const tiers = Object.values(ticketGroups); 
  return { sections, tiers, includeFee, salesTax };
}

// Extracts price increase information from the data
function getPriceIncreaseInfo(data) {
  const groups = {};
  data.forEach(entry => {
    const key = entry.ticket_name || "default";
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  });
  // Check if all entries in each group have the same date_start, price, and delta
  let commonDate = null, commonNewPrice = null, commonDelta = null; 
  let allSamePrice = true, allSameDelta = true;
  for (const entries of Object.values(groups)) {
    const sorted = entries.slice().sort((a, b) => {
      if (!a.date_start && !b.date_start) return 0;
      if (!a.date_start) return -1;
      if (!b.date_start) return 1;
      return new Date(a.date_start) - new Date(b.date_start);
    });
    const now = new Date(); 
    let current = null, future = null; 
    // Find the current and future entries based on date_start
    for (const entry of sorted) {
      if (!entry.date_start || new Date(entry.date_start) <= now) current = entry; 
      else if (!future && new Date(entry.date_start) > now) future = entry;
    }
    if (!current || !future) return null; 
    if (commonDate === null) commonDate = future.date_start;
    if (commonNewPrice === null) commonNewPrice = future.price;
    if (commonDelta === null) commonDelta = future.price - current.price;
    if (future.price !== commonNewPrice) allSamePrice = false;
    if ((future.price - current.price) !== commonDelta) allSameDelta = false;
    if (future.date_start !== commonDate) return null;
  }
  if (allSamePrice) return { type: "to", value: commonNewPrice, date: commonDate }; // If all prices are the same, return "to" type
  if (allSameDelta) return { type: "by", value: commonDelta, date: commonDate }; // If all deltas are the same, return "by" type
  return null;
}

// Generates the legend HTML structure based on the provided sections and tiers
function generateLegend(sections, tiers, includeFee, salesTax) {
  const hasDescriptions = tiers.some(ticket => ticket.description); // Check if any ticket has a description
  const uniqueTicketNames = new Set(data.map(entry => entry.ticket_name).filter(Boolean)); // Collect unique ticket names
  const hasTypes = uniqueTicketNames.size > 1;
  let totalColumns = sections.length;
  if (hasTypes) totalColumns += 1;
  if (hasDescriptions) totalColumns += 1;
  const columnWidth = (100 / totalColumns) + "%";
  const legendEl = document.createElement('div');
  legendEl.id = 'auto_legend';

  // Header Row
  const headerRow = document.createElement('div');
  headerRow.setAttribute('rel', 'head');
  headerRow.className = 'chairs';
  if (hasTypes) { // Add Type header if there are multiple ticket types
    const typeHeader = document.createElement('span');
    typeHeader.style.width = columnWidth;
    typeHeader.textContent = "Type";
    headerRow.appendChild(typeHeader);
  }
  if (hasDescriptions) { // Add Description header if any ticket has a description
    const descHeader = document.createElement('span');
    descHeader.style.width = columnWidth;
    descHeader.textContent = "Description";
    headerRow.appendChild(descHeader);
  }
  const singleTier = sections.length === 1; 
  for (const tier of sections) { // Add a header for each section
    const tierHeader = document.createElement('span');
    tierHeader.style.width = columnWidth;
    if (sections.length > 1) tierHeader.setAttribute(tier.seat_color_id, ""); // Set seat color if there are multiple sections
    tierHeader.textContent = singleTier ? "Online Price" : tier.name; // Use "Online Price" for single tier, otherwise use section name
    headerRow.appendChild(tierHeader);
  }
  legendEl.appendChild(headerRow);

  // Body
  const bodyContainer = document.createElement('div');
  bodyContainer.className = 'alternating';
  for (const ticket of tiers) { // Create a row for each ticket type
    const row = document.createElement('div');
    row.setAttribute('rel', 'body');
    if (hasTypes) { // Add Type column if there are multiple ticket types
      const typeSpan = document.createElement('span');
      typeSpan.style.width = columnWidth;
      typeSpan.textContent = ticket.name;
      row.appendChild(typeSpan);
    }
    if (hasDescriptions) { // Add Description column if any ticket has a description
      const descSpan = document.createElement('span');
      descSpan.style.width = columnWidth;
      descSpan.textContent = ticket.description || "—";
      row.appendChild(descSpan);
    }
    for (const tier of sections) { // Add a column for each section
      const priceSpan = document.createElement('span');
      priceSpan.style.width = columnWidth;
      const basePrice = ticket.prices[tier.name];
      const serviceCharge = ticket.service_charges ? ticket.service_charges[tier.name] || 0 : 0;
      let formatted = `$${parseFloat(basePrice)}`; // Format base price
      if (includeFee === 1 && salesTax == 0) { // If fee is included and no sales tax
        const total = parseFloat(basePrice) + parseFloat(serviceCharge);
        formatted = Number.isInteger(total) ? `$${total}` : `$${total.toFixed(2)}`;
        priceSpan.textContent = `${formatted} Total`;
      } else if (includeFee === 1 && salesTax !== 0) { // If fee is included and sales tax is applicable
        const total = parseFloat(basePrice) + parseFloat(serviceCharge);
        formatted = Number.isInteger(total) ? `$${total}` : `$${total.toFixed(2)}`;
        priceSpan.textContent = `${formatted} Total + Tax`;
      } else if (includeFee === 0 && salesTax == 0) { // If fee is not included and no sales tax
        priceSpan.textContent = `${formatted} + Fee`;
      } else { // If fee is not included and sales tax is applicable
        priceSpan.textContent = `${formatted} + Fee + Tax`;
      }
      row.appendChild(priceSpan);
    }
    bodyContainer.appendChild(row);
  }
  legendEl.appendChild(bodyContainer); 

  // Price increase message
  const priceIncrease = getPriceIncreaseInfo(data);
  if (priceIncrease) {
    const futureEntry = data.find(e => e.date_start === priceIncrease.date); // Find the entry with the price increase date
    const { zone, label } = getTimezoneInfo(futureEntry?.client_timezone);
    const formattedDate = formatLegendDateWithZone(priceIncrease.date, label, zone); // Format the date with timezone
    let suffix = "";
    if (includeFee === 1 && salesTax == 0) suffix = " Total";
    else if (includeFee === 1 && salesTax !== 0) suffix = " Total + Tax";
    else if (includeFee === 0 && salesTax == 0) suffix = " + Fee";
    else suffix = " + Fee + Tax";
    let displayValue = priceIncrease.value;
    if (priceIncrease.type === "to" && (includeFee === 1)) { // If the price increases to a new value and fee is included
      if (futureEntry) displayValue = parseFloat(priceIncrease.value) + parseFloat(futureEntry.service_charge || 0); // Add service charge if fee is included
    }
    let formattedValue = Number.isInteger(displayValue) ? `$${displayValue}` : `$${displayValue.toFixed(2)}`; 
    const msgDiv = document.createElement('div');
    msgDiv.setAttribute('rel', 'important');
    const msg = document.createElement('p');
    const span = document.createElement('span');
    if (priceIncrease.type === "to") { // If the price increases to a new value
      span.textContent = `Price increases to ${formattedValue}${suffix} on ${formattedDate}.`;
    } else { // If the price increases by a certain amount
      span.textContent = `Price increases by $${priceIncrease.value} on ${formattedDate}.`;
    }
    msg.appendChild(span); 
    msgDiv.appendChild(msg);
    legendEl.appendChild(msgDiv);
  }

  // Legend container
  const legendContainer = document.getElementById('div-legend');
  legendContainer.innerHTML = "";
  legendContainer.appendChild(legendEl);
}

// Load legend data dynamically (if needed)
function renderLegend() {
  const activeData = getActiveData(data);
  const { sections, tiers, includeFee, salesTax } = transformData(activeData);
  generateLegend(sections, tiers, includeFee, salesTax);
}

renderLegend();
scheduleLegendUpdate(data, renderLegend);

// Uncomment to load data dynamically
// loadLegendData(50301);