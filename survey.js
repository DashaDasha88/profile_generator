const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('What/s your name? Nicknames are also acceptable :)', (name) => {
  answers.push(name);
  rl.questsion('What/s an activity you like doing?', (activity) => {
    answers.push(activity);
    rl.questsion('What do you listen to while doing that?', (music) => {
      answers.push(music);
      rl.questsion('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        answers.push(meal);
        rl.questsion('What/s your favourite thing to eat for that meal?', (food) => {
          answers.push(food);
          rl.questsion('Which sport is your absolute favourite?', (sport) => {
            answers.push(sport);
            rl.questsion('What is your superpower? ', (superpower) => {
              answers.push(superpower);
              rl.close();

              console.log(`My name is ${name}. My favourite main hobby is ${activity}, my favourite music is ${music}. My favourite thing to eat for ${meal} is ${food}. I like to play ${sport}. My superpower is ${superpower}.`);
              
            });
          });
        });
      });
    });
  });
});