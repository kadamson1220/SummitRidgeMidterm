const products = [
  ["backpack.jpg", "Best Seller", "Trailblazer 65L Backpack", "$289"],
  ["camping.jpg", "New", "Summit Shelter 3-Season Tent", "$449"],
  ["apparel.jpg", "", "Alpine Ridge Hardshell Jacket", "$398"],
  ["kayaking.jpg", "", "Riverbend Carbon Kayak Paddle", "$124"],
  ["hiking.jpg", "Editor's Pick", "Granite Peak Hiking Boots", "$175"],
  ["fishing.jpg", "", "Fly Fisher Pro Rod & Reel Set", "$320"],
];

export default function home() {
  return `
    <section class="hero">
      <div class="hero__shade"></div>
      <div class="hero__content wrap">
        <p class="eyebrow eyebrow--light">Boulder, CO · Est. 1998</p>
        <h1>Where the<br />Trail Begins.</h1>
        <p>Premium outdoor gear and expert guidance for every adventure — from your first summit to your hundredth. We'll make sure you're ready.</p>
        <div class="button-row"><a class="button" href="#shop">Shop Now</a><a class="button button--outline-light" href="#guides">Explore Adventures</a></div>
      </div>
    </section>

    <section class="stats"><div><strong>25+</strong><span>Years in Business</span></div><div><strong>12,400+</strong><span>Happy Customers</span></div><div><strong>2,400+</strong><span>Products in Stock</span></div><div><strong>4.9 ★</strong><span>Average Review</span></div></section>

    <section class="section wrap">
      <p class="eyebrow">Explore the Range</p><h2>Shop by Category</h2>
      <div class="category-grid">
        ${[["camping.jpg","Camping"],["hiking.jpg","Hiking"],["fishing.jpg","Fishing"],["kayaking.jpg","Kayaking"],["climbing.jpg","Climbing"],["apparel.jpg","Apparel"]].map(item => `<a class="category" href="#shop"><img src="./images/${item[0]}" alt="${item[1]}" /><span>${item[1]}</span></a>`).join("")}
      </div>
    </section>

    <section class="section section--soft">
      <div class="wrap"><p class="eyebrow">Handpicked by Our Staff</p><h2>Featured Products</h2>
        <div class="product-grid">${products.map(product => `<article class="product-card"><div class="product-card__image"><img src="./images/${product[0]}" alt="${product[2]}" />${product[1] ? `<span>${product[1]}</span>` : ""}</div><div class="product-card__body"><h3>${product[2]}</h3><div><strong>${product[3]}</strong><a href="#shop">View Product →</a></div></div></article>`).join("")}</div>
        <div class="center"><a class="button button--outline" href="#shop">View All Products</a></div>
      </div>
    </section>

    <section class="section wrap">
      <p class="eyebrow">Go Deeper</p><h2>Adventure Inspiration</h2>
      <div class="story-grid">
        <article class="story"><img src="./images/mountains.jpg" alt="Mountain trail" /><div><h3>Rocky Mountain High: A Weekend Trek</h3><p>Three days, 22 miles, and some of the most breathtaking views in the American West. Here's everything you need to know before you go.</p><a href="#guides">Read More →</a></div></article>
        <article class="story"><img src="./images/kayaking.jpg" alt="Kayakers" /><div><h3>First Timer's Guide to Whitewater Kayaking</h3><p>You don't need years of experience to tackle your first rapid. Our guides break down the basics and the gear that keeps you safe.</p><a href="#guides">Read More →</a></div></article>
        <article class="story"><img src="./images/night-camp.jpg" alt="Tent under the stars" /><div><h3>Stargazing from Base Camp: Colorado's Best Sites</h3><p>Far from city lights, these alpine camps offer some of North America's darkest skies. Pack your binoculars — and these tips.</p><a href="#guides">Read More →</a></div></article>
      </div>
    </section>

    <section class="section section--soft"><div class="wrap"><p class="eyebrow">Real Adventurers, Real Stories</p><h2>What Our Customers Say</h2><div class="quote-grid"><blockquote>“Summit Ridge outfitted my entire PCT section hike. The staff spent two hours with me making sure every piece of gear was the right fit. I can't recommend them enough.”<cite>Sarah K. · Trail Runner · Denver, CO</cite></blockquote><blockquote>“Been shopping here for six years. The loyalty program is solid, but it's the genuine expertise that keeps me coming back. They actually test the gear they sell.”<cite>Marcus T. · Weekend Warrior · Boulder, CO</cite></blockquote><blockquote>“I stocked all my students with Summit Ridge gear. The bulk discount program is fair, and every piece of equipment has been reliable. Zero complaints in two seasons.”<cite>Priya S. · Kayaking Instructor · Fort Collins, CO</cite></blockquote></div></div></section>

    <section class="newsletter"><div><p class="eyebrow eyebrow--light">Stay in the Loop</p><h2>Get Trail-Ready Updates</h2><p>New gear drops, expert guides, seasonal sales, and trip inspiration — delivered twice a month. No spam, ever.</p></div><form id="newsletterForm"><input id="newsletterEmail" type="email" placeholder="your@email.com" aria-label="Email address" /><button class="button" type="submit">Subscribe</button></form></section>
  `;
}
