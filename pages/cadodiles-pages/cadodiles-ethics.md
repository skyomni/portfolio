---
layout: default
title: Ethical Considerations
parent: CADodiles
grand_parent: Projects
nav_order: 10
---

# Ethical Considerations: Technology & Society

## Values Guiding This Project

**Safety**: The product is used by ten-year-olds, so enclosing moving parts and live electronics was a design requirement rather than a finishing step

**Fairness**: A deterministic reward system, chosen specifically to avoid mechanics that disadvantage students who are already struggling

**Inclusivity**: A bilingual interface and low reading load, so language and reading fluency are not barriers to participating

**Openness**: Source code, CAD files, and print-ready STLs are published under the MIT License so the design can be rebuilt or modified

---

## Designing for Children

Safety was treated as a hard pass/fail criterion, verified before any student was allowed to use the system. A pre-deployment inspection was carried out by two team members and signed off against an internal checklist:

- **Edges** — all exterior surfaces of the dispenser and the four game boards examined and confirmed smooth, with no sharp edges
- **Electrical** — all wiring and components fully enclosed, with no exposed connections reachable during normal use
- **Mechanical** — all internal components secured against movement during operation
- **Choking hazards** — no small detachable parts accessible; game pieces sized well above choking-hazard dimensions

No safety concerns or hazards were observed during testing with six student groups. The prototype met the internal safety criteria and was judged safe for supervised classroom use.

A full commercial release would require formal testing against **ASTM F963** toy safety standards, which was outside the scope of a course prototype.

---

## Fair Reward Design

The most deliberate ethical choice in the project was the reward structure. Many game-based learning tools borrow mechanics from gacha and loot-box systems — random rewards, variable payout rates — which are effective at driving engagement precisely because they are habit-forming, and which tend to punish students who answer incorrectly more often.

CADodiles uses a deterministic system instead: every correct answer dispenses game pieces, every time. There are no random rewards and no probability-based mechanics, so outcomes tie directly to performance. No negative behavioural effects related to the reward structure were observed during testing.

The honest counterpoint, recorded in our own results: some students focused more on collecting pieces than on the problem-solving itself. A physical reward is still an extrinsic motivator, and balancing that against the learning objective is unfinished work rather than a solved problem.

---

## Inclusivity & Accessibility

**Reading load**: One of the original complaints about existing classroom STEM games was that they were too reading-heavy. Questions were kept short and visual where possible so reading fluency is not a prerequisite for participating in a math activity.

**Language**: The full interface — every menu, chapter title, prompt, and result string — is translated into Spanish, and the toggle works live during play rather than only at startup.

**Multimodal feedback**: Correct and incorrect answers are signalled several ways at once — LED colour, buzzer tone, on-screen message, and the physical dispensing action — so the game does not depend on any single sense.

**Collaborative play**: Multiplayer mode supports up to four players taking turns. In testing, students discussed answers and helped one another, particularly on harder questions.

**Observed outcome**: Across all six groups, students used a range of strategies — mental math, scratch paper, peer discussion — and no student was excluded from interaction.

---

## Educational Integrity

The question bank was designed to align with actual 5th grade math topics — fractions, decimals, graphing, and measurement — plus selected earth science topics consistent with FOSS curriculum guidelines. Chapter select lets an instructor target a specific content area rather than running generic trivia.

A limitation worth stating plainly: no formal pre- and post-assessment data was collected. The evidence that the system supports learning is behavioural observation, not measured learning gain. Validating that claim would require a structured classroom pilot.

---

## Life-Cycle Analysis

### Production Impact

- The play board went through eleven modeled revisions, and the dispenser was physically rebuilt after the first box proved too small — each iteration consumed plywood, filament, and laser cutter time
- Laser cutting and 3D printing both draw significant energy per part, and produce offcuts and support waste

### Supply Chain Considerations

- The Raspberry Pi, touchscreen, servo, and LED strip depend on global electronics supply chains and on silicon and rare-earth extraction
- PLA filament and acrylic paint carry their own upstream footprints

### End-of-Life Considerations

- Electronics must be routed to e-waste recycling rather than general disposal
- Mixed construction — painted plywood, PLA, and electronics — complicates recycling and would need separating by hand
- Building the enclosure from discrete laser-cut panels rather than one moulded shell means components can be removed and reused

---

## Broader Impact Questions

**Who Benefits?**
- 5th grade students, including Spanish-speaking students and those still building reading fluency
- Teachers who need a low-supervision, standards-aligned review activity
- Other makers, since the CAD and source are openly licensed

**Who Bears the Cost?**
- Communities affected by electronics and rare-earth mining
- Workers across the electronics supply chain
- The environment, through plastic production and e-waste

**Future Considerations:**
- Can the reward be made reusable rather than consumable?
- Could the enclosure be fabricated from recycled or bio-based material?
- How do you keep a physical reward motivating without letting it displace the learning it was meant to support?
