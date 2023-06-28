/* eslint-disable linebreak-style */
import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'swordsman');
    this.attack = 40;
    this.defense = 10;
  }
}
