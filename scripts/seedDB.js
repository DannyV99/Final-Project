const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/escapeChicagoDB"
);

const pageSeed = [
  {
    _id: 0,
    imageURL: 'https://www.dropbox.com/s/mev02ahddl1cd0i/image.jpg?dl=0&m=',
    paragraph: 'You wake up in a hospital room. You don\'t know why you are here or how you got there. You cannot see anyone – no doctors or nurses. There is no sound of anyone or any activity. On one of the walls is written “you\'re better off in a coma” in what appears to be bodily fluid. You ring for the nurse and no response. You ring again and still no response. You notice that you are no longer connected to any IV and monitors. Their tubes and wires are sprawled out aimlessly. Your clothes and phone are piled on a chair next to you. When you check your phone, the battery is dead. What do you do?',
    options: [["Explore the Hospital", 1], ["Go Home", 6]]
  },
  {
    _id: 1,
    imageURL: { type: String },
    paragraph: 'You choose to explore the hospital so you put on your clothes and proceed to venture down various hallways. You don\'t see anyone. All the rooms are empty. The nurses stations are abandoned and you cannot tell for how long. Even more perplexing is that there is no indication why everyone is gone. You drift into a room labeled pharmacy. The lock on the door has been broken. What must have been shelves full of medications have been ransacked. You notice a single remaining bottle of pills. It is marked as some sort of antibiotic.  You absent-mindedly put the pills in you pocket. From behind you, comes a voice. “Are you a doctor?” Then quickly he continues, “You\'re not a doctor. Who are you? Are you a patient?',
    options: [["Tell the Truth", 2], ["Lie to Him", 3]]
  },
  {
    _id: 2,
    imageURL: { type: String },
    paragraph: '“Honestly I have no idea what I\'m doing here. Apparently I was in a coma, but I have no idea how I was injured or how a got here. What is going on? Where are we? Where are all the people?” The stranger looks at you in disbelief. “We\'re in Northwestern Memorial Hospital in downtown Chicago. Everyone has fled the ecological disaster.  There\'s been waves of flooding, torrents of acid rain, packs of rabid, wild animals ...” “Wait, \'packs of rabid animals\' you ask? “Yeah the environment\'s all screwed up. There\'s packs of diseased wolves, bears, mountain lions roaming the city. I\'ve even seen polar bears. There\'s bad starvation and widespread disease. My own daughter is sick.  That\'s why I here looking for medicine.” What do you do?',
    options: [["Give Him the Antibiotics", 4], ["Go Find Your Family", 6]]
  },
  {
    _id: 3,
    imageURL: { type: String },
    paragraph: '“Yes I AM a doctor.  How can I help you?” The stranger is thrown aback but recovers. “You\'re a doctor. Oh thank God. My daughter is very sick. She needs medicine. You must come see her. She\'s not far away.” What do you do?',
    options: [["Go with the Stranger to help his daughter", 4], ["Go Find Your Family", 5]]
  },
  {
    _id: 4,
    imageURL: { type: String },
    paragraph: 'You Go with the stranger to bring his daughter the antibiotics.  He says she\'s on the fourth floor. You follow him to the room.  The stranger becomes circumspect. “She\'s in there,” he says. “I don\'t like seeing her this ill.” You go into his daughter\'s hospital room.  His daughter is in the bed but she not breathing.  In fact, it\'s obvious that this girl has been dead for at least weeks. From behind you, you hear the stranger\'s voice. “You did it.  You killed her.”His voice is instant and clearly unstable. You turn to confront him and everything fades to black. You are dead. The End.',
    options: [["Next"]]
  },
  {
    _id: 5,
    imageURL: { type: String },
    paragraph: 'You try to explain that you have you own family to protct. The stranger is clearly becoming agitated. You try to explain but he\'s hearing none of it.  You say that you\'re really doctor; that is was a bad joke. “My daughter really IS in bad shape,” he says and pulls a small revolver out of his pocket.  He points the gun at you. He asks you are you going to help or not. You have no real choice at this point. The stranger pushes you down the hallway and to another floor of the hospital.  He leads you to a room.  “She\'s in there.”  The stranger urges you into the room with the barrel of his gun. When you get into the room you see the stranger\'s daughter.  She\'s already dead from some disease and has been dead for weeks.  You turn to face the stranger. His face now reveals that he is obviously insane.  He says, “She\'s dead; you killed her.”  The stranger shoots you more than enough times to kill you.  The End.',
    options: [["Next"]]
  },
  // the go home story path
  {
    _id: 6,
    imageURL: { type: String },
    paragraph: '“Once outside you encounter a nearly vacant parking lot.  All you can see is a car and a bicycle.  Both seemed to be abandoned.  You need to go home. You can walk, take the bike, or break into the car.  What do you do?',
    options: [["Walk Home", 7], ["Take the Bike", 11], ["Steal the Car",]]
  },
  {
    _id: 7,
    imageURL: { type: String },
    paragraph: 'You choose to walk home.  Even though the world\'s falling apart, you refuse to steal someone else\'s property. You are still don\'t understand what\'s going on but you head east and vaguely north towards your home. The further you walk, you still encounter no people.  You see a vacant corner store;  It\'s door is hanging open.  You go in.  There is  no shop keeper.  This store has been ransacked by looters.  All that\'s left are loose scrapes of paper and a half eaten sandwich.  What do you do?',
    options: [["Take the Sandwich", 8], ["Skip the Sandwich and Head Home", 8]],
    item: "half-eaten sandwich"
  },
  {
    _id: 8,
    imageURL: { type: String },
    paragraph: 'You leave the corner store and resume you journey home.  Sporadically you hear gunshots in the distance.  You mange to avoid several roving gangs of looters.  Eventually you run into a local hardware store.  You\'re not that far from home now.  It\'s door is standing open.  You look into the window and notice a large dark mass moving amongst the aisles.  It looks to be a massive wolf.  What do you do?',
    options: [["Confront the Wolf", 9], ["Lure the Wolf Away", 10], ["Continue Home", 20]]
  },
  {
    _id: 9,
    imageURL: { type: String },
    paragraph: 'You choose to confront the rabid, aggressive wolf.  That was a bad idea.  Your still weak from the coma and wolf viciously disembowels you.  The End.',
    options: [["Next"]]
  },
  {
    _id: 10,
    imageURL: { type: String },
    paragraph: 'You use the half eaten sandwich you found at the corner store to lure the wolf into a vacant room and close the door behind it.  Upon searching the hardware store, you find a crowbar that you think might be useful.  Then you leave the store and head for home.',
    options: [["Continue Home", 20]],
    item: "crowbar"
  },
  {
    _id: 11,
    imageURL: { type: String },
    paragraph: 'You choose the bike. As you ride, the wind on your face feels good. The streets of Chicago are eerily empty. The doors to most buildings are chain or boarded up. However you can hear what sound like gunshots in the distance. Your concern for family grows and you start to pedal faster. Eventually you run into a local hardware store. You\'re not that far from home now.  It\'s door is standing open.  You look into the window and notice a large dark mass moving in the aisles.  It looks to be a massive wolf.  What do you do?',
    options: [["Confront the Wolf", 9], ["Continue Home", 20]]
  },
  // {
  //   _id: 11,
  //   imageURL: { type: String },
  //   paragraph: 'You choose to take the car. ...',
  //   options: [["...", x], ["...", y]]
  // },
  //arrival at home
//   {
//     _id: 20,
//     imageURL: { type: String },
//     paragraph: '',
//     options: [["...", x], ["...", y]]
//   },
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