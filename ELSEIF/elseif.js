// var angka = prompt('masukkan angka');
// if(angka % 2 == 0){
// 	alert(angka + ' adalah bilangan GENAP');
// }else if( angka % 2 == 1 ){
//     alert(angka + ' adalah bilangan GANJIL');
// }else{
//    alert('yang anda masukkan bukan angka');
// }

// var noAngkot = 1;
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
// 	 if(noAngkot <= angkotBeroperasi){
// 	 	 console.log('Angkot No. '+ noAngkot +' beoperasi dengan baik');
// 	 }else if( noAngkot == 8 || noAngkot == 10 ){
//          console.log('Angkot No. '+ noAngkot +' sedang lembur')
// 	 }else{
// 	 	console.log('Angkot No. '+ noAngkot +' sedang tidak beroperasi');
// 	 }
// } 

var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
	 if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
	 	 console.log('Angkot No. '+ noAngkot +' beoperasi dengan baik');
	 }else if( noAngkot == 8 || noAngkot == 10 || noAngkot == 5){
         console.log('Angkot No. '+ noAngkot +' sedang lembur')
	 }else{
	 	console.log('Angkot No. '+ noAngkot +' sedang tidak beroperasi');
	 }
} 