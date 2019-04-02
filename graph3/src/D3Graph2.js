import * as d3 from 'd3'

const icons = {
  huaxueIcon: '/static/element.png',
  newsIcon: '/static/news.png',
  nodeIcon: '/static/node.png',
  articleIcon: '/static/articles.png'
}

class D3Graph {
  constructor (svgId) {
    this.svg = d3.select(svgId)
    this.width = +this.svg.attr('width')
    this.height = +this.svg.attr('height')

    // 创建箭头
    this.svg.append('marker')
      .attr('id', 'resolved')
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('viewBox', '0 -5 10 10')// 坐标系的区域
      .attr('refX', 24)// 箭头坐标
      .attr('refY', 0)
      .attr('markerWidth', 16)// 标识的大小
      .attr('markerHeight', 16)
      .attr('orient', 'auto')// 绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr('stroke-width', 4)// 箭头宽度
      .append('path')
      .attr('d', 'M0,-4L6,0L0,4')// 箭头的路径
      .attr('fill', '#777')// 箭头颜色;

    this.graphBox = this.svg.append('g')
    this.linksBox = this.graphBox.append('g')
    this.nodesBox = this.graphBox.append('g')
    this.svg.call(d3.zoom()
      .scaleExtent([1 / 8, 8])
      .on('zoom', this.zoomed))

    this.simulation = d3.forceSimulation()
      .force('collision', d3.forceCollide().radius(30)) // 决定线的长度已经节点之间的间距
      .force('link', d3.forceLink().distance(250).strength(0.1)) // 决定线的长度已经节点之间的间距
      .force('charge', d3.forceManyBody()) // 节点是否所在一起 相互吸引 相互排斥相关
      .force('center', d3.forceCenter(this.width / 2, this.height / 2)) // 设置节点中心
  }

  graphData = {
    nodes: [],
    links: []
  }

  zoomed =() => {
    this.graphBox.attr('transform', d3.event.transform)
  }

  addNodes = (nodes, links, centerId) => {
    d3.selectAll('.linetext').remove()
    this.graphData.nodes = nodes
    this.graphData.links = links
    this.simulation.alphaTarget(0.3).restart()
    this.render()
  }

  render = () => {
    const nodes = this.graphData.nodes
    nodes.forEach((item) => {
      delete item.index
    })
    const nodeById = d3.map(nodes, d => d.id)
    let links = this.graphData.links
    const bilinks = []

    links.forEach((link) => {
      if (typeof link.source === 'string') {
        link.source = nodeById.get(link.source)
      }
      if (typeof link.target === 'string') {
        link.target = nodeById.get(link.target)
      }
      bilinks.push({start: link.source, end: link.target, relation: link.relation, raw: link})
    })

    const linksData = this.linksBox
      .selectAll('.link')
      .data(bilinks)

    const linksEnter = linksData.enter()
      .append('path')
      .attr('class', 'link')
      .attr('marker-end', 'url(#resolved)')
      .on('click', (d) => {
        if (this.onClickLink) {
          this.onClickLink(d)
        }
      })

    this.lineText = this.graphBox.append('g').selectAll('.linetext')
      .data(bilinks)
      .enter()
      .append('text')
      .style('font-size', 12)
      .attr('class', 'linetext')
      .text(link => link.relation)
      .on('click', (d) => {
        // loadNodes(d.id);
        if (this.onClickLink) {
          this.onClickLink(d)
        }
      })

    linksData.exit().remove()

    this.linksData = linksEnter.merge(linksData)

    const drag = d3.drag()
      .on('start', this.dragstarted)
      .on('drag', this.dragged)
      .on('end', this.dragended)

    const nodesData = this.nodesBox
      .selectAll('.node')
      .data(nodes, d => d.id)

    const nodesEnter = nodesData
      .enter()
      .append('g')
      .attr('class', 'node')
      .on('click', (d) => {
        // loadNodes(d.id);
        if (this.onClickNode) {
          this.onClickNode(d)
        }
      })
      .call(drag)

    nodesData.exit().remove()

    nodesEnter
      .append('circle')
      .attr('r', 30)
      .attr('fill', '#f0f0f0')

    nodesEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('dx', 12)
      .attr('x', 12)
      .attr('y', 0)
      .text((d) => {
        return d.name
      })

    nodesEnter
      .append('image')
      .attr('xlink:href', d => icons.huaxueIcon)
      .attr('x', -21)
      .attr('y', -21)
      .attr('width', 42)
      .attr('height', 42)

    this.nodesData = nodesEnter.merge(nodesData)

    this.simulation.nodes(nodes).on('tick', this.ticked) // 把node画在画布上

    this.simulation.force('link').links(links) // 把link画在画布上
  }
  ticked = () => {
    // 缩短重新布局时间
    // for (let i = 0; i < 5; i++) {
    //   this.simulation.tick();
    // }

    this.linksData.attr('d', this.positionLink) // 每个link上有三个点，每次tick 都要重新画一遍link
    this.nodesData.attr('transform', this.positionNode)
    // 连线文字位置
    // this.lineText.attr('transform', link => getLineTextDx(link))
    this.lineText.attr('transform', this.positionTextX)
  }

  positionLink = d => {
    return `M${d.start.x},${d.start.y} ${d.end.x},${d.end.y}`
  }

  positionNode = d => `translate(${d.x},${d.y})`

  positionTextX = d => {
    let x = d.start.x + (d.end.x - d.start.x) / 2
    let y = d.start.y + (d.end.y - d.start.y) / 2
    // console.log(d)
    return `translate(${x},${y})`
  }
  positionTextY = d => {
    let y = d.start.y
    // console.log(d)
    return y
  }

  dragstarted = (d) => {
    if (!d3.event.active) this.simulation.alphaTarget(0.1).restart()
    d.fx = d.x
    d.fy = d.y
  }

  dragged=(d) => {
    d.fx = d3.event.x
    d.fy = d3.event.y
  }

  dragended = (d) => {
    // d.fx = d3.event.x, d.fy = d3.event.y;
    if (!d3.event.active) this.simulation.alphaTarget(0)
    d.fx = null
    d.fy = null
  }
}

export default D3Graph
