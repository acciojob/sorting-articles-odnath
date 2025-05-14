const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Create an array of objects with original and sortable names
const sortedBands = bands
  .map(band => ({
    original: band,
    sortable: band.replace(/^(a |an |the )/i, '').toLowerCase()
  }))
  .sort((a, b) => a.sortable.localeCompare(b.sortable))
  .map(band => band.original); // Get back the original names in sorted order

// Render the sorted list
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
