🪄 Wizards – A Wizard-Themed Interactive Spellbook (React + TypeScript + Vite)

✨ Discover. Sort. Search. Cast. — A beautifully animated magical web experience.


Wizard is a visually stunning, interactive wizard spellbook built with React + TypeScript + Vite, packed with:

- 🧪 Real sorting algorithms

- 🔍 Fast magical search

- 🧙 Spell animations

- ⚡ Smooth UI interactions

- 🎨 A glowing, immersive wizard aesthetic

- 🚀 Production-ready structure with Redux Toolkit


This project is designed for both learning advanced frontend engineering.

🌌 Features:

🔮 Spellbook Interface

- Each spell appears as a glowing animated card

- Wizard-themed elements, gradients, particles, glows

🔍 Search Spells (Live Filter)

- Real-time search with subtle animations

- Fuzzy match upgrade coming soon

🔽 Sort Spells (Algorithms Inside)

Powered by your own implementations, not JS defaults:

- QuickSort

- MergeSort

- Bubble Sort (visual mode)

- Sort by: Power, Element, Alphabetical

✨ Spell Casting Animations

- Particle bursts

- Card reaction

- Energy pulses

- More specific animations per element (coming soon)

📱 Fully Responsive

Looks beautiful on:

- Desktop

- Tablet

- Mobile

| Technology            | Purpose                                |
|-----------------------|----------------------------------------|
| **React + TypeScript** | Main UI framework                      |
| **Vite**              | Lightning-fast dev/build tool          |
| **Redux Toolkit**     | State management (UI + Spell state)    |
| **Framer Motion / GSAP** | Smooth magical animations           |
| **SCSS Modules**      | Component-level styling                |
| **Custom Algorithms** | Sorting + searching logic              |

src/

 ├─ components/
 
 │   ├─ SpellCard/
 
 │   ├─ SearchBar/
 
 │   ├─ SortControls/
 
 │   ├─ SpellGrid/
 │
 ├─ pages/
 
 │   └─ Home/
 │
 ├─ store/
 
 │   ├─ slices/
 
 │   │   ├─ uiSlice.ts
 
 │   │   └─ spellsSlice.ts
 
 │   ├─ index.ts
 
 │   └─ hooks.ts
 │
 ├─ data/
 
 │   └─ spells.json
 │
 ├─ styles/
 
 │
 ├─ utils/
 
 │   ├─ sorting/
 
 │   └─ searching/
