---
layout: default
title: Development Process
parent: CADodiles
grand_parent: Projects
nav_order: 3
---

# Document Your Process

## Development Timeline

<!-- TODO(report): replace with real milestone dates and what happened at each, matching the ARCADIUM timeline format -->

---

## Software Development

The interface is built in Python with the Kivy framework, chosen for its touchscreen-friendly widget set and its ability to run the same code on a laptop and on the Pi.

### Structure

The application is organized into four modules:

- `main.py` — Kivy app, screen definitions, custom widgets, and the game loop
- `hardware.py` — GPIO control for the LED strip, servo, and buzzer
- `translations.py` — English and Spanish UI strings
- `config.py` — pin assignments, servo angles, color palette, and font sizes

### Building the Interface

Rather than use stock Kivy styling, the UI was written as a set of custom pixel-art widgets — a procedurally drawn background (`PixelBG`), beveled buttons (`PixelButton`), and chapter cards (`ChapterCard`) — so the game reads as an arcade experience to a 5th grader instead of as a quiz app.

Six screens were built and wired through a `ScreenManager`: splash, multiplayer setup, chapter select, trivia, settings, and end/score.

### Developing Without Hardware

A stub mode was built into `hardware.py` early on. Each hardware subsystem initializes inside its own `try`/`except`, and any device that fails to come up is replaced with console output instead of taking down the application. This made it possible to write and test the entire game loop on a laptop and only move to the Pi for hardware integration.

<!-- TODO(assets): add screenshots of the Kivy screens here -->

---

## Hardware Development

The feedback system pairs the Raspberry Pi Zero 2 WH with three output devices:

- **WS2812B LED strip** on GPIO 18 — 10 addressable LEDs, driven through a 470 Ω resistor. Flashes green on a correct answer, red on a wrong one, and runs a rainbow cycle on the end screen.
- **Micro servo** on GPIO 12 — drives the dispensing mechanism, alternating between 0° and 120° to release one game piece per correct answer.
- **Tonal buzzer** on GPIO 13 — plays a rising two-tone start sound, a repeated 800 Hz correct tone, and a descending 300 Hz → 200 Hz wrong tone.

The servo and LED strip draw from an external USB power bank rather than the Pi's 5 V rail, with grounds tied together. Full wiring is documented on the [Project Documentation](./cadodiles-technical.html) page.

All three effects are dispatched on daemon threads so that lighting, sound, and dispensing happen simultaneously without blocking the touchscreen.

<!-- TODO(assets): add build and wiring photos here -->

---

## Enclosure & CAD Design

The mechanical housing was designed in SolidWorks as a set of walls, inserts, and a bottom plate, with separate assemblies for the play board and the servo-driven spin wheel. Models of the Raspberry Pi Zero 2 W and the 7" display were brought into the assembly to check internal clearances before anything was fabricated.

The play board itself was the most heavily iterated component, going through eleven modeled revisions before the final version. The dispensed game pieces — an L-block and a square block — were exported as STLs for 3D printing.

See [Project Documentation](./cadodiles-technical.html) for the full CAD file inventory.

<!-- TODO(assets): add CAD renders or an assembly walkthrough video here -->
