// TODO: write your code here
import Bowman from './bowman';

console.log('worked');

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
