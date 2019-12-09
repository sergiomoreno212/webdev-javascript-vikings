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
        
        this.health = this.health - damage
    }
  }
  
  // Viking
  class Viking {
    constructor(name, health, strength) {
        this.name = name
        this.health = health
        this.strength = strength
    }
    receiveDamage() {
        this.health = this.health - damage
        if(this.health > 0) {
            return '$'
        }
    }
  }
  
  // Saxon
  class Saxon {}
  
  // War
  class War {}
