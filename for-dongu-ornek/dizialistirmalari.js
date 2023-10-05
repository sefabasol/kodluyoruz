//Bu arrayi once stringify ile string yapıp console.log ile yazdırıp ardından parse fonksiyonuyla eski haline getirelim.
//dizideki son elemani diziden cikartin
//dizinin basindaki elemani da silelim
//dizinin uzunlugunu bulalim
//dizinin sonuna "arkasinda" kelimesini ekleyelim


let cumle = ["Yazilim", "ile", "koca", "dunya", "kucucuk", "ekranin", "icinde"];
localStorage.setItem ('cumleInfo', JSON.stringify(cumle))
let cumleInfo = localStorage.getItem('cumleInfo')
cumleInfo = JSON.parse(cumleInfo)
console.log(cumleInfo)


cumle.pop()
console.log(cumle)


cumle.shift()
console.log(cumle)


console.log(
    cumle.length
)
 

cumle.push ( "arkasinda" )
console.log (cumle)