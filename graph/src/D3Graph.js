import * as d3 from 'd3';

const icons = {
  huaxueIcon: '/static/element.png',
  newsIcon: '/static/news.png',
  nodeIcon: '/static/node.png',
  articleIcon: '/static/articles.png',
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
      .attr('refX', 18)// 箭头坐标
      .attr('refY', 0)
      .attr('markerWidth', 12)// 标识的大小
      .attr('markerHeight', 12)
      .attr('orient', 'auto')// 绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr('stroke-width', 2)// 箭头宽度
      .append('path')
      .attr('d', 'M0,-4L6,0L0,4')// 箭头的路径
      .attr('fill', '#777');// 箭头颜色;

    this.graphBox = this.svg.append('g');
    this.linksBox = this.graphBox.append('g');
    this.nodesBox = this.graphBox.append('g');
    this.svg.call(d3.zoom()
      .scaleExtent([1 / 2, 8])
      .on('zoom', this.zoomed));

    this.simulation = d3.forceSimulation()
      .alpha(0.5)
      .velocityDecay(0.7)
      .force('collision', d3.forceCollide().radius(30)) // 决定线的长度已经节点之间的间距
      .force('link', d3.forceLink().distance(100).strength(0.5)) // 决定线的长度已经节点之间的间距
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
    const oldNodeIds = this.graphData.nodes.map(item => item.id);
    const newNodeIds = nodes.map(item => item.id);
    const centerNode = this.graphData.nodes.find(node => node.id === centerId);
    const oldNodes = this.graphData.nodes.filter(node => newNodeIds.includes(node.id));

    const newNodes = nodes.filter(node => !oldNodeIds.includes(node.id));

    // 节点去重
    if (centerId && centerNode) {
      // 过滤掉已经存在的节点
      newNodes.forEach((node) => {
        node.x = centerNode.x;
        node.y = centerNode.y;
      });
      centerNode.fx = centerNode.x;
      centerNode.fy = centerNode.y;
    }

    // 节点


    // this.graphData.nodes = this.graphData.nodes.concat(nodes);
    // this.graphData.links = this.graphData.links.concat(links);
    this.graphData.nodes = oldNodes.concat(newNodes);
    this.graphData.links = links;
    this.simulation.alphaTarget(0.3).restart();
    this.render();
  }

  render = () => {
    const nodes = this.graphData.nodes;
    nodes.forEach((item) => {
      delete item.index;
    });
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
      bilinks.push([link.source, link.target]);
    });


    const linksData = this.linksBox
      .selectAll('.link')
      .data(bilinks);

    const linksEnter = linksData.enter()
      .append('path')
      .attr('class', 'link')
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
      .attr('r', 15)
      .attr('fill', '#fff');

    nodesEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('dx', 12)
      .attr('x', 8)
      .attr('y', 0)
      .text((d) => {
        let title = '';
        switch (d.type) {
          case 'element':
            title = d.id;
            break;
          case 'news':
            title = d.name;
            break;
          case 'article':
            title = d.name;
            break;
          default:
            title = '';
            break;
        }

        return title;
      });

    nodesEnter
      .append('image')
      .attr('xlink:href', d => icons[d.symbol])
      .attr('x', -8)
      .attr('y', -8)
      .attr('width', 16)
      .attr('height', 16);

    this.nodesData = nodesEnter.merge(nodesData);

    this.simulation.nodes(nodes).on('tick', this.ticked); // 把node画在画布上

    this.simulation.force('link').links(links); // 把link画在画布上
  }
  ticked = () => {
    // 缩短重新布局时间
    // for (let i = 0; i < 5; i++) {
    //   this.simulation.tick();
    // }

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
    // d.fx = d3.event.x, d.fy = d3.event.y;
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}

export default D3Graph;
