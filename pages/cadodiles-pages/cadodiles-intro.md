---
layout: default
title: Introduction
parent: CADodiles
grand_parent: Projects
nav_order: 1
---

# Introduction

CADodiles is a physical multiplayer STEM trivia game designed for 5th grade classrooms. It pairs a touchscreen quiz interface with a servo-driven dispenser so that answering correctly produces an immediate, tangible reward rather than just a message on a screen.

The project was built by a five-person team for Cornerstone of Engineering II in Spring 2026, and covers the full engineering design cycle — mechanical design in SolidWorks and AutoCAD, laser-cut and 3D-printed fabrication, embedded hardware integration on a Raspberry Pi, and a complete Python application.

## How It Works

1. The student picks singleplayer or multiplayer, then selects a chapter
2. A question is displayed on the 7" touchscreen
3. The student taps an answer
4. The system responds:
   - **Correct** — green LED flash, buzzer tone, and the waterwheel mechanism dispenses physical game pieces
   - **Incorrect** — red LED flash, low buzzer tone, and the correct answer is shown on screen
5. Players place their dispensed pieces on colour-coded play boards, so progress accumulates visibly
6. Play continues until the round ends, then a score screen ranks the players

The angled play boards double as the win condition — the Tetris-style pieces have to tile correctly to fill the board.

## Content Coverage

Chapters map onto the five Common Core Grade 5 mathematics domains, with selected earth science topics consistent with FOSS curriculum guidelines:

| Chapter | Domain | Topics |
|---|---|---|
| 5.OA | Operations & Algebraic Thinking | Expressions, patterns, prime factors |
| 5.NBT | Number & Operations in Base Ten | Place value, decimals, multi-digit operations |
| 5.NF | Number & Operations — Fractions | Add, subtract, multiply & divide fractions |
| 5.MD | Measurement & Data | Conversions, volume & line plots |
| 5.G | Geometry | Coordinate plane & 2D figures |

A mixed "All Chapters" mode draws questions randomly from every domain.

## Key Constraints

- **Hardware** — limited processing power and GPIO availability on the Raspberry Pi Zero 2 WH
- **Component count** — exactly four to five electronic components, each with a clear functional role
- **Safety** — moving servo parts and live electronics fully enclosed for use around children
- **Usability** — navigable by a 5th grader after a brief explanation
- **Time** — full session, including setup, inside a 45–60 minute class period
- **Cost** — buildable from accessible, widely available materials

## Quick Facts

| | |
|---|---|
| **Course** | Cornerstone of Engineering II, Spring 2026 |
| **Team** | Five members |
| **Platform** | Raspberry Pi Zero 2 WH |
| **Display** | Waveshare 7" HDMI touchscreen, 600 × 1024 portrait |
| **Software** | Python 3, Kivy |
| **Feedback Hardware** | MG90S servo, WS2812B ECO LED strip, tonal buzzer |
| **Languages** | English, Spanish |
| **CAD Tools** | SolidWorks, AutoCAD |
| **Build Cost** | $86.57 actual / $119.57 theoretical |
| **Audience** | 5th grade STEM classrooms |

[View the code on GitHub](https://github.com/skyomni/CADodiles-STEM-Game)
