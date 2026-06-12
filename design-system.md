# Arkenovia Design System — "Aubergine Atelier" (adapted from VIBE 1: Neo-Victorian)

A technical-meets-refined look: deep aubergine/violet backgrounds, warm brass/amber + magenta
accents, ornate bordered cards, and a flowing data-pipeline / node-graph motif. NO cyan/teal.

## Palette (Tailwind tokens)
- ink:        #1c0f17  (deepest aubergine, page background)
- aubergine:  #2a1a1f  (primary dark surface)
- plum:       #3a2030  (raised surface / cards)
- wine:       #5d1a23  (deep magenta-wine)
- magenta:    #c4477e  (warm magenta accent)
- amber:      #e0a458  (warm amber/brass highlight)
- brass:      #c5a15a  (gold/brass primary accent)
- brassDark:  #7a552c  (brass shadow / borders)
- cream:      #e0d6c3  (primary light text)
- sand:       #d4b996  (secondary text)

## Typography
- Display / headings: 'Playfair Display', serif (bold, elegant)
- Body / UI: 'Roboto Slab', serif (technical-leaning slab)

## Components
- Buttons (primary): bg brass (#b8954d) text aubergine, rounded-sm, inset shadow
  `boxShadow: inset 0 -2px 0 #7a552c, 0 2px 4px rgba(0,0,0,0.5)`; hover lighter brass.
- Buttons (secondary): brass/magenta text, animated arrow on hover.
- Cards: bordered (2px brassDark) with `boxShadow: 0 0 0 2px #412d23, inset 0 0 10px rgba(0,0,0,0.4)`,
  translucent plum background `rgba(65,45,35,0.3)`.
- Section eyebrow: brass, Playfair Display.
- Background texture: subtle diagonal cross / node-dot SVG pattern at low opacity over aubergine.
- Top accent border: `borderImage: linear-gradient(to right, #7a552c, #c5a15a, #7a552c) 1`.
- Pipeline motif: connected nodes + flowing edges in magenta→amber gradients used in hero and images.

## Reference markup (VIBE 1)
Deep aubergine `#2a1a1f` section, cream `#e0d6c3` text, brass `#c5a15a` accents, Playfair Display
headings over Roboto Slab body, ornate framed hero card with double border + inset shadow, and a
3-column feature grid of bordered cards. Adapted here to add magenta `#c4477e` accents and a
node-graph pipeline motif.
