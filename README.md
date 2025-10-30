# Wat Scheelt Het?

Live tracking van de spannende strijd tussen PVV en D66 bij de Provinciale Statenverkiezingen 2025.

## Over dit project

Deze website toont realtime de tussenstand tussen PVV en D66, twee partijen die met minimaal verschil strijden om de meeste stemmen. Het verschil bedraagt momenteel slechts 1.984 stemmen!

## Features

- 🔄 Auto-refresh elke 30 seconden
- 📊 Historische grafiek van het verloop
- 📱 Volledig responsive (mobiel-vriendelijk)
- 🎨 Partijkleuren (PVV blauw, D66 groen)
- ⏱️ Laatste update timestamp
- 📍 Lijst met nog te tellen gemeentes
- 📈 Voortgangsbalk percentage geteld

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Chart.js + react-chartjs-2
- **Hosting**: Vercel
- **Language**: TypeScript

## Data updaten

De verkiezingsdata staat in `public/data/results.json`. Om de cijfers bij te werken:

1. Bewerk het `results.json` bestand
2. Update de velden `pvv.votes`, `d66.votes`, `percentageCounted`, etc.
3. Voeg een nieuw datapunt toe aan de `history` array
4. Commit en push naar GitHub
5. Vercel deploy automatisch binnen 30 seconden

### Data structuur

```json
{
  "lastUpdate": "2025-10-30T14:30:00+01:00",
  "pvv": {
    "name": "PVV",
    "votes": 1502168,
    "seats": 26,
    "color": "#0a2d5c"
  },
  "d66": {
    "name": "D66",
    "votes": 1500184,
    "seats": 26,
    "color": "#00a651"
  },
  "percentageCounted": 99.7,
  "remainingMunicipalities": [
    "Amsterdam (86.500 stemmen)",
    "Venray (onderbroken door brand)",
    ...
  ],
  "history": [
    {
      "timestamp": "2025-10-30T14:30:00+01:00",
      "pvv": 1502168,
      "d66": 1500184,
      "difference": 1984
    }
  ]
}
```

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Deployment

De site is gehost op Vercel en deploy automatisch bij elke push naar de main branch.

**Live URL**: https://watscheelthet.nl

## Licentie

MIT

## Credits

Gemaakt door Joost Kamstra
Data bron: NOS
# Trigger rebuild
