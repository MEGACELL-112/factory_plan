let carProduct = document.getElementsByClassName("car")[0];
let carCost = document.getElementsByClassName("cost")[0];
let workers = document.getElementsByClassName("workers")[0]
let workersSalary = document.getElementsByClassName("workersSalary")[0];
let directorSalary = document.getElementsByClassName("directorSalary")[0];
let buhSalary = document.getElementsByClassName("buhSalary")[0];
let count = document.getElementsByClassName("count")[0];
let newCount = document.getElementsByClassName("newCount")[0];
let zag = document.getElementsByClassName("zag")[0];
count.onclick = function(){
    let revenue = carProduct.value * carCost.value - workers.value * workersSalary.value - directorSalary.value - buhSalary.value;
    if (revenue * 12 > 1000000000) {
    zag.innerHTML = ("Директор сможет");
    }
    else {
        zag.innerHTML = ("Директор не сможет");
    }
}
newCount.onclick = function(){
    carProduct.value = ""; carCost.value = ""; workers.value = ""; workersSalary.value = ""; directorSalary.value = ""; buhSalary.value = ""; zag.innerHTML = "Директор построит новый завод?";
}