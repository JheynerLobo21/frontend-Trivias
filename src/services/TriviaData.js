let servidorAPI = "http://localhost:8104/";
export const triviaData = async (
  idSubcategory,
  dificultad,
  historyQuestions
) => {
  try {
    const response = await fetch(
      servidorAPI +
        "api/public/Question/Random/" +
        idSubcategory +
        "," +
        dificultad,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ historyQuestions }), // Enviar como JSON
      }
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
export const saveScore = async (idUser, idSubcategory, score) => {
  try {
    const question = await fetch(
      servidorAPI +
        "api/public/User/Score/" +
        idUser +
        "," +
        idSubcategory +
        "," +
        score,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return question.status;
  } catch (err) {
    console.error(err);
  }
};
