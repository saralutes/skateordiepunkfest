// Demo data for sponsors
const sponsors = [
  {
    name: "Skate Brand",
    logo: "https://via.placeholder.com/120x60?text=Skate+Brand",
    url: "https://skatebrand.example.com"
  },
  {
    name: "Punk Music",
    logo: "https://via.placeholder.com/120x60?text=Punk+Music",
    url: "https://punkmusic.example.com"
  },
  {
    name: "Board Shop",
    logo: "https://via.placeholder.com/120x60?text=Board+Shop",
    url: "https://boardshop.example.com"
  },
  {
    name: "Energy Drink",
    logo: "https://via.placeholder.com/120x60?text=Energy+Drink",
    url: "https://energydrink.example.com"
  }
];

function renderSponsors() {
  const container = document.getElementById('sponsor-logos');
  container.innerHTML = '';

  sponsors.forEach((sponsor) => {
    const col = document.createElement('div');
    col.className = "sponsor-col";
    col.innerHTML = `
      <a href="${sponsor.url}" target="_blank" rel="noopener noreferrer" class="sponsor-logo-link">
        <img src="${sponsor.logo}" alt="${sponsor.name} Logo" class="sponsor-logo-img">
      </a>
    `;
    container.appendChild(col);
  });
}

document.addEventListener('DOMContentLoaded', renderSponsors);