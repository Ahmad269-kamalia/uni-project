let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let input1=document.querySelector("#input21");
let input2=document.querySelector("input213")


btn1.addEventListener("click",()=>{
    
    if(input1.value =="" || input2.value ==="" ){
    alert("please fill all the input")
}else{
    alert("button work properly")
    }
});
btn2.addEventListener("click",()=>{
    alert("button work properly");
});

