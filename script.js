const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Helper function to strip articles from the start
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort while ignoring articles
const sortedBands = bands.slice().sort((a, b) => {
  return stripArticle(a).toLowerCase().localeCompare(stripArticle(b).toLowerCase());
});

// Render the list in the DOM
const ul = document.getElementById('band');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
