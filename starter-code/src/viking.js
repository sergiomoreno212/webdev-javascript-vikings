// Soldier
class Soldier {
    constructor(health, strength) {
     this.health = health
     this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage() {
        this.health -= damage;
    }
  }
  
  // Viking
  class Viking extends Soldier { 
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage() {
        this.health -= damage;
        if(this.health > 0) {
            return `${name} has received ${damage} points of damage`
        }
        else if(this.health < 0) {
            return `${name} has died in the act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
      constructor(health, strength) {
          super(health, strength);
      }
      receiveDamage() {
        this.health -= damage;
        if(this.health > 0) {
            return `${name} has received ${damage} points of damage`
        }
        else if(this.health < 0) {
            return `${name} has died in the act of combat`;
        }
      }
  }
  // War
  class War {}
