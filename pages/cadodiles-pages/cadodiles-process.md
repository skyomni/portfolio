---
layout: default
title: Development Process
parent: CADodiles
grand_parent: Projects
nav_order: 3
---

# Document Your Process

## Major Milestones

### Milestone 1 — Problem Framing

The team formed, established shared values of respect, transparency, and reliability, and co-authored the problem statement after researching the gap in classroom STEM games.

### Milestone 2 — Concept Generation & Selection

Each member developed game concepts, which were then evaluated against a KTDA chart alongside market research on existing STEM games. The trivia-plus-dispenser concept was selected.

### Milestone 3 — 50% Prototype

Work split into three parallel tracks: CAD (dispenser and game board modeling in SolidWorks and AutoCAD), electronics (wiring diagrams), and software (the first Kivy build). The first dispenser box and game boards were laser cut and assembled.

### Milestone 4 — Assembly & Integration

The first dispenser proved too small once components were test-fitted, so it was rebuilt taller. Internal ramps were installed to guide game pieces to the exit chute, cable management was worked out, and the electronics were integrated with the software.

### Milestone 5 — Final Build & Finish

All four game boards were rebuilt with clamped assembly for flush corners. The user interface was finalized, wiring updated, and internal components secured. The team spent three painting sessions on the Super Mario themed exterior.

### Milestone 6 — Showcase & Testing

The completed system was demonstrated and tested with six groups of 5th grade students. Results are documented on the [Final Design Showcase](./cadodiles-final.html) page.

Final report submitted April 2026.

---

## Software Development

The interface is built in Python with the Kivy framework, chosen for its touchscreen-friendly widget set and because the same code runs on both a laptop and the Pi.

### Structure

- `main.py` — Kivy app, screen definitions, custom widgets, and the game loop
- `hardware.py` — GPIO control for the LED strip, servo, and buzzer
- `translations.py` — English and Spanish UI strings
- `config.py` — pin assignments, servo angles, color palette, and font sizes

### Building the Interface

Screen layouts were prototyped in the Kivy UI Designer before being implemented in Python. Rather than use stock Kivy styling, the UI was written as a set of custom pixel-art widgets — a procedurally drawn background, beveled buttons, and chapter cards — so the game reads as an arcade experience to a 5th grader instead of as a quiz app.

Six screens were built and wired through a `ScreenManager`: splash, multiplayer setup, chapter select, trivia, settings, and end/score.

### System Setup

The Raspberry Pi Zero 2 WH was configured with Raspberry Pi Imager, flashing Raspberry Pi OS with SSH and Wi-Fi enabled for easier file transfer. Kivy and the GPIO libraries were installed after first boot, and the system was configured to launch the game automatically on startup so the device runs standalone with no command-line interaction.

### Developing Without Hardware

A stub mode was built into `hardware.py` early on. Each hardware subsystem initializes inside its own `try`/`except`, and any device that fails to come up is replaced with console output instead of taking down the application. This made it possible to write and test the entire game loop on a laptop and move to the Pi only for hardware integration.

---

## Hardware Development

The feedback system pairs the Raspberry Pi Zero 2 WH with three output devices:

- **WS2812B ECO LED strip** on GPIO 18 — driven through a 470 Ω resistor. Flashes green on a correct answer and red on a wrong one.
- **MG90S micro servo** on GPIO 12 — drives the waterwheel dispensing mechanism. Because the MG90S is limited to 180° and cannot rotate continuously, the control code sweeps it back and forth between two fixed angles to release pieces.
- **Tonal buzzer** on GPIO 13 — plays distinct tones for game start, correct, and incorrect answers.

The servo and LED strip draw from an external USB power bank rather than the Pi's 5 V rail, with grounds tied together. Full wiring is documented on the [Project Documentation](./cadodiles-technical.html) page.

All three effects are dispatched on daemon threads so lighting, sound, and dispensing happen simultaneously without blocking the touchscreen.

---

## Enclosure & CAD Design

The dispenser was modeled in SolidWorks and AutoCAD as a set of walls, inserts, and a bottom plate, with separate assemblies for the play board and the servo-driven waterwheel. Reference models of the Raspberry Pi Zero 2 W and the 7" display were brought into the assembly to check internal clearances before anything was cut.

Panels were laser cut from plywood with finger joints and assembled with cyanoacrylate adhesive and hot glue. A sliding top panel lets game pieces be reloaded without opening the enclosure.

The play board was the most heavily iterated component, going through eleven modeled revisions before the final version. The game pieces — Tetris-style blocks inspired by games like Tetris and Block Blast — were 3D printed in PLA, and their dimensions were revised alongside the boards so the pieces would tile correctly and every game would be winnable.

See [Design Iterations](./cadodiles-iterations.html) for the full before-and-after history, and [Project Documentation](./cadodiles-technical.html) for the drawings.
