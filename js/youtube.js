"use strict";

const videoUrl = "https://www.youtube.com/watch?v=6BSWaqlvQ00"; 
const videoId = "6BSWaqlvQ00"; 

const videoContainer = document.getElementById("video-placeholder");

const iframe = document.createElement("iframe");
iframe.width = "560";
iframe.height = "315";
iframe.src = `https://www.youtube.com/embed/${videoId}`; 
iframe.title = "YouTube video player";
iframe.frameBorder = "0";
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.allowFullscreen = true;

videoContainer.appendChild(iframe);


