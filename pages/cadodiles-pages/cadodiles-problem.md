---
layout: default
title: Problem Definition
parent: CADodiles
grand_parent: Projects
nav_order: 2
---

# Problem Definition

## The Problem

<!--
TODO: Replace with the specific problem statement / design brief from your project report.
Suggested starting point based on the project's purpose:
-->

5th grade classrooms often rely on flashcards or screen-only quiz apps to reinforce STEM concepts, both of which struggle to hold student attention over repeated review sessions. There was a need for a review tool that:

- Gives students an immediate, physical sense of reward for correct answers
- Works reliably in a classroom setting with minimal supervision
- Is durable enough to withstand repeated use by multiple students
- Can be easily updated with new questions as curriculum changes

## Design Constraints

<!-- TODO: Pull the actual constraints from your report (budget, size, timeline, safety requirements, etc.) -->

- **Hardware:** Raspberry Pi Zero 2 WH — limited processing power and GPIO pins compared to larger single-board computers
- **Safety:** Moving servo mechanism and electronics must be safely enclosed for use around children
- **Usability:** Interface needed to be simple enough for 5th graders to navigate independently
- **Budget/Timeline:** *(add your specific constraints here)*

## Target Users

- Primary: 5th grade students in a classroom setting
- Secondary: Teachers who need an easy way to run review sessions

## Success Criteria

<!-- TODO: List the criteria you defined for a successful design, e.g. -->

- Students can complete a full trivia round without adult intervention
- Correct answers reliably trigger the servo/LED feedback within a short delay
- The enclosure withstands normal classroom handling
- The system supports both individual and group (multiplayer) play
