// 1. Data
const menuItems = ["1", "2", "3", "fat", "Once upon a time I had a shoe, this shoe was very nice"];

// 2. Select elements
const menu = d3.select("#dropdown-menu");
const button = d3.select("#dropdown-btn");

// 3. Hide menu initially (in case CSS missed it)
menu.classed("hidden", true);

// 4. Bind data to menu items
menu.selectAll("li")
    .data(menuItems)
    .join("li")
    .text(d => d)
    // Dynamic behaviors
    .on("mouseover", function() {
        d3.select(this).style("background-color", "#1fb3d898");
    })
    .on("mouseout", function() {
        d3.select(this).style("background-color", "white");
    })
    .on("click", function(event, d) {
        menu.classed("hidden", true); // optionally hide menu on selection
        button.text(d + " ▼");
 // update button text to selected item
    });

// 5. Toggle menu visibility on button click
button.on("click", () => {
    if (menu.classed("hidden")) {
        menu.classed("hidden", false)
            .style("height", "0px")   // start collapsed
            .transition()
            .duration(100)
            .style("height", menu.node().scrollHeight + "px"); // expand to full
    } else {
        menu.transition()
            .duration(100)
            .style("height", "0px")     // collapse
            .on("end", () => menu.classed("hidden", true));
    }
});

