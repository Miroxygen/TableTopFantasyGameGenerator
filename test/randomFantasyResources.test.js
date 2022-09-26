import { CharacterRaces } from "../src/resources/character-races.js";
import { FantasyClasses } from "../src/resources/fantasy-classes.js";
import { MonsterGenerator } from "../src/generators/monster-generator.js";
import { CharacterGenerator } from "../src/generators/character-generator.js";




const characterRaces = new CharacterRaces()
const fantasyClasses = new FantasyClasses()
const monsterGenerator = new MonsterGenerator()
const characterGenerator = new CharacterGenerator()

test('Class can give a randomized race thats part of the races', () => {
    const races = characterRaces.getAllRaces()
    const firstRandomRace = characterRaces.getRandomRace()
    expect(races.includes(firstRandomRace)).toEqual(true)
    const secondRandomRace = characterRaces.getRandomRace()
    /*There is a chance the two different rolls will roll the same value, (1/9).
    So this test will eventually fail even though it does roll a random value.
    I still wanted to test that it indeed can roll two different values 8 out of 9 times.*/ 
    expect(firstRandomRace).not.toEqual(secondRandomRace)
})

test('Class can give a randomized fantasyclass', () => {
    const allfantasyClasses = fantasyClasses.getAllFantasyClasses()
    const firstRandomClass = fantasyClasses.getRandomFantasyClass()
    expect(allfantasyClasses.includes(firstRandomClass)).toEqual(true)

    //Same thing here, tests will fail.
    const secondRandomClass = fantasyClasses.getRandomFantasyClass()
    expect(firstRandomClass).not.toEqual(secondRandomClass)
})



/**
 * Out of 20 times the tests fail about half the time for these two tests.
 * So, half the time with two monsters and two characters they will all four be 
 * completly different. So the tests do show that the classes gives a random character/monster
 * each time, since there is as a big chance that each instance will be like the other,
 * as it will not.
 */

//And same here.
test('Gives a random monster', () => {
    const firstMonster = monsterGenerator.getRandomMonster()
    const secondMonster = monsterGenerator.getRandomMonster()
    expect(firstMonster.LegendaryAttack).not.toEqual(secondMonster.LegendaryAttack)
    expect(firstMonster.NormalAttack).not.toEqual(secondMonster.NormalAttack)
    expect(firstMonster.Subtype).not.toEqual(secondMonster.Subtype)
    expect(firstMonster.Traits).not.toEqual(secondMonster.Traits)
    expect(firstMonster.Type).not.toEqual(secondMonster.Type)
})

//Also here.
test('Gives a random character', () => {
    const firstCharacter = characterGenerator.getCharacter()
    const secondCharcter = characterGenerator.getCharacter()
    expect(firstCharacter.Class).not.toEqual(secondCharcter.Class)
    expect(firstCharacter.Name).not.toEqual(secondCharcter.Name)
    expect(firstCharacter.Race).not.toEqual(secondCharcter.Race)
    expect(firstCharacter.Traits).not.toEqual(secondCharcter.Traits)
})

