// script.js

// Bigger pool than 10 so the banker can offer someone NOT on the board.
// Comprehensive-ish PG pool for a Deal/No Deal game (tiers for gameplay balance)
const pgPoolAll = [
  // ===== S TIER =====
  { name: "Stephen Curry", tier: "S", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png" },
  { name: "Luka Dončić", tier: "S", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629029.png" },
  { name: "Shai Gilgeous-Alexander", tier: "S", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628983.png" },

  // ===== A TIER =====
  { name: "Tyrese Haliburton", tier: "A", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630169.png" },
  { name: "Ja Morant", tier: "A", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png" },
  { name: "Damian Lillard", tier: "A", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203081.png" },
  { name: "De’Aaron Fox", tier: "A", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628368.png" },
  { name: "Jalen Brunson", tier: "A", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628973.png" },

  // ===== B TIER =====
  { name: "Trae Young", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629027.png" },
  { name: "Jrue Holiday", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201950.png" },
  { name: "Jamal Murray", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627750.png" },
  { name: "Darius Garland", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629636.png" },
  { name: "LaMelo Ball", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630163.png" },
  { name: "Kyrie Irving", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202681.png" },
  { name: "Dejounte Murray", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627749.png" },
  { name: "Tyrese Maxey", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630178.png" },
  { name: "Fred VanVleet", tier: "B", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627832.png" },

  // ===== C TIER =====
  { name: "Mike Conley", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png" },
  { name: "Derrick White", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628401.png" },
  { name: "Marcus Smart", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203935.png" },
  { name: "Immanuel Quickley", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630193.png" },
  { name: "D’Angelo Russell", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626156.png" },
  { name: "Terry Rozier", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626179.png" },
  { name: "Malcolm Brogdon", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627763.png" },
  { name: "Chris Paul", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101108.png" },
  { name: "Russell Westbrook", tier: "C", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201566.png" },

  // ===== D TIER =====
  { name: "Dennis Schröder", tier: "D", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203471.png" },
  { name: "Reggie Jackson", tier: "D", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202704.png" },
  { name: "Patrick Beverley", tier: "D", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201976.png" },
  { name: "Monte Morris", tier: "D", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628420.png" },
  { name: "Tyus Jones", tier: "D", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626145.png" },
  { name: "Cameron Payne", tier: "D", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626166.png" },
  { name: "T.J. McConnell", tier: "D", img: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/204456.png" }
];



const TIER_VALUE = { S: 100, A: 80, B: 60, C: 40, D: 20 };
const TIER_ORDER = ["S", "A", "B", "C", "D"];

// 10-case pacing
const opensPerRound = [0, 3, 2, 2, 1, 1];
const multipliers   = [0, 0.45, 0.55, 0.65, 0.80, 0.95];

const state = {
  phase: "pick",        // "pick" | "open" | "banker" | "end"
  round: 0,
  opensLeft: 0,
  chosenCaseId: null,
  cases: [],
  revealLog: [],
  lastOffer: null,      // { offerValue, tier, player }
  offeredNames: new Set()
};

function preloadImages(players) {
  players.forEach(p => {
    if (!p.img) return;

    const img = new Image();
    img.src = p.img;
  });
}


function tierFromOffer(v) {
  if (v >= 90) return "S";
  if (v >= 70) return "A";
  if (v >= 50) return "B";
  if (v >= 30) return "C";
  return "D";
}

function initGame() {
  // choose 10 unique PGs for the board
  const ten = d3.shuffle(pgPoolAll.slice()).slice(0, 10);
    preloadImages(ten);

  state.cases = d3.shuffle(ten).map((p, i) => ({
    id: i + 1,
    opened: false,
    player: p,
    value: TIER_VALUE[p.tier]
  }));

  state.phase = "pick";
  state.round = 0;
  state.opensLeft = 0;
  state.chosenCaseId = null;
  state.revealLog = [];
  state.lastOffer = null;
  state.offeredNames = new Set();

  d3.select("#offer").text("");
  d3.select("#result").text("");

  d3.select("#deal").style("display", "none").text("DEAL");
  d3.select("#nodeal").style("display", "none").text("NO DEAL");
  d3.select("#restart").style("display", "none").text("RESTART").on("click", initGame);

  d3.select("#revealLog").selectAll("li").remove();

  render();
}

function onCaseClick(id) {
  const c = state.cases.find(x => x.id === id);
  if (!c || c.opened) return;

  if (state.phase === "banker" || state.phase === "end") return;

  if (state.phase === "pick") {
    state.chosenCaseId = id;
    state.round = 1;
    state.opensLeft = opensPerRound[state.round];
    state.phase = "open";
    render();
    return;
  }

  if (state.phase === "open") {
  if (state.opensLeft <= 0) return;   // ✅ prevents negative opens

  if (id === state.chosenCaseId) return;

  c.opened = true;
  state.opensLeft -= 1;

  state.revealLog.push(`Opened Case #${c.id}: ${c.player.name} (${c.player.tier})`);

  if (state.opensLeft === 0) {
    state.phase = "banker";
    showBankerOffer();
  } else {
    render();
  }
}

}

function bankerOfferValue() {
  const remaining = state.cases.filter(c => !c.opened && c.id !== state.chosenCaseId);
  const expected = d3.mean(remaining, c => c.value);
  const m = multipliers[state.round] ?? 0.5;
  return Math.round(expected * m);
}

// Banker offer player must NOT be on the board.
function pickBankerPlayerOutsideBoard(targetTier) {
  const onBoardNames = new Set(state.cases.map(c => c.player.name));

  const pool = pgPoolAll.filter(p =>
    !onBoardNames.has(p.name) && !state.offeredNames.has(p.name)
  );

  if (!pool.length) return null;

  const targetIdx = TIER_ORDER.indexOf(targetTier);

  // try exact tier first, then nearby tiers
  for (let dist = 0; dist < TIER_ORDER.length; dist++) {
    const tiersToTry = [];
    if (targetIdx - dist >= 0) tiersToTry.push(TIER_ORDER[targetIdx - dist]);
    if (dist !== 0 && targetIdx + dist < TIER_ORDER.length) tiersToTry.push(TIER_ORDER[targetIdx + dist]);

    for (const t of tiersToTry) {
      const candidates = pool.filter(p => p.tier === t);
      if (candidates.length) {
        const chosen = candidates[Math.floor(Math.random() * candidates.length)];
        return chosen;
      }
    }
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function showBankerOffer() {
  const offerValue = bankerOfferValue();
  const tier = tierFromOffer(offerValue);

  const offerPlayer = pickBankerPlayerOutsideBoard(tier);
  if (offerPlayer) state.offeredNames.add(offerPlayer.name);

  state.lastOffer = { offerValue, tier, player: offerPlayer };

  if (offerPlayer) {
    d3.select("#offer").text(`Banker offers: ${offerPlayer.name} `);
    state.revealLog.push(`Banker Offer (not on board): ${offerPlayer.name} (${offerPlayer.tier})`);
  } else {
    d3.select("#offer").text(`Banker offers: ${tier}-tier (${offerValue} pts)`);
    state.revealLog.push(`Banker Offer: ${tier}-tier (${offerValue} pts)`);
  }

  d3.select("#deal")
    .style("display", "inline-block")
    .text("DEAL")
    .on("click", () => endDeal(state.lastOffer));

  d3.select("#nodeal")
    .style("display", "inline-block")
    .text(state.round === 5 ? "FINAL" : "NO DEAL")
    .on("click", () => noDeal());

  render();
}

function noDeal() {
  d3.select("#deal").style("display", "none");
  d3.select("#nodeal").style("display", "none");
  d3.select("#offer").text("");

  if (state.round === 5) {
    state.phase = "end";
    showFinalSwap();
    return;
  }

  state.round += 1;
  state.opensLeft = opensPerRound[state.round];
  state.phase = "open";
  render();
}

function showFinalSwap() {
  // unopened cases including your chosen
  const unopened = state.cases.filter(c => !c.opened);

  const chosen = unopened.find(c => c.id === state.chosenCaseId);
  const other = unopened.find(c => c.id !== state.chosenCaseId);

  // If there's no "other" case left, just reveal your chosen case and end.
  if (!chosen || !other) {
    const finalCase = state.cases.find(c => c.id === state.chosenCaseId);
    endWin(finalCase);
    return;
  }

  d3.select("#offer").text(`Final: Keep case #${chosen.id} or swap with case #${other.id}?`);

  d3.select("#deal")
    .style("display", "inline-block")
    .text("KEEP")
    .on("click", () => revealFinal(chosen.id));

  d3.select("#nodeal")
    .style("display", "inline-block")
    .text("SWAP")
    .on("click", () => revealFinal(other.id));

  render();
}


function revealFinal(finalCaseId) {
  const finalCase = state.cases.find(c => c.id === finalCaseId);
  endWin(finalCase);
}

function endDeal(offerObj) {
  state.phase = "end";

  const p = offerObj?.player;
  if (p) {
    d3.select("#result").text(`DEAL! You took: ${p.name} `);
  } 

  // reveal all cases at end
  state.cases.forEach(c => (c.opened = true));

  d3.select("#deal").style("display", "none");
  d3.select("#nodeal").style("display", "none");
  d3.select("#restart").style("display", "inline-block");

  render();
}

function endWin(caseObj) {
  state.phase = "end";

  // Reveal all cases, including the one you picked first
  state.cases.forEach(c => (c.opened = true));

  d3.select("#result").text(`You won: ${caseObj.player.name} (${caseObj.player.tier}-tier)!`);

  d3.select("#deal").style("display", "none");
  d3.select("#nodeal").style("display", "none");
  d3.select("#restart").style("display", "inline-block");

  render();
}


function render() {
  const status =
    state.phase === "pick"
      ? "Pick your case."
      : state.phase === "open"
      ? `Round ${state.round}: open ${Math.max(0, state.opensLeft)} case(s).`
      : state.phase === "banker"
      ? "Banker call!"
      : "Game over.";

  d3.select("#status").text(status);

  const sel = d3.select("#cases")
    .selectAll("button.case")
    .data(state.cases, d => d.id);

  const enter = sel.enter()
    .append("button")
    .attr("class", "case")
    .on("click", (_, d) => onCaseClick(d.id));

  const merged = enter.merge(sel)
    .classed("opened", d => d.opened)
    .classed("chosen", d => d.id === state.chosenCaseId);

  // Clear previous content each render (simple + reliable)
  merged.html("");

  // Unopened: show case number
  merged.filter(d => !d.opened)
    .text(d => d.id);

  // Opened: show image + name/tier
  const opened = merged.filter(d => d.opened);

  const content = opened.append("div").attr("class", "caseContent");

  content.append("img")
    .attr("class", "caseImg")
    .attr("alt", d => d.player.name)
    .attr("src", d => d.player.img || ""); // if missing, it’ll just be broken/empty

  const text = content.append("div").attr("class", "caseText");
  text.append("div").attr("class", "caseName").text(d => d.player.name);
  text.append("div").attr("class", "caseTier").text(d => `${d.player.tier}-tier`);

  sel.exit().remove();

  // reveal log render stays the same
  const logSel = d3.select("#revealLog")
    .selectAll("li")
    .data(state.revealLog);

  logSel.enter().append("li").merge(logSel).text(d => d);
  logSel.exit().remove();
}


// Start
initGame();
