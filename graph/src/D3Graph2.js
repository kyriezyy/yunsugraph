import * as d3 from 'd3';

const colorMap = {
  客户: '#336666',
  产品: '#333399',
  销售: '#660066',
  机构: '#000066',
  活动: '#006600',
};

const customerColorMap = {
  已购客户: '#336666',
  潜在客户: '#006600',
  复购客户: '#660066',
};

const icons = {
  客户: '/static/kehu.png',
  产品: '/static/chanpin.png',
  销售: '/static/xiaoshou.png',
  机构: '/static/jigou.png',
  活动: '/static/huodong.png',
};
const lineColors = {
  雇佣: '#0000FF',
  举办: '#00FF33',
  销售: '#6600FF',
  推荐: '#FF3399',
  出售给: '#CCCC66',
  服务: '#99FF99',
  相关: '#CC9900',
  参与: '#993333',
};

class D3Graph {
  constructor(svgId) {
    this.svg = d3.select(svgId);
    this.width = +this.svg.attr('width');
    this.height = +this.svg.attr('height');
    // 创建箭头
    this.svg.append('marker')
    // .attr("id", function(d) { return d; })
      .attr('id', 'resolved')
    // .attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('viewBox', '0 -5 10 10')// 坐标系的区域
      .attr('refX', 10)// 箭头坐标
      .attr('refY', 0)
      .attr('markerWidth', 6)// 标识的大小
      .attr('markerHeight', 6)
      .attr('orient', 'auto')// 绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr('stroke-width', 2)// 箭头宽度
      .append('path')
      .attr('d', 'M0,-4L6,0L0,4')// 箭头的路径
      .attr('fill', '#777');// 箭头颜色;

    this.graphBox = this.svg.append('g');
    this.linksBox = this.graphBox.append('g');
    this.nodesBox = this.graphBox.append('g');
    this.svg.call(d3.zoom()
      .scaleExtent([1 / 8, 8])
      .on('zoom', this.zoomed));

    this.simulation = d3.forceSimulation()
      .alpha(0.5)
      .velocityDecay(0.7)
      .force('collision', d3.forceCollide().radius(40)) // 决定线的长度已经节点之间的间距
      .force('link', d3.forceLink().distance(400).strength(0.4)) // 决定线的长度已经节点之间的间距
      .force('charge', d3.forceManyBody()) // 节点是否所在一起 相互吸引 相互排斥相关
      .force('center', d3.forceCenter(this.width / 2, this.height / 2)); // 设置节点中心
  }

  graphData = {
    nodes: [],
    links: [],
  }


  zoomed =() => {
    this.graphBox.attr('transform', d3.event.transform);
  }

  addNodes = (nodes, links, centerId) => {
    // const oldNodeIds = this.graphData.nodes.map(item => item.id);
    // const newNodeIds = nodes.map(item => item.id);
    // const centerNode = this.graphData.nodes.find(node => node.id === centerId);
    // const oldNodes = this.graphData.nodes.filter(node => newNodeIds.includes(node.id));

    // const newNodes = nodes.filter(node => !oldNodeIds.includes(node.id));

    // // 节点去重
    // if (centerId && centerNode) {
    //   // 过滤掉已经存在的节点
    //   newNodes.forEach((node) => {
    //     node.x = centerNode.x;
    //     node.y = centerNode.y;
    //   });
    //   centerNode.fx = centerNode.x;
    //   centerNode.fy = centerNode.y;
    // }

    // 节点


    // this.graphData.nodes = this.graphData.nodes.concat(nodes);
    // this.graphData.links = this.graphData.links.concat(links);
    this.graphData.nodes = nodes;
    this.graphData.links = links;

    this.simulation.alphaTarget(0.3).restart();
    this.render();
    setTimeout(() => {
      this.simulation.alphaTarget(0).stop();
    }, 12000);
  }

