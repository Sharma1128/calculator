//let a = document.getElementById("span1");
//a.onclick=()=>{
    //let variable = "hello";
    //document.getElementById("Calcular").value += variable;
//}
//let b = document.querySelectorAll(".span")
//console.log(b)
//b[6].onclick=()=>{
    //console.log("i am 6")
//}
//let m = 5+5;
//console.log(eval("4*4"));

let a = document.querySelectorAll(".span")
let i = 0;
for(i; i<a.length;i++){
    a[i].onclick=(e)=>{
        let a = document.getElementById("Calcular")

        if(e.target.innerHTML == "C"){
            a.value = "";
        }
        if(e.target.innerHTML == "="){
            let output = eval(a.value)
            a.value = output
        }
        if(e.target.innerHTML == "C" || e.target.innerHTML == "=") {
            console.log(e.target.innerHTML)

        }else {a.value += e.target.innerHTML}
    }
    console.log(i);
}