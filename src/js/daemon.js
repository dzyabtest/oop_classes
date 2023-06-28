/* eslint-disable linebreak-style */
import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'daemon');
    this.attack = 10;
    this.defense = 40;
  }
}
