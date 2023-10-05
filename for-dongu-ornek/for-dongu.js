// for (1-degisken tanimlama ; 2-koşul/şart ; 4-arttırma){
// 3-kod
//} 1 - 2 - 3 - 4 - 2 - 3 - 4 ... 


//for(let i = 0 ; i< 5 ; i++){
//    console.log("sayac : " , i)
//}




//console.log("Dongudeki ", "0" ," eleman :" , arr[0]);
//console.log("Dongudeki ", "1" ," eleman :" , arr[1]);
//console.log("Dongudeki ", "2" ," eleman :" , arr[2]);
//console.log("Dongudeki ", "3" ," eleman :" , arr[3]);
let arr = [2, 5, 7, 4, 2, 7, 8];
for (let i = 0; i < arr.length; i++) {
    console.log("Dongudeki ", i, " eleman :", arr[i]);
}

// sayilarin toplamı hesapla

let toplam = 0;
for (let i = 0; i < arr.length; i++) {
    toplam += arr[i];
}
console.log("Sayilarin toplami :", toplam)

// sayilarin carpimi
let carpim = 1;
for (let i = 0; i < arr.length; i++) {
    carpim *= arr[i];
}
console.log("Sayilarin carpimi :", carpim)


// Sayilari konsola tersten yazdırcam
let yeniDizi = [2, 5, 7, 4, 2, 7];
for (let i = yeniDizi.length - 1; i >= 0; i--) {
    console.log("Tersten Dongudeki ", i, " eleman :", arr[i]);
}

//console.log(getSecondLargest(yeniDizi));

/*function getSecondLargest(nums) {

    //let nums =  [1,2,5,6,6,3];
    let newNumbers = [...nums];
    newNumbers.sort();
    // sorted   1 2 3 5 6 6
    let maxSayi = newNumbers.pop();
    // popped   1 2 3 5 6
    for (let i = newNumbers.length - 1; i >= 0; i--) {
        if (newNumbers[i] == maxSayi) {
            continue;
        } else {
            return newNumbers[i];
        }
    }
    // donguden sonra   1 2 3 5

}


function getSecondLargest(nums) { 
    let arr = []; 
    let maxi = Math.max(...nums); 
    for (let i = 0 ; i< nums.length ; i++) { 
        if (i !== maxi) { 
            arr.push(i); 
        } 
    } 
    return Math.max(...arr); 
}*/

// dizilerde ortak olanları bulmak
let dizi1 = [1, 4, 2, 6, 3];
let dizi2 = [2, 6, 3, 7, 9];

let ortak = [];

for (let i = 0; i < dizi1.length; i++) {
    for (let j = 0; j < dizi2.length; j++) {
        if (dizi1[i] == dizi2[j]) {
            ortak.push(dizi1[i]);
            console.log("Ortak bulundu i:", i, " j:", j)
        }

    }

}
console.log("Ortak dizisi:", ortak.join(" , "))




