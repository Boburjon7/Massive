const arr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit rem rerum quaerat placeat dolorum"

var total = 0,
    summa = 0


for (let i = 0; i < arr.length; i++) {
  if (arr[i]==="a" || arr[i]==="e" || arr[i]==="u" || arr[i]==="i" || arr[i]==="o") {
    total++
  }else if (arr[i]!=="a" && arr[i]!=="e" && arr[i]!=="u" && arr[i]!=="i" && arr[i]!=="o" && arr[i]!==" " && arr[i]!=="." && arr[i]!=="!" && arr[i]!=="?") {
    summa++
  }
  
}
console.log("Barchasi: "+arr.length);
console.log("Unli harflar: "+total);
console.log("Undosh harflar: "+summa);

