
const btn = document.querySelector('#btn');
const usd = document.querySelector('#usd');
// Занесем тестовый URL в переменную
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';


//async function getUsers(url){
//    const response = await fetch(url)
//    const answer = await response.json()
//    console.log(answer);
//}
let res;

let fr =[]
const data = 'new_test_data';  
document.getElementById("testData").textContent = data;


async function DaiDeneg(url){
    const response = await fetch(url)
    const answer = await response.json()
     console.log(answer.Valute);//все

     for(let i=0;i<10;i++){
        fr.push(answer.Value)
     }

    console.log(answer.Valute.USD);//только сш
    console.log(answer.Valute.USD.Value)//сш деньги

    fr.push(answer.Valute.USD.Value)
    res = console.log(answer.Valute.USD.Value)
    usd.Value= res;
    
}


btn.addEventListener('click',DaiDeneg(url))
usd.Value= res;


//const func = async () => {
// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
 //   .then((req) => {
 //       return req.json()
//        
//    })
//    .then((data) =>{
       
 //      console.log(data.Valute)
 //       //return data.Valute.text()
 //       document.getElementById('result').textContent=console.log(data.Valute)
        
  //  })
 //   .catch ((err) => {
  //      console.log(err)
//    })
//}