function redraw_players(){
  if (dataset_players.length) {
    let w = div_players.clientWidth;
    let h = 500

    const innerW = w - margin_players.left - margin_players.right;
    const innerH = h - margin_players.top - margin_players.bottom;

    //Create SVG element
    d3v4.select("#plot_players_redraw").remove();
    svg_players = svg_players_init.attr("width", w+40) //Pour afficher les valeurs en fin de courbe
                            .attr("height", h)
                            .attr("id", "players_chart")
                            .append("g")
                            .attr("id", "plot_players_redraw")
                            .attr("transform", `translate(${margin_players.left}, ${margin_players.top})`);

    x_players.range([0, innerW]);
    y_players.range([innerH, 0]);
    draw_players(dataset_players, innerW, innerH)
  }
}


function draw_players(data, innerW, innerH) {
      let dict_color = { "Switzerland":"red", "Germany":"#00ADB5", "England":"#CF081F", "Arabia":"#006C35", "Australia":"#003739", "Belgium":"#EF3340", "Brazil":"#002776", "Colombia":"#003893", "Costa":"#CE1126", "Denmark":"#C60C30", "Egypt":"#CE1126", "France":"#002395", "Iran":"#DA0000", "Morocco":"#C1272D", "Peru":"#D91023", "Poland":"crimson", "Portugal":"red", "Russia":"#D52B1E", "Spain":"#C60B1E", "Sweden":"#006BA8", "Tunisia":"#E70013", "Senegal": "#00853F", "Uruguay":"#84b0dc" };

      /* On créé une variable courbe pour les sales */
      // let valuelineSales = d3v4.line()
      //                          .x(d => x_plot(d.Time))
      //                          .y(d => y_plot(d.Negative))
      //                          .curve(d3v4.curveCardinal); // Pour avoir des courbes linéaires
      /* On créé une variable courbe pour les deliveries */

      let valueline_Player1 = d3v4.line()
                                   .x(d => x_players(d.Time))
                                   .y(d => y_players(d.Percentage1))
                                   .curve(d3v4.curveCardinal);

      let valueline_Player2 = d3v4.line()
                                   .x(d => x_players(d.Time))
                                   .y(d => y_players(d.Percentage2))
                                   .curve(d3v4.curveCardinal);

      let valueline_Player3 = d3v4.line()
                                   .x(d => x_players(d.Time))
                                   .y(d => y_players(d.Percentage3))
                                   .curve(d3v4.curveCardinal);

      let valueline_Player4 = d3v4.line()
                                   .x(d => x_players(d.Time))
                                   .y(d => y_players(d.Percentage4))
                                   .curve(d3v4.curveCardinal);

      let valueline_Player5 = d3v4.line()
                                   .x(d => x_players(d.Time))
                                   .y(d => y_players(d.Percentage5))
                                   .curve(d3v4.curveCardinal);


      /* On ajoute groupé à la fenêtre initiale un axe à x au bon format (date) */
      svg_players.append("g")
              .attr("class", "axis")
              .attr("transform", "translate(0," + innerH + ")")
              .call(d3v4.axisBottom(x_players)
              .tickFormat(format_date))
              .selectAll("text")
              .style("text-anchor", "end")
              .attr("dx", "-.8em")
              .attr("dy", ".15em")
              .attr("transform", "rotate(-65)");

      /* On ajoute groupé à la fenêtre initiale un axe à y */
      svg_players.append("g")
              .attr("class", "axis")
              .call(d3v4.axisLeft(y_players));

      console.log("data", data)
      console.log("valueline_Player1", valueline_Player1)

      /* On dessine la variable Player 1 */
      svg_players.append("path")
              .data([data])
              .attr("class", "line")
              .attr("id", "player1")
              .attr("d", valueline_Player1)
              .style("stroke", dict_color[Country_1])
              .transition() // On ajoute ces lignes pour dessiner les courbes en direct
              .duration(2000)
              .attrTween("stroke-dasharray", function() {
                  var len = this.getTotalLength();
                  return function(t) { return (d3v4.interpolateString("0," + len, len + ",0"))(t) };
              });

      /* On dessine la variable Player 2 */
      svg_players.append("path")
              .data([data])
              .attr("class", "line")
              .attr("id", "player2")
              .attr("d", valueline_Player2)
              .style("stroke", dict_color[Country_2])
              .transition() // On ajoute ces lignes pour dessiner les courbes en direct
              .duration(2000)
              .attrTween("stroke-dasharray", function() {
                  var len = this.getTotalLength();
                  return function(t) { return (d3v4.interpolateString("0," + len, len + ",0"))(t) };
              });

      /* On dessine la variable Player 3 */
      svg_players.append("path")
              .data([data])
              .attr("class", "line")
              .attr("id", "player3")
              .attr("d", valueline_Player3)
              .style("stroke", dict_color[Country_3])
              .transition() // On ajoute ces lignes pour dessiner les courbes en direct
              .duration(2000)
              .attrTween("stroke-dasharray", function() {
                  var len = this.getTotalLength();
                  return function(t) { return (d3v4.interpolateString("0," + len, len + ",0"))(t) };
              });

    /* On dessine la variable Player 4 */
    svg_players.append("path")
            .data([data])
            .attr("class", "line")
            .attr("id", "player4")
            .attr("d", valueline_Player4)
            .style("stroke", dict_color[Country_4])
            .transition() // On ajoute ces lignes pour dessiner les courbes en direct
            .duration(2000)
            .attrTween("stroke-dasharray", function() {
                var len = this.getTotalLength();
                return function(t) { return (d3v4.interpolateString("0," + len, len + ",0"))(t) };
            });

    /* On dessine la variable Player 5 */
    svg_players.append("path")
            .data([data])
            .attr("class", "line")
            .attr("id", "player5")
            .attr("d", valueline_Player5)
            .style("stroke", dict_color[Country_5])
            .transition() // On ajoute ces lignes pour dessiner les courbes en direct
            .duration(2000)
            .attrTween("stroke-dasharray", function() {
                var len = this.getTotalLength();
                return function(t) { return (d3v4.interpolateString("0," + len, len + ",0"))(t) };
            });

      /* Par dessus le chart, on ajoute un rectangle invisible */
      /* Une variable focus sera initialisée à null quand la souris sera sur le rectangle
      * puis mooifiée dans mousemove sinon elle sera null est donc non visible
      * Focus c'est le rond qu'on verra sur notre courbe */
      svg_players.append("rect")
              .attr("class", "overlay")
              .attr("width", innerW)
              .attr("height", innerH);
              // .on("mouseover", () => (focus_player1.style("display", null)) & (focus_player2.style("display", null)) & (focus_player3.style("display", null)) & (focus_player4.style("display", null)) & (focus_player5.style("display", null)))
              // .on("mouseout", () => (focus_player1.style("display", "none")) & (focus_player2.style("display", "none")) & (focus_player3.style("display", "none")) & (focus_player4.style("display", "none")) & (focus_player5.style("display", "none")))
              // .on("mousemove", mousemove);

      // Initialisation de focus
      // let focus_player1 = svg_players.append("g")
      //                                //.attr("class", "focus_deliveries")
      //                                .style("stroke", "blue")
      //                                .style("display", "none");
      //
      // let focus_player2 = svg_players.append("g")
      //                                //.attr("class", "focus_deliveries")
      //                                .style("stroke", "red")
      //                                .style("display", "none");
      //
      // let focus_player3 = svg_players.append("g")
      //                                //.attr("class", "focus_deliveries")
      //                                .style("stroke", "green")
      //                                .style("display", "none");
      //
      // let focus_player4 = svg_players.append("g")
      //                                //.attr("class", "focus_deliveries")
      //                                .style("stroke", "green")
      //                                .style("display", "none");
      //
      // let focus_player5 = svg_players.append("g")
      //                                //.attr("class", "focus_deliveries")
      //                                .style("stroke", "green")
      //                                .style("display", "none");


      // Dessin de la variable focus comme étant un cercle de rayon 4.5 px
      // focus_player1.append("circle")
      //                 .attr("r", 4.5);
      //
      // focus_player1.append("text")
      //                 .attr("x", 9)
      //                 .attr("dy", ".35em");
      //
      // focus_player2.append("circle")
      //                 .attr("r", 4.5);
      //
      // focus_player2.append("text")
      //                 .attr("x", 9)
      //                 .attr("dy", ".35em");
      //
      // focus_player3.append("circle")
      //                 .attr("r", 4.5);
      //
      // focus_player3.append("text")
      //                 .attr("x", 9)
      //                 .attr("dy", ".35em");
      //
      // focus_player4.append("circle")
      //                 .attr("r", 4.5);
      //
      // focus_player4.append("text")
      //                 .attr("x", 9)
      //                 .attr("dy", ".35em");
      //
      // focus_player5.append("circle")
      //                 .attr("r", 4.5);
      //
      // focus_player5.append("text")
      //                 .attr("x", 9)
      //                 .attr("dy", ".35em");



      let pos_player1 = svg_players.append("defs")
                          .attr("id", "imgdefs")

      console.log("1", y_players(Percentage_1))
      console.log("2", Percentage_1)
      let clipPath_player1 = pos_player1.append('clipPath')
                                  .attr('id', 'clip-circle_player1')
                                  .append("circle")
                                  .attr("r", - 5 + (56/2))
                                  .attr("cx", x_players(older_date) - 100 + (56/2))
                                  .attr("cy", y_players(Percentage_1) -30 + (56/2));

     console.log(x_players(older_date))
     svg_players.append("circle")
              .style("fill", dict_color[Country_1])
              .attr("r", -2 + (56/2))
              .attr("cx", x_players(older_date) - 100 + (56/2))
              .attr("cy", y_players(Percentage_1) - 2);

      svg_players.append("image")
               .attr("x", x_players(older_date) - 100)
               .attr("y", y_players(Percentage_1) - 30)
               .attr("height", 56)
               .attr("width", 56)
               .attr("xlink:href", "/static/worldcup/img/players/" + Country_1 + "/" + Name_1 + ".jpg")
               .attr("clip-path", "url(#clip-circle_player1)");



      let pos_player2 = svg_players.append("defs")
                          .attr("id", "imgdefs")
      let clipPath_player2 = pos_player2.append('clipPath')
                                  .attr('id', 'clip-circle_player2')
                                  .append("circle")
                                  .attr("r", - 5 + (56/2))
                                  .attr("cx", x_players(older_date) - 100 + (56/2))
                                  .attr("cy", y_players(Percentage_2) -30 + (56/2));

     svg_players.append("circle")
              .style("fill", dict_color[Country_2])
              .attr("r", -2 + (56/2))
              .attr("cx", x_players(older_date) - 100 + (56/2))
              .attr("cy", y_players(Percentage_2) - 2);

      svg_players.append("image")
               .attr("x", x_players(older_date) - 100)
               .attr("y", y_players(Percentage_2) - 30)
               .attr("height", 56)
               .attr("width", 56)
               .attr("xlink:href", "/static/worldcup/img/players/" + Country_2 + "/" + Name_2 + ".jpg")
               .attr("clip-path", "url(#clip-circle_player2)");



      let pos_player3 = svg_players.append("defs")
                          .attr("id", "imgdefs")
      let clipPath_player3 = pos_player3.append('clipPath')
                                  .attr('id', 'clip-circle_player3')
                                  .append("circle")
                                  .attr("r", - 5 + (56/2))
                                  .attr("cx", x_players(older_date) - 100 + (56/2))
                                  .attr("cy", y_players(Percentage_3) -30 + (56/2));

     svg_players.append("circle")
              .style("fill", dict_color[Country_3])
              .attr("r", -2 + (56/2))
              .attr("cx", x_players(older_date) - 100 + (56/2))
              .attr("cy", y_players(Percentage_3) - 2);

      svg_players.append("image")
               .attr("x", x_players(older_date) - 100)
               .attr("y", y_players(Percentage_3) - 30)
               .attr("height", 56)
               .attr("width", 56)
               .attr("xlink:href", "/static/worldcup/img/players/" + Country_3 + "/" + Name_3 + ".jpg")
               .attr("clip-path", "url(#clip-circle_player3)");



      let pos_player4 = svg_players.append("defs")
                          .attr("id", "imgdefs")
      let clipPath_player4 = pos_player4.append('clipPath')
                                  .attr('id', 'clip-circle_player4')
                                  .append("circle")
                                  .attr("r", - 5 + (56/2))
                                  .attr("cx", x_players(older_date) - 100 + (56/2))
                                  .attr("cy", y_players(Percentage_4) -30 + (56/2));

     svg_players.append("circle")
              .style("fill", dict_color[Country_4])
              .attr("r", -2 + (56/2))
              .attr("cx", x_players(older_date) - 100 + (56/2))
              .attr("cy", y_players(Percentage_4) - 2);

      svg_players.append("image")
               .attr("x", x_players(older_date) - 100)
               .attr("y", y_players(Percentage_4) - 30)
               .attr("height", 56)
               .attr("width", 56)
               .attr("xlink:href", "/static/worldcup/img/players/" + Country_4 + "/" + Name_4 + ".jpg")
               .attr("clip-path", "url(#clip-circle_player4)");


     let pos_player5 = svg_players.append("defs")
                         .attr("id", "imgdefs")
     let clipPath_player5 = pos_player5.append('clipPath')
                                 .attr('id', 'clip-circle_player5')
                                 .append("circle")
                                 .attr("r", - 5 + (56/2))
                                 .attr("cx", x_players(older_date) - 100 + (56/2))
                                 .attr("cy", y_players(Percentage_5) -30 + (56/2));

    svg_players.append("circle")
             .style("fill", dict_color[Country_5])
             .attr("r", -2 + (56/2))
             .attr("cx", x_players(older_date) - 100 + (56/2))
             .attr("cy", y_players(Percentage_5) - 2);

     svg_players.append("image")
              .attr("x", x_players(older_date) - 100)
              .attr("y", y_players(Percentage_5) - 30)
              .attr("height", 56)
              .attr("width", 56)
              .attr("xlink:href", "/static/worldcup/img/players/" + Country_5 + "/" + Name_5 + ".jpg")
              .attr("clip-path", "url(#clip-circle_player5)");

      /* La fonction mousemove */
      function mousemove() {
          let x0 = x_players.invert(d3v4.mouse(this)[0]),
              i = bisect_date_players(data, x0, 1),
              d0 = data[i - 1],
              d1 = data[i],
              d = x0 - d0.Time > d1.Time - x0 ? d1 : d0;

          // focus_player1.attr("transform", "translate(" + x_players(d.Time) + "," + y_players(d.Percentage1) + ")");
          // focus_player1.select("text").text(d.Percentage1);
          //
          // focus_player2.attr("transform", "translate(" + x_players(d.Time) + "," + y_players(d.Percentage2) + ")");
          // focus_player2.select("text").text(d.Percentage2);
          //
          // focus_player3.attr("transform", "translate(" + x_players(d.Time) + "," + y_players(d.Percentage3) + ")");
          // focus_player3.select("text").text(d.Percentage3);
          //
          // focus_player4.attr("transform", "translate(" + x_players(d.Time) + "," + y_players(d.Percentage4 )+ ")");
          // focus_player4.select("text").text(d.Percentage4);
          //
          // focus_player5.attr("transform", "translate(" + x_players(d.Time) + "," + y_players(d.Percentage5) + ")");
          // focus_player5.select("text").text(d.Percentage5);
      }

  }
