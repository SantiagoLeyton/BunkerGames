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

