# TableTopFantasyGameGenerator
Generates content for certain fantasy table top games!

#What content can I generate with this?

At the moment you can generate a random character, a random monster and a random map.
The character and monsters can either generate a raw object, or an HTML object representing
a card. The map can only generate an HTML object.

#How do I generate a character object?


![Skärmbild 2022-09-26 160041](https://user-images.githubusercontent.com/89847326/192296161-f797a247-d6c6-4691-8f28-32a22e5d3f6d.png)

Import the CharacterGenerator using relative links.
This class has a method called getCharacter().
Create a new variabel and use this method on thenew variabel.
See picture for clarity.

![Skärmbild 2022-09-26 160041](https://user-images.githubusercontent.com/89847326/192296619-cf656fef-3d23-438d-935b-9a84c4bc66ff.png)

You can log the new random character and get an object containing the details.
The data inside the new variable will be something like this.

![Skärmbild 2022-09-26 160327](https://user-images.githubusercontent.com/89847326/192296941-c9d910a9-bbcf-4970-a459-e1bf5be7eaf4.png)

#How do I generate a monster object?

Almost same procedure as character object.
Import the MonsterGenerator using relative links.
Create a new variabel and use the the method getRandomMonster()
from the MonsterGenerator class on the new variabel.
See picture for clarity.

![Skärmbild 2022-09-26 160746](https://user-images.githubusercontent.com/89847326/192297830-933969fa-a099-4d92-9c71-377673176c0c.png)

You can log the new random monster and get an object containing the details.
The data inside the new variable will be something like this.

![Skärmbild 2022-09-26 160822](https://user-images.githubusercontent.com/89847326/192298022-844a7ba9-a263-4f2f-b0c2-26e51b604b20.png)


#How do I generate an HTML Object?

By using the class FantasyContentGenerator.
Import the FantasyContentGenerator with relative links.

You will need to have an HTML document where you can attach the fantasy content, and you need to link
the JavaScript document as well. Use relative links.

Here I have made a index.js file where I have linked the FantasyContentGenerator to. I have linked index.js to my HTML document.

![Skärmbild 2022-09-26 161322](https://user-images.githubusercontent.com/89847326/192299113-9f860d7c-b785-40a9-aff2-47e224a63d8e.png)

For each new fantasycontent you wish to attach you need to create a new html object in your document.
I have created three objects in the picture.

You need to find the HTML objects in your JavaScript file, preferably with document.getElementById().

![Skärmbild 2022-09-26 161920](https://user-images.githubusercontent.com/89847326/192300476-b17e81a9-3a3c-4338-8a29-05a2ab6f4074.png)

In this picture I have linked three HTML objects from my html-document. 

With the three methods, connectCharacterCard(), connectMonsterCard() and connectMap() I am adding one of each to my HTML document.
Please look at the picture for the code.


#Can I change the way the cards and map look?

Sure, you can change the CSS color property in the respective custom html objects files style.
I don't recommend changing any other CSS property than color.


#Will something more be added/perfected?

The way the cards and the map looks is very primitive. That will be my priority for any updates. 








