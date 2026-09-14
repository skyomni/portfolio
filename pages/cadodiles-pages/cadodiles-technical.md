---
layout: default
title: Project Documentation
parent: CADodiles
grand_parent: Projects
nav_order: 4
---

# Technical Artifacts

This section contains the project documentation and design files for the CADodiles project. Click any image to enlarge it.

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.gallery-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.gallery-item.drawing img {
  object-fit: contain;
  background: #ffffff;
  padding: 0.5rem;
}

.gallery-caption {
  padding: 1rem;
  background: #f9fafb;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

/* Lightbox styles */
.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

.lightbox.active {
  display: flex;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: bold;
}

.lightbox-close:hover {
  color: #ccc;
}

.lightbox-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-align: center;
  max-width: 80%;
}
</style>

---

## Electrical Documentation

### Wiring Diagram

<div class="gallery">
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/wiring-diagram.png', 'Full system wiring diagram: Raspberry Pi Zero 2 WH, servo, LED strip, and buzzer')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/wiring-diagram.png" alt="CADodiles wiring diagram">
    <div class="gallery-caption">Full System Wiring Diagram</div>
  </div>
</div>

### GPIO Pinout

| Signal | GPIO | Physical Pin | Notes |
|---|---|---|---|
| LED strip data in | GPIO 18 | Pin 12 | Through a 470 Ω series resistor |
| Servo signal | GPIO 12 | Pin 32 | MG90S, 0.5–2.4 ms pulse width |
| Buzzer (+) | GPIO 13 | Pin 33 | Tonal buzzer |
| Buzzer (−) | GND | Pin 34 | |
| Pi ground | GND | Pin 6 | Tied to power bank ground |

### Power Distribution

The servo and LED strip are driven from an external USB power bank rather than the Pi's own 5 V rail, with grounds tied together so the data lines share a common reference:

- **Power bank (+)** → LED strip red, servo red
- **Power bank (−)** → LED strip white, servo brown, Pi GND (Pin 6)

### Components

| Component | Qty | Source | Cost | Role |
|---|---|---|---|---|
| Raspberry Pi Zero 2 WH | 1 | Amazon | $25.99 | Central processing unit |
| Waveshare 7" HDMI Touchscreen | 1 | Amazon | $46.59 | Display and touch input |
| MG90S Micro Servo Motor (180°) | 1 | FYELIC | $8.00 | Drives the dispensing wheel |
| WS2812B ECO LED Strip | 1 | Amazon | $13.99 | Visual feedback lighting |
| GPIO wiring and connectors | — | FYELIC | $5.00 | Electrical connections |
| Plywood (dispenser + boards) | — | Makerspace | $10.00 | Structural material |
| Acrylic paint | — | Makerspace | $5.00 | Aesthetic finishing |
| 3D-printed wheel (PLA) | 1 | Makerspace | $5.00 | Dispensing mechanism |
| **Total (theoretical)** | | | **$119.57** | |
| **Total (actual)** | | | **$86.57** | |

---

## CAD Drawings

All mechanical design work was done in SolidWorks and AutoCAD. Native part and assembly files are available in the project repository.

