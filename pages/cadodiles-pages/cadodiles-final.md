---
layout: default
title: Final Design Showcase
parent: CADodiles
grand_parent: Projects
nav_order: 7
---

# Final Design Showcase

The final CADodiles build combines a laser-cut plywood dispenser, a Raspberry Pi Zero 2 WH running a Kivy trivia application, a servo-driven waterwheel mechanism, and four colour-coded play boards into a single classroom-ready system. Click any image to enlarge it.

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

.video-section {
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.video-section h3 {
  margin-top: 0;
}

.video-section video {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

---

## Project Demo Video

<div class="video-section">
  <h3>CADodiles in Action</h3>
  <p>Full demonstration of the CADodiles system, including the touchscreen interface, the servo-driven waterwheel dispenser, and LED feedback.</p>
  <video autoplay muted loop playsinline controls preload="metadata" poster="{{ site.baseurl }}/assets-github/cadodiles/final-dispenser.jpg">
    <source src="{{ site.baseurl }}/assets-github/cadodiles/cadodiles-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p><em>The video starts muted so it can play automatically &mdash; use the controls to turn sound on.</em></p>
</div>

---

## Testing with Students

CADodiles was demonstrated and tested with six groups of 5th grade students during the Milestone 6 showcase.

<div class="gallery">
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/showcase-kids-playing.jpg', 'A student arranging dispensed game pieces on a play board while working through a fractions problem on scratch paper')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/showcase-kids-playing.jpg" alt="Student playing CADodiles">
    <div class="gallery-caption">Filling a Play Board During a Round</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/showcase-kids-team.jpg', 'Team members running a multiplayer session with a group of 5th grade students at the showcase')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/showcase-kids-team.jpg" alt="Team running a session with students">
    <div class="gallery-caption">Multiplayer Session at the Showcase</div>
  </div>
</div>

---

## Final Build

<div class="gallery">
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-dispenser.jpg', 'Completed dispenser with Super Mario themed acrylic paint finish, 7 inch touchscreen, and exit chute')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-dispenser.jpg" alt="Completed dispenser">
    <div class="gallery-caption">Completed Dispenser</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-side.jpg', 'Painted side panel showing question blocks, clouds, and the layered ground detail')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-side.jpg" alt="Dispenser side panel">
    <div class="gallery-caption">Painted Side Panel</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-labeled.jpg', 'Labeled internal view identifying the slanted levels, Raspberry Pi, servo, and LCD')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-dispenser-labeled.jpg" alt="Labeled internal view">
    <div class="gallery-caption">Internal Layout</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-playboards.jpg', 'Two finished play boards showing the angled surface that lets game pieces accumulate visibly')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-playboards.jpg" alt="Finished play boards">
    <div class="gallery-caption">Finished Play Boards</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-blocks.jpg', 'The five 3D-printed game piece shapes dispensed as rewards for correct answers')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-blocks.jpg" alt="3D printed game pieces">
    <div class="gallery-caption">3D-Printed Game Pieces</div>
  </div>
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/final-logo.jpg', 'Hand-painted CADodiles logo on the sliding top panel of the dispenser')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/final-logo.jpg" alt="Hand-painted CADodiles logo">
    <div class="gallery-caption">Hand-Painted CADodiles Logo</div>
  </div>
</div>

---

## Results and Feedback

### Prototype Functionality

The prototype was demonstrated during the Milestone 6 showcase and performed all of its core functions. The Kivy application launched correctly and multiplayer gameplay ran with multiple participants. The servo dispensing mechanism operated consistently across observed trials, releasing game pieces in response to correct answers without jamming, and the LED strip provided visual feedback as intended. Setup time from power-on to gameplay was approximately **2–3 minutes** and required only a brief initial explanation. The system remained stable throughout the session.

### Safety Inspection

A pre-deployment safety inspection was carried out by two team members before any student use. All exterior edges of the dispenser and game boards were confirmed smooth with no sharp surfaces. Electrical components and wiring were fully enclosed with no exposed connections accessible during normal use, all internal components were secured against movement, and no small detachable parts posed a choking hazard. No safety concerns were observed during testing.

### Observations Across Six Student Groups

- **Engagement increased over time.** Most groups became more interactive as gameplay progressed, and students stayed on-task throughout.
- **Students collaborated on harder questions.** Groups discussed answers and helped one another, and some formed informal teams, which raised both communication and friendly competition.
- **Students worked beyond their own turns.** Several attempted problems assigned to other players, indicating engagement beyond what the game required.
- **Varied problem-solving strategies appeared.** Mental math, scratch paper, and guessing were all observed; groups using scratch paper showed more structured approaches.
- **Response to the interface was positive.** Students frequently described the game as "cool" and reported that it helped them learn and made math more engaging.
- **All groups were able to participate.** No students were excluded from interaction, across a range of skill levels and learning styles.

One limitation the team noted: some students focused more on collecting the physical rewards than on the problem-solving itself, which highlights the need to balance game incentives against educational objectives in future versions.

---

## How the Final Design Meets the Original Goals

**Curriculum alignment**: Questions target 5th grade math — fractions, decimals, graphing, and measurement — plus selected earth science topics consistent with FOSS guidelines, with chapter select so instructors can target specific content

**Engagement**: Touchscreen interaction combined with physical dispensing sustained attention across all six groups

**Collaboration**: The multiplayer structure prompted cooperative behaviour, particularly on harder questions

**Safety**: Fully enclosed electronics, smooth edges, and no choking hazards, verified by a two-person inspection

**Low cost**: $86.57 actual build cost against a $119.57 theoretical total

**Classroom fit**: 2–3 minute setup, comfortably inside a 45–60 minute class period

**Fair rewards**: A deterministic reward system with no random or probability-based mechanics, so outcomes tie directly to performance

---

## Design Specifications

**Materials:**
- Laser-cut plywood (dispenser enclosure and four game boards)
- Acrylic paint (Super Mario themed exterior)
- 3D-printed PLA (waterwheel mechanism and game pieces)

**Components:**
- Raspberry Pi Zero 2 WH
- Waveshare 7" HDMI touchscreen, 600 × 1024 portrait
- MG90S micro servo motor (180°)
- WS2812B ECO LED strip
- Tonal buzzer
- External USB power bank

[View the code on GitHub](https://github.com/skyomni/CADodiles-STEM-Game)

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
