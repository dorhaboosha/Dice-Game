/**
 * Dice Game — client-side roll on full page refresh
 *
 * What it does
 *   - Picks two random integers in [1, 6] (one per player).
 *   - Points <img class="img1"> and <img class="img2"> at ./images/dice{n}.png.
 *   - Sets the main <h1> to the outcome (Player 1 wins, Player 2 wins, or Draw).
 *
 * DOM this script expects (see index.html)
 *   - h1          → title / result text
 *   - .img1, .img2 → dice face images (default src is fine until a reload runs this)
 *
 * When it runs
 *   - Only when the Navigation Timing entry says the page was loaded via "reload"
 *     (e.g. F5 or browser refresh). A normal first open is usually "navigate", so the
 *     dice stay at their HTML defaults until the user refreshes once.
 *
 * Safe DOM access
 *   - Optional chaining on images avoids errors if markup changes; h1 is guarded
 *     with if (headerEl) before updating text.
 */

// "reload" = user refreshed; "navigate" = first visit or in-app navigation — skip roll on the latter
if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    // --- Random rolls (inclusive 1–6) ---
    const randomNumber1 = Math.floor((Math.random() * 6) + 1);
    const randomNumber2 = Math.floor((Math.random() * 6) + 1);

    // --- Map roll → asset path (dice1.png … dice6.png next to this file) ---
    const image1Source = `./images/dice${randomNumber1}.png`;
    const image2Source = `./images/dice${randomNumber2}.png`;

    // --- Update dice faces ---
    document.querySelector(".img1")?.setAttribute("src", image1Source);
    document.querySelector(".img2")?.setAttribute("src", image2Source);

    // --- Winner message on the page title ---
    const headerEl = document.querySelector("h1");
    if (headerEl) {
        if (randomNumber1 > randomNumber2) {
            headerEl.textContent = "🚩 Player 1 Wins!";
        } else if (randomNumber2 > randomNumber1) {
            headerEl.textContent = "Player 2 Wins! 🚩";
        } else {
            // Same value on both dice
            headerEl.textContent = "Draw!";
        }
    }
}
