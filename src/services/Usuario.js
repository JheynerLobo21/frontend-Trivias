let servidorAPI = "https://trivia-api-4gag.onrender.com/";

export const getUser = async (idAuth) => {
  try {
    const question = await fetch(servidorAPI + "api/public/User/" + idAuth, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (question.status != 204) return await question.json();
    else {
      return null;
    }
  } catch (err) {
    console.error(err);
  }
};
export const createUser = async (user) => {
  try {
    const question = await fetch(servidorAPI + "api/public/User", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let response = await question.json();
    let responsefinal = {
      response: response,
      status: response.status,
    };
    return responsefinal;
  } catch (err) {
    console.error(err);
  }
};