  render = () => {
    const nodes = this.graphData.nodes;
    // nodes.forEach((item) => {
    //   delete item.index;
    // });
    const nodeById = d3.map(nodes, d => d.id);
    let links = this.graphData.links;
    const bilinks = [];
    const nodeIds = nodes.map(item => item.id);
    links = links.filter(item => item.source && item.target);
    links = links.filter((item) => {
      if (typeof item.source === 'string') {
        return nodeIds.includes(`${item.source}`) && nodeIds.includes(`${item.target}`);
      }
      return nodeIds.includes(item.source.id) && nodeIds.includes(item.target.id);
    });
    links.forEach((link) => {
      if (typeof link.source === 'string') {
        link.source = nodeById.get(link.source);
      }
      if (typeof link.target === 'string') {
        link.target = nodeById.get(link.target);
      }
      bilinks.push([link.source, link.target, link]);
    });

    this.graphData.bilinks = bilinks;


    const linksData = this.linksBox
      .selectAll('.link')
      .data(bilinks);

    const linksEnter = linksData.enter()
      .append('path')
      .attr('class', 'link')
      // .style('stroke', d => lineColors[d[2].relation])
      // .style('stroke', 'red')
      .attr('marker-end', 'url(#resolved)');

    linksData.exit().remove();

    this.linksData = linksEnter.merge(linksData);


    const drag = d3.drag()
      .on('start', this.dragstarted)
      .on('drag', this.dragged)
      .on('end', this.dragended);

    const nodesData = this.nodesBox
      .selectAll('.node')
      .data(nodes, d => d.id);

    const nodesEnter = nodesData
      .enter()
      .append('g')
      .attr('class', 'node')
      .on('click', (d) => {
        // loadNodes(d.id);
        if (this.onClickNode) {
          this.onClickNode(d);
        }
      })
      .call(drag);

    nodesData.exit().remove();

    const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    nodesEnter
      .append('circle')
      .attr('r', 16)
      .attr('fill', d => colorMap[d.idtype]);


    nodesEnter
      .append('image')
      .attr('xlink:href', d => icons[d.idtype])
      .attr('x', -8)
      .attr('y', -8)
      .attr('width', 16)
      .attr('height', 16);

    this.nodesData = nodesEnter.merge(nodesData);

    this.simulation.nodes(nodes).on('tick', this.ticked); // 把node画在画布上

    this.simulation.force('link').links(links); // 把link画在画布上
  }

  selectProduct = () => {
    const mainProductNodeData = this.graphData.nodes.find(i => i.id === '01--0000');
    // console.log(mainProductNode);
    const mainProductNode = d3.select(`.node:nth-child(${mainProductNodeData.index + 1})`);
    mainProductNode.select('circle').attr('r', 45);
    mainProductNode.select('image').attr('x', -15)
      .attr('y', -15)
      .attr('width', 30)
      .attr('height', 30);

    const bilinks = this.graphData.bilinks;

    this.linksBox
      .selectAll('.link')
      .data(bilinks).style('stroke', (d) => {
        if (d[0].id === '01--0000' || d[1].id === '01--0000') {
          return 'red';
        }
        return '#777';
      });
  }


  selectCustomer = () => {
    const nodesData = this.nodesBox
      .selectAll('.node')
      .data(this.graphData.nodes, d => d.id);

    nodesData.select('circle').attr('fill', (d) => {
      if (d.id === '01--0000') {
        return colorMap[d.idtype];
      }
      if (d.idtype === '客户') {
        return customerColorMap[d.category];
      }
      return '#e0e0e0';
    }).attr('r', (d) => {
      if (d.idtype === '客户') {
        return 10 + d.score * 2;
      }
      return 16;
    });
    // .each((data) => {
    //   console.log(data);
    // });
  }

  highlightLine = () => {

  }
  ticked = () => {
    // 缩短重新布局时间
    for (let i = 0; i < 5; i++) {
      this.simulation.tick();
    }

    this.linksData.attr('d', this.positionLink); // 每个link上有三个点，每次tick 都要重新画一遍link
    this.nodesData.attr('transform', this.positionNode);
    // this.label.attr('x', d => 8).attr('y', d => 0);
  }

  positionLink = d => `M${d[0].x},${d[0].y} ${d[1].x},${d[1].y}`

  positionNode = d => `translate(${d.x},${d.y})`

  dragstarted = (d) => {
    if (!d3.event.active) this.simulation.alphaTarget(0.1).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged=(d) => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  dragended = (d) => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
    if (!d3.event.active) this.simulation.alphaTarget(0);
  }
}

export default D3Graph;
