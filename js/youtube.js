"use strict";
const videoUrl = "https://youtu.be/Lhka0pjBzAQ";
    // Erstat dette med det ønskede video-URL
const videoId = "Lhka0pjBzAQ"; // Erstat dette med det ønskede video-ID

    // Containeren, hvor videoen skal indsættes
    const videoContainer = document.getElementById("video-placeholder");

    // Opret iframe-elementet dynamisk
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`; // Brug embed-formatet
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    // Tilføj iframe til containeren
    videoContainer.appendChild(iframe);