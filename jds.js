
let arrchange = []



while (true) {
  var nick = prompt("Narsa qo'shish uchun add, | ochirish uchun del, | result uchun stop")
  var add = nick.split(", ")
   
  if (nick == 'stop') {
    break;
  }
  
   if ( add[0]=='add') {
    arrchange.push(add[1])
    console.log(arrchange);
    
  }else if (add[0]=='del') {
    let answer = arrchange.indexOf(add[1])
    arrchange.splice(answer, 1)
    console.log(arrchange);
  }
  
}







