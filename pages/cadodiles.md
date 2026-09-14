---
layout: default
title: CADodiles
parent: Projects
nav_order: 2
has_children: true
---

# CADodiles: A Multiplayer STEM Trivia & Dispenser Game

A physical multiplayer STEM trivia game for 5th grade classrooms, built on a Raspberry Pi Zero 2 WH with a touchscreen interface and a servo-driven reward dispenser.

---

## Project Overview

CADodiles was designed and built for Cornerstone of Engineering II (Spring 2026) as a five-person team project. Fifth grade classrooms at Melrose Leadership Academy lacked inclusive, standards-aligned STEM games that fit inside a single class period — existing options were often too reading-heavy, not interactive enough, or misaligned with Common Core, EUREKA, and FOSS curriculum standards.

Our answer was a laser-cut plywood dispenser housing a Raspberry Pi Zero 2 WH, a 7" touchscreen, a servo-driven waterwheel mechanism, and an LED feedback strip, paired with four colour-coded play boards. Students answer math and science questions on the touchscreen; each correct answer dispenses a physical game piece they place on their board.

### Project Members
- Jingwen Huang
- Shelley Namkoong
- Skyler Wang
- Eileen Zheng
- Ojiro Moy

### My Role

I led all software development — the Kivy application, game logic, and GPIO hardware integration — and served as Project Manager during Milestone 4. See [Personal Reflections](./cadodiles-pages/cadodiles-reflection.html) for details.

### Key Features
- Touchscreen interface built with Python and Kivy
- Singleplayer and up to 4-player multiplayer modes
- Chapter selection across the five Common Core Grade 5 math domains
- Servo-driven waterwheel dispenser that releases a physical game piece per correct answer
- LED strip and buzzer feedback for correct and incorrect answers
- Full English / Spanish bilingual interface
- Four colour-coded laser-cut play boards for tracking player progress

### Development Timeline
- **Milestone 1** — Problem framing, research, and team formation
- **Milestone 2** — Concept generation and KTDA design selection
- **Milestone 3** — 50% prototype: initial CAD, wiring diagrams, and first software build
- **Milestone 4** — Dispenser assembly, electronics integration, and enclosure rebuild
- **Milestone 5** — Final UI, play board rebuild, painting, and system integration
- **Milestone 6** — Showcase and testing with six groups of 5th grade students

Final report submitted April 2026.

### Results at a Glance
- Setup from power-on to gameplay: **2–3 minutes**
- Tested with **six groups** of 5th grade students
- Actual build cost: **$86.57** (theoretical total $119.57)
- Dispensing mechanism ran without jamming across all observed trials

---

## Navigation

Explore the project documentation using the sidebar to learn about:
- Problem definition and constraints
- Design process and iterations
- Technical artifacts and CAD drawings
- Challenges and solutions
- Final design showcase
- Ethical considerations

---

[View the code on GitHub](https://github.com/skyomni/CADodiles-STEM-Game)
