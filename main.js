
const axios = require("axios");
const URL = "https://otx.alienvault.com/api"
async function callAjax(){
    try{
        const result = await axios.get(URL)
        console.log("hi");
        return result.data;
    }
    catch(err){
        return err.message;
    }
    
}
const getCall = async () =>{
    console.log(await callAjax())
}

getCall().then(res => console.log(res)).catch(err => console.log(err))
