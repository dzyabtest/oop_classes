// TODO: write your code here
import sum from './basic';
import Bowman from './bowman';
/* import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Zombie from './zombie'; */

console.log('worked');

console.log(sum([1, 2]));

const bowman = new Bowman('Bowman');

console.log(bowman.name, bowman.level, bowman.attack, bowman.defense, bowman.health);

console.log('Level up');

bowman.levelUp();

console.log(bowman.name, bowman.level, bowman.attack, bowman.defense, bowman.health);

console.log('Damage 10');

bowman.damage(10);

console.log(bowman.name, bowman.level, bowman.attack, bowman.defense, bowman.health);

console.log('Level up');

bowman.levelUp();

console.log(bowman.name, bowman.level, bowman.attack, bowman.defense, bowman.health);

console.log(bowman);
