# Foto's toevoegen

De website toont nu automatisch foto's van de winnaar (blij) en verliezer (verdrietig/grayscale).

## Benodigde foto's

Je moet 4 foto's toevoegen aan de `public/` map:

1. **`jetten-happy.jpg`** - Rob Jetten blij/lachend
2. **`jetten-sad.jpg`** - Rob Jetten verdrietig/teleurgesteld
3. **`wilders-happy.jpg`** - Geert Wilders blij/lachend
4. **`wilders-sad.jpg`** - Geert Wilders verdrietig/teleurgesteld

## Hoe toe te voegen:

1. Download of maak screenshots van geschikte foto's
2. Crop ze tot vierkante formaat (bijv. 500x500px)
3. Sla ze op als JPG in de `public/` map met exact deze namen
4. Commit en push naar GitHub

## Voorbeeld commando's:

```bash
# Kopieer je foto's naar de public folder
cp ~/Downloads/jetten-blij.jpg public/jetten-happy.jpg
cp ~/Downloads/jetten-sad.jpg public/jetten-sad.jpg
cp ~/Downloads/wilders-blij.jpg public/wilders-happy.jpg
cp ~/Downloads/wilders-sad.jpg public/wilders-sad.jpg

# Commit en push
git add public/*.jpg
git commit -m "Voeg foto's van Jetten en Wilders toe"
git push
```

## Automatisch gedrag:

- De **grootste partij leider** wordt getoond met een blije foto (kleur, grote cirkel met groene rand)
- De **verliezer** wordt getoond met een verdrietige foto (kleiner, grayscale, minder prominent)
- Foto's wisselen automatisch afhankelijk van wie voorstaat in `results.json`

## Tijdelijke placeholders:

Tot je de foto's toevoegt, zal de site een broken image icon tonen. Dit is normaal en wordt opgelost zodra je de foto's toevoegt.
