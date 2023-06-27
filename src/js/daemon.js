/* eslint-disable linebreak-style */
import { Character } from './basic';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'daemon';
    this.attack = 10;
    this.defense = 40;
  }
}
