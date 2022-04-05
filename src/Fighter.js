MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  /**
   * Attaque l'ennemi passé en paramètre
   */
  fight(enemy) {
    let damage = Math.floor(Math.random() * this.strength + 1);
    damage -= enemy.dexterity;
    // console.log(damage)
    // Si aucun dommage n'est causé, l'ennemie évite le coup
    if (damage > 0) {
      enemy.life -= damage;
    //   console.log(
    //     `${this.name} is attacking ${enemy.name} and give him ${damage} damage points. ${enemy.name} has now ${enemy.life} life points`
    //   );
    }
  }
}

module.exports = Fighter; /* Fighter class definition */
