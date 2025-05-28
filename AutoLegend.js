const tiers = [
  { name: 'Adult', description: 'Ages 19 and Older', price: '$25 + Fee' },
  { name: 'Child', description: 'Ages 3 to 18', price: '$20 + Fee' }
];

const legendWrapper = document.createElement('div');
legendWrapper.className = 'alternating';

// Loop through the tier data and build the legend
for (const tier of tiers) {
  const tierRow = document.createElement('div');
  tierRow.setAttribute('rel', 'body');

  const nameSpan = document.createElement('span');
  nameSpan.style.width = '34%';
  nameSpan.textContent = tier.name;

  const descSpan = document.createElement('span');
  descSpan.style.width = '34%';
  descSpan.textContent = tier.description;

  const priceSpan = document.createElement('span');
  priceSpan.style.width = '34%';
  priceSpan.textContent = tier.price;

  tierRow.appendChild(nameSpan);
  tierRow.appendChild(descSpan);
  tierRow.appendChild(priceSpan);

  legendWrapper.appendChild(tierRow);
}

document.getElementById('legend_id').appendChild(legendWrapper);
