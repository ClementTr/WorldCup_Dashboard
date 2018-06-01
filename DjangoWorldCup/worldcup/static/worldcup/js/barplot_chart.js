function redraw_barplot(){
    let div_barplot = document.getElementById("bar_plot");
    let w = div_barplot.clientWidth;
    let h = 250

    //Create SVG element
    d3v4.select("#bar_plot_redraw").remove();
    svg_barplot = svg_barplot_init.attr("width", w+40) //Pour afficher les valeurs en fin de courbe
                              .attr("height", h)
                              .attr("id", "bar_plot")
                              .append("g")
                              .attr("id", "bar_plot_redraw")
                              .attr("transform", `translate(${margin_barplot.left}, ${margin_barplot.top})`);

    x.range([0, w]);
    y.range([h, 0])
      .padding(0.4);

    draw_barplot()
}

function draw_barplot(){
   svg_barplot.append("g")
           .call(d3v4.axisLeft(y));

   x.domain([0, 100]);
   y.domain(dataset_barplot.map(function(d) { return d.key; }));

   svg_barplot.selectAll(".bar")
           .data(dataset_barplot)
           .enter()
           .append("rect")
           .attr("class", "bar")
           .attr("fill", function(d) { return d.color })
           .attr("x", 0)
           .attr("height", y.bandwidth())
           .attr("y", function(d) { return y(d.key) + 2 })
           .attr("width", function(d) { return 0 })
           .transition()
           .duration(2000)
           .attr("width", function(d){ return x(d.value) });

   svg_barplot.selectAll(".bar")
              .data(dataset_barplot)
              .on("mouseover", function(d) { console.log(d.key) })
              .on("mouseout", function(d) {console.log("out")});


    let text_country = svg_barplot.append("g")
                                  .attr("font-size", 15)
                                  .attr("font-family", "sans-serif");

    let text_description = svg_barplot.append("g")
                                   .attr("font-size", 15)
                                   .attr("font-family", "sans-serif");

    text_description.selectAll(".bar")
                    .data(dataset_barplot)
                    .enter()
                    .append("text")
                    .attr("x", 5)
                    .attr("y", function(d) { return y(d.key) })
                    .text(" ")
                    .transition()
                    .duration(1500)
                    .attr("x", function(d) { return x(d.value) - 10 })
                    .attr("y", function(d) { return y(d.key) })
                    .delay(1500)
                    .text(function(d) { return d.value });


    function mouseover(){
      console.log("over")
      console.log()
    }
}
