/* eslint-disable linebreak-style */
import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'magician');
    this.attack = 10;
    this.defense = 40;
  }
}
