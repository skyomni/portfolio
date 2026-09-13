---
layout: default
title: Final Design Showcase
parent: CADodiles
grand_parent: Projects
nav_order: 7
---

# Final Design Showcase

## Overview

The final CADodiles build combines a custom SolidWorks-designed enclosure, a Raspberry Pi Zero 2 WH running a Kivy trivia application, and a three-channel feedback system into a single classroom-ready device.

<!-- TODO(assets): add final build photos (front, internals, in use) here, using the gallery + lightbox block ARCADIUM uses -->

---

## Project Demo Video

<!-- TODO(assets): add demo video here -->

---

## Feature Recap

- Touchscreen graphical interface built with Kivy
- Singleplayer and up to 4-player multiplayer modes
- Chapter selection across the five Common Core Grade 5 math domains, plus a mixed mode
- 10 questions per game with per-player scoring and a ranked end screen
- Green LED flash, 800 Hz tone, and a dispensed game piece on a correct answer
- Red LED flash and a descending tone on a wrong answer, with the correct answer shown
- Full English / Spanish toggle, switchable mid-game
- Settings screen with brightness control, sound toggle, and a hardware test dispense

---

## How the Final Design Solves the Original Problem

**Engagement**: Physical feedback — light, sound, and a dispensed piece — gives students a tangible payoff that a screen-only quiz app can't

**Independence**: A touchscreen-only interface with large buttons lets students run a full round without adult intervention

**Curriculum Fit**: Chapters map onto the actual Common Core Grade 5 domains rather than generic trivia

**Accessibility**: A live English / Spanish toggle makes the game usable in bilingual classrooms

**Safety**: The servo mechanism and all electronics are enclosed behind walls, inserts, and a display cover

**Maintainability**: Questions and UI strings are separated from game logic, so content can be updated without touching the application

---

## Peer Feedback

<!-- TODO(report): add peer and instructor feedback from the project report -->

---

## Design Specifications

**Materials:**
- 3D printed enclosure parts (walls, inserts, bottom plate, display cover)
- 3D printed game pieces (L-block, square block)

**Components:**
- Raspberry Pi Zero 2 WH
- 7" HDMI touchscreen, 600 × 1024 portrait
- Micro servo motor and servo holder
- WS2812B LED strip (10 LEDs)
- Tonal buzzer
- External USB power bank

[View the code on GitHub](https://github.com/skyomni/CADodiles-STEM-Game)