[View the CAD files on GitHub](https://github.com/skyomni/CADodiles-STEM-Game/tree/main/Solidworks%20Files%20and%203d%20Models)

<div class="gallery">
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/cad-dispenser-assembly.png', 'Dispenser Box Assembly (Assem2) - exploded view with servo, Raspberry Pi, and buzzer components')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/cad-dispenser-assembly.png" alt="Dispenser box assembly drawing">
    <div class="gallery-caption">Dispenser Box Assembly &mdash; Exploded View</div>
  </div>
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/cad-dispenser-drawing.png', 'Dispenser enclosure drawing - orthographic views and dimensions')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/cad-dispenser-drawing.png" alt="Dispenser enclosure drawing">
    <div class="gallery-caption">Dispenser Enclosure Drawing</div>
  </div>
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/cad-playboard-drawing.png', 'Playboard drawing - angled game board, 72.9 degree face')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/cad-playboard-drawing.png" alt="Playboard drawing">
    <div class="gallery-caption">Playboard Drawing</div>
  </div>
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/cad-blocks-drawing.png', 'Game piece block drawings - the five Tetris-style shapes dispensed by the machine')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/cad-blocks-drawing.png" alt="Game piece block drawings">
    <div class="gallery-caption">Game Piece Blocks</div>
  </div>
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/cad-dispenser-render.png', 'SolidWorks render of the dispenser enclosure showing the display cutout and exit chute')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/cad-dispenser-render.png" alt="SolidWorks dispenser render">
    <div class="gallery-caption">Dispenser SolidWorks Render</div>
  </div>
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/cad-laser-layout.png', 'AutoCAD flat layout of the laser-cut plywood panels with finger joints')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/cad-laser-layout.png" alt="AutoCAD laser cut layout">
    <div class="gallery-caption">AutoCAD Laser-Cut Layout</div>
  </div>
</div>

### CAD File Inventory

**Assemblies** — `PLAYBOARD ASM.SLDASM`, `spinwheel with servo.SLDASM`, `Assem2.SLDASM`, `Assem5.SLDASM`, plus reference models for the Raspberry Pi Zero 2 W and the 7" display used for internal clearance checks.

**Enclosure parts** — `Bottom.SLDPRT`, `Wall1`–`Wall4`, `insert1`/`Insert2`/`insert4`, `lcd bakc coverup.SLDPRT`

**Mechanism parts** — `servo_holder.SLDPRT`, `ramp.SLDPRT`, `dispenser leveling 2.SLDPRT`, `Buzzer_HC-12085.SLDPRT`

**Play board iterations** — eleven modeled revisions (`play1`–`play11`) before the final version, plus a 2D drawing in `Playboard.dwg`

**3D printed game pieces** — `L-BLock.stl`, `Squareblock.stl`

---

## Software

### Program Flowchart

<div class="gallery">
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/code-flowchart.png', 'Code flowchart: full program flow from startup through mode selection, chapter select, the question loop, and the end screen')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/code-flowchart.png" alt="CADodiles code flowchart">
    <div class="gallery-caption">Program Flowchart</div>
  </div>
</div>

### Architecture

| File | Lines | Purpose |
|---|---|---|
| `main.py` | ~900 | Kivy application, screens, custom widgets, game loop |
| `hardware.py` | ~290 | GPIO control for LED strip, servo, and buzzer |
| `translations.py` | ~130 | English and Spanish UI strings |
| `config.py` | ~60 | Pin assignments, servo angles, colors, font sizes |

### Screen Flow

The application is built as a Kivy `ScreenManager` with six screens, all inheriting from a shared `PixelScreen` base that applies the pixel-art background and top bar:

```
SplashScreen ─┬─ (singleplayer) ──────────────┐
              └─ (multiplayer) ─ MPSetupScreen ┴─ ChapterScreen ─ TriviaScreen ─ EndScreen
                                                       │
SplashScreen ── SettingsScreen                         └─ (play again / pick chapter)
```

### Custom Widgets

The interface is drawn with a retro pixel-art aesthetic rather than stock Kivy styling:

- `PixelBG` — procedurally generated grass, dirt, brick, and pipe background texture
- `PixelButton` — chunky beveled button with pressed-state rendering
- `ChapterCard` — selectable card showing a chapter title and subtitle
- `HomeButton` — persistent navigation control in the top bar
- `LangToggle` — live English / Spanish switch that re-renders the current screen in place

### Hardware Abstraction

`hardware.py` exposes two high-level calls that the game loop uses — `on_correct()` and `on_wrong()` — each of which fans out to the LED, buzzer, and servo subsystems. Every effect runs on a daemon thread so feedback never blocks the UI.

Each subsystem is initialized independently inside a `try`/`except`. If a device is missing, that subsystem falls back to printing a `[STUB]` message and the rest of the game continues to run. This means the full application can be developed and demonstrated on a laptop with no GPIO hardware attached.

### Game Settings

- 10 questions per game
- Up to 4 players in multiplayer
- Default language English, switchable to Spanish at any time
- Adjustable UI brightness and a hardware test mode in Settings

[View the full source code on GitHub](https://github.com/skyomni/CADodiles-STEM-Game)

---

## License

The project source is released under the MIT License.

<!-- Lightbox -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
  <img id="lightbox-img" class="lightbox-content" src="" alt="">
  <div id="lightbox-caption" class="lightbox-caption"></div>
</div>
<script>
function openLightbox(e, imgSrc, caption) {
  e.stopPropagation();
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
</script>
