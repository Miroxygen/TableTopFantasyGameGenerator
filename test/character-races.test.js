import { CharacterRaces } from "../src/character-races.js";

const characterRaces = new CharacterRaces()

test('Class can give a randomized race', () => {
    const races = characterRaces.getAllRaces()
    const randomRace = characterRaces.getRandomRace()
    expect(races.includes(randomRace)).toEqual(true)
})