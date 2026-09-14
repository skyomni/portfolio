---
layout: default
title: Project Narrative
parent: CADodiles
grand_parent: Projects
nav_order: 9
---

# Narrative: Telling the Story

## The Journey

The project began with a question about a specific classroom:

> How do you make 5th grade STEM review engaging without falling back on reading-heavy worksheets or reward mechanics that punish the students already struggling?

### Phase 1: Framing the Problem

The team started with the gap itself rather than with a product idea. Fifth grade classrooms at Melrose Leadership Academy needed something standards-aligned, quick to set up, and inclusive of a wide range of readers. That framing set the constraints that everything else answered to.

### Phase 2: Concept Generation

Each member brought game concepts to the table, which were scored against a KTDA chart alongside research into existing STEM games. The winning idea combined a digital trivia interface with a physical reward — an arcade-style payoff for getting an answer right.

### Phase 3: Parallel Development

Three workstreams ran at once: CAD modeling of the dispenser and boards, wiring and electronics, and the Kivy application. Each constrained the others. The servo mechanism dictated the enclosure's internal layout; the enclosure dictated how the touchscreen and cabling were routed; the Pi's GPIO map dictated what the software could drive.

### Phase 4: Discovering What Didn't Work

This was the phase that shaped the final product. The first dispenser was too small once components were test-fitted. The play boards didn't sit flush. And most significantly, the MG90S servo turned out to be limited to 180° of travel — it could not rotate continuously, which the original platform jack mechanism had assumed.

Rather than wait on a new motor, the mechanism was redesigned as a waterwheel and the control code rewritten to sweep the servo back and forth between two fixed angles. The enclosure was rebuilt taller, internal ramps were added to stop pieces jamming, and the boards were re-cut and clamped square.

### Phase 5: Finishing

The final milestone was as much about craft as engineering: rebuilding all four boards to flush tolerances, finalizing the interface, securing the internals, and painting the Super Mario themed exterior across three sessions.

### Phase 6: Putting It in Front of Students

The system was tested with six groups of 5th graders. It set up in 2–3 minutes, ran without jamming, and — more importantly — students collaborated on hard questions, attempted problems that weren't their turn, and described the game as fun.

---

## The Design Process

**Problem framing** → **Concept selection** → **Parallel prototyping** → **Failure and redesign** → **Final build** → **User testing**

The most instructive part was Phase 4. Almost every defining feature of the finished product — the waterwheel, the sweep-based servo control, the taller enclosure, the internal ramps — exists because something in the first build didn't work.

---

## Key Takeaways

This project demonstrated that successful engineering is not about getting it right the first time:

- Prototype mechanisms physically and early — CAD will not reveal a motor's motion limits
- Software can rescue a mechanical constraint, but only if you find the constraint in time
- Design for the actual user; what reads as intuitive to an engineering student is not automatically intuitive to a ten-year-old
- Document as you go, so a five-person team working in parallel stays coherent
- Test with real users before the final demonstration, not at it

The finished product is a working classroom tool. The more durable outcome is a clear picture of how software, electronics, and mechanical design constrain each other in a single system.
