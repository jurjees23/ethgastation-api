# What is this?
    A library to estimate the ethereum gas price on Ethereum Transaction

# Installation

-    `npm install eth-gasprice-estimator --save`

# Code usage

    //For React or Other Js Framework
    import {gasstationInfo} from 'eth-gasprice-estimator';

    //For Nodejs
    const {gasstationInfo} = require('eth-gasprice-estimator');

    gasstationInfo("fastest")
    .then(result=>{
        console.log("result",result);
    }).catch(err=>{
        console.log("err",err);
    });

#  Sample Ethereum Send Transaction
   
     const sendTransaction = async () => {

        var gasPriceResult=await gasstationInfo("fastest");

        web3.eth.sendTransaction({
            from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
            to: "0x086912faa7f6598d28d80c448c8d1e9dae5a4dee", 
            value: web3.toWei(1, "ether"), 
            gas: 210000,
            gasPrice:gasPriceResult,
        }, function(err, transactionHash) {
            if (err) { 
                console.log(err); 
            } else {
                console.log(transactionHash);
            }
        });

     }


# How to Solve Cors Issue If Occur

     //For React or Other Js Framework 
-    *Add Below Meta Tag in public.Index.html*

     `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">` 

     //For Nodejs
-    *Add Cors Package*

    `npm install cors --save`



## Options

    Gas station info needs one parameter to specify  transaction Speed on ethereum transaction.

- *Transaction Speed Type* - fast,fastest,safeLow,average.



