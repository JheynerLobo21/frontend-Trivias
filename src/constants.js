export const pathName = decodeURIComponent(
  window.location.pathname.split("/")[2]
);

export const colors = [
  { path: "#03BB85", id: 1 },
  { path: "#F5F5DC", id: 2 },
  { path: "#808000", id: 3 },
  { path: "#B10202", id: 4 },
  { path: "#FFA629", id: 5 },
  { path: "#9747FF", id: 6 },
  { path: "#4169E1", id: 7 },
  { path: "#B2DAFA", id: 8 },
];

export const imagenes = [
  { path: "trofeo.png", id: 1 },
  { path: "historia.png", id: 2 },
  { path: "tabla-de-cortar.png", id: 3 },
  { path: "cine.png", id: 4 },
  { path: "musica.png", id: 5 },
  { path: "libro.png", id: 6 },
  { path: "deportes.png", id: 7 },
  { path: "ciencias.png", id: 8 },
];

export const servidorAPI = "https://trivia-api-4gag.onrender.com/";

export const maxQuestions = 20;
