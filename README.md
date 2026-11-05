# kwameAI

A five-page website about AI and robotics, using the creator's blue, violet and black branding. Runs entirely offline through XAMPP Apache.

## Run in XAMPP

1. Copy the complete `kwameAI` folder into `C:\xampp\htdocs`.
2. Start Apache in the XAMPP Control Panel. MySQL is not required.
3. Visit `http://localhost/kwameAI/` in Chrome, Edge or Firefox.
4. Use the top navigation to explore all five pages. Play both audio clips and both videos, then try the fact button below the About Me profile.

If Apache uses another port, include it in the address, such as `http://localhost:8080/kwameAI/`. Keep Apache running to use the site. All fonts, media, scripts and styles are local; there are no CDN requests or external services.

## Assignment checklist

| Page | Implementation |
| --- | --- |
| Home | `index.html`: brand artwork, project introduction and navigation to the other four pages |
| Images | `images.html`: exactly four images, each with a caption; all styling is inline |
| Audio | `audio.html`: exactly two audio clips with captions; all CSS is internal in the head |
| Video | `video.html`: exactly two captioned videos; all CSS is external in `styles.css` |
| About Me | `about.html`: the creator's branded portrait, a short profile below it, then a JavaScript fact button |
| Navigation | Every page has links to all five pages at the top |
| Offline hosting | Local assets served by XAMPP Apache |

## Content and assets

- `kwameai-brand.jpeg`: supplied brand artwork, copied from k2.jpeg.
- `kwame-portrait.jpeg`: supplied branded portrait, copied from k1.jpeg without cropping or alteration.
- `community.jpeg`: supplied event photograph, copied from KE.jpeg.
- `computer-vision.mp4`: supplied KV.mp4, copied without editing or transcoding.
- `computer-vision-poster.jpg`: a frame extracted from the supplied video.
- `vision-flow.svg`: original code-drawn illustration of a computer vision workflow.
- `ai-animation.mp4`: supplied kb.mp4, a six-second AI-generated banana animation created by the site owner, copied without editing or transcoding.
- `ai-animation-poster.jpg`: a frame extracted from the AI-generated animation.
- `robot-signal.wav` and `startup.wav`: original electronic sound designs, described as imagined robot sounds.

## Editing and engineering

The runtime is plain HTML, CSS and JavaScript. There is no build step or dependency installation required to run the website. Pages use semantic headings, navigation landmarks, descriptive alternative text, native media controls and responsive layouts. Keyboard focus is visible. The fact button announces its result through a polite live region. Media never autoplays.

Edit the five `.html` files directly to update page content. Edit `about.js` to change the facts displayed by the About Me button.

Keep each page's required CSS method when making changes:

- Images: edit the inline `style` attributes in `images.html`.
- Audio: edit the internal `<style>` block in `audio.html`.
- Video: edit the external `styles.css` file, which also styles Home and About Me.

After editing, copy the changed files into `C:\xampp\htdocs\kwameAI` and refresh the browser. Keep the `assets` folder and all relative file paths intact.
