# Mall för inlämning laboration 1, 1dv610

## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [x] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [x] Testfall är automatiserade
    - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [x] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 

Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 

## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.



## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.

![class-diagram](https://user-images.githubusercontent.com/89847326/192315672-b7d0f8ea-0028-4896-bde1-6cbcdc490b79.jpeg)


## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar.

Jag har använt Jest och gjort automatiska testfall för att se om kraven jag ställt fungerar.
Jag har även gjort några manuella tester för att säkerställa att kraven är uppfyllda.

### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?

| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
| Att ett karaktärsobjekt skapas|[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#uc1-randomize-a-random-fantasy-character)||PASS|
| Att ett karaktärsHTMLobjekt skapas|[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#uc4-create-an-html-component-from-the-randomized-generator-classes)||PASS| 
| Att ett monsterobjekt skapas|[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#uc2-randomize-a-fantasy-monster)||PASS|
| Att ett monsterHTMLobjekt skapas|[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#uc4-create-an-html-component-from-the-randomized-generator-classes)||PASS|
| Att ett slumpmässig kartHTMLobjekt skapas|[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#uc4-create-an-html-component-from-the-randomized-generator-classes)||PASS|
| Att resurser faktiskt är slumpmässiga|[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#automatic-tests)||PASS|
| Att generator klassen faktiskt ger mig slumpmässiga karaktärer och monster |[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#automatic-tests)||PASS|
| Att Map klassen faktist ger slumpmässiga olika maps |[Testfall](https://github.com/Miroxygen/TableTopFantasyGameGenerator/wiki/Tests#uc5-make-sure-the-map-is-random)||PASS|







## Kodkvalitetskrav

**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.

### Namngivning

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|CharacterGenerator - **Class Names** Classes and objects should have noun or noun phrase names.|Karaktärsgenerator. En "maskin" som generar en annan sak. Beskrivande substantiv för vad klassen gör, genererar karaktärer.|
|getCharacter() **Method names** Methods should have verb or verb phrase names.|Hämta är ett verb som beskriver bra vad funktionen gör. Den hämtar en karaktär.|
|getRandomMonster() **Pick one word per concept** Pick one word for one abstract concept and stick with it.|Jag har valt att använda get för allting inom mina objectorienterade klasser för att hämta något ur dem (getCharacter hämtar en karaktär, getRandomMonster hämtar ett monster)|
|FantasyClasses **Use Problem Domain Names** When there is no "programer-eese" for what you're doing, use the name from the problem domain.|En klass i ett fantasyspel och en klass i programmer är extremt olika. Att döpa en klass till bara Class går inte, även om programmerar vet att det är en fantasyinriktad applikation. Att lägga till Fantasy tar bort allt tvivel om vad för slags klass det är.|
|Resource **Shorter names** sid 30. Shorter names are generally better than longer ones.|De flesta av mina klasser har nödvändiga prefix för att inte blanda ihop dem med andra namn,raser och klasser. Resource är en av de som klarar sig med ett kort namn, då det är en huvudklass för alla resurser och förklarar bra vad det är för något med ett ord. Dessutom blir denna klass då mer återanvändbar till andra projekt som använder resurser.|

### Funktioner

| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|getRandomRace() **Small!** The first rule of functions is that they should be small.|Jag har verkligen försökt att hålla funktioner korta! Denna funktion är två rader. Egentligen i efterhand hade den kunnat var 1 rad, men jag gillar inte att returna och skapa ett objekt samtidigt (varför vet jag ej?).|
|destroyCurrentMap() **Do One Thing**|Denna hör lite ihop med **Small** men, en funktion kan vara liten och ändå göra två grejer. Denna funktion har en while sats som tar bort alla barn ur ett HTML objekt. Det är en grej, och namnet på funktionen säger precis vad den gör och koden talar dessutom för sig själv och är lättläst. Den är kort och gör bara en grej!|
|#setAllCharacterStats() **One Level of Abtraction per Function** In order to make sure our functions are doing "one thing" we need to make sure that the statements within our function are all at the same level of abtraction.|Ja, denna funktion är inte superkort. Inte superlång heller, 4 rader lång. Det enda den gör är att kalla på fyra andra metoder inom klassen, så den har en hög abstraktionsnivå.|
|getArrayFromString() **Use Descriptive Names** "You know you are working on clean code when each routine turns out to be prettu much what you expected"|Jag behövde en funktion som gjorde om en sträng till en array. Namnet är inte kort, men den följer ett ord per koncept, och den gör absolut inget annat än att returnera en array baserad på strängen som skickades in och hur du vill indexera och arrayen.|
|#setRandomCharisma() **Function arguments** The ideal number of arguments for a function is zero.|Jag håller väl inte riktigt med här, ännu. Han skriver dock att upp till två är OK. Jag har möjligtvis inte kommit så långt att jag kan skriva alla funktioner utan parametrar, och det tror jag är omöjligt! Men jag har försökt att jobba utan parametrar, och att slumpa värden och inte låta någon användare bestämma har gjort funktionerna renare och mer lättjobbade.|

## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 

Jag kan faktiskt stolt säga att jag läste "Meaningful names" innan jag började med uppgiften, men det var mest på grund av att jag inte hade kommit på vad jag ville göra. Mycket av huvudkoncepten i detta kapitel har tagits upp under mitt tidigare läsår, specifikt att namn är alltid bäst om de förklarar vad en variabel eller klass faktiskt är. Det jag tycker har påverkat mig inför denna uppgift, och under den, har då blivit saker jag inte tänkt på så mycket innan.

**Use Intention-Revealing Names** 
Jag tycker att jag varit hyfsat duktig på detta. Jag har aldrig skrivit d när jag ville ha en variabel för elapsed time in days, men jag har absolut skrivit days och blivit tvungen att kommentera vad för slags dagar det är jag menar. Days kändes kort och enkelt, men en dag kan ju betyda så mycket i så många olika sammanhang även om en dag aldrig kommer vara något annat än en dag. elapsedTimeInDays kräver ingen kommentar.

**Avoid Disinformation**
Haha ja, jag har definitvt skrivit list till allting som har med en grupp av något att göra. Speciellt i mer objektorienterad programmering. Allting är väl en lista av nånting? Allting går ju rent tekniskt, att lista? Nu hade jag tyvärr ingen grupp av något i denna uppgift, men jag tog bort "list" från något annat jag gör just nu under läsåret. Jag har försökt använda samma stil till det som hör ihop, och olika till det som inte hör ihop med det. Get och Set tycker jag är jättebra för att ge rätt information om att, detta, det är objektorienterat. I min karta, som är ett HTML Objekt har jag istället använt "make" och "construct" för att påvisa att detta är något annorulunda, något som syns och görs.

**Avoid Mental Mapping**
Oj vad många gånger jag bara skriver i, inuti en for loop för att indikera index. Jag tror det står i 99% av mina for loopar. Fär det mesta är det faktiskt index jag vill loopa igenom, men jag har nog faktiskt aldrig tänkt att det GÅR skriva något annat, att det skapar mer klarhet för den som ska läsa koden. Vad är i egentligen? Jag kommer hädanefter åtminstone skriva index, då enordsvariabler skyr jag numera som pesten.

Det var tre saker ur kapitel 3, Functions, som verkligen gjorde att jag skrev annorlunda kod. Håll det kort, gör bara en grej, och håll det på samma abstraktionsnivå. Jag har inte varit en vän av att skriva objektorienterade klasser, men jag tycker att det verkligen gör det lättare att hålla sig till dessa regler. Att skriva en klass och se det som en fabrik eller maskin, gör detta tänk mycket enklare. En lampknapp t.e.x skulle kunna vara en klass med två funktioner, turnLampOn() och turnLampOff(). De är (förhoppningsvis) korta, gör en sak och har en abstraktionsnivå (i min funtktion i alla fall). Jag gjorde om flera funktioner i min kod för att de antingen gjorde två saker, eller hade flera abstraktionsnivåer. Exempelvis klassen MonsterGenerator har funktionerna #setAllMonsterStats() och getRandomMonster(). Innan var dessa en funktion, getRandomMonster() där denna funktion satte alla stats. Jag bröt ut det till en egen funktion som getRandomMonster() ropar på. I klassen Attributes har jag också två funktioner, #makeStringFromRandomValues() och getAttributes(). Innan var det bara getAttributes(), som då slumpade alla värden och skapade en sträng från alla värden och returnerade denna sträng. Den var ju kort och gjorde det den sa, men den gjorde två saker.

Jag tycker boken är rolig att läsa och framförallt en bra läsning. Jag ser fram emot att lära mig skriva ännu bättre kod och fixa mina misstag. Min HTML Custom Object klass Map är den jag är mest missnöjd med, och kommer vara det jag vill ändra på i nästa steg. Där har jag tyvärr långa funktioner som förvisso bara gör en grej, men jag vill förbättra dem och framförallt se hur andra reagerar när de läser min kod. Jag kände att jag blev fast och det jag har skrivit just nu är inte optimalt, men det var det bästa jag kunde komma med nu. Jag hoppas att folk förstår den, och ska kunna förbättra den eller ge mig ett nytt perpektiv!


