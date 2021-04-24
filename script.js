//start of code for email to mum
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
  ];

  const gSent1 = [
    "G had a gambling relapse",
    "G has finally given me the cash he owed me and is not calling to beg me to return anymore",
    "G is finally taking a little responsibility for his role in the breakdown of the relationship",
    "G is finally starting to accept that I am leaving",
    "G just bought himself his own car since he's working lots of double shifts and part of the deal when we bought our car together is that I have exclusive use of the car on my work nights",
    "G left all these tearful messages saying, What have you done to us",
    "I ran out to move the car and drink coffee and field off calls from G",
    "I had a very good sales weekend then just as I was about to head home at 4am G called and asked if I could give him a lift home from King Street",
    "I moved out for good just under two weeks ago",
    "Every day I deal with G crying in my ear, wanting reconciliation and blaming me for his destruction",
    "I am feeling better about G since he is accepting the split better and no longer is calling to blame me for ruining his life or threatening to die"
  ];
  const gSent2 = [
    "He says, You don't love me, You don't want to see me, blah blah blah",
    "I picked him up and pulled over to drop him off and he freaked out",
    "I promised that we could date once or twice a week as a transitional thing to help him come to terms better",
    "I had a feeling so I ran into the pub in slippers and bootie shorts and wagged my finger and walked out",
    "He gets tearful and hopeful but I'm not going back",
    "He is being surprisingly well behaved",
    "He lets me come visit Missy",
    "He screamed obscenities at me and threw things at the car window since I would not go inside",
    "He still gets into moods and tears, but it's far better now that he is reaching a certain acceptance of my decision",
    "He was so scary the other night",
    "He will have to behave in public",
    "He will have to treat me right in order for me to visit him and continue a friendship-relationship",
    "He won't let me have the cat here even though he claimed he didn't want her",
    "He's been good about not calling me and stuff",
    "He's got tenants so I'm no longer paying rent there",
    "He's sad and self-pitying but I'm glad he's keeping himself on a good path now",
    "He's still in love but realises it's over"
  ];
  const closingSent = [
    "I just drove away",
    "I keep having weird dreams about packing up my stuff from my father's house",
    "I keep saying I won't marry a gambler",
    "I finally broke even",
    "I feel so so sad and sick about it",
    "I can get used to his new self",
    "I must have had my most un-fun birthday ever so I request a do-over",
    "I truly budgeted for having these final six weekends of sales",
    "I feel like if the liquids go down faster rather than trickle down in that bad way they will shoot past your epiglottis fast enough to not get caught",
    "I filed his taxes for him"
  ];

  return (
    "Dear Mum, " +
    getRandomFromList(openingSent) +
    ". " +
    getRandomFromList(missySent1) +
    ". " +
    getRandomFromList(missySent2) +
    ". " +
    getRandomFromList(gSent1) +
    ". " +
    getRandomFromList(gSent2) +
    ". " +
    getRandomFromList(closingSent) +
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
//end of code for email to mum
//function psych history - HIDDEN BECAUSE DISPLAYED RESULTS FOR "SHE" ONLY
/* 
function psychFunction() {
  var x = document.getElementById("subject").value;
  var y = document.getElementById("history").value;
  switch ((x, y)) {
    case ("she", "belief"):
      console.log("this is her belief");
      break;
    case ("he","belief"):
      console.log("this is his belief");
      break;
      case("she", "developmentalHistory"):
      console.log("her dev hist");
      break;
      case("he", "developmentalHistory"):
      console.log("his dev hist");
      break;
    default:
      console.log("results go here");
  }
} 
*/
//write a new psych function because the above one ignores the "he" values
function psychFunction() {
  var x = document.getElementById("subject").value;
  var y = document.getElementById("history").value;
  if (x === "she" && y==="belief") {
    console.log("this is HER belief");
  } 
 else if (x === "he" && y === "belief") {
    console.log("this is HIS belief");
  } else if (x === "she" && y === "developmentalHistory") {
    console.log("her dev hist");
  } else if (x === "he" && y === "developmentalHistory") {
    console.log("HIS dev hist");
  } else if (x === "she" && y === "familyResemblance") {
    console.log("her fam");
  } else if (x === "he" && y === "familyResemblance") {
    console.log("HIS fam");
  }
}

//end of psych function

