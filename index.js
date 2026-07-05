function stocks(){

  const names=["Relaince","HDFC","INFY","wipro", "TCS"];
  const randomIndex = Math.floor(Math.random() * names.length);
return{
  name: names[randomIndex],
  Price: (Math.random()*100).toFixed(0),
  time : new Date().toLocaleTimeString()

};}


function render(arg){

  let stocksData=arg();

  let StockName=document.getElementById("n").innerText=` Name: ${stocksData.name}`;
  let StockPrice = document.getElementById("p").innerText= `Price: ${stocksData.Price}`;
  let StockTime = document.getElementById("t").innerText = `Time: ${stocksData.time}`;
  
  
  
}
setInterval(function(){
render(stocks);

},3000)
