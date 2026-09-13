---
layout: default
title: Ethical Considerations
parent: CADodiles
grand_parent: Projects
nav_order: 10
---

# Ethical Considerations: Technology & Society

## Values Guiding This Project

**Safety**: The product is intended for ten-year-olds, so enclosing moving parts and live electronics was a design requirement rather than a finishing step

**Inclusivity**: A bilingual interface so that language is not a barrier to participating in math review

**Education**: Content aligned to the actual Grade 5 curriculum rather than generic trivia

**Openness**: Source code, CAD files, and print-ready STLs are published under the MIT License so the design can be rebuilt or modified

---

## Designing for Children

Because CADodiles is meant for use by 5th grade students, safety and accessibility were treated as first-order design requirements:

- The servo mechanism and all electronics sit behind modeled walls, inserts, and a display back cover, so there are no exposed pinch points or live contacts
- The interface is touchscreen-only with large, high-contrast buttons, so students can use it without adult supervision
- Feedback is designed to be immediate and unambiguous — colour, sound, and a physical piece all fire together, which helps students who miss any one channel

<!-- TODO(report): add any safety testing actually performed (edge finishing, cord management, small-parts/choking assessment) -->

---

## Inclusivity & Accessibility

**Language**: The full interface — every menu, chapter title, prompt, and result string — is translated into Spanish, and the toggle works live during play rather than only at startup. In a classroom where some students are more comfortable in Spanish, this means they are reviewing math rather than translating a UI.

**Multimodal feedback**: Correct and incorrect answers are signalled three ways at once — LED colour, buzzer tone, and dispensing action — so the game does not depend on any single sense.

**Collaborative play**: Multiplayer mode supports up to four players taking turns, which supports group learning rather than only individual competition.

**Adjustability**: The settings screen exposes UI brightness and a sound toggle, so the device can be adapted to a noisy classroom or a student sensitive to sound.

---

## Educational Integrity

Chapters map directly onto the five Common Core Grade 5 mathematics domains — Operations & Algebraic Thinking, Number & Operations in Base Ten, Fractions, Measurement & Data, and Geometry — so the game reinforces what students are actually being taught rather than functioning as unrelated entertainment.

A tension worth naming: the dispensing mechanism is an extrinsic reward, and rewarding correct answers with a physical object risks shifting a student's motivation from understanding the material to collecting pieces. The design tries to keep the reward proportionate — one small piece per correct answer, with the correct answer always shown after a wrong one so that a miss is still a learning moment rather than only a loss.

---

## Life-Cycle Analysis

### Production Impact

- The play board alone went through eleven modeled revisions; each physical test print consumed filament and machine time
- 3D printing the enclosure produces support waste and draws significant energy per part

### Supply Chain Considerations

- The Raspberry Pi, touchscreen, servo, and LED strip all depend on global electronics supply chains and on silicon and rare-earth extraction
- PLA and similar print filaments are plastics with their own upstream footprint

### End-of-Life Considerations

- Electronics must be routed to e-waste recycling rather than general disposal
- The mixed construction — printed plastic housing plus electronics — complicates recycling and would need to be separated by hand
- Designing the enclosure as discrete walls and inserts rather than a single printed shell means components can be removed and reused

---

## Broader Impact Questions

**Who Benefits?**
- 5th grade students, including Spanish-speaking students who are often served last by classroom software
- Teachers who need a low-supervision review activity
- Other makers, since the CAD and source are openly licensed

**Who Bears the Cost?**
- Communities affected by electronics and rare-earth mining
- Workers across the electronics supply chain
- The environment, through plastic production and e-waste

**Future Considerations:**
- Could the reward mechanism be redesigned to be reusable rather than consumable?
- Could the enclosure be fabricated from recycled or bio-based material?
- How many more languages would it take before the interface is genuinely inclusive?
