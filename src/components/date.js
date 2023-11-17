let prstDate = new Date();
let userDate = new Date(2023,10,22,2,30);
console.log(prstDate);
console.log(userDate);
//console.log(Date.now());
// console.log(date.getDate());
// const futr = 18;
// console.log(futr - date.getDate());
const dateMaker = () => {
    prstDate.getDate();
    prstDate.getHours();
    console.log(prstDate.getDate());
    console.log(prstDate.getHours());
    console.log(prstDate.getMinutes());
    let finalhour;
    prstFinalHour  = 24 - prstDate.getHours()
    console.log("finally");
    console.log(finalhour);
    console.log("user date");
    futrFinalHour = userDate.getHours();
    futrFinalHour
    futrFinalMin = userDate.getMinutes();
    console.log(userDate.getDate());
    console.log(userDate.getHours());
    console.log(userDate.getMinutes());
    console.log("substract");
    console.log(userDate.getDate()-prstDate.getDate());
    console.log(userDate.getHours()-prstDate.getHours());
    console.log(userDate.getMinutes()-prstDate.getMinutes());
  }

dateMaker();