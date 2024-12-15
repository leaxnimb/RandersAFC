"use strict";

//tilføjer en funktion der sørger for at når der bliver clikket så gøre den til den angivet side.
//henter html elemenet med id og tilføjer en eventlistner på click som derefter udføre den givet funktion.
document.getElementById('tilmelding-btn').addEventListener('click', function() {
    window.location.href = 'signup.html'; 
});