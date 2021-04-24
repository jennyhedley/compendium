//a function to select random item from a list
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
//part of the typewriter function
var i = 0;
const txt = emailToMum();
var speed = 100;

//email to mum content function
function emailToMum() {
  const openingSent = [
    "I finally caught up on some sleep and can tell you about the circus",
    "I ran out of happy pills so have to go to the pharmacy today",
    "I will try to write but the letter from N just made me so angry, like she was guilt tripping me to return",
    "I wrote you a letter and had to log into your account to delete it because I was so upset",
    "I need a little space to allow things to work out and to lose this feeling of desperado",
    "I am a little stressed right now",
    "I am in a mood where things keep going wrong",
    "I am in a tough situation right now",
    "I bought a one-way ticket for $1300 USD"
  ];
  const missySent1 = [
    "Missy at least settled in at G's okay and he gave me $500 cash for my car",
    "Missy has been vomiting and sick like me, the poor thing",
    "Missy is like my child and I will miss her",
    "Missy is so fluffy and happy living with the girls this week",
    "Missy is under the covers again",
    "I get to keep Missy for a week because G's freako brother is coming to town and Missy hates him",
    "I may go pick up Missy today but I don't really want to run into G"
  ];
  const missySent2 = [
    "I don't know how she manages with all my thrashing",
    "I took a shower with her and made her sit in the sun to dry",
    "I will sure miss her though",
    "G lets her sleep under the covers so now she is totally spoiled",
    "G won't let me have Princess Missy and I miss her",
    "I want my cat though"
  ];  // set up the counter
  return (
    "Dear Mum, " +
    getRandomFromList(openingSent) +
    ". " +
    getRandomFromList(missySent1) +
    ". " +
    getRandomFromList(missySent2) +
    ". " +
    "Love, Jenny Cat"
  );
}

//typewriter function
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

