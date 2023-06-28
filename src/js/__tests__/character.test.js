import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('new character', () => {
  const result = new Character('character', 'bowman');
  const testChar = {
    attack: 0,
    defense: 0,
    health: 100,
    level: 1,
    name: 'character',
    type: 'bowman',
  };

  expect(result).toEqual(testChar);
});

test('new bowman', () => {
  const result = new Bowman('Bowman');
  const testChar = {
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: 'Bowman',
    type: 'bowman',
  };

  expect(result).toEqual(testChar);
});

test('new daemon', () => {
  const result = new Daemon('Daemon');
  const testChar = {
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: 'Daemon',
    type: 'daemon',
  };

  expect(result).toEqual(testChar);
});

test('new magician', () => {
  const result = new Magician('Magician');
  const testChar = {
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: 'Magician',
    type: 'magician',
  };

  expect(result).toEqual(testChar);
});

test('new swordsman', () => {
  const result = new Swordsman('Swordsman');
  const testChar = {
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: 'Swordsman',
    type: 'swordsman',
  };

  expect(result).toEqual(testChar);
});

test('new undead', () => {
  const result = new Undead('Undead');
  const testChar = {
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: 'Undead',
    type: 'undead',
  };

  expect(result).toEqual(testChar);
});

test('new zombie', () => {
  const result = new Zombie('Zombie');
  const testChar = {
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: 'Zombie',
    type: 'zombie',
  };

  expect(result).toEqual(testChar);
});

test('level up', () => {
  const result = new Bowman('Bowman');
  const testChar = {
    attack: 30,
    defense: 30,
    health: 100,
    level: 2,
    name: 'Bowman',
    type: 'bowman',
  };

  result.levelUp();

  expect(result).toEqual(testChar);
});

test('damage', () => {
  const result = new Bowman('Bowman');
  const testChar = {
    attack: 30,
    defense: 30,
    health: 93,
    level: 2,
    name: 'Bowman',
    type: 'bowman',
  };

  result.levelUp();
  result.damage(10);

  expect(result).toEqual(testChar);
});

test('level up after damage', () => {
  const result = new Bowman('Bowman');
  const testChar = {
    attack: 30,
    defense: 30,
    health: 100,
    level: 2,
    name: 'Bowman',
    type: 'bowman',
  };

  result.damage(10);
  result.levelUp();

  expect(result).toEqual(testChar);
});

test('wrong name', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Bowman('c'); }).toThrow(Error('Имя должно быть длиной от 2 до 10 символов!'));
});

test('wrong type', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character('bowman', 'test'); }).toThrow(Error('Неправильный тип!'));
});

test('level up for dead', () => {
  const result = new Bowman('Bowman');
  result.health = 0;

  expect(() => { result.levelUp(); }).toThrow(Error('Нельзя повысить левел умершего!'));
});

test('damage = 0', () => {
  const result = new Bowman('Bowman');

  result.damage(0);

  expect(result.health).toBe(100);
});

test('overdamage', () => {
  const result = new Bowman('Bowman');

  result.damage(1000);

  expect(result.health).toBe(0);
});
