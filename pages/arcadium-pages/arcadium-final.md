---
layout: default
title: Final Design Showcase
parent: 🎮 ARCADIUM
nav_order: 7
---

# Final Design Showcase

## Final Enclosure Views

The final design includes multiple viewing angles:
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


---

## Project Demo Video

### Watch the Arcadium project in action.

<style>
  .video-section {
    margin: 2rem 0;
    padding: 2rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }
  
  .video-section h2 {
    margin-top: 0;
  }
  
  video {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
<div class="video-section">
  <h2>Arcadium in Action</h2>
  <p>Full demonstration of the Arcadium arcade game system, including gameplay and candy dispenser mechanism.</p>
  <video controls>
    <source src="https://github.com/user-attachments/assets/4d54d5fd-9a84-4ea9-a962-04caf40eecd0" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
---

## How the Final Design Solves the Original Problem

Our final design successfully addresses the initial challenges:

**Portability**: Provides a portable arcade experience with compact dimensions

**Reliability**: Clean wiring improves system reliability and reduces failure points

**Space Management**: Larger enclosure solves component crowding issues

**User Engagement**: Candy dispenser enhances player reward system

**Durability**: Reinforced wood structure ensures long-term durability

---

## Peer Feedback

Peers and instructors recommended:
- Increasing the responsiveness of the buttons on the User Interface
- Changing the type of Raspberry Pi for there to be enough GPIO pins for all the components
- Adding game instructions on the side panel

These recommendations helped us refine:
- Overall usability
- Visual appeal
- User experience
- Structural integrity

---

## Design Specifications

**Materials:**
- Wood (primary structure)
- Acrylic (viewing windows)
- Electronic components from Pico kit

**Components:**
- Raspberry Pi Pico
- LCD display
- LED indicators
- Push buttons
- Internal shelving system
- Candy dispenser mechanism
