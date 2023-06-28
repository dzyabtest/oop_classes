/* eslint-disable linebreak-style */
export default class Character {
  constructor(name, type) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('Имя должно быть длиной от 2 до 10 символов!');
    } else if (['bowman', 'daemon', 'magician', 'swordsman', 'undead', 'zombie'].indexOf(type) === -1) {
      throw new Error('Неправильный тип!');
    } else {
      this.name = name;
      this.level = 1;
      this.health = 100;
      this.type = type;
      this.attack = 0;
      this.defense = 0;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defense *= 1.2;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (points) {
      this.health -= points * (1 - this.defense / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
