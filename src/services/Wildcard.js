let servidorAPI="http://localhost:8104/"

export const getWildcards = async (idUser)=>{
    try{
        const question= await fetch(servidorAPI+ "api/public/User/Wildcard/"+idUser, {
            method:"GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        //console.log(await question.json());
        return question.json();
    }catch(err){
        console.log(err);
    }
}

export const restarComodin = async (idUserWildcard)=>{
    try{
        const question= await fetch(servidorAPI+ "api/public/User/Wildcard/Subtract/"+idUserWildcard, {
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