var color = d3.scaleSequential([8, 0], d3.interpolateMagma)
var format = d3.format(",d")
var height = 1075
var width = 1075

const svg = d3.select('svg')
.style("font", "10px sans-serif")
.style("width", width)
.style("height", height)
.style("overflow", "visible");



svg.call(d3.zoom()
.scaleExtent([1 / 10, 8])
.on("zoom", zoomed));
var graphBox = svg.append("g");

function zoomed() {
  graphBox.attr("transform", d3.event.transform);
}



let cate1 = ['AA', 'AB', 'AC', 'AD', 'AE']
let cate2 = ['BA', 'BB', 'BC', 'BD', 'BE']

let nodes = []

for (var i = 200; i--;) {
  let random1 = Math.floor(Math.random() * 5)
  let random2 = Math.floor(Math.random() * 5)
  nodes.push({
    value: i,
    self: i,
    cate1: cate1[random1],
    cate2: cate2[random2],
  })
}

var roopData = d3.rollup(nodes,
  // v => d3.sum(v, d => d.value),
  v => d3.sum(v, d => 1),
  // d => d.cate1,
  // d => d.cate2,
  d => d.self)

var root = d3.hierarchy([null, roopData],
  ([, value]) => value.size && Array.from(value))
  .sum(([, value]) => value)
  .sort((a, b) => b.value - a.value)


var pack = () => d3.pack()
  .size([width, height])
  .padding(1)
  (root)

const rootData = pack(nodes);

render(rootData)

function swtichRender(){

  var roopData = d3.rollup(nodes,
    // v => d3.sum(v, d => d.value),
    v => d3.sum(v, d => 1),
    d => d.cate1,
    d => d.cate2,
    d => d.self)
  
  var root = d3.hierarchy([null, roopData],
    ([, value]) => value.size && Array.from(value))
    .sum(([, value]) => value)
    .sort((a, b) => b.value - a.value)
  
  
  var pack = () => d3.pack()
    .size([width, height])
    .padding(1)
    (root)
  
  const rootData = pack(nodes);
  
  render(rootData)

}


function render(rootData) {

  graphBox.selectAll('g').remove()

  graphBox.append("g")
    .attr("fill", "#ccc")
    .selectAll("circle")
    .data(rootData.leaves())
    .join("circle")
    .attr("transform", d => `translate(${d.x},${d.y})`)
    .attr("r", d => d.r)
    .append("title")
    .text(d => `${d.ancestors().map(d => d.data[0]).reverse().join("/")}\n${format(d.value)}`);

  graphBox.append("g")
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

function init(){
  
}


document.querySelector('.other').addEventListener('click', () => {
  swtichRender()
})