

function circle(svg, x,y,r){
    var svgns = "http://www.w3.org/2000/svg";
    var circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
    circle.setAttributeNS(null, 'r', r);
    circle.setAttributeNS(null, 'style', 'fill:grey;' );
  /*  circle.onclick = function(){
        s = 0;
        svg.childNodes.forEach(c => {
            if(c==circle){
                console.log(s);
            }
            s += 1;
        });
    }*/
    //circle.innerHTML = '<animate attributeName="r" begin="0s" dur="1s" repeatCount="indefinite" from="2" to="5"/><animate attributeName="r" begin="1s" dur="1s" repeatCount="indefinite" from="5" to="2"/>';
    svg.appendChild(circle);
    return circle;
}

function line(svg, x1, y1, x2, y2, w){
    var line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x1);
    line.setAttribute('y1',y1);
    line.setAttribute('x2',x2);
    line.setAttribute('y2',y2);
    line.setAttribute("stroke", "grey");
    line.setAttribute("opacity", 0.1);
    svg.appendChild(line);
    return line;

}





function create_net(containerId){

    container = document.getElementById(containerId);
    container.style.width = '100%';

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.innerHTML += '<defs><linearGradient id="e" x1="0" y1="0" x2="0" y2="680" gradientUnits="userSpaceOnUse"><stop stop-color="steelblue" offset="0.8" /><stop stop-color="rgb(50,50,50)" offset="0.9" /></linearGradient></defs>'
    svg.setAttribute("id", "svg_element")
    svg.setAttribute("width", '100%');
    svg.setAttribute("viewBox", '0 0 1920 680');
    
    document.getElementById(containerId).appendChild(svg);

    
    for (let i = 0; i < pos_data.length-1; i++) {
        var c = circle(svg, pos_data[i][0], pos_data[i][1], 2);
        c.setAttributeNS(null, 'class', 'net_circle');
    }

   /* for (let i = 0; i < 10; i++) {
        var lin = line(svg, 0, 0, 1920/11*(i+1), 680, 1);
        lin.setAttribute("stroke-width", 0);
        lin.setAttribute("opacity", 1);
        lin.setAttribute("stroke", 'url(#e)');
        menu_lines.push(lin);

        var circ = circle(svg, 1920/11*(i+1), 680, 10)
        circ.setAttributeNS(null, 'style', 'fill:rgb(50,50,50);' );
        menu_circles.push(circ);
        
        

    }*/


}


function show_image(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.setAttribute("width", '100%');
    //img.style.position = "absolute";
    //img.style.top = "30px";
    

    // This next line will just add it to the <body> tag
    document.getElementById('img_container').appendChild(img);

}

function add_menu_entry(label, content){
    var container = document.getElementById('menu_container');
    container.innerHTML += "<span id='"+label+"' style='margin-left:20px; height:30px; line-height:30px; cursor:pointer;'>"+label+"</span>";

    var element = container.childNodes[container.childElementCount-1];
    

    

    
    

}

