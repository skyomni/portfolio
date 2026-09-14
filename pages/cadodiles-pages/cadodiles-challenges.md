---
layout: default
title: Challenges & Solutions
parent: CADodiles
grand_parent: Projects
nav_order: 6
---

# Challenges & Solutions

## Challenge 1: 180° Servo Could Not Rotate Continuously

**Problem**: The dispensing wheel was designed around the assumption that the servo could rotate continuously to feed game pieces. The MG90S is a standard positional servo limited to a 180° range, so it cannot spin freely. This limitation was not discovered until the mechanism was physically assembled and tested.

**Solution**: Rather than replace the motor late in the build, the control software was rewritten to drive the wheel in a controlled back-and-forth sweep, alternating the servo between two fixed angles. Each sweep releases game pieces reliably without requiring continuous rotation.

---

## Challenge 2: First Dispenser Enclosure Was Too Small

**Problem**: Once the servo, dispensing mechanism, and Raspberry Pi were test-fitted into the first laser-cut box, there was not enough internal volume to mount everything and still leave a clear path for game pieces. The original cut also failed to account for HDMI cable clearance below the LCD, so the display could not sit flush against the front panel.

**Solution**: The enclosure was redesigned taller in SolidWorks and re-cut, with the internal layout reorganized onto separate levels to separate the electronics from the dispensing path and leave room for cable routing behind the display.

---

## Challenge 3: Platform Jack Mechanism Was Unreliable

**Problem**: The original dispensing concept used a platform jack to raise game pieces up and out of the hopper. In testing it could not consistently release a single piece at a time.

**Solution**: The mechanism was redesigned as a 3D-printed waterwheel driven directly by the servo. The change required several sizing iterations before pieces fed through cleanly, but produced far more consistent dispensing.

---

## Challenge 4: Game Pieces Jamming Before the Exit Chute

**Problem**: Even with the waterwheel working, dispensed pieces would wedge against the interior walls instead of reaching the exit chute.

**Solution**: Two slanted ramps were installed inside the enclosure to guide pieces down toward the chute. During the Milestone 6 showcase the mechanism ran without jamming across all observed trials.

---

## Challenge 5: Play Boards Did Not Sit Flush

**Problem**: On the first set of boards, the angled top surface did not meet the frame cleanly, leaving visible gaps at the corners and an uneven playing surface.

**Solution**: All four boards were re-cut and reassembled using clamps to hold the corners square while hot glue and super glue set, producing flush corners and clean surface alignment.

---

## Challenge 6: Game Piece Fit and Winnability

**Problem**: The board and block dimensions did not initially allow the Tetris-style pieces to tile correctly, which meant a player could reach a state where the game could not be completed.

**Solution**: Board and game piece dimensions were revised through multiple CAD passes until the pieces tiled cleanly and every game was winnable.

---

## Challenge 7: Coordinating Parallel Workstreams

**Problem**: CAD design, fabrication, and software development ran in parallel across a five-person team. With limited Makerspace hours, high demand for the laser cutter and 3D printers, and overlapping exam schedules, it was easy for one workstream to block another.

**Solution**: The team rotated the Project Manager role each milestone, maintained a shared design notebook documenting progress and blockers, and scheduled Makerspace sessions in advance rather than on demand.

---

## Known Limitations

Two issues were identified but not fully resolved within the project timeline:

- The 3D-printed waterwheel occasionally worked loose on its servo mount during extended use
- The Raspberry Pi Zero 2 WH's limited processing power produced noticeable application load times

---

## Lessons Learned

Through these challenges, the team improved its:

- Rapid physical prototyping of mechanisms before committing to final materials
- Understanding of servo types and their motion constraints
- CAD precision and tolerance planning for laser-cut assemblies
- Debugging approach for integrated hardware and software systems
- Documentation practices through a shared design notebook
- Planning around shared fabrication resources
