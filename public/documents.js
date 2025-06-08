// Function to change the favicon
let icons = [
  'images/PageIcons/favicon1.png',
  'images/PageIcons/favicon2.png',
  'images/PageIcons/favicon3.png'
];

let current = 0;
setInterval(() => {
  const favicon = document.getElementById('favicon');
  current = (current + 1) % icons.length;
  favicon.href = icons[current];
}, 1000);

// Hero
var hero = document.getElementById('hero')
for(let i = 0; i <= 39; i++) {
  
}