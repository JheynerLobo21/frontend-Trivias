let servidorAPI = "https://trivia-yt0r.onrender.com/";

export const getWildcardsUser = async (idUser) => {
  try {
    const question = await fetch(
      servidorAPI + "api/public/user/wildcard/" + idUser,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return question.json();
  } catch (err) {
    console.error(err);
  }
};

export const getWildcards = async () => {
  try {
    const question = await fetch(servidorAPI + "api/public/wildcard/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return question.json();
  } catch (err) {
    console.error(err);
  }
};

export const restarComodin = async (idUserWildcard) => {
  try {
    const question = await fetch(
      servidorAPI + "api/public/User/Wildcard/Subtract/" + idUserWildcard,
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

export const restarBombicoins = async (idUserWildcard, costWildcard) => {
  try {
    const response = await fetch(
      `${servidorAPI}api/public/User/Bombicoins/subtract/${idUserWildcard},${costWildcard}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.status;
  } catch (err) {
    console.error(err);
  }
};

export const sumarWildcard = async (idUserWildcard, countWildcard) => {
  try {
    const response = await fetch(
      `${servidorAPI}api/public/User/Wildcard/Add/${idUserWildcard},${countWildcard}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.status;
  } catch (err) {
    console.error(err);
  }
};
