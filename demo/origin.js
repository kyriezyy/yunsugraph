var color = d3.scaleSequential([8, 0], d3.interpolateMagma)
  var format = d3.format(",d")
  var height = 975
  var width = 975
  
  d3.csv("./h1b_datahubexport-2019.csv", d3.autoType).then(data=>{

   
  var roopData = d3.rollup(data, 
      v => d3.sum(v, d => d["Initial Approvals"] + d["Initial Denials"] + d["Continuing Approvals"] + d["Continuing Denials"]),
      d => d.State,
      d => d.City, 
      d => d.Employer)

  // console.log(roopData)

  var root = d3.hierarchy([null, roopData], 
    ([, value]) => value.size && Array.from(value))
    .sum(([, value]) => value)
    .sort((a, b) => b.value - a.value)

  var pack = () => d3.pack()
    .size([width, height])
    .padding(1)
    (root)

  const rootData = pack(data);
  render(rootData)
  });



 
 


  function render(rootData){

  const svg = d3.select('svg')
    .style("font", "10px sans-serif")
    .style("width", width)
    .style("height", height)
    .style("overflow", "visible");

  svg.append("g")
    .attr("fill", "#ccc")
    .selectAll("circle")
    .data(rootData.leaves())
    .join("circle")
    .attr("transform", d => `translate(${d.x},${d.y})`)
    .attr("r", d => d.r)
    .append("title")
    .text(d => `${d.ancestors().map(d => d.data[0]).reverse().join("/")}\n${format(d.value)}`);

  svg.append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .selectAll("text")
    .data(rootData.leaves().filter(d => d.r > 2))
    .join("text")
    .attr("transform", d => `translate(${d.x},${d.y}) scale(${d.r / 30})`)
    .selectAll("tspan")
    .data(d => (d.data[0] + "").split(/\s+/g))
    .join("tspan")
    .attr("x", 0)
    .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
    .text(d => d);

  }
