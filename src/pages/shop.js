const products = [
  ["backpack.jpg", "Osprey", "Trailblazer 65L Backpack", "Ultralight aluminum frame, integrated rain cover, load-lifters.", "$289", "Best Seller"],
  ["camping.jpg", "MSR", "Summit Shelter 3-Season Tent", "Two-person freestanding, 1800mm HH rating, color-coded poles.", "$449", "New"],
  ["apparel.jpg", "Patagonia", "Alpine Ridge Hardshell Jacket", "Gore-Tex Pro 3L, pit-zip vents, helmet-compatible hood.", "$398", ""],
  ["kayaking.jpg", "Werner", "Riverbend Carbon Kayak Paddle", "Full-carbon shaft, asymmetric 60° feathered blade, 195–215 cm.", "$124", ""],
  ["hiking.jpg", "La Sportiva", "Granite Peak Hiking Boots", "Full-grain leather upper, Vibram Megagrip outsole, waterproof.", "$175", "Editor's Pick"],
  ["fishing.jpg", "Orvis", "Fly Fisher Pro Rod & Reel Set", "9 ft 5-weight graphite rod, large-arbor reel, hard-shell case.", "$320", ""],
  ["night-camp.jpg", "Western Mountaineering", "850-Fill Down Sleeping Bag", "15°F comfort rating, water-resistant DWR shell, stuff sack.", "$225", ""],
  ["hiker.jpg", "Black Diamond", "Trail Runner Carbon Trekking Poles", "Folding carbon-fiber design, cork ergonomic grips, 7075 tip.", "$99", "Sale"],
  ["water.jpg", "Sea to Summit", "Rapid Rescue Dry Bag 20L", "RF-welded seams, roll-top closure, removable padded shoulder straps.", "$54", ""],
  ["gear.jpg", "Summit Ridge", "Summit Ridge Merino Beanie", "100% ZQ-certified Merino wool, reversible, one size.", "$38", ""],
  ["campfire.jpg", "Petzl", "NAO+ Reactive Headlamp", "750 lumens, reactive lighting, USB-C rechargeable, 7-hour burn.", "$110", ""],
  ["river.jpg", "LifeStraw", "LifeStraw Peak Series Filter", "Filters 99.999% of bacteria & protozoa. 1,000-gallon lifespan.", "$29", "Top Rated"],
];

export default function shop() {
  return `<section class="page-heading page-heading--green"><div class="wrap"><p class="eyebrow eyebrow--light">Everything You Need</p><h1>Shop All Gear</h1><p>2,400+ products · Free shipping over $99 · Easy returns</p></div></section>
    <section class="section wrap"><div class="shop-tools"><strong>Showing 12 of 247 products</strong><label>Sort by: <select><option>Best Seller</option><option>Price: Low to High</option><option>Newest</option></select></label></div>
      <div class="shop-grid">${products.map(product => `<article class="shop-card"><div class="shop-card__image"><img src="./images/${product[0]}" alt="${product[2]}" />${product[5] ? `<span>${product[5]}</span>` : ""}</div><div class="shop-card__body"><p class="brand">${product[1]}</p><h3>${product[2]}</h3><p>${product[3]}</p><div><strong>${product[4]}</strong><button class="text-button feedback-button" data-message="${product[2]} was selected.">Add to Cart</button></div></div></article>`).join("")}</div>
      <div class="pagination"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    </section>`;
}
