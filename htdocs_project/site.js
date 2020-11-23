var modal = document.getElementById("itemPopup");
var span = document.getElementsByClassName("close")[0];
var cartopen=false;
var cartmessage = document.getElementById("cartMessage");
var items = new Array();
span.onclick = function () {
modal.style.display = "none";
}

function validate() {
    var letters = /^[A-Za-z]+$/; 
    if( document.myForm.UserName.value == "" ) {
       alert( "User Name Cannot Be Blank!" );
       document.myForm.UserName.focus() ;
       return false;
    }
    if( document.myForm.pwd.value == "" ) {
        alert( "Password Cannot Be Blank!" );
        document.myForm.pwd.focus() ;
        return false;
     }
     if( document.myForm.confirm.value == "" ) {
        alert( "Confirm Password Cannot Be Blank!" );
        document.myForm.confirm.focus() ;
        return false;
     }
     if( document.myForm.pwd.value != document.myForm.confirm.value) {
        alert( "Passwords Must Match" );
        document.myForm.confirm.focus() ;
        return false;
     }
     if( document.myForm.FirstName.value == "" ) {
        alert( "First Name Cannot Be Blank!" );
        document.myForm.FirstName.focus() ;
        return false;
     }
     if( document.myForm.LastName.value == "" ) {
        alert( "Last Name Cannot Be Blank!" );
        document.myForm.LastName.focus() ;
        return false;
     }
     if( document.myForm.Address.value == "" ) {
        alert( "Address Cannot Be Blank!" );
        document.myForm.Address.focus() ;
        return false;
     }
     if( document.myForm.City.value == "" ) {
        alert( "City Cannot Be Blank!" );
        document.myForm.City.focus() ;
        return false;
     }
    if(!document.myForm.FirstName.value.match(letters))
     {
        alert("First Name Cannot Contain Numbers!");
        return false; 
     }
     if(!document.myForm.LastName.value.match(letters))
     {
        alert("Last Name Cannot Contain Numbers!");
        return false; 
     }
     if(!document.myForm.City.value.match(letters))
     {
        alert("City Cannot Contain Numbers!");
        return false; 
     }
     alert("Form Submitted Successfully!")
    return( true );
 }
function ShowPopup(item) {
    var img = document.getElementById("itemImage");
    var desc = document.getElementById("itemName");
    var price = document.getElementById("itemPrice");
    var number = document.getElementById("itemID");
    modal.style.display = "block";
    img.src = "Project/Images/" + item + ".jpg";
    
    switch(item){
        case "pins3":
            desc.innerHTML = 'Star Pin';
            price.innerHTML = '$4.95';
            number.innerHTML = '1';
        break;
        case "pins5":
            desc.innerHTML = 'Punisher Pin';
            price.innerHTML = '$4.95';
            number.innerHTML = '2';
        break;
        case "pins4":
            desc.innerHTML = 'Heart Pin';
            price.innerHTML = '$4.95';
            number.innerHTML = '3';
        break;
        case "stickers2":
            desc.innerHTML = 'Land of the Free Sticker';
            price.innerHTML = '$3.95';
            number.innerHTML = '4';
        break;
        case "stickers3":
            desc.innerHTML = 'Made in the U.S.A. Sticker';
            price.innerHTML = '$3.95';
            number.innerHTML = '5';
        break;
        case "stickers4":
            desc.innerHTML = 'Patriotic Peace Sticker';
            price.innerHTML = '$3.95';
            number.innerHTML = '6';
        break;
        case "banners3":
            desc.innerHTML = '48 Star Banner';
            price.innerHTML = '$24.95';
            number.innerHTML = '7';
        break;
        case "banners4":
            desc.innerHTML = 'Don\'t Tread on me Banner';
            price.innerHTML = '$24.95';
            number.innerHTML = '8';
        break;
        case "banners5":
            desc.innerHTML = 'Some Gave All Banner';
            price.innerHTML = '$24.95';
            number.innerHTML = '9';
        break;
        case "tshirts2":
            desc.innerHTML = 'Black Flag T-Shirt';
            price.innerHTML = '$24.95';
            number.innerHTML = '10';
        break;
        case "tshirts":
            desc.innerHTML = 'Victory T-Shirt';
            price.innerHTML = '$9.95';
            number.innerHTML = '11';
        break;
        case "tshirts3":
            desc.innerHTML = 'Vote T-Shirt';
            price.innerHTML = '$9.95';
            number.innerHTML = '12';
        break;
        case "hats7":
            desc.innerHTML = 'Thin Blue Line Trucker Hat';
            price.innerHTML = '$17.95';
            number.innerHTML = '13';
        break;
        case "hats5":
            desc.innerHTML = 'Black Flag OSFA Hat';
            price.innerHTML = '$16.95';
            number.innerHTML = '14';
        break;
        case "hats6":
            desc.innerHTML = 'Astros Flag Trucker Hat';
            price.innerHTML = '$17.95';
            number.innerHTML = '15';
        break;
        case "hoodie3":
            desc.innerHTML = 'Betsy Ross Hoodie';
            price.innerHTML = '$29.95';
            number.innerHTML = '16';
        break;
        case "hoodies":
            desc.innerHTML = 'Red Flag Hoodie';
            price.innerHTML = '$27.95';
            number.innerHTML = '17';
        break;
        case "hoodie2":
            desc.innerHTML = '1776 Hoodie';
            price.innerHTML = '$29.95';
            number.innerHTML = '18';
        break;
} }

    function ShowAdd() {
          var desc = document.getElementById("itemName").innerText;
          var price = document.getElementById("itemPrice").innerText;
          var number = document.getElementById("itemID").innerText;
          var cartitems = document.getElementById("cartList");
          var item = new Array(number, desc, price); 
          items.push(item);
          console.log(items);
          modal.style.display = "none"; //closes the popup after adding the item
for (item of items) {
cartitems.innerHTML += "item: " + item[0] + " Description: " + item[1] + "Cost: " + item[2] + "<br>";
}}


