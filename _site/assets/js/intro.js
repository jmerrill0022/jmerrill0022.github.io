/* =============================================
   INTRO TAKEOVER SEQUENCE
   Terminal boot → name input → static → jk → portfolio
   ============================================= */

(function () {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return; // only run on pages with intro

  const bootLog = document.getElementById('boot-log');
  const namePrompt = document.getElementById('name-prompt');
  const nameInput = document.getElementById('name-input');
  const jkLog = document.getElementById('jk-log');
  const staticCanvas = document.getElementById('static-canvas');
  const siteContent = document.getElementById('site-content');

  let logHTML = '';
  let ctx = staticCanvas ? staticCanvas.getContext('2d') : null;

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  function appendLine(html) {
    logHTML += html + '\n';
    bootLog.innerHTML = logHTML + '<span class="blink">█</span>';
  }

  async function runBoot() {
    await sleep(300);
    appendLine('<span style="color:#007a1f">&gt; SYSTEM BOOTSTRAP v4.7.1</span>');
    await sleep(400);
    appendLine('<span style="color:#007a1f">&gt; SCANNING NETWORK NODES...</span>');
    await sleep(500);
    appendLine('<span style="color:#00ff41">&gt; HOST LOCATED: [192.168.x.x]</span>');
    await sleep(350);
    appendLine('<span style="color:#00ff41">&gt; INITIATING OVERRIDE PROTOCOL...</span>');
    await sleep(500);
    appendLine('<span style="color:#7fff7f">&gt; ████████████████ 100%</span>');
    await sleep(300);
    appendLine('<span style="color:#7fff7f">&gt; DEPLOYING PAYLOAD TO HOST...</span>');
    await sleep(600);
    bootLog.innerHTML = logHTML; // remove blink cursor

    // show name input
    namePrompt.style.display = 'block';
    nameInput.focus();
  }

  function runStatic(duration) {
    return new Promise(resolve => {
      staticCanvas.style.display = 'block';
      staticCanvas.width = window.innerWidth;
      staticCanvas.height = window.innerHeight;

      let start = null;
      function frame(ts) {
        if (!start) start = ts;
        const elapsed = ts - start;
        const w = staticCanvas.width, h = staticCanvas.height;
        const imageData = ctx.createImageData(w, h);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255 | 0;
          data[i] = v; data[i + 1] = v; data[i + 2] = v; data[i + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
        if (elapsed < duration) requestAnimationFrame(frame);
        else { staticCanvas.style.display = 'none'; resolve(); }
      }
      requestAnimationFrame(frame);
    });
  }

  async function runJk(name) {
    namePrompt.style.display = 'none';
    bootLog.innerHTML = '';
    jkLog.style.display = 'block';

    const lines = [
      '> ...',
      '> ...',
      '> jk lol',
      `> hi ${name.toUpperCase()}, welcome.`,
      '> loading portfolio...',
      '> ████████████████ 100%',
    ];

    let built = '';
    for (const line of lines) {
      built += line + '\n';
      jkLog.textContent = built;
      await sleep(400);
    }

    await sleep(500);

    // fade out overlay, show site
    overlay.style.transition = 'opacity 0.6s ease';
    overlay.style.opacity = '0';
    await sleep(650);
    overlay.style.display = 'none';
    siteContent.style.display = 'block';
    siteContent.style.opacity = '0';
    siteContent.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => {
      siteContent.style.opacity = '1';
    });
  }

  nameInput.addEventListener('keydown', async function (e) {
    if (e.key !== 'Enter') return;
    const name = nameInput.value.trim();
    if (!name) return;

    logHTML += `\n<span style="color:#007a1f">&gt; TARGET CONFIRMED: ${name.toUpperCase()}</span>\n`;
    logHTML += `<span style="color:#7fff7f">&gt; TAKING OVER ${name.toUpperCase()}'S HOST CONTROL...</span>\n`;
    bootLog.innerHTML = logHTML;

    await sleep(700);
    await runStatic(1800);
    await runJk(name);
  });

  // kick off
  runBoot();
})();
