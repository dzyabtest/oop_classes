/* eslint-disable linebreak-style */
import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'zombie');
    this.attack = 40;
    this.defense = 10;
  }
}
