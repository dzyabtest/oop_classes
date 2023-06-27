/* eslint-disable linebreak-style */
import { Character } from './basic';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'swordsman';
    this.attack = 40;
    this.defense = 10;
  }
}
