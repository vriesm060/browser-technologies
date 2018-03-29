# Boodschappenlijst App

[Demo](http://068306a8.ngrok.io/)

## Core functionaliteit

De core functionaliteit van deze app is het maken van een boodschappenlijst, waarbij je een item kan maken en deze kan verwijderen. Daarnaast is het belangrijk dat de boodschappenlijst bewaard blijft wanneer de browser afgesloten is.

De core functionaliteit is server side opgebouwd. Extra features zijn client side gemaakt. Deze hebben feature detection en fallback voor browsers die de nieuwe features niet ondersteunen.

De core functionaliteit bestaat uit een `<input>` veld en een submit `<button>` die een POST request naar de homepage doet en de ingevoerde value in een `<li>` zet. Zo wordt een item in de boodschappenlijst gestopt. Nieuwe items worden in het begin van de lijst geplaatst.

Elk item in de boodschappenlijst kan ook verwijdert worden. Bij het klikken op de verwijder knop wordt een nieuwe POST request gestuurd die het item weer uit de lijst verwijdert.

## Browser technologies

Als enhancement heeft de app een Drag & Drop functionaliteit. Wanneer dit wordt ondersteund, kan je via Drag & Drop de items uit de lijst verwijderen, naast de standaard manier.

## Browser ondersteuning

Drag & Drop wordt door maar 50% van de browsers ondersteund, maar de core functionaliteit wordt door bijna alle browsers ondersteund. Alleen op browsers die geen HTML5 elementen ondersteunen, IE6, IE7, IE8 en Firefox 2, ziet de app er minder goed uit. Dit komt doordat het grootste gedeelte van de styling dan niet gevonden wordt. Ondanks dit is de belangrijkste informatie nog wel beschikbaar.

Ik heb de app op verschillende b

## Accessibility

Om de accessibility te testen heb ik [Funkify](http://www.funkify.org/) gebruikt en de standaard Voice Over van Mac. Ook heb ik een audit gedaan met de Chrome Dev Tools die 100% accessibility terug gaf. De app werkt ook met gebruik van toetsenbord.
