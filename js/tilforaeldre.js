// Tilføj tekstindhold dynamisk
const textContent = document.querySelector('.text-content');
textContent.innerHTML = `
  <p>
    Vi er glade for, at I overvejer at lade jeres barn blive en del af RanderAFC.
    Hos os lægger vi vægt på fællesskab, sportsglæde og udvikling, både på og uden for banen.
    Amerikansk fodbold er en sport for alle – uanset alder, størrelse eller erfaring.
  </p>
  <ul>
    <li>Professionel træning i en tryg og sjov atmosfære.</li>
    <li>Et stærkt fællesskab med nye venner.</li>
    <li>Mulighed for personlig udvikling gennem teamwork og målrettet indsats.</li>
  </ul>
  <p>
    Læs videre for at lære mere om, hvad vi tilbyder, og hvordan I tilmelder jeres barn til vores klub!
  </p>
`;

// Tilføj billede øverst dynamisk
const topImage = document.getElementById('top-image');
topImage.src = '../img/smil.webp'; // Sørg for at stien til billedet er korrekt
topImage.alt = 'Amerikansk fodbold situation';

// Tilføj billede til containeren dynamisk
const container = document.querySelector('.billedecontainer');
const imageSrc = '../img/tilforaelregruppe.webp'; // Sørg for at stien til billedet er korrekt

const img = document.createElement('img');
img.src = imageSrc;
img.alt = 'Gruppe glade spiller';
container.appendChild(img);