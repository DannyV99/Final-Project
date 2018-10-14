const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/escapeChicagoDB"
);

const pageSeed = [
  {
    _id: 0,
    imageURL: 'https://www.dropbox.com/s/mev02ahddl1cd0i/image.jpg?raw=1',
    paragraph: 'You wake up in a hospital room. You don\'t know why you are here or how you got there. You cannot see anyone – no doctors or nurses. There is no sound of anyone or any activity. On one of the walls is written “you\'re better off in a coma” in what appears to be bodily fluid. You ring for the nurse and no response. You ring again and still no response. You notice that you are no longer connected to any IV and monitors. Their tubes and wires are sprawled out aimlessly. Your clothes and phone are piled on a chair next to you. When you check your phone, the battery is dead. What do you do?',
    options: [{ text: "Explore the Hospital", id: 1 }, { text: "Go Home", id: 6 }]
  },
  {
    _id: 1,
    imageURL: 'https://www.dropbox.com/s/9sxfpqn8oxnjnog/hospitalHallway.jpg?raw=1',
    paragraph: 'You choose to explore the hospital so you put on your clothes and proceed to venture down various hallways. You don\'t see anyone. All the rooms are empty. The nurses stations are abandoned and you cannot tell for how long. Even more perplexing is that there is no indication why everyone is gone. You drift into a room labeled pharmacy. The lock on the door has been broken. What must have been shelves full of medications have been ransacked. You notice a single remaining bottle of pills. It is marked as some sort of antibiotic. You absent-mindedly put the pills in you pocket. From behind you, comes a voice. “Are you a doctor?” Then quickly he continues, “You\'re not a doctor. Who are you? Are you a patient?',
    options: [{ text: "Tell the Truth", id: 2 }, { text: "Lie to Him", id: 3 }]
  },
  {
    _id: 2,
    imageURL: 'https://www.dropbox.com/s/vxim5vaj0lodbfa/pharmacy2.jpg?raw=1',
    paragraph: '“Honestly I have no idea what I\'m doing here. Apparently I was in a coma, but I have no idea how I was injured or how a got here. What is going on? Where are we? Where are all the people?” The stranger looks at you in disbelief. “We\'re in Northwestern Memorial Hospital in downtown Chicago. Everyone has fled the ecological disaster.  There\'s been waves of flooding, torrents of acid rain, packs of rabid, wild animals ...” “Wait, \'packs of rabid animals\' you ask? “Yeah the environment\'s all screwed up. There\'s packs of diseased wolves, bears, mountain lions roaming the city. I\'ve even seen polar bears. There\'s bad starvation and widespread disease. My own daughter is sick.  That\'s why I here looking for medicine.” What do you do?',
    options: [{ text: "Give Him the Antibiotics", id: 4 }, { text: "Go Find Your Family", id: 6 }]
  },
  {
    _id: 3,
    imageURL: { type: String },
    paragraph: '“Yes I AM a doctor. How can I help you?” The stranger is thrown aback but recovers. “You\'re a doctor. Oh thank God. My daughter is very sick. She needs medicine. You must come see her. She\'s not far away.” What do you do?',
    options: [{ text: "Go with the Stranger to help his daughter", id: 4 }, { text: "Go Find Your Family", id: 5 }]
  },
  {
    _id: 4,
    imageURL: 'https://www.dropbox.com/s/mjgs6t6yntndi97/distraut.jpg?raw=1',
    paragraph: 'You Go with the stranger to bring his daughter the antibiotics. He says she\'s on the fourth floor. You follow him to the room. The stranger becomes circumspect. “She\'s in there,” he says. “I don\'t like seeing her this ill.” You go into his daughter\'s hospital room. His daughter is in the bed but she not breathing. In fact, it\'s obvious that this girl has been dead for at least weeks. From behind you, you hear the stranger\'s voice. “You did it. You killed her.” His voice is insistent and clearly unstable. You turn to confront him and everything fades to black. You are dead. The End.',
    options: [{ text: "Go Again?", id: 0 }]
  },
  {
    _id: 5,
    imageURL: { type: String },
    paragraph: 'You try to explain that you have you own family to protect. The stranger is clearly becoming agitated. You try to explain but he\'s hearing none of it.  You say that you\'re really doctor; that is was a bad joke. “My daughter really IS in bad shape,” he says and pulls a small revolver out of his pocket. He points the gun at you. He asks you are you going to help or not. You have no real choice at this point. The stranger pushes you down the hallway and to another floor of the hospital. He leads you to a room. “She\'s in there.” The stranger urges you into the room with the barrel of his gun. When you get into the room you see the stranger\'s daughter. She\'s already dead from some disease and has been dead for weeks. You turn to face the stranger. His face now reveals that he is obviously insane. He says, “She\'s dead; you killed her.” The stranger shoots you more than enough times to kill you. The End.',
    options: [{ text: "Go Again?", id: 0 }]
  },
  // the go home story path
  {
    _id: 6,
    imageURL: 'https://www.dropbox.com/s/1jqpjdmsulu9ws9/car%20or%20bike2.jpg?raw=1',
    paragraph: 'You choose to go home and find your family.  You put on your clothes and head out the door.  Thankfully the exit doors are all well marked and you are able to quickly leave the hospital. Still you cannot get over how eerily empty the hospital is. Once outside you encounter a nearly vacant parking lot. All you can see is a car and a bicycle. Both seemed to be abandoned. You need to go home. You can walk, take the bike, or break into the car. What do you do?',
    options: [{ text: "Walk Home", id: 7 }, { text: "Take the Bike", id: 11 }, { text: "Steal the Car", id: 12 }]
  },
  {
    _id: 7,
    imageURL: 'https://www.dropbox.com/s/ujpw1vma4428e9i/corner%20store.jpg?raw=1',
    paragraph: 'You choose to walk home. Even though the world\'s falling apart, you refuse to steal someone else\'s property. You are still don\'t understand what\'s going on but you head east and vaguely north towards your home. The further you walk, you still encounter no people. You see a vacant corner store. It\'s door is hanging open. You go in. There is no shop keeper. This store has been ransacked by looters. All that\'s left are loose scrapes of paper and a half eaten sandwich.  What do you do?',
    options: [{ text: "Take the Sandwich", id: 8 }, { text: "Skip the Sandwich and Head Home", id: 8 }],
    item: "half-eaten sandwich"
  },
  {
    _id: 8,
    imageURL: 'https://www.dropbox.com/s/n3kijtclqthih37/hardwareWolf2.jpg?raw=1',
    paragraph: 'You leave the corner store and resume you journey home. Sporadically you hear gunshots in the distance. You mange to avoid several roving gangs of looters. Eventually you run into a local hardware store. You\'re not that far from home now. It\'s door is standing open. You look into the window and notice a large dark mass moving amongst the aisles. It looks to be a massive wolf. What do you do?',
    options: [{ text: "Confront the Wolf", id: 9 }, { text: "Lure the Wolf Away", id: 10 }, { text: "Continue Home", id: 15 }]
  },
  {
    _id: 9,
    imageURL: { type: String },
    paragraph: 'You choose to confront the rabid, aggressive wolf. That was a bad idea. You\'re still weak from the coma and wolf viciously disembowels you. The End.',
    options: [{ text: "Go Again?", id: 0 }]
  },
  {
    _id: 10,
    imageURL: { type: String },
    paragraph: 'You use the half eaten sandwich you found at the corner store to lure the wolf into a vacant room and close the door behind it. Upon searching the hardware store, you find a crowbar that you think might be useful. Then you leave the store and head for home.',
    options: [{ text: "Continue Home", id: 16 }],
    item: "crowbar"
  },
  {
    _id: 11,
    imageURL: 'https://www.dropbox.com/s/n3kijtclqthih37/hardwareWolf2.jpg?raw=1',
    paragraph: 'You choose the bike. As you ride, the wind on your face feels good. The streets of Chicago are eerily empty. The doors to most buildings are chain or boarded up. However you can hear what sound like gunshots in the distance. Your concern for family grows and you start to pedal faster. Eventually you run into a local hardware store. You\'re not that far from home now. It\'s door is standing open. You look into the window and notice a large dark mass moving in the aisles.  It looks to be a deranged wolf.  What do you do?',
    options: [{ text: "Confront the Wolf", id: 9 }, { text: "Continue Home", id: 15 }]
  },

  {
    _id: 12,
    imageURL: { type: String },
    paragraph: 'You choose to take the car. While you wouldn\'t ordinarily steal a car, these are not ordinary times. If the the police still exist, you\'ll explain to them later. You grab a large piece of concrete and smashed it into the passenger window. The sound echoed for blocks. You swing again and the window cracks.  The  third time the window collapses.  You open the door and scoot over to the driver\'s seat.  You crack open  the steering column and use a trick you learned in high school auto shop to get the car started. As you prepare to leave the parking lot, the windshield shatters from the blast of a rifle.  There are two ways out of the parking lot.  The one in front of you is currently occupied by an armed gang of ruffians obviously trying to kill you.  Another exit is behind you and appears to be clear.  What do you do?',
    options: [{ text: "Charge the Gang in Front of You", id: 13 }, { text: "Turn and Run", id: 14 }]
  },
  {
    _id: 13,
    imageURL: 'https://www.dropbox.com/s/n329l0kn11hed5n/hooligans.jpg?raw=1',
    paragraph: 'You rev the engine and launch the car like a rocket at the gang. As speed towards them, you and the car take bullets. You hit the gang members that weren\'t able to jump out of the way. The car keep lurching forward as your pain intensifies and your view of the world slowly fades to black. The End.',
    options: [{ text: "Go Again", id: 0 }]
  },
  {
    _id: 14,
    imageURL: 'https://www.dropbox.com/s/b1sugle50tyqjjt/peeling%20off.jpg?raw=1',
    paragraph: 'You rev the engine and turn the wheel. The mass of the sedan pivots as it screeches in an arch. You make for the empty exit at top speed.  The gang fires at you as they begin to run after you. The shots ping on the body of the car.  The sedan is too fast for your pursuers on foot and you pull away.  Soon you cannot even see them in the rear view mirror.',
    options: [{ text: "Charge the Gang in Front of You", id: 13 }, { text: "Turn and Run", id: 16 }]
  },
  //arrival at home
  {
    _id: 15,
    imageURL: 'https://www.dropbox.com/s/5x7mc11g1x9ylii/theHome.jpg?raw=1',
    paragraph: 'You cannot think of any good that will come entering the hardware store and prefer to continue on to home. You finally reach your neighborhood. The houses have their windows boarded up. The streets are empty. It\'s quiet except the wind. You approach your house. It seems abandoned. It\'s windows are also boarded up. The house has aged much since the last time you since you have seen it. You wonder how you could have been away so long. Out of the corner of eye, you notice a bit of motion in the second story window of your neighbor\'s house. What do you do?',
    options: [{ text: "Go to Your Front Door", id: 17 }, { text: "Sneak Around Back", id: 18 }, { text: "Investigate Your Neighbor's House", id: 19 }]
  },
  {
    _id: 16,
    imageURL: 'https://www.dropbox.com/s/5x7mc11g1x9ylii/theHome.jpg?raw=1',
    paragraph: 'You finally reach your neighborhood. The houses have their windows boarded up. The streets are empty. It\'s quiet except the wind.  You approach your house. It seems abandoned. It\'s windows are also boarded up.  The house has aged much since the last time you since you have seen it. You wonder how you could have been away so long. Out of the corner of eye, you notice a bit of motion in the second story window of your neighbor\'s house. What do you do?',
    options: [{ text: "Go to Your Front Door", id: 17 }, { text: "Sneak Around Back", id: 18 }, { text: "Investigate Your Neighbor's House", id: 19 }]
  },
  {
    _id: 17,
    imageURL: { type: String },
    paragraph: 'Thinking only of reuniting with your family, you race towards your front door. The door is locked so you grab your keys from your pocket. You try the key but it does not work.  What do you do?',
    options: [{ text: "Try the Backdoor", id: 20 }, { text: "Go See Your Neighbor", id: 19 }, { text: "Use the Crowbar", id: 21 }]
  },
  {
    _id: 18,
    imageURL: { type: String },
    paragraph: 'This whole situation has you on edge. So much seems out of order. You decide to investigate further by checking out your house from your backyard. As you creep around to the back, you hear noise from the backdoor.  You hide and checkout the backdoor. A large man in a hood is attempting to break into your house. What do you do?',
    options: [{ text: "Continue Hiding", id: 22 }, { text: "Attack the Burglar", id: 23 }]
  },
  {
    _id: 19,
    imageURL: { type: String },
    paragraph: 'Since it\'s the only proof of life you\'ve seen in the neighborhood, you head to your neighbor\'s house. You knock on the door, softly at first but loudly later. “Go away,” comes a voice from behind the door. How do you respond?',
    options: [{ text: "Beg for Help", id: 24 }, { text: "Threaten to Brake In", id: 25 }]
  },
];

db.Page
  .deleteMany({})
  .then(() => db.Page.collection.insertMany(pageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });