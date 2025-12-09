---
layout: default
title: Technical Artifacts
parent: 🎮 ARCADIUM
nav_order: 4
---

# Technical Artifacts

This section contains the technical documentation and design files for the ARCADIUM project.

## Documentation Categories

### Sketches & Flowcharts
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

/* Lightbox styles */
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
}
</style>
<div class="gallery">
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/52bea842-69e4-4a28-8aa8-eec527b7ced5', 'Flowchart For Flappy Bird Game')">
    <img src="https://github.com/user-attachments/assets/52bea842-69e4-4a28-8aa8-eec527b7ced5" alt="Flowchart For Flappy Bird Game">
    <div class="gallery-caption">Flowchart For Flappy Bird Game</div>
  </div>
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/a6c9b39d-2b24-4ee8-bc0a-692f27cf4157', 'Pseudocode for Flappy Bird Game')">
    <img src="https://github.com/user-attachments/assets/a6c9b39d-2b24-4ee8-bc0a-692f27cf4157" alt="Pseudocode for Flappy Bird Game">
    <div class="gallery-caption">Pseudocode for Flappy Bird Game</div>
  </div>
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/9484a2c7-22b4-437f-aee9-acfbd91021fd', 'CAD Sketch of Enclosure of Flappy Bird Game')">
    <img src="https://github.com/user-attachments/assets/9484a2c7-22b4-437f-aee9-acfbd91021fd" alt="CAD Sketch of Enclosure of Flappy Bird Game">
    <div class="gallery-caption">CAD Sketch of Enclosure of Flappy Bird Game</div>
  </div>
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/d578bc83-3dab-44de-9b35-af8383d7ca0f', 'Light game (made by: Dabian Taborda Restrepo)')">
    <img src="https://github.com/user-attachments/assets/d578bc83-3dab-44de-9b35-af8383d7ca0f" alt="Light game">
    <div class="gallery-caption">Light game (made by: Dabian Taborda Restrepo)</div>
  </div>
</div>
<!-- Lightbox -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
  <img id="lightbox-img" class="lightbox-content" src="" alt="">
  <div id="lightbox-caption" class="lightbox-caption"></div>
</div>
<script>
function openLightbox(imgSrc, caption) {
  event.stopPropagation();
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  lightboxImg.src = imgSrc;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
</script>



### Assembly Documentation
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

/* Lightbox styles */
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
}
</style>
<div class="gallery">
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/07b39145-f68a-4d1c-8a71-b5ba88e41b8c', 'Wiring of Arcadium')">
    <img src="https://github.com/user-attachments/assets/07b39145-f68a-4d1c-8a71-b5ba88e41b8c" alt="arcadium_wiring">
    <div class="gallery-caption">Wiring of Arcadium</div>
  </div>
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/bf6a96f9-45b6-4b55-962d-3dfd85c78f0d', 'Side View of Arcadium')">
    <img src="https://github.com/user-attachments/assets/bf6a96f9-45b6-4b55-962d-3dfd85c78f0d" alt="arcadium_side">
    <div class="gallery-caption">Side View of Arcadium</div>
  </div>
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/be2292c7-77b9-470d-abc7-eb3cf7870960', 'arcadium_front')">
    <img src="https://github.com/user-attachments/assets/be2292c7-77b9-470d-abc7-eb3cf7870960" alt="arcadium_front">
    <div class="gallery-caption">Front View of Arcadium</div>
  </div>
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/4db0dfc5-cbbf-4dad-821c-fb4881186575', 'arcadium_top')">
    <img src="https://github.com/user-attachments/assets/4db0dfc5-cbbf-4dad-821c-fb4881186575" alt="arcadium_top">
    <div class="gallery-caption">Drawing Title 5</div>
  </div>
    <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/d00a6cd2-2e59-4aa6-a6e3-60b45d98036f', 'arcadium_diagram')">
    <img src="https://github.com/user-attachments/assets/d00a6cd2-2e59-4aa6-a6e3-60b45d98036f" alt="arcadium_diagram">
    <div class="gallery-caption">Labeled Diagram of the Interior of Arcadium</div>
  </div>
</div>
<!-- Lightbox -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
  <img id="lightbox-img" class="lightbox-content" src="" alt="">
  <div id="lightbox-caption" class="lightbox-caption"></div>
</div>
<script>
function openLightbox(imgSrc, caption) {
  event.stopPropagation();
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  lightboxImg.src = imgSrc;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
</script>

### CAD Drawings


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

/* Lightbox styles */
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
}
</style>
<div class="gallery">
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/d0d47c35-fd93-4950-82cd-061f215a8e47', 'candy_dispenser')">![]()
    <img src="https://github.com/user-attachments/assets/d0d47c35-fd93-4950-82cd-061f215a8e47" alt="candy_dispenser">
    <div class="gallery-caption">Candy Dispenser CAD Design</div>
  </div>
  <div class="gallery-item" onclick="openLightbox('https://github.com/user-attachments/assets/8eb9f440-2c7a-4659-ade9-af740a5f072a', 'arcadium_cad')">![ILCP_DTR]()
    <img src="https://github.com/user-attachments/assets/8eb9f440-2c7a-4659-ade9-af740a5f072a" alt="arcadium_cad">
    <div class="gallery-caption">Arcadium CAD Design</div>
  </div>
</div>
<!-- Lightbox -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
  <img id="lightbox-img" class="lightbox-content" src="" alt="">
  <div id="lightbox-caption" class="lightbox-caption"></div>
</div>
<script>
function openLightbox(imgSrc, caption) {
  event.stopPropagation();
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  lightboxImg.src = imgSrc;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
</script>


### Custom 3D Rhino Designs
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
<style>
  model-viewer {
    width: 100%;
    height: 500px;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin: 2rem 0;
  }
  
  .model-section {
    margin: 3rem 0;
    padding: 2rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }
</style>
<div class="model-section">
  <h2>Candy Dispenser Lever for Micro Servo SG90</h2>
  <p>Interactive 3D model from Rhino.</p>
<model-viewer 
 src="assets-github/candy_dispenser_lever.glb"
 alt="Candy Dispenser Lever"
 auto-rotate
 camera-controls
 shadow-intensity="1"
 exposure="1">
</model-viewer>
</div>

