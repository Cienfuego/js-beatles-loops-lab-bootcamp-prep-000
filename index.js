function theBeatlesPlay(arrMus, arrInst){
  var emp = [];
  arrMus = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  arrInst = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  var i;
  for(i = 0; i < arrMus.length; i++){
    emp.push(arrMus[i] + ' plays ' + arrInst[i]);
  }
  return(emp);
}

function johnLennonFacts(array){
  var i = 0;
  while(i < array.length){
    array[i] = array[i] + '!!!';
    i++;
  }
  console.log(array);
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

