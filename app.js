var bDate=document.querySelector("#bdate");
var luckyNum= document.querySelector("#luckynum");
var checkBtn= document.querySelector("#check-btn");
var result=document.querySelector("#is-lucky");
checkBtn.addEventListener("click", calculateLucky );

alert("Note : we are not storing any data")

function calculateLucky(){
    var birthDate = bDate.value;
    var arr = birthDate.replaceAll("-","").split(""); /* return array of string */
    sumOfArr(arr);
    
}

function sumOfArr(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
        sum+=Number(arr[i]);
        if(sum%luckyNum.value===0){

            result.innerText="Wow your birthday is lucky !!! 🎉";
        }
        else{
            result.innerText="Oops !!! your birthday is not lucky 😞";

        }
        
    }

}

