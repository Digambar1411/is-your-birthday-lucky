var bDate=document.querySelector("#bdate");
var luckyNum= document.querySelector("#luckynum");
var errorMsg=document.querySelector("#error-msg");
var checkBtn= document.querySelector("#check-btn");
var result=document.querySelector("#is-lucky");
checkBtn.addEventListener("click", calculateLucky );

alert("Note : we are not storing any data")

function calculateLucky(){
    hideMessage();
    var birthDate = bDate.value;
    var arr = birthDate.replaceAll("-","").split(""); /* return array of string */
    sumOfArr(arr);
    
}

function sumOfArr(arr){
    hideMessage();
    var sum=0;
    if(bDate.value && luckyNum.value){
        for (var i=0; i<arr.length; i++){
            sum+=Number(arr[i]);
            if(sum%luckyNum.value===0){

                
                showMessage("Wow your birthday is lucky !!! 🎉");
            }
            else{
                
                showMessage("Oops !!! your birthday is not lucky 😞");
            }
        }
        
    }
    else{
        errorMsg.style.display="block";
        errorMsg.innerText="date of birth or lucky number cannot be null";
    }

}

function showMessage(msg){
   
    result.style.display="block";
    result.innerText=msg;

}

function hideMessage(){
    errorMsg.style.display="none";
    result.style.display="none";
}


