function redraw_pitch(){

  d3v4.select("#pitch_plot_redraw").remove();
  svg_pitch = svg_pitch_init.attr("width", w_pitch)
                          .attr("height", h_pitch)
                          .attr("id", "pitch_plot")
                          .append("g")
                          .attr("id", "pitch_plot_redraw");

  draw_pitch();
}

function draw_pitch(){
  let div_pitchplot = document.getElementById("pitch_plot");
  let width_pitch = div_pitchplot.clientWidth;
  let height_pitch = div_pitchplot.clientHeight;
  let w_pitch
  let h_pitch
  let color_suisse = "red"
  let dict_color = { "suisse":"red", "allemagne":"black", "angleterre":"white", "arabie":"green", "algerie":"darkgreen", "australie":"darkblue", "belgique":"#eedc00", "bresil":"yellow", "colombie":"yellow", "costa":"#133e7c", "danemark":"darkred", "egypte":"black", "france":"blue", "iran":"darkgreen", "maroc":"darkred", "perou":"red", "pologne":"red", "portugal":"darkred", "russie":"blue", "espagne":"red", "suede":"darkblue", "tunisie":"red" };

  if (width_pitch/height_pitch < 1.6) {
    w_pitch = width_pitch;
    h_pitch = height_pitch;
    max_width_available = w_pitch
    if (w_pitch<=410){
      w_pitch = 410;
      h_pitch = height_pitch;
    }
  }
  else {
      w_pitch = 536;
      h_pitch = w_pitch/1.6;
  }

  let div_popup = d3v4.select("body")
                    .append("div")
                    .attr("id", "popup")
                    .attr("class", "tooltip")
                    .style("opacity", 0);




  let diff_line_pitch = 10

  let footballer_img_size = w_pitch/8
  svg_pitch.append("svg:image")
           .attr("xlink:href", "/static/worldcup/js/pitch.svg")
           .attr('height',h_pitch)
           .attr('width', w_pitch);

  let adjust_radius = 0

  // KEEPER
  x_keeper =  w_pitch/25
  y_keeper = h_pitch/2 - h_pitch/10
  let defs_keeper = svg_pitch.append("defs")
                      .attr("id", "imgdefs")
  let clipPath_keeper = defs_keeper.append('clipPath')
                                    .attr('id', 'clip-circle_keeper')
                                    .append("circle")
                                    .attr("r", (footballer_img_size/2) - adjust_radius)
                                    .attr("cx", x_keeper + (footballer_img_size/2))
                                    .attr("cy", y_keeper + (footballer_img_size/2))

  svg_pitch.append("circle")
           .style("fill", dict_color[keeper_country])
           .attr("r", (footballer_img_size/2) + 3)
           .attr("cx", x_keeper + (footballer_img_size/2))
           .attr("cy", y_keeper + (footballer_img_size/2));

   svg_pitch.append("image")
            .attr("x", x_keeper)
            .attr("y", y_keeper)
            .attr("height", footballer_img_size)
            .attr("width", footballer_img_size)
            .attr("xlink:href", "/static/worldcup/img/players/" + keeper_country + "/" + keeper_name + ".jpg")
            .attr("clip-path", "url(#clip-circle_keeper)")
            .on("mouseover",  function() {return mouseover_pitch(keeper_country, keeper_name, d3v4.event.pageX, d3v4.event.pageY)})
            .on("mouseout", function() {return mouseout_pitch()} );




   // CB1
   let x_cb1 = w_pitch/5.8
   let y_cb1 = h_pitch/1.9
   let defs_cb1 = svg_pitch.append("defs")
                       .attr("id", "imgdefs")
   let clipPath_cb1 = defs_cb1.append('clipPath')
                               .attr('id', 'clip-circle_cb1')
                               .append("circle")
                               .attr("r", (footballer_img_size/2) - adjust_radius)
                               .attr("cx", x_cb1 + (footballer_img_size/2))
                               .attr("cy", y_cb1 + (footballer_img_size/2));
   svg_pitch.append("circle")
            .style("fill", dict_color[defenders_country[0]])
            .attr("r", (footballer_img_size/2) + 3)
            .attr("cx", x_cb1 + (footballer_img_size/2))
            .attr("cy", y_cb1 + (footballer_img_size/2));

   svg_pitch.append("image")
            .attr("x", x_cb1)
            .attr("y", y_cb1)
            .attr("height", footballer_img_size)
            .attr("width", footballer_img_size)
            .attr("xlink:href", "/static/worldcup/img/players/" + defenders_country[0] + "/" + defenders_name[0] + ".jpg")
            .attr("clip-path", "url(#clip-circle_cb1)")
            .on("mouseover",  function() {return mouseover_pitch(defenders_country[0], defenders_name[0], d3v4.event.pageX, d3v4.event.pageY)})
            .on("mouseout", function() {return mouseout_pitch()} );



     // CB2
     let x_cb2 = w_pitch/5.8
     let y_cb2 = h_pitch - (h_pitch/1.9) - footballer_img_size
     let defs_cb2 = svg_pitch.append("defs")
                         .attr("id", "imgdefs")
     let clipPath_cb2 = defs_cb1.append('clipPath')
                                 .attr('id', 'clip-circle_cb2')
                                 .append("circle")
                                 .attr("r", (footballer_img_size/2) - adjust_radius)
                                 .attr("cx", x_cb2 + (footballer_img_size/2))
                                 .attr("cy", y_cb2+ (footballer_img_size/2));
    svg_pitch.append("circle")
             .style("fill", dict_color[defenders_country[1]])
             .attr("r", (footballer_img_size/2) + 3)
             .attr("cx", x_cb2 + (footballer_img_size/2))
             .attr("cy", y_cb2 + (footballer_img_size/2));

     svg_pitch.append("image")
              .attr("x", x_cb2)
              .attr("y", y_cb2)
              .attr("height", footballer_img_size)
              .attr("width", footballer_img_size)
              .attr("xlink:href", "/static/worldcup/img/players/" + defenders_country[1] + "/" + defenders_name[1] + ".jpg")
              .attr("clip-path", "url(#clip-circle_cb2)")
              .on("mouseover",  function() {return mouseover_pitch(defenders_country[1], defenders_name[1], d3v4.event.pageX, d3v4.event.pageY)})
              .on("mouseout", function() {return mouseout_pitch()} );


     // RB
     let x_rb = w_pitch/4.5
     let y_rb = h_pitch/1.3
     let defs_rb = svg_pitch.append("defs")
                         .attr("id", "imgdefs")
     let clipPath_rb = defs_rb.append('clipPath')
                                 .attr('id', 'clip-circle_rb')
                                 .append("circle")
                                 .attr("r", (footballer_img_size/2) - adjust_radius)
                                 .attr("cx", x_rb + (footballer_img_size/2))
                                 .attr("cy", y_rb+ (footballer_img_size/2));
     svg_pitch.append("circle")
              .style("fill", dict_color[defenders_country[2]])
              .attr("r", (footballer_img_size/2) + 3)
              .attr("cx", x_rb + (footballer_img_size/2))
              .attr("cy", y_rb + (footballer_img_size/2));

     svg_pitch.append("image")
              .attr("x", x_rb)
              .attr("y", y_rb)
              .attr("height", footballer_img_size)
              .attr("width", footballer_img_size)
              .attr("xlink:href", "/static/worldcup/img/players/" + defenders_country[2] + "/" + defenders_name[2] + ".jpg")
              .attr("clip-path", "url(#clip-circle_rb)")
              .on("mouseover",  function() {return mouseover_pitch(defenders_country[2], defenders_name[2], d3v4.event.pageX, d3v4.event.pageY)})
              .on("mouseout", function() {return mouseout_pitch()} );


      // LB
      let x_lb = w_pitch/4.5
      let y_lb = h_pitch - h_pitch/1.3 - footballer_img_size
      let defs_lb = svg_pitch.append("defs")
                          .attr("id", "imgdefs")
      let clipPath_lb = defs_lb.append('clipPath')
                                  .attr('id', 'clip-circle_lb')
                                  .append("circle")
                                  .attr("r", (footballer_img_size/2) - adjust_radius)
                                  .attr("cx", x_lb + (footballer_img_size/2))
                                  .attr("cy", y_lb + (footballer_img_size/2));
      svg_pitch.append("circle")
               .style("fill", dict_color[defenders_country[3]])
               .attr("r", (footballer_img_size/2) + 3)
               .attr("cx", x_lb + (footballer_img_size/2))
               .attr("cy", y_lb + (footballer_img_size/2));

      svg_pitch.append("image")
               .attr("x", x_lb)
               .attr("y", y_lb)
               .attr("height", footballer_img_size)
               .attr("width", footballer_img_size)
               .attr("xlink:href", "/static/worldcup/img/players/" + defenders_country[3] + "/" + defenders_name[3] + ".jpg")
               .attr("clip-path", "url(#clip-circle_lb)")
               .on("mouseover",  function() {return mouseover_pitch(defenders_country[3], defenders_name[3], d3v4.event.pageX, d3v4.event.pageY)})
               .on("mouseout", function() {return mouseout_pitch()} );


     // CM
     let x_cm = w_pitch/2 - w_pitch/7
     let y_cm = h_pitch/2 - h_pitch/10
     let defs_cm = svg_pitch.append("defs")
                         .attr("id", "imgdefs")
     let clipPath_cm = defs_cm.append('clipPath')
                                 .attr('id', 'clip-circle_cm')
                                 .append("circle")
                                 .attr("r", (footballer_img_size/2) - adjust_radius)
                                 .attr("cx", x_cm + (footballer_img_size/2))
                                 .attr("cy", y_cm + (footballer_img_size/2));
     svg_pitch.append("circle")
              .style("fill", dict_color[midfielders_country[0]])
              .attr("r", (footballer_img_size/2) + 3)
              .attr("cx", x_cm + (footballer_img_size/2))
              .attr("cy", y_cm + (footballer_img_size/2));

     svg_pitch.append("image")
              .attr("x", x_cm)
              .attr("y", y_cm)
              .attr("height", footballer_img_size)
              .attr("width", footballer_img_size)
              .attr("xlink:href", "/static/worldcup/img/players/" + midfielders_country[0] + "/" + midfielders_name[0] + ".jpg")
              .attr("clip-path", "url(#clip-circle_cm)")
              .on("mouseover",  function() {return mouseover_pitch(midfielders_country[0], midfielders_name[0], d3v4.event.pageX, d3v4.event.pageY)})
              .on("mouseout", function() {return mouseout_pitch()} );


      // RM
      let x_rm = w_pitch/2.1
      let y_rm = h_pitch/1.6
      let defs_rm = svg_pitch.append("defs")
                          .attr("id", "imgdefs")
      let clipPath_rm = defs_rm.append('clipPath')
                                  .attr('id', 'clip-circle_rm')
                                  .append("circle")
                                  .attr("r", (footballer_img_size/2) - adjust_radius)
                                  .attr("cx", x_rm + (footballer_img_size/2))
                                  .attr("cy", y_rm + (footballer_img_size/2));
      svg_pitch.append("circle")
               .style("fill", dict_color[midfielders_country[1]])
               .attr("r", (footballer_img_size/2) + 3)
               .attr("cx", x_rm + (footballer_img_size/2))
               .attr("cy", y_rm + (footballer_img_size/2));

      svg_pitch.append("image")
               .attr("x", x_rm)
               .attr("y", y_rm)
               .attr("height", footballer_img_size)
               .attr("width", footballer_img_size)
               .attr("xlink:href", "/static/worldcup/img/players/" + midfielders_country[1] + "/" + midfielders_name[1] + ".jpg")
               .attr("clip-path", "url(#clip-circle_rm)")
               .on("mouseover",  function() {return mouseover_pitch(midfielders_country[1], midfielders_name[1], d3v4.event.pageX, d3v4.event.pageY)})
               .on("mouseout", function() {return mouseout_pitch()} );


     // LM
     let x_lm = w_pitch/2.1
     let y_lm = h_pitch - h_pitch/1.6 - footballer_img_size
     let defs_lm = svg_pitch.append("defs")
                         .attr("id", "imgdefs")
     let clipPath_lm = defs_rm.append('clipPath')
                                 .attr('id', 'clip-circle_lm')
                                 .append("circle")
                                 .attr("r", (footballer_img_size/2) - adjust_radius)
                                 .attr("cx", x_lm + (footballer_img_size/2))
                                 .attr("cy", y_lm + (footballer_img_size/2));
    svg_pitch.append("circle")
             .style("fill", dict_color[midfielders_country[2]])
             .attr("r", (footballer_img_size/2) + 3)
             .attr("cx", x_lm + (footballer_img_size/2))
             .attr("cy", y_lm + (footballer_img_size/2));

     svg_pitch.append("image")
              .attr("x", x_lm)
              .attr("y", y_lm)
              .attr("height", footballer_img_size)
              .attr("width", footballer_img_size)
              .attr("xlink:href", "/static/worldcup/img/players/" + midfielders_country[2] + "/" + midfielders_name[2] + ".jpg")
              .attr("clip-path", "url(#clip-circle_lm)")
              .on("mouseover",  function() {return mouseover_pitch(midfielders_country[2], midfielders_name[2], d3v4.event.pageX, d3v4.event.pageY)})
              .on("mouseout", function() {return mouseout_pitch()} );


      // RW
      let x_rw = w_pitch - w_pitch/4
      let y_rw = h_pitch/1.4
      let defs_rw = svg_pitch.append("defs")
                          .attr("id", "imgdefs")
      let clipPath_rw = defs_rw.append('clipPath')
                                  .attr('id', 'clip-circle_rw')
                                  .append("circle")
                                  .attr("r", (footballer_img_size/2) - adjust_radius)
                                  .attr("cx", x_rw + (footballer_img_size/2))
                                  .attr("cy", y_rw + (footballer_img_size/2));
      svg_pitch.append("circle")
               .style("fill", dict_color[attackers_country[0]])
               .attr("r", (footballer_img_size/2) + 3)
               .attr("cx", x_rw + (footballer_img_size/2))
               .attr("cy", y_rw + (footballer_img_size/2));

      svg_pitch.append("image")
               .attr("x", x_rw)
               .attr("y", y_rw)
               .attr("height", footballer_img_size)
               .attr("width", footballer_img_size)
               .attr("xlink:href", "/static/worldcup/img/players/" + attackers_country[0] + "/" + attackers_name[0] + ".jpg")
               .attr("clip-path", "url(#clip-circle_rw)")
               .on("mouseover",  function() {return mouseover_pitch(attackers_country[0], attackers_name[0], d3v4.event.pageX, d3v4.event.pageY)})
               .on("mouseout", function() {return mouseout_pitch()} );


     // LW
     let x_lw = w_pitch - w_pitch/4
     let y_lw = h_pitch - h_pitch/1.4 - footballer_img_size
     let defs_lw = svg_pitch.append("defs")
                         .attr("id", "imgdefs")
     let clipPath_lw = defs_rw.append('clipPath')
                                 .attr('id', 'clip-circle_lw')
                                 .append("circle")
                                 .attr("r", (footballer_img_size/2) - adjust_radius)
                                 .attr("cx", x_lw + (footballer_img_size/2))
                                 .attr("cy", y_lw + (footballer_img_size/2));
    svg_pitch.append("circle")
             .style("fill", dict_color[attackers_country[1]])
             .attr("r", (footballer_img_size/2) + 3)
             .attr("cx", x_lw + (footballer_img_size/2))
             .attr("cy", y_lw + (footballer_img_size/2));

     svg_pitch.append("image")
              .attr("x", x_lw)
              .attr("y", y_lw)
              .attr("height", footballer_img_size)
              .attr("width", footballer_img_size)
              .attr("xlink:href", "/static/worldcup/img/players/" + attackers_country[1] + "/" + attackers_name[1] + ".jpg")
              .attr("clip-path", "url(#clip-circle_lw)")
              .on("mouseover",  function() {return mouseover_pitch(attackers_country[1], attackers_name[1], d3v4.event.pageX, d3v4.event.pageY)})
              .on("mouseout", function() {return mouseout_pitch()} );


      // STRIKER
      let x_striker = w_pitch - w_pitch/5
      let y_striker = h_pitch/2 - h_pitch/10
      let defs_striker = svg_pitch.append("defs")
                          .attr("id", "imgdefs")
      let clipPath_striker = defs_striker.append('clipPath')
                                  .attr('id', 'clip-circle_striker')
                                  .append("circle")
                                  .attr("r", (footballer_img_size/2) - adjust_radius)
                                  .attr("cx", x_striker + (footballer_img_size/2))
                                  .attr("cy", y_striker + (footballer_img_size/2));
      svg_pitch.append("circle")
               .style("fill", dict_color[attackers_country[2]])
               .attr("r", (footballer_img_size/2) + 3)
               .attr("cx", x_striker + (footballer_img_size/2))
               .attr("cy", y_striker + (footballer_img_size/2));

      svg_pitch.append("image")
               .attr("x", x_striker)
               .attr("y", y_striker)
               .attr("height", footballer_img_size)
               .attr("width", footballer_img_size)
               .attr("xlink:href", "/static/worldcup/img/players/" + attackers_country[2] + "/" + attackers_name[2] + ".jpg")
               .attr("clip-path", "url(#clip-circle_striker)")
               .on("mouseover",  function() {return mouseover_pitch(attackers_country[2], attackers_name[2], d3v4.event.pageX, d3v4.event.pageY)})
               .on("mouseout", function() {return mouseout_pitch()} );


       /* La fonction mouseover */
       function mouseover_pitch(country, name, x, y) {
          div_popup.transition()
                   .duration(200)
                   .style("opacity", .9);
          div_popup.html(name.charAt(0).toUpperCase() + name.slice(1) + " " + "<img src='/static/worldcup/img/flags/"+country+".png' style='height:15px'/>")
                   .style("left", x + "px")
                   .style("top", y + "px");
       }

       /* La fonction mouseover */
       function mouseout_pitch() {
         div_popup.transition()
                  .duration(500)
                  .style("opacity", 0);
       }
}
