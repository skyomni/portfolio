---
layout: default
title: Project Documentation
parent: CADodiles
grand_parent: Projects
nav_order: 4
---

# Technical Artifacts

This section contains the project documentation and design files for the CADodiles project.

---

## Electrical Documentation

### GPIO Pinout

| Signal | GPIO | Physical Pin | Notes |
|---|---|---|---|
| LED strip data in | GPIO 18 | Pin 12 | Through a 470 Ω series resistor |
| Servo signal | GPIO 12 | Pin 32 | Angular servo, 0.5–2.4 ms pulse width |
| Buzzer (+) | GPIO 13 | Pin 33 | Tonal buzzer |
| Buzzer (−) | GND | Pin 34 | |
| Pi ground | GND | Pin 6 | Tied to power bank ground |

### Power Distribution

The servo and LED strip are driven from an external USB power bank rather than the Pi's own 5 V rail, with grounds tied together so the data lines share a common reference:

- **Power bank (+)** → LED strip red, servo red
- **Power bank (−)** → LED strip white, servo brown, Pi GND (Pin 6)

### Components

| Component | Qty | Notes |
|---|---|---|
| Raspberry Pi Zero 2 WH | 1 | Main controller |
| 7" HDMI touchscreen | 1 | Display and input, 600 × 1024 portrait |
| Micro servo motor | 1 | Drives the dispensing mechanism |
| WS2812B LED strip | 1 | 10 addressable LEDs, 40% brightness |
| Tonal buzzer | 1 | Audio feedback |
| 470 Ω resistor | 1 | LED strip data line |
| USB power bank | 1 | Portable power for servo and LEDs |

---

## Software Architecture

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

## CAD Files

All mechanical design work was done in SolidWorks. Native part and assembly files, along with exported 3D models, live in the project repository under `Solidworks Files and 3d Models/`.

[View the CAD files on GitHub](https://github.com/skyomni/CADodiles-STEM-Game/tree/main/Solidworks%20Files%20and%203d%20Models)

### Assemblies

| File | Purpose |
|---|---|
| `PLAYBOARD ASM.SLDASM` | Play board assembly |
| `spinwheel with servo.SLDASM` | Servo-driven dispensing mechanism |
| `HAMTYSAN 7INCH DISPLAY.SLDASM` | Touchscreen model for fit checking |
| `Raspberry Pi Zero 2 W.SLDASM` | Controller model for internal layout |
| `Assem2.SLDASM`, `Assem5.SLDASM` | Full enclosure assemblies |

### Enclosure Parts

`Bottom.SLDPRT`, `Wall1.SLDPRT`, `wall2.SLDPRT`, `Wall3.SLDPRT`, `Wall4.SLDPRT`, `insert1.SLDPRT`, `Insert2.SLDPRT`, `insert4.SLDPRT`, `lcd bakc coverup.SLDPRT`

### Mechanism Parts

`servo_holder.SLDPRT`, `ramp.SLDPRT`, `dispenser leveling 2.SLDPRT`, `Buzzer_HC-12085.SLDPRT`

### Play Board Iterations

The play board went through eleven modeled revisions — `play1` through `play11` — before the final version (`play board final fian; Part5.SLDPRT`). A 2D drawing is included as `Playboard.dwg`.

### 3D Printed Parts

`L-BLock.stl` and `Squareblock.stl` are the dispensed game pieces, exported print-ready.

<!-- TODO(assets): add CAD renders, technical drawings, and exploded views here once the asset folder is provided -->

---

## License

The project source is released under the MIT License.
