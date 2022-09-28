const arraytest = ['wash dishes', 'workout', 'cook dinner'];

const x = 'workout';

 
  var index = arraytest.indexOf(x);

arraytest.splice(index, 1);
 

arraytest.forEach(myFunction);

function myFunction(value) {
    console.log(value);
   }