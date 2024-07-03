let servidorAPI="http://localhost:8104/"

export const getUser = async (idAuth)=>{
    try{
        console.log(idAuth)
        const question= await fetch(servidorAPI+ "api/public/User/"+idAuth, {
            method:"GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        //console.log(await question.json());
        if(question.status!=204)
        return await question.json();
        else{return null;}
    }catch(err){
        console.log(err);
    }
}
export const createUser = async (user)=>{
    try{
        const question= await fetch(servidorAPI+ "api/public/User", {
            method:"POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
        });
        //console.log(await question.json());
        let response=await question.json();
        let responsefinal={
            'response': response,
            'status': response.status
        }
        return responsefinal
    }catch(err){
        console.log(err);
    }
}