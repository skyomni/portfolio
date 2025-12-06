
---

# 2) index.html (drop into repo root)

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Arcade Light Game — Project Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
  <meta name="description" content="Design notebook and portfolio for the Arcade Light Game (Raspberry Pi Pico arcade game with laser cut enclosure and candy dispenser).">
</head>
<body>
  <header class="site-header">
    <div class="wrap">
      <h1>Arcade Light Game</h1>
      <p class="sub">Group project — Raspberry Pi Pico arcade game with a laser-cut enclosure and candy dispenser</p>
      <nav class="nav">
        <a href="#introduction">Introduction</a>
        <a href="#problem">Define the Problem</a>
        <a href="#process">Process</a>
        <a href="#iterations">Iterations</a>
        <a href="#challenges">Challenges</a>
        <a href="#final">Final Design</a>
        <a href="#ethics">Ethical Analysis</a>
        <a href="#citations">Citations</a>
      </nav>
    </div>
  </header>

  <main class="wrap content">
    <!-- INTRODUCTION -->
    <section id="introduction" class="card">
      <h2>Introduction</h2>
      <p>
        <strong>Purpose:</strong> Design and build an arcade-style light game using a Raspberry Pi Pico where players press buttons or hit lights to score points. The final goal is a robust, laser-cut enclosure with an integrated candy dispenser for demonstration.
      </p>
      <p>
        <strong>Context & Goals:</strong> This project demonstrates embedded systems prototyping, user interaction design, CAD-driven fabrication, and teamwork. Constraints: limited parts (Pico kit), laser cutter dimensions, and project timeline (semester schedule).
      </p>
    </section>

    <!-- DEFINE THE PROBLEM -->
    <section id="problem" class="card">
      <h2>Define the Problem</h2>
      <p>
        The initial challenge was to design a compact, reliable interactive arcade toy that:
      </p>
      <ul>
        <li>Responds accurately to user input (button/light sensors)</li>
        <li>Is easy to maintain and debug (good cable management)</li>
        <li>Is fabricable with campus resources (laser cutter / 3D printer)</li>
        <li>Includes an engaging UX element (candy dispenser)</li>
      </ul>

      <h3>Design Notebook References</h3>
      <p>Early brainstorming and sketches are documented in our digital design notebook (entries from 10/28/25 to 11/18/25). Example notes: prototype cardboard enclosures, the decision to switch to wood/acrylic for the final box, and plans to separate components on layers to improve wiring.</p>

      <!-- Link to your online notebook or AutoCAD if available -->
      <p><strong>Design Notebook (digital):</strong> <a href="https://web.autocad.com/acad/me/sid/shares/drawings/d3c5b199-3d32-4e15-83ce-07d9eecd6240/editor" target="_blank" rel="noopener">ARCADIUM: Project Design Notebook</a></p>
    </section>

    <!-- PROCESS -->
    <section id="process" class="card">
      <h2>Document Your Process</h2>
      <p>Key milestones are drawn from the design notebook:</p>
      <ol>
        <li>10/28/25 — Brainstormed game ideas & assigned prototypes (cardboard mockups).</li>
        <li>11/04/25 — Completed individual prototypes; obtained mini breadboards and calibrated dimensions.</li>
        <li>11/18/25 — Finalized Dabian's light game as the group project; planned candy dispenser and revised enclosure size.</li>
        <li>11/21/25 — Logistics for dispenser (motor choice, feed geometry), partitioned internal layers to tidy wires.</li>
      </ol>

      <h3>Media gallery</h3>
      <p>Replace the placeholder thumbnails with your actual images in `assets/images/`.</p>

      <div class="gallery">
        <figure>
          <img src="assets/images/prototype-cardboard.jpg" alt="Cardboard prototype" data-full="assets/images/prototype-cardboard-large.jpg" />
          <figcaption>Cardboard prototype (early mockup)</figcaption>
        </figure>

        <figure>
          <img src="assets/images/wiring-setup.jpg" alt="Wiring setup" data-full="assets/images/wiring-setup-large.jpg" />
          <figcaption>Wiring and breadboard layout — before enclosure</figcaption>
        </figure>

        <figure>
          <img src="assets/images/flowchart.jpg" alt="Flowchart" data-full="assets/images/flowchart-large.jpg" />
          <figcaption>Game flowchart (logic & states)</figcaption>
        </figure>
      </div>

      <h3>Videos</h3>
      <p>Embed demonstration videos. You can host on YouTube or place a small MP4 under `assets/videos/`.</p>

      <!-- Example video embed -->
      <div class="video-grid">
        <video controls width="360" preload="metadata" poster="assets/images/video-thumb.jpg">
          <source src="assets/videos/prototype-demo.mp4" type="video/mp4">
          Your browser does not support embedded videos.
        </video>

        <div class="video-embed">
          <!-- If you prefer YouTube embed, replace the iframe src below -->
          <iframe width="360" height="203" src="https://www.youtube.com/embed/VIDEO_ID" title="Prototype demo" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <p class="note">Tip: For large videos, host on YouTube/Vimeo and embed to reduce repo size.</p>

      <h3>AutoCAD / Drawings</h3>
      <p>Link your AutoCAD exports or PDFs here (put them in `assets/docs/`). Example:</p>
      <ul>
        <li><a href="assets/docs/laser_enclosure.pdf" target="_blank">Laser cut enclosure — PDF export</a></li>
        <li><a href="assets/docs/laser_enclosure.dxf" target="_blank">DXF file</a></li>
      </ul>
    </section>

    <!-- ITERATIONS -->
    <section id="iterations" class="card">
      <h2>Explore Iterations</h2>
      <p>Iteration story (summary):</p>
      <ul>
        <li>Initial idea: compact arcade with small breadboard — too cramped.</li>
        <li>Iteration 1: increased enclosure size to include layered shelves to separate Picos and breadboards (improved cable management).</li>
        <li>Iteration 2: swapped full-size breadboard for mini breadboards; changed from fully-enclosed wood to mixed acrylic top to visually show LEDs and internal wiring.</li>
        <li>Final: added candy dispenser geometry with a simple rotating gate + small DC motor controlled by Pico PWM and a limit switch for safe dispensing.</li>
      </ul>

      <h3>What we tried (failed)</h3>
      <p>Examples: A micro-stepper for the dispenser proved too complex for the timeline and power budget — replaced with a small hobby DC motor and mechanical gate.</p>

      <h3>What worked</h3>
      <p>Layered internal shelves and flat ribbon wires gave a neat assembly and easier debugging access.</p>
    </section>

    <!-- CHALLENGES -->
    <section id="challenges" class="card">
      <h2>Share Challenges & Solutions</h2>
      <p><strong>Technical:</strong> Intermittent contact on full-size breadboard → solution: switched to mini breadboards and soldered crucial connections on perfboard.</p>
      <p><strong>Construction:</strong> Laser cut tolerances caused misalignment of button holes → solution: added 1 mm tolerance to CAD and tested with cardboard cutouts first.</p>
      <p><strong>Teamwork:</strong> Coordinating CAD and wiring across members → solution: weekly check-ins and a shared design notebook with reverse-chronological entries.</p>
    </section>

    <!-- FINAL DESIGN -->
    <section id="final" class="card">
      <h2>Showcase the Final Design</h2>

      <p>Below are final renders and photos. Add close-ups and annotated pics to `assets/images/` and update the `src` attributes.</p>

      <div class="gallery">
        <figure>
          <img src="assets/images/final-assembled.jpg" alt="Final assembled enclosure" data-full="assets/images/final-assembled-large.jpg" />
          <figcaption>Final assembled laser-cut enclosure — front view</figcaption>
        </figure>

        <figure>
          <img src="assets/images/final-side.jpg" alt="Side view with openings" data-full="assets/images/final-side-large.jpg" />
          <figcaption>Side view — labeled openings: USB, sensor windows, dispenser slot</figcaption>
        </figure>
      </div>

      <h3>How it addresses the problem</h3>
      <p>By separating electronics into layers and using a larger enclosure with an acrylic top, the design balances maintainability, visibility, and user experience. The candy dispenser adds a tangible reward loop that increases player engagement.</p>

      <h3>Peer Feedback</h3>
      <p>Peers suggested: 1) add a lockable access panel for serviceability, 2) include an on/off switch with clear labeling, 3) document assembly steps. These were implemented in the final CAD (see PDF linked earlier).</p>
    </section>

    <!-- REFLECTIONS -->
    <section id="reflection" class="card">
      <h2>Personal Reflections</h2>
      <p><strong>Learnings:</strong> Embedded systems debugging, CAD tolerancing for laser cutting, and team coordination improved. I (Skyler) improved my CAD-to-fab workflow and cable management practices.</p>
      <p><strong>What we'd do differently:</strong> Prototype the dispenser earlier and perform power budget calculations before buying the motor.</p>
      <p><strong>My contribution:</strong> Designed the Flappy Bird prototype behavior, worked on enclosure CAD, and documented the design notebook entries used in this portfolio.</p>
    </section>

    <!-- ETHICAL ANALYSIS -->
    <section id="ethics" class="card">
      <h2>Ethical Considerations — Technology & Society</h2>

      <h3>Values that guided the design</h3>
      <ul>
        <li>Safety (physical and electrical)</li>
        <li>Transparency (visible internal wiring to show educational intent)</li>
        <li>Accessibility (clear labeling and low-force buttons)</li>
      </ul>

      <h3>Technology Practice chart (summary)</h3>
      <p>Our device creates a small educational play-space: it encourages hands-on interaction and learning but also introduces questions of e-waste and component sourcing.</p>

      <h3>Life-cycle analysis</h3>
      <ul>
        <li>Prototypes created: ~3 (cardboard mock, first laser cut, final with dispenser). Cardboard and scrap pieces were recycled when possible.</li>
        <li>Materials: Raspberry Pi Pico (silicon, copper, plastics), LEDs (metals & plastics), plywood/acrylic (wood sourcing, plastics). Consider the environmental impact of mining for copper/silicon and the end-of-life recycling challenge for mixed-material assemblies.</li>
        <li>Future work: design for disassembly to improve recyclability, consider sourcing FSC-certified plywood and lower-toxicity plastics.</li>
      </ul>

      <p>Sources used for this section should be added to the Citations area below.</p>
    </section>

    <!-- CITATIONS -->
    <section id="citations" class="card">
      <h2>Citations & Credits</h2>
      <p>Tools & resources:</p>
      <ul>
        <li>Raspberry Pi Pico documentation — <em>raspberrypi.org</em> (link in-line)</li>
        <li>AutoCAD / ARCADIUM — school provided environment</li>
        <li>Laser cutter safety & guidelines — campus makerspace docs</li>
      </ul>

      <h3>References</h3>
      <ol>
        <li>Raspberry Pi Foundation. <em>Raspberry Pi Pico C/C++ SDK</em>. (link)</li>
        <li>University Makerspace. <em>Laser cutter guidelines and tolerances</em>. (link)</li>
      </ol>

      <p>Replace these with precise links and citations (APA/MLA) as needed.</p>
    </section>

  </main>

  <footer class="site-footer">
    <div class="wrap">
      <p>Project portfolio — Arcade Light Game · Group project · © 2025</p>
      <p>Contact: <a href="mailto:wang.sk@northeastern.edu">wang.sk@northeastern.edu</a></p>
    </div>
  </footer>

  <!-- Lightbox modal (script will hook images with data-full attributes) -->
  <div id="lightbox" class="lightbox" aria-hidden="true">
    <button id="lb-close" class="lb-close" aria-label="Close">×</button>
    <img id="lb-img" src="#" alt="" />
    <p id="lb-caption"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>

