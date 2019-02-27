class AddressBook {
   constructor(contacts){

       this.contacts = contacts;
   }
   add(contact) {
       // put that on the end of the array
       this.contacts.push(contact);
   
   }
   deleteAt(index){
     this.contacts.splice(index, 1);
   }


   print(){
    console.log(book);
  }
}
class Contact {
   constructor(name, email, phone, relation) {
     
       this.name = name;
       this.email = email;
       this.phone = phone;
       this.relation = relation;
   }
}

const book = new AddressBook([new Contact('Dana', 'd.l.kuntzler@gmail.com', '248-797-6510', ' Student'), new Contact('Max', 'msthomas@gmail.com', '123-456-7890', 'BF')]);

while(true){
const response = prompt('Would you like to add, delete, print,  or quit?');
if (response === 'add') {
   const name = prompt('What is your name?');
   const email = prompt('What is your email?');
   const phone = prompt('What is your phone number?');
   const relation = prompt('What is your relation?');
  //  console.log(book); 
   book.add(new Contact(name,email,phone,relation));
  //  console.log(book); 
}   

//book.contact(index, 1);

   // console.log (name, email, phone, relation);
   //  if (Response === 'delete'){
if (response === "quit" || response == null){
  console.log("Farewell");
         break;

}         if (response === "delete"){
          let index = prompt("index?");
          book.deleteAt(parseInt(index, 10));

         } if (response ==="print") {
           console.log(book);
           //AddressBook.print();
         }

}




