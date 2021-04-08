# What is this?
    A library to estimate the ethereum gas price on Ethereum Transaction

# Installation

-    `npm install ethgastation-api --save`

# Code usage

    //For React or Other Js Framework
    import {gasstationInfo} from 'ethgastation-api';

    //For Nodejs
    const {gasstationInfo} = require('ethgastation-api');

    gasstationInfo("fastest")
    .then(result=>{
        console.log("result",result);
    }).catch(err=>{
        console.log("err",err);
    });

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



