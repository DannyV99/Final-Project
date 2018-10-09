const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/escapeChicagoDB"
);

const pageSeed = [
  {
    id: 0,
    imageURL: './src/Image/image.jpg',
    paragraph: 'You wake up in a hospital room. You don\'t know why you are here or how you got there. You cannot see anyone – no doctors or nurses. There is no sound of anyone or any activity. On one of the walls is written “you\'re better off in a coma” in what appears to be bodily fluid. You ring for the nurse and no response. You ring again and still no response. You notice that you are no longer connected to any IV and monitors. Their tubes and wires are sprawled out aimlessly. Your clothes and phone are piled on a chair next to you. When you check your phone, the battery is dead. What do you do?',
    options: [["Explore the Hospital", 1], ["Go Home", 2]]
  },
  {
    id: 1,
    imageURL: { type: String },
    paragraph: 'You choose to explore the hospital so you put on your clothes and proceed to venture down various hallways. You don\'t see anyone. All the rooms are empty. The nurses stations are abandoned and you cannot tell for how long. Even more perplexing is that there is no indication why everyone is gone. You drift into a room labeled pharmacy. The lock on the door has been broken. What must have been shelves full of medications have been ransacked. You notice a single remaining bottle of pills. It is marked as some sort of antibiotic.  You absent-mindedly put the pills in you pocket. From behind you, comes a voice. “Are you a doctor?” Then quickly he continues, “You\'re not a doctor. Who are you? Are you a patient?',
    options: [["Tell the Truth", 2], ["Lie to Him", 3]]
  },
  {
    id: 2,
    imageURL: { type: String },
    paragraph: '“Honestly I have no idea what I\'m doing here. Apparently I was in a coma, but I have no idea how I was injured or how a got here. What is going on? Where are we? Where are all the people?” The stranger looks at you in disbelief. “We\'re in Northwestern Memorial Hospital in downtown Chicago. Everyone has fled the ecological disaster.  There\'s been waves of flooding, torrents of acid rain, packs of rabid, wild animals ...” “Wait, \'packs of rabid animals\' you ask? “Yeah the environment\'s all screwed up. There\'s packs of diseased wolves, bears, mountain lions roaming the city. I\'ve even seen polar bears. There\'s bad starvation and widespread disease. My own daughter is sick.  That\'s why I here looking for medicine.” What do you do?',
    options: [["Give Him the Antibiotics",], ["Go Find Your Family",]]
  },
  {
    id: 3,
    imageURL: { type: String },
    paragraph: '“Yes I AM a doctor.  How can I help you?” The stranger is thrown aback but recovers. “You\'re a doctor. Oh thank God. My daughter is very sick. She needs medicine. You must come see her. She\'s not far away.” What do you do?',
    options: [["Go with the Stranger to help his daughter",], ["Go Find Your Family",]]
  },
  {
    id: 4,
    imageURL: { type: String },
    paragraph: '“Once outside you encounter a nearly vacant parking lot.  All you can see is a car and a bicycle.  Both seemed to be abandoned.  You need to go home. You can walk, take the bike, or break into the car.  What do you do?',
    options: [["Walk Home",], ["Take the Bike",], ["Take the Bike",]]
  }
];
