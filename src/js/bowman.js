/* eslint-disable linebreak-style */
import { Character } from './basic';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'bowman';
    this.attack = 25;
    this.defense = 25;
  }
}
