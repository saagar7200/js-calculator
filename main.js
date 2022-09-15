

function setNumber(operation){
    // preventDefault();
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    if(!num1 || !num2){
        document.getElementById("result").innerText = "please enter both numbers";
    }

    // console.log(num1 , num2)
        num1= parseFloat(num1);
        num2= parseFloat(num2);

    // let tag = document.createElement("p");
    // let element = document.getElementById('result');
    let text ="your final result is : "

    let result = 0;

    

    if(operation == "plus" ){
        result = num1 + num2;
        console.log(result);
        // let tag = document.createElement("p");
        // let text =document.createTextNode ("your fina result is :  " + result )
        // tag.appendChild(text );

        // let element = document.getElementById('result');
        // console.log(element)
        // element.appendChild(tag);


        document.getElementById("result").innerText=(text + result);
        // document.getElementById("res").innerHTML = text + result;
        
    }
    if(operation == "minus"){
        result = num1-num2
        // console.log(result)
        
        document.getElementById("result").innerText = text + result;

        
    }

    if(operation == "div" ){
        
        result = num2 === 0 ? "∞" : num1/num2;

        console.log(result);
        // document.getElementById("result").innerText = text + result +"." + ` Number / 0  --> (gives) "infinite" or "undefined"  `;

        result = num2 === 0 ? result +"." +  "\n" + ` Number / 0  --> (gives) "infinite(∞)" or "undefined"  ` :text + result
     
        document.getElementById("result").innerText = result;
        
    }
    if(operation == "mult" ){
        
        result =  num1 * num2;

        console.log(result);
        document.getElementById("result").innerText = result;
        // document.querySelector("#result").value = result;
        
        
    }
        

}


