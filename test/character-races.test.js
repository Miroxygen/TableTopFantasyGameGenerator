import { CharacterRaces } from "../src/character-races.js";

const characterRaces = new CharacterRaces()

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