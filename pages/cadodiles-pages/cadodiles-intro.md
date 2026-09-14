---
layout: default
title: Introduction
parent: CADodiles
grand_parent: Projects
nav_order: 1
---

# Introduction

CADodiles is an interactive math trivia game designed for 5th grade classrooms. It pairs a touchscreen quiz interface with physical, hardware-driven feedback so that answering correctly produces an immediate, tangible reward rather than just a message on a screen.

## Project Purpose

The purpose of this project was to carry a single product through the complete engineering design cycle — mechanical design in SolidWorks, embedded hardware integration on a Raspberry Pi, and a full application in Python — and to end up with something durable enough to actually hand to a classroom of ten-year-olds.

## How It Works

1. The student picks singleplayer or multiplayer, then selects a chapter
2. A question is displayed on the touchscreen
3. The student taps an answer
4. The system responds:
   - **Correct** — green LED flash, rising buzzer tone, and the servo dispenses a game piece
   - **Incorrect** — red LED flash, low buzzer tone, and the correct answer is shown on screen
5. Play continues for 10 questions, then a score screen ranks the players

## Content Coverage

Chapters map directly onto the five Common Core Grade 5 mathematics domains:

| Chapter | Domain | Topics |
|---|---|---|
| 5.OA | Operations & Algebraic Thinking | Expressions, patterns, prime factors |
| 5.NBT | Number & Operations in Base Ten | Place value, decimals, multi-digit operations |
| 5.NF | Number & Operations — Fractions | Add, subtract, multiply & divide fractions |
| 5.MD | Measurement & Data | Conversions, volume & line plots |
| 5.G | Geometry | Coordinate plane & 2D figures |

A mixed "All Chapters" mode draws questions randomly from every domain.

## Key Constraints

- Limited processing power and GPIO availability on the Raspberry Pi Zero 2 WH
- Moving servo parts and live electronics had to be fully enclosed for use around children
- The interface had to be navigable by a 5th grader without adult help
- The enclosure had to survive repeated classroom handling

## Quick Facts

| | |
|---|---|
| **Platform** | Raspberry Pi Zero 2 WH |
| **Display** | 7" HDMI touchscreen, 600 × 1024 portrait |
| **Software** | Python 3, Kivy |
| **Feedback Hardware** | Servo dispenser, WS2812B LED strip, tonal buzzer |
| **Languages** | English, Spanish |
| **CAD Tool** | SolidWorks |
| **Audience** | 5th grade math classrooms |

[View the code on GitHub](https://github.com/skyomni/CADodiles-STEM-Game)
