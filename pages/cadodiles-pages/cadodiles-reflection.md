---
layout: default
title: Personal Reflections
parent: CADodiles
grand_parent: Projects
nav_order: 8
---

# Personal Reflections

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
  height: 280px;
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
</style>

<div class="gallery">
  <div class="gallery-item" onclick="openLightbox(event, '{{ site.baseurl }}/assets-github/cadodiles/team-photo.jpg', 'The CADodiles team with the finished dispenser and play boards at the Milestone 6 showcase')">
    <img src="{{ site.baseurl }}/assets-github/cadodiles/team-photo.jpg" alt="The CADodiles team">
    <div class="gallery-caption">The CADodiles Team at the Milestone 6 Showcase</div>
  </div>
</div>

---

## My Contributions

I led all software development for the project. I designed, implemented, and debugged the Kivy-based Python application running on the Raspberry Pi Zero 2 WH, including the splash screen, singleplayer and multiplayer mode selection, chapter selection, question generation, the game loop, answer evaluation, and the real-time feedback system.

I also built the integration between software and hardware, driving the MG90S servo and WS2812B LED strip through the Raspberry Pi's GPIO pins. The key problem I solved there was the servo's 180° range limit: rather than relying on continuous rotation, I rewrote the control code to use a controlled back-and-forth sweep, which let the dispensing mechanism work reliably without replacing the motor.

Beyond the application itself, I configured the Raspberry Pi using Raspberry Pi Imager, installed the required dependencies, and set the system to launch the game automatically on startup so it runs as a standalone device. During Milestone 5 I finalized the user interface, updated the wiring, and secured the internal components inside the enclosure.

I served as **Project Manager during Milestone 4**, coordinating tasks, tracking progress, and keeping the electronics and software work on schedule.

---

## Resources

My out-of-pocket cost was minimal. Most components came through the FYELIC kit and the Makerspace, and the Raspberry Pi Zero 2 WH was carried over from a previous CubeSat research project. The main purchases were the Waveshare 7" touchscreen and the WS2812B LED strip. The project's theoretical cost was about **$119.57**, while actual spend came in well below that at **$86.57** thanks to existing and shared resources.

I contributed roughly **50.5 hours** across all milestones, with the load concentrated in Milestones 2 through 5 during software development, debugging, and system integration.

This taught me something about resource management in engineering: reusing components and shared tools genuinely lowers development cost, but you still have to account for the full theoretical cost when judging whether a design could scale or be commercialized.

---

## What I Learned

The most valuable part of this project was building a complete embedded system where user input, software logic, and physical output were directly connected.

I already had experience with the Raspberry Pi Zero 2 WH from my CubeSat research, so system setup and GPIO control were familiar. That let me focus on what was new to me: integrating a touchscreen display and building a graphical interface in Kivy.

Learning Kivy was the hardest and most rewarding part. I taught myself to design multi-screen interfaces, manage touch input, and build a layout that actually works for younger users — which pushed me past straight programming and into user interface design, where usability mattered more than cleverness.

Debugging and system integration was the other area of real growth. Servo control and startup behaviour both needed iterative testing, and I developed a more structured troubleshooting approach: isolate one variable at a time and test fixes without disturbing the rest of the system.

The skill I am most proud of is being able to design and implement a complete software-driven hardware system end to end.

---

## Working in a Team

Coordinating across CAD design, fabrication, and software was the main challenge, since all three ran in parallel and had to integrate cleanly at the end.

As Project Manager for Milestone 4, I focused on organization and accountability — making sure tasks were clearly assigned and finished on time. My leadership style is coordination-based: I delegate and trust people to own their work, while staying available when they need support.

My biggest contribution to the team was software development and system integration. My prior Raspberry Pi experience meant I could handle system setup quickly and spend my time on the new pieces — the touchscreen and the Kivy interface.

---

## What I Would Do Differently

- **Prototype the dispensing mechanism earlier.** Catching the 180° servo limitation sooner would have saved time and allowed a more refined mechanical design.
- **Push for earlier user testing.** Getting the game in front of students before the final showcase would have let us iterate on real feedback rather than relying on one demonstration.

Overall, this project reinforced how much communication, adaptability, and early testing matter in a team engineering environment.

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
