const kependudukans = {
    nama : "Asep Zainudin",
    nrp : "123456789",
    email : "asepzainudin14@gamil.com"
}

console.log(kependudukans);
console.log(JSON.stringify(kependudukans));

// let  xhr =  new XMLHttpRequest();
// xhr.onreadystatechange =  function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let kependudukans = JSON.parse(this.responseText);
//         console.log(kependudukans);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// $.getJSON('coba.json', function(data){
//  console.log(data);
// });


// {/* <script>
//   var json_data = '{"user" : "agusph", "display_name" : "Agus Prawoto Hadi", "website" : "Jagowebdev.com"}';
//       obj = JSON.parse(json_data, (key,value) => {
                      
//         // Memanipulasi property website
//         if (key == 'website') {
//           value = 'http://' + value.toLowerCase();
//         }
        
//         // Memanipulasi display_name
//         if (key == 'display_name') {
//           value = value.toUpperCase();
//         }
        
//         return value;
//     }
//   );
//   console.log(obj); 
//   // Hasil: {user: "agusph", display_name: "AGUS PRAWOTO HADI", website: "https://jagowebdev.com"}
// </script> */}