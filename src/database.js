 // Jquery
 $(function(){
    $('.forgot-pass').submit(function(e){
      e.preventDefault();
   var xx = $('.forgot-pass').serialize()
if (!window.indexedDB) {
console.log('Not indexed');
} else {
console.log('indexing')
let request = window.indexedDB.open('user_details', 1),
     
     $username = $('.forgot-pass').find('input[name="username"]').val();
     $email = $('.forgot-pass').find('input[name="email"]').val();

request.onerror = function() {
 console.log('Error' + request.error);
}
request.onsuccess = function() {
   console.log('Success');
   let date = new Date();
   let passwordRecovery = { 
           id: $username,
           email: $email,
           last_updated: date.getTime()
       };
   let db = request.result;
   let tx = db.transaction(['user_details'], 'readwrite');
   let store = tx.objectStore('user_details');
   let addRequest = store.add({passwordRecovery});
   addRequest.onsuccess = function() {
       console.log('Successfully inserted a record');
     };
   addRequest.onerror = function() {
     console.log('Failed to insert');
     console.log('Error:' + addRequest.error);
   }
};
request.onupgradeneeded = function() {
   let db = request.result;
   let store = db.createObjectStore('user_details', { keyPath: 'id' });
   console.log(request.error)
 }
}
$.ajax({
 type: "POST",
 url: "./forgot-password/mysql.php",
 data: xx
}).done(function(response) {
 $('#result').html(response);
});
});
   }
/* 
 if (!window.indexedDB) {
      alert("Indexed DB not supported.");
   } 
   else {
      alert("Indexed DB Supported");
   }*/);