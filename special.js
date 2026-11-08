// Hand-picked specials shown at the top of the Strong stocks tab.
// Not touched by the daily data update. Add, edit or remove entries by hand.
window.SPECIAL = [
  {
    id: "st-indianb-diwali-2026",
    tag: "Diwali special",
    date: "2026-11-08",
    symbol: "INDIANB",
    name: "Indian Bank",
    close: 894.80,
    closeNote: "Muhurat trading close, 8 Nov 2026",
    title: "Weekly falling-wedge breakout",
    watch: { label: "Breakout above", value: "912.50" },
    levels: ["951.75", "1,140.80", "1,500.50"],
    chips: { M: "Weak", W: "Bull", D: "Bull" },
    fund: [
      ["Market cap", "₹1.2 lakh Cr"], ["ROE 3Y", "16.0%"], ["Promoter (Govt)", "73.8%"],
      ["Sales growth", "7.3%"], ["Profit growth", "3.9%"], ["Size", "Large cap"]
    ],
    note: "After the 2025 rally from about 480 to 950, the stock spent most of 2026 in a falling wedge. It has now broken above the upper trendline on the weekly chart. A weekly close above 912.50 confirms the breakout; the levels above are where I expect the next resistance.",
    chart: "charts/indianb-2026-11-08.jpg"
  },
  {
    id: "st-awfis-diwali-2026",
    tag: "Diwali special",
    date: "2026-11-08",
    symbol: "AWFIS",
    name: "Awfis Space Solutions",
    close: 289.00,
    closeNote: "Muhurat trading close, 8 Nov 2026",
    title: "Falling-wedge breakout after a 66% fall",
    watch: { label: "Breakout above", value: "300.20" },
    levels: ["353.25", "383.55"],
    chips: { M: "n/a", W: "Weak", D: "Bull" },
    fund: [
      ["Market cap", "₹2,070 Cr"], ["ROE 3Y", "8.3%"], ["Promoter", "17.0%"],
      ["Sales growth", "23.7%"], ["Profit growth", "4.4%"], ["Size", "Small cap"]
    ],
    note: "The stock fell from about 640 in Nov 2025 to about 215 in Oct 2026, inside a falling wedge. A strong green weekly candle has now broken the upper trendline. A weekly close above 300.20 confirms the breakout; 353.25 and 383.55 are the next resistance levels. Listed in 2024, so there is not enough monthly history for a monthly trend reading.",
    chart: "charts/awfis-2026-11-08.jpg"
  },
  {
    id: "st-sigma-diwali-2026",
    tag: "Diwali special",
    date: "2026-11-08",
    symbol: "SIGMA",
    name: "Sigma Solve",
    close: 44.97,
    closeNote: "Muhurat trading close, 8 Nov 2026",
    title: "Support bounce inside a 10-month base",
    watch: { label: "Stop-loss", value: "32.00", kind: "stop" },
    levels: ["51.87", "75.00"],
    chips: { M: "Weak", W: "Weak", D: "Weak" },
    fund: [
      ["Market cap", "₹462 Cr"], ["ROE 3Y", "44.7%"], ["ROCE 3Y", "53.9%"],
      ["Sales growth", "25.5%"], ["Profit growth", "25.1%"], ["Promoter", "73.2%"]
    ],
    note: "The stock has held the 35.35 to 36.50 support zone since mid-2025, and this week's +8.75% candle bounced off it. Price is still below the falling trendline from the Jan 2026 high; 51.87 is where it meets that line, and a move through it opens 75. Stop-loss at 32, below the support zone. A micro cap with very low debt (0.03 debt to equity), so expect sharp moves both ways.",
    chart: "charts/sigma-2026-11-08.jpg"
  }
];
