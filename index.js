const Fighter = require("./src/Fighter.js");
// First Labour : Heracles vs Nemean Lion

const heracles = new Fighter("🛡️ Heracles ⚔️", 20, 6);
const nemean = new Fighter("🦁 Nemean 🦁", 11, 13);
// use your Figher class here

console.log(`${heracles.name} is ready with ${heracles.life} 💙`);
console.log(`${nemean.name} is ready with ${nemean.life} 💙`);

heracles.fight(nemean);

// Boucle pour le combat
let round = 1;

while (heracles.life > 0 && nemean.life > 0) {
  console.log(`round ${(round)}`);

  heracles.fight(nemean);
  console.log(
    `${heracles.name} is attacking ${nemean.name} who has now ${nemean.life} life points`
  );

  nemean.fight(heracles);
  console.log(
    `${nemean.name} is attacking ${heracles.name} who has now ${heracles.life} life points`
  );

  round++
  }

  if (heracles.life <= 0) {
      console.log(`🏆 ${nemean.name} wins (💙${nemean.life})`)
      console.log(`💀 ${heracles.name} is dead`)
  }

  if (nemean.life <= 0) {
      console.log(`🏆 ${heracles.name} wins (💙${heracles.life})`)
      console.log(`💀 ${nemean.name} is dead`)
  }

