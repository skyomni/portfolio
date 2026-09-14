---
layout: default
title: Design Iterations
parent: CADodiles
grand_parent: Projects
nav_order: 5
---

# Explore Iterations

The project evolved significantly through multiple iterations, each improving on the one before. Click any image to enlarge it.

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.gallery-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.gallery-item.drawing img {
  object-fit: contain;
  background: #ffffff;
  padding: 0.5rem;
}

.gallery-caption {
  padding: 1rem;
  background: #f9fafb;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

.lightbox.active {
  display: flex;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: bold;
}

.lightbox-close:hover {
  color: #ccc;
}

.lightbox-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-align: center;
  max-width: 80%;
}
</style>

---

## Iteration 1 — Initial Concept

The first build was a bare laser-cut plywood dispenser and a matching set of play boards, cut directly from the first round of CAD drawings.

<div class="gallery">
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/iteration1-sketches.jpg', 'Initial concept sketches: front and side views of the game board, dispenser elevation, and the first LCD question layout')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/iteration1-sketches.jpg" alt="Initial concept sketches">
    <div class="gallery-caption">Initial Concept Sketches</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/iteration1-dispenser-box.jpg', 'First laser-cut plywood dispenser box - too small to house the servo and dispensing mechanism')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/iteration1-dispenser-box.jpg" alt="First dispenser box prototype">
    <div class="gallery-caption">First Dispenser Box &mdash; Too Small</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/iteration1-playboard.jpg', 'First play board prototype - the angled top surface did not sit flush with the frame')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/iteration1-playboard.jpg" alt="First play board prototype">
    <div class="gallery-caption">First Play Board &mdash; Not Flush</div>
  </div>
</div>

**What didn't work:**

- **The dispenser box was too small.** Once the servo, the dispensing mechanism, and the Raspberry Pi were test-fitted, there was not enough internal volume to mount them and still leave a clear path for game pieces. The original cut also failed to account for HDMI cable clearance below the LCD, so the display could not sit flush against the front panel.
- **The play board surfaces were not flush.** The angled top did not meet the frame cleanly, leaving visible gaps along the corners and an uneven playing surface.
- **Game piece fit was wrong.** Board dimensions had to be revised several times so the Tetris-style blocks would tile correctly and the game would actually be winnable.

The dispenser was rebuilt taller, and the play boards were re-cut and reassembled with clamps to hold the corners square while the glue set.

---

## Iteration 2 — Refined Mechanism

The most significant change was to the dispensing mechanism itself.

<div class="gallery">
  <div class="gallery-item drawing" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/iteration2-waterwheel-cad.png', 'CAD model of the waterwheel dispensing mechanism mounted inside the enclosure, replacing the original platform jack concept')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/iteration2-waterwheel-cad.png" alt="Waterwheel mechanism CAD model">
    <div class="gallery-caption">Waterwheel Mechanism &mdash; CAD Model</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/iteration2-internals-wip.jpg', 'Internal layout during assembly, with the Raspberry Pi, wiring, and ramp temporarily held in place with painters tape')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/iteration2-internals-wip.jpg" alt="Internal assembly in progress">
    <div class="gallery-caption">Internal Assembly in Progress</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/iteration2-internals.jpg', 'Finished internal layout showing the slanted ramps that guide game pieces down to the exit chute')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/iteration2-internals.jpg" alt="Finished internal layout">
    <div class="gallery-caption">Finished Internal Layout</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-labeled.jpg', 'Labeled internal view identifying the slanted levels, Raspberry Pi, servo, and LCD')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-labeled.jpg" alt="Labeled internal view">
    <div class="gallery-caption">Labeled Internal View</div>
  </div>
</div>

**What changed:**

- **Platform jack → waterwheel.** The original concept used a platform jack that would raise game pieces up and out of the hopper. It was replaced with a 3D-printed waterwheel driven directly by the servo, which rotates in a controlled back-and-forth sweep to release pieces. The new mechanism needed several sizing passes before pieces fed through cleanly.
- **Internal ramps added.** Two slanted ramps were installed to guide dispensed pieces toward the exit chute so they could not wedge against the enclosure walls.
- **Internal layout reorganized.** The Raspberry Pi, wiring, and power bank were relocated onto separate levels to keep cabling clear of the dispensing path.

---

## Iteration 3 — Final Enclosure

The final build closed out the mechanical work and added the exterior finish.

<div class="gallery">
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-wooden-prototype.jpg', 'Rebuilt taller dispenser with the 7 inch touchscreen mounted flush and game pieces visible in the exit chute')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-wooden-prototype.jpg" alt="Rebuilt dispenser with display fitted">
    <div class="gallery-caption">Rebuilt Dispenser &mdash; Display Fitted</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-dispenser.jpg', 'Completed dispenser with the Super Mario themed acrylic paint finish')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-dispenser.jpg" alt="Completed painted dispenser">
    <div class="gallery-caption">Completed Dispenser</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-side.jpg', 'Side panel of the finished dispenser showing the painted question blocks and clouds')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-side.jpg" alt="Finished dispenser side panel">
    <div class="gallery-caption">Finished Side Panel</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-playboards.jpg', 'Rebuilt play boards with flush corners and clean surface alignment, colour-coded per player')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-playboards.jpg" alt="Rebuilt play boards">
    <div class="gallery-caption">Rebuilt Play Boards</div>
  </div>
</div>

**What worked:**

- **Taller enclosure** gave the servo, waterwheel, and ramps enough room to operate without jamming
- **Clamped reassembly** of the play boards produced flush corners and an even playing surface
- **Colour coding** across four boards made it obvious which board belonged to which player
- **Sliding top panel** allowed pieces to be reloaded without opening the enclosure
- **Laser cutting** gave repeatable, precise finger joints across all rebuilds

---

## Design Change Summary

| Iteration | Change | Reason |
|---|---|---|
| 1 → 2 | Rebuilt the dispenser taller | Original box could not fit the servo, mechanism, and HDMI cable clearance |
| 1 → 2 | Platform jack → 3D-printed waterwheel | Jack concept could not reliably release a single piece |
| 1 → 2 | Added two internal guide ramps | Pieces were wedging before reaching the exit chute |
| 1 → 2 | Re-cut play boards with clamped assembly | Original surfaces were not flush and corners had gaps |
| 2 → 3 | Resized play board and game pieces | Blocks had to tile correctly for the game to be winnable |
| 2 → 3 | Super Mario acrylic paint finish | Visual appeal for a 5th grade audience |

<!-- Lightbox -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
  <img id="lightbox-img" class="lightbox-content" src="" alt="">
  <div id="lightbox-caption" class="lightbox-caption"></div>
</div>
<script>
function openLightbox(e, imgSrc, caption) {
  e.stopPropagation();
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
</script>
