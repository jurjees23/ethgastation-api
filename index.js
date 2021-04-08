var axios = require('axios');
var speedType=["fast","fastest","safeLow","average"]
async function gasstationInfo(type){

    if(speedType.indexOf(type) == -1)
    {
        throw new Error('Transaction Speed Type Not Exists')
        
    }
    try{
        let gasStation= await axios.get('https://ethgasstation.info/api/ethgasAPI.json');
        let gasData=gasStation.data;
        let selectedType=(gasData[type]/10)*1000000000;
        return selectedType;
    }catch(e){
        throw new Error(e)
    }
  
}
module.exports.gasstationInfo=gasstationInfo;
// gasstationInfo("fastest")
// .then(result=>{
//     console.log("result",result);
// }).catch(err=>{
//     console.log("err",err);
// });
