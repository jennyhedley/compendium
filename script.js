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
function addPsychEval(evalText){
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
function psychFunction() {
  var x = document.getElementById("subject").value;
  var y = document.getElementById("history").value;
  if (x === "she" && y==="belief") {
    addPsychEval("it is her belief that her former partner should have supervised contact and handover until he can establish that he is drug free");
  } 
 else if (x === "he" && y === "belief") {
    addPsychEval("his ex wife believes that he is a dangerous person and a drug addict");
  } else if (x === "she" && y === "developmentalHistory") {
    addPsychEval("her parents separated when she was three because her father was unfaithful with his secretary");
  } else if (x === "he" && y === "developmentalHistory") {
    addPsychEval("currently living with his sister and his mother");
  } else if (x === "she" && y === "familyResemblance") {
    addPsychEval("she is shy, a worrier but also has some marked stubborn, obsessional qualities");
  } else if (x === "he" && y === "familyResemblance") {
    addPsychEval("like both parents he has a temper with a long fuse before occasionally exploding");
  }
}


//end of psych function

//start of haiku function for "I lost my husband to a cult"
const fiveSyllables = ["I was close to my goal", "the counselor said", "giving up so soon", "seemed happily married", "a couples workshop", "one of facts and rules", "we were guaranteed", "the rules for the week", "permission to leave", "our first exercise", "I hate you! Hate you!", "reassuringly", "covered up or left", "Mark\'s manner spooked Tim", "hold me, please hold me", "you be my mother", "reliving trauma", "were these confessions", "what had just happened", "emotionally", "we were sleep deprived", "go to the person", "we'd obeyed the rules", "the Lifespring center", "the idea of having time", " empty podium", "other than our spouse", "rediscover parts", "dark hair and green eyes", "recent loneliness", "too nervous to eat", "it\'s no accident", "back at the ballroom", "they floated right past", "I numbly wondered", "we chose each other", "but what was the point", "a paper in my pocket", "the way in silence", "Tim seemed chipper too", "harping on Sandi", "the container broke", "post-training checkup", "when I heard cheering", "I wanted more time", "maybe you don't want", "working on his life", "windowless warehouse", "industrial park", "was hell from the start", "do you masturbate", "so what do you want", "to live your own life", "he singled out me", "to dance for the group", "nice girls who needed", "loosen up and push", "bump-and-grind action", "erotica, raunch", "but we five women", "applied makeup and", "and teased our hair and", "finally strutted out", "hooting and hollering", "I never looked up", "desperately confused", "why did I do that", "did I do that dance", "put the teddy back", "do another one", "get him to like me", "we\'d exposed so much", "called to the center", "I was never clear", "I no longer want", "to be with my wife", "my whole body went", "whole body went numb", "tried to say something", "a roadblock to growth", "another woman", "focus on himself", "I couldn\'t answer", "the next assignment", "like a zombie and", "to my bathing suit", "just like everyone", "like everyone else", "my husband came up", "you'll be fine, he said", "I knew I should leave", "we drove home that night", "the first of many", "slammed the bedroom door", "to end the marriage", "recruit for Lifespring", "Leadership Training", "Lifespring members called", "move up in Lifespring", "Lisa called one day", "don't you love Lifespring", "and lost 15 pounds", "popularity", "he'd never felt more", "my unhappiness", "and in light of his", "think something was wrong", "we loaded the car", "a celebration", "he wasn't coming", "it was raining hard", "I lost control and", "lost control and planed", "planed across five lanes", "five lanes of highway", "tried to steer the car", "just before we crashed", "closed my eyes and prayed", "prayed I want to live", "that second I knew", "I could not–would not", "Tim break my spirit", "miraculously", "the police took us", "we\'d had an accident", "there are no accidents", "but we were alive", "I confronted him", "about our marriage", "I\'m still here, aren\'t I", "I stayed up all night", "I told Tim to leave", "you don't deserve me", "I\'m on my way out", "what about the kids", "this just wasn\'t right", "pressure from Lifespring", "struggled to maintain", "like a telethon", "crammed everywhere", "finally I snapped", "you\'re living a lie", "how many people", "I refused to play", "telling them the truth", "marriage was over", "to not be with you", "my heart had been yanked", "yanked from my body", "pain was so severe", "a shred of the love", "Lifespring had stripped it", "he dropped to his knees", "but when he showed up", "we were like two bones", "I have custody", "and drifted away", "but it didn\'t last", "I\'ve become stronger", "searching to find out", "a willing victim", "never dreamed I\'d lose", "lose myself trying", "trying to save it", "I tell my story", "and I learned it well"];
      const sevenSyllables = ["our marriage wasn\'t perfect", "after the birth of our son", "time just to be together", "lower his expectations", "feel alive and powerful", "to sign us up for four days", "men in dark suits guided us", "reassuringly normal", "covered up or left behind", "Mark\'s manner spooked Tim and me", "you need to communicate", "a handsome man with dark hair", "I hate you! Hate you! Hate you!", "his honesty was wrenching", "my recent loneliness", "starting a new exercise", "yet strangely stimulated", "as he walked off with Sandi", "four days of basic training", "emotional outpouring", "and explain why you choose him", "the freckles on my fingers", "trying to gather my wits", "here was a man who wanted", "who wanted me faults and all", "when he and Sandi entered", "that another man found me", "my self-esteem sunk that low", "imagining a new life", "why would I trade what I had", "Tim and I had yet to deal", "with any of our issues", "I had cause to remember", "impossible to reason", "you wanted this to happen", "that you wanted attention", "sign up for Advanced Training", "$800 each for five days", "Tim had signed up for Advanced", "the two staffers kept pushing", "for five days not a lifetime", "we were the only couple", "in a windowless warehouse", "you think he's going to help", "you have to live your own life", "it was humiliating", "when the trainer called the shots", "do you fantasise about", "me and four other women", "loosen up and push beyond", "dancing would test our limits", "black lingerie and spike heels", "gyrating to the music", "slumped against our bedroom wall", "you put the teddy back on", "do another one for me", "I like you better that way", "Tim, what do you want", "to be living a new life", "I was humiliated", "Tim just no longer wanted", "in my mind I was floating", "stripped to my bathing suit when", "the guys told me they want to", "at me in my bikini", "one big happy family", "his enrolment performance", "life had deteriorated", "and all my self-confidence", "he\'d never felt more complete", "I drove away determined", "for the center divider", "you wanted this to happen", "I knew what I had to do", "the cost of fixing the car", "after the kids were asleep", "Christmas Eve–eating french fries", "our life is here in this home", "dumping a six-year marriage", "on the inside of Lifespring", "soliciting enrolments", "and fatten Lifespring\'s coffers","divorce negotiations", "please give me another chance", "Lifespring had stripped it away", "he dropped to his knees, sobbing", "custody of the children", "I\'m not sure he realises", "see a confused, lonely soul", "he got married again but", "he's still searching for something", "occasional therapy", "it\'s an important lesson", "but at a tremendous cost"];
            const button = document.getElementById("button-1");

            function changeText() {
              const paragraph = document.getElementById("haiku-1-1");
              const paragraphTwo = document.getElementById("haiku-1-2");
                 const paragraphThree = document.getElementById("haiku-1-3");
              const paragraphFour = document.getElementById("haiku-2-1");
                 const paragraphFive = document.getElementById("haiku-2-2");
              const paragraphSix = document.getElementById("haiku-2-3");
                    const paragraphSeven = document.getElementById("haiku-3-1");
                 const paragraphEight = document.getElementById("haiku-3-2");
              const paragraphNine = document.getElementById("haiku-3-3");
              paragraph.innerText = getRandomFromList(fiveSyllables);
              paragraphTwo.innerText = getRandomFromList(sevenSyllables);
                paragraphThree.innerText = getRandomFromList(fiveSyllables);
                paragraphFour.innerText = getRandomFromList(fiveSyllables);
              paragraphFive.innerText = getRandomFromList(sevenSyllables);
               paragraphSix.innerText = getRandomFromList(fiveSyllables);
                    paragraphSeven.innerText = getRandomFromList(fiveSyllables);
              paragraphEight.innerText = getRandomFromList(sevenSyllables);
               paragraphNine.innerText = getRandomFromList(fiveSyllables);
            }
            button.addEventListener("click", changeText);
//end of haiku function