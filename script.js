
const spendingData = [
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  { day: "wed", amount: 52.36 },
  { day: "thu", amount: 31.07 },
  { day: "fri", amount: 23.39 },
  { day: "sat", amount: 43.28 },
  { day: "sun", amount: 25.48 }
];

// Find the chart container in the HTML
const chart = document.querySelector("#chart");

// Find the highest spending amount
const highestAmount = Math.max(
  ...spendingData.map(item => item.amount)
);

// Get today's day, for example "fri"
const today = new Date()
  .toLocaleDateString("en-US", { weekday: "short" })
  .toLowerCase();

// Create a bar for every day
spendingData.forEach(item => {

  // Create a wrapper for the bar and its label
  const barWrapper = document.createElement("div");
  barWrapper.classList.add("bar-wrapper");

  // Create the tooltip
  const tooltip = document.createElement("span");
  tooltip.classList.add("tooltip");
  tooltip.textContent = `$${item.amount.toFixed(2)}`;

  // Create the bar itself
  const bar = document.createElement("div");
  bar.classList.add("bar");

  // Calculate the bar height relative to the highest amount
  const barHeight = (item.amount / highestAmount) * 150;
  bar.style.height = `${barHeight}px`;

  // Highlight today's bar
  if (item.day === today) {
    bar.classList.add("today");
  }

  // Create the day label
  const dayLabel = document.createElement("span");
  dayLabel.classList.add("day-label");
  dayLabel.textContent = item.day;

  // Put the tooltip and bar together
  const barArea = document.createElement("div");
  barArea.classList.add("bar-area");
  barArea.append(tooltip, bar);

  // Put the bar area and day label together
  barWrapper.append(barArea, dayLabel);

  // Add the completed bar to the chart
  chart.appendChild(barWrapper);
});
