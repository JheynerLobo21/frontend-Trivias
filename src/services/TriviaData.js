let servidorAPI="http://localhost:8104/"

export const triviaData = async (idSubcategory, dificultad)=>{
    try{
        const question= await fetch(servidorAPI+ "api/public/Question/Random/"+idSubcategory+","+dificultad, {
            method:"GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        //console.log(await question.json());
        return await question.json();
    }catch(err){
        console.log(err);
    }
}
export const saveScore = async (idUser,idSubcategory, score)=>{
    try{
        console.log(score)
        console.log(idSubcategory)
        console.log(idUser)
        const question= await fetch(servidorAPI+ "api/public/User/Score/"+idUser+","+idSubcategory+","+score, {
            method:"PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        //console.log(await question.json());
        return question.status;
    }catch(err){
        console.log(err);
    }
}


