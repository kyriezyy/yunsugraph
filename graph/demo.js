// demo.js
const config = {
  legend: {
    align: 'left',
    itemWidth: 16,
    itemHeight: 10,
    right: 30,
    top: 3,
    data: [] },
  grid: {
    left: 30, top: 20, right: 30, bottom: 63 },
  tooltip: {
    trigger: 'axis',
    confine: !0,
    formatter(e) {
      return 'aaa';
      // let t = Array.isArray(e[0].data) ? e[0].data[0] : e[0].data.value[0];
      // return e.forEach((e) => {
      //   t += `<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${s[e.seriesIndex % 6]};"></span>${e.seriesName}: ${Array.isArray(e.data) ? e.data[1] : e.data.value[1]}`;
      // }), t;
    },
    transitionDuration: 0 },
  brush: {
    xAxisIndex: 0,
    brushType: 'lineX',
    throttleType: 'debounce',
    throttleDelay: 200,
    inBrush: { color: '#d95850' },
    outOfBrush: { color: null } },
  dataZoom: [{
    type: 'inside',
    xAxisIndex: [0] }, {
    show: !0,
    xAxisIndex: [0],
    type: 'slider',
    top: 95,
    left: 45,
    right: 45 }],
  xAxis: {
    type: 'time',
    splitLine: { show: !1 },
    axisLabel: { margin: 5, formatter: d },
    axisPointer: { show: !0,
      label: {
        formatter(e) { return d(e.value); } } } },
  yAxis: { type: 'value',
    splitLine: { show: !1 },
    axisLine: { show: !1 },
    axisTick: { show: !1 },
    axisLabel: { show: !1 } },
  series: [] };


  // r.init=function(e){r.clearFlag=!1,i=echarts.init(e[0],"walden"),
  // angular.element(n).on("keydown",function(e){17===e.keyCode&&(a=!0)})
  // .on("keyup",function(e){17===e.keyCode&&(a=!1)}),
  // i._zr.on("click",function(e){e.target||t.deactivate()})
  // ,i.on("click",function(e){if("series"===e.componentType){a||t.deactivate();
  //   var n=e.seriesName,i=Array.isArray(e.data)?e.data:e.data.value;i[1]&&t.activate({edges:r.map[n][i[0]].id})}}),
  //   i.on("brushSelected",function(e){if(o)return void(o=!1);if(r.clearFlag)return void(r.clearFlag=!1);
  //     var n=e.batch[0];(r.brushInfo||r.hightlightInfo)&&(r.hightlightInfo=null,t.deactivate()),
  //     n.areas.length?(r.brushInfo={id:n.brushId,areas:n.areas,data:[]},
  //       n.selected.forEach(function(e,n){for(var i=e.dataIndex,a=l.series[e.seriesIndex].data,
  //         o=l.series[e.seriesIndex].name,s=[],d=0;d<i.length;d++){var c=i[d];if(a[c][1]){
  //           var u=r.map[o][a[c][0]].id;s=s.concat(u),-1===r.brushInfo.data.indexOf(u)&&r.brushInfo.data.push(u)}}
  //           s.length&&t.activate({edges:s})})):r.brushInfo=null}),
  //           e[0].addEventListener("mouseout",function(e){
  //             e.event={},i._componentsViews.forEach(function(t){"brush"===t.type&&t._brushController._creatingCover&&t._brushController._handlers.mouseup(e)})})},r.update=function(e,t){
  //               if(0!==e.length){r.map={};var n={},i=[];t.sort(function(e,t){return new Date(e)-new Date(t)});var a=new Date(t[t.length-1])-new Date(t[0])||1728e6;l.xAxis.min=new Date(t[0])-.05*a,l.xAxis.max=new Date(t[t.length-1]).valueOf()+.05*a,
  //               l.xAxis.interval=a/5,l.legend.data=[],e.forEach(function(e){var r=n[e.name]=e.data,a=t.map(function(e){return[e,r[e]&&r[e].value||0]}).sort(function(e,t){return new Date(e[0])-new Date(t[0])});
  //               a.length&&(i.push({name:e.name,type:"bar",barMaxWidth:10,stack:"all",itemStyle:{emphasis:{color:"#d95850"}},data:a}),l.legend.data.push(e.name))}),r.map=n,l.series=i,r.renew()}},
  //               r.resize=function(){i&&!i.isDisposed()&&i.resize()},
  //               r.renew=function(){i&&!i.isDisposed()&&(o=!0,i.clear(),i.setOption(l)


const u = {
  grid: {
    left: '0', right: '0', bottom: '0', top: '0' },
  xAxis: {
    type: 'value',
    splitLine: {
      show: !1 },
    axisLine: { show: !1 },
    axisTick: { show: !1 },
    axisLabel: { show: !1 } },
  yAxis: {
    type: 'category',
    splitLine: {
      show: !1 },
    axisLine: { show: !1 },
    axisTick: { show: !1 },
    axisLabel: { inside: !0, textStyle: { color: '#fff', fontWeight: 'bold' } },
    z: 10,
    data: [] },
  animation: !1,
  series: [{ type: 'bar',
    itemStyle: { normal: { color: 'rgba(0,0,0,0.08)' }, emphasis: { color: 'rgba(0,0,0,0.08)' } },
    barGap: '-100%',
    barCategoryGap: '10%',
    data: [],
    animation: !1,
    silent: !0 }, { type: 'bar', barMinHeight: 30, animation: !0, label: { normal: { show: !0, position: 'insideRight', formatter(e) { return e.data.ids.length; } } }, itemStyle: { emphasis: { color: '#d95850' } }, data: [], z: 3 }] };

    

    function() {
      function e(e, t, n, r, i) {
          var a = t.settings.baseUrl
            , o = r.global;
          this.logIn = function(t) {
              return e({
                  method: "POST",
                  url: a + "/app/login",
                  data: t
              })
          }
          ,
          this.logOut = function() {
              return e({
                  method: "POST",
                  url: a + "/app/logout"
              })
          }
          ,
          this.getAllRepo = function() {
              var t = a + "/repository";
              return e.get(t).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.repoRequest = function(t) {
              var n = a + "/repository/" + t;
              return e.get(n).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.getRecentWs = function(t) {
              var n = a + "/workspace/recent/" + t;
              return e.get(n).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.initUpload = function(t) {
              var n = a + "/repository";
              return e.post(n, t).error(function(e) {
                  console.log(e, "cannot connect to server!")
              })
          }
          ,
          this.dataUpload = function(t, n, r, i) {
              return e({
                  method: "POST",
                  url: a + "/repository/" + t.toString() + "/data",
                  headers: {
                      "Content-Type": void 0
                  },
                  data: n,
                  transformRequest: angular.identity,
                  uploadEventHandlers: {
                      progress: function(e) {
                          var t = 0;
                          e.lengthComputable && (t = Math.round(100 * e.loaded / e.total) + "%",
                          r(t))
                      }
                  },
                  timeout: i.promise
              })
          }
          ,
          this.dataAppend = function(t, n, r, i) {
              return e({
                  method: "POST",
                  url: a + "/repository/" + t.toString() + "/append",
                  headers: {
                      "Content-Type": void 0
                  },
                  data: n,
                  transformRequest: angular.identity,
                  uploadEventHandlers: {
                      progress: function(e) {
                          var t = 0;
                          e.lengthComputable && (t = Math.round(100 * e.loaded / e.total) + "%",
                          r(t))
                      }
                  },
                  timeout: i.promise
              })
          }
          ,
          this.getRepositoryProcess = function() {
              var e = window.location
                , t = ("https:" === e.protocol ? "wss://" : "ws://") + e.hostname + (80 != e.port && 443 != e.port ? ":" + e.port : "") + a + "/repository/process";
              return i(t)
          }
          ,
          this.deleteRepo = function(t) {
              var n = a + "/repository/" + t + "/delete";
              return e.delete(n).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.deleteData = function(t, r) {
              var i = a + "/data/delete/" + t
                , s = n.use().substr(0, 2)
                , d = {
                  lang: s,
                  ids: r,
                  repoId: o.repoId
              };
              return e.post(i, d).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.getEditStatus = function(t) {
              var n = a + "/data/edit/status"
                , r = t;
              return e.post(n, r).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.newWs = function() {
              var t = {}
                , n = a + "/workspace";
              return e.post(n, t).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.getAllWs = function() {
              var t = o.repoId
                , n = a + "/workspaces/" + t;
              return e.get(n).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.saveWs = function(t, n) {
              var r = o.repoId
                , i = a + "/workspace/" + t + "/save/" + r;
              return e.put(i, n).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.renameWs = function(t, n) {
              var r = a + "/workspace/" + t + "/rename";
              return e.put(r, {
                  wsName: n
              }).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.loadWs = function(t) {
              return e({
                  method: "GET",
                  url: a + "/workspace/" + t
              })
          }
          ,
          this.deleteWs = function(t) {
              var n = a + "/workspace/" + t + "/delete";
              return e.delete(n)
          }
          ,
          this.searchRequest = function(t, n) {
              var r = angular.copy(t);
              r.repoId = o.repoId;
              var i = a + "/search/" + r.type;
              return e({
                  method: "post",
                  url: i,
                  data: r,
                  timeout: n.promise
              })
          }
          ,
          this.infoRequest = function(t, n) {
              var r = a + "/graph/" + n + "/info"
                , i = {
                  ids: t,
                  repoId: o.repoId
              };
              return e.post(r, i).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.aggRequest = function(t) {
              var n = angular.copy(t);
              return n.repoId = o.repoId,
              e({
                  method: "post",
                  url: a + "/search/agg",
                  data: n
              })
          }
          ,
          this.subGraphRequest = function(t) {
              var n = {
                  centerId: t,
                  repoId: o.repoId
              };
              return e({
                  method: "post",
                  url: a + "/graph/nodes/subgraph",
                  data: n
              })
          }
          ,
          this.shortest = function(t, n) {
              var r = angular.copy(t);
              return r.repoId = o.repoId,
              e({
                  method: "post",
                  url: a + "/graph/paths/shortest",
                  data: r,
                  timeout: n.promise
              })
          }
          ,
          this.khop = function(t, n) {
              var r = angular.copy(t);
              return r.repoId = o.repoId,
              e({
                  method: "post",
                  url: a + "/graph/paths/khop",
                  data: r,
                  timeout: n.promise
              })
          }
          ,
          this.pathDigest = function(t, n) {
              return e({
                  method: "post",
                  url: a + "/graph/paths/digest",
                  data: t,
                  timeout: n.promise
              })
          }
          ,
          this.pathExactHop = function(t, n) {
              return e({
                  method: "post",
                  url: a + "/graph/paths/hop",
                  data: t,
                  timeout: n.promise
              })
          }
          ,
          this.killPathJob = function(t) {
              var n = a + "/graph/paths/kill";
              return e.post(n, t).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.expandRequest = function(t) {
              var n = angular.copy(t);
              n.repoId = o.repoId;
              var r = a + "/graph/nodes/expand";
              return e.post(r, n).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
          ,
          this.digestRequest = function(t) {
              var n = angular.copy(t);
              n.repoId = o.repoId;
              var r = a + "/graph/nodes/digest";
              return e.post(r, n).error(function(e) {
                  console.log("cannot connect to server!")
              })
          }
      }
      e.$inject = ["$http", "$rootScope", "$translate", "globalInfoService", "$websocket"],
      angular.module("mainApp").service("graphDataService", e)
  }();


  function() {
    function e(e, t, n, r) {
        function i() {
            g.shared || (g.shared = {}),
            g.shared.incremental = !0,
            g.shared.layout = {
                mode: "Fast",
                algorithm: "force"
            },
            g.shared.ego = null,
            g.shared.nodeToShowTooltip = null,
            g.shared.locateCenter = {
                nodes: [],
                edges: []
            },
            g.shared.nodeSize || (g.shared.nodeSize = {}),
            g.shared.nodeSize.value = "In-degree",
            g.shared.nodeSize.range = [4, 4],
            m = {}
        }
        function a(e, t) {
            var n = d3.rgb(e);
            return "rgba(" + n.r + "," + n.g + "," + n.b + "," + t + ")"
        }
        function o(e) {
            var t;
            switch (e) {
            case "parallel":
                t = "parallelArrow";
                break;
            case "normal":
                t = "arrow";
            default:
                t = "arrow"
            }
            return t
        }
        function s(e, t) {
            var n = e._properties
              , r = n ? n._relationship : "";
            return {
                id: e.id,
                source: e.src,
                source_label: g.getNode(e.src).label,
                source_categories: g.getNode(e.src).categories,
                target: e.dst,
                target_label: g.getNode(e.dst).label,
                target_categories: g.getNode(e.dst).categories,
                label: r,
                properties: n,
                immutable: !0,
                type: o(t),
                color: "rgba(120,120,120,1)",
                localTimeFrame: 0,
                size: .5
            }
        }
        function d(e) {
            var t = {};
            return e.forEach(function(e) {
                var n = e.label;
                t[n] || (t[n] = []),
                t[n].push(e)
            }),
            t
        }
        var l, c, u, h, g = this, f = {}, p = {
            x: 0,
            y: 0
        }, m = {};
        g.resetSigma = function() {
            l && g.destroy(),
            i()
        }
        ,
        g.shared || i(),
        g.init = function(e, t, n, r) {
            l = e,
            c = t,
            u = n,
            h = r
        }
        ,
        g.readConfig = function() {
            return JSON.parse(JSON.stringify(g.shared))
        }
        ,
        g.zoomIn = function() {
            var e = l.camera;
            if (e.ratio > .1) {
                var t = e.ratio / e.settings("zoomingRatio");
                sigma.misc.animation.camera(e, {
                    ratio: t
                }, {
                    duration: 200
                })
            }
        }
        ,
        g.zoomOut = function() {
            var e = l.camera;
            if (e.ratio < 5) {
                var t = e.ratio * e.settings("zoomingRatio");
                sigma.misc.animation.camera(e, {
                    ratio: t
                }, {
                    duration: 200
                })
            }
        }
        ,
        g.clear = function() {
            l.graph.clear(),
            i(),
            g.refresh()
        }
        ,
        g.destroy = function() {
            l.graph.clear(),
            l.kill(),
            l = null
        }
        ,
        g.refresh = function(e) {
            l.refresh(e)
        }
        ,
        g.activate = function(e) {
            if (e.nodes && c.activeState.addNodes(e.nodes),
            e.edges) {
                var t = [];
                e.edges.forEach(function(e) {
                    if (l.graph.edges(e))
                        t.push(e);
                    else {
                        var n = m[e];
                        !n || n in t || t.push(n)
                    }
                }),
                c.activeState.addEdges(t)
            }
            g.refresh()
        }
        ,
        g.deactivate = function(e) {
            e ? (e.nodes && c.activeState.dropNodes(e.nodes),
            e.edges && c.activeState.dropNodes(e.edges)) : (c.activeState.dropNodes(),
            c.activeState.dropEdges()),
            l.refresh()
        }
        ,
        g.getActive = function(e) {
            return e ? "nodes" == e ? c.activeState.nodes() : "edges" == e ? c.activeState.edges() : void 0 : {
                nodes: c.activeState.nodes(),
                edges: c.activeState.edges()
            }
        }
        ,
        g.getNode = function(e) {
            return e ? l.graph.nodes(e) : l.graph.nodes()
        }
        ,
        g.getEdge = function(e) {
            function t(e) {
                return l.graph.edges(e) || (m[e] ? l.graph.edges(m[e]) : void 0)
            }
            if (e) {
                if (Array.isArray(e)) {
                    var n = [];
                    return e.forEach(function(e) {
                        n.push(t(e))
                    }),
                    n
                }
                return t(e)
            }
            return l.graph.edges()
        }
        ,
        g.getAdjacent = function(e) {
            if ("node" == e.type) {
                var t = l.graph.adjacentNodes(e.id);
                return e.return_by_id && (t = t.map(function(e) {
                    return e.id
                })),
                t
            }
            if ("edge" == e.type) {
                var n = l.graph.adjacentEdges(e.id);
                return e.return_by_id && (n = n.map(function(e) {
                    return e.id
                })),
                n
            }
        }
        ,
        g.getInOutAdjacentNodes = function(e, t) {
            if ("in" == t) {
                var n = l.graph.adjacentInwardNodes(e.id);
                return e.return_by_id && (n = n.map(function(e) {
                    return e.id
                })),
                n
            }
            if ("out" == t) {
                var n = l.graph.adjacentOutwardNodes(e.id);
                return e.return_by_id && (n = n.map(function(e) {
                    return e.id
                })),
                n
            }
        }
        ,
        g.getEdgesBetween = function(e, t, n) {
            function r(e, t, n) {
                return e.source === t && e.target === n
            }
            var i = [];
            return g.getAdjacent({
                type: "edge",
                id: e,
                return_by_id: !1
            }).forEach(function(a) {
                r(a, e, t) && (i.push(a),
                "directed" !== n && r(a, t, e) && i.push(a))
            }),
            i
        }
        ,
        g.add = function(n) {
            var r = t.defer();
            return g.addNode(n.nodes),
            g.addEdge(n.edges),
            g.shared.locateCenter = {
                nodes: n.nodes.map(function(e) {
                    return e.id
                }),
                edges: n.edges.map(function(e) {
                    return e.id
                })
            },
            n.neighborDict && g.updateGlyph(n.neighborDict),
            n.edges && c.curveParallelEdges(),
            g.resize(),
            g.refresh(),
            e.$broadcast("graph:updated", {
                edges: g.getEdge(),
                nodes: g.getNode(),
                static: !1
            }),
            r.resolve(),
            r.promise
        }
        ,
        g.addToLoad = function(n) {
            var r = t.defer();
            return n.camera && g.updateCamera(n.camera),
            g.addNode(n.nodes),
            g.addEdge(n.edges),
            g.pinNodes(),
            n.neighborDict && g.updateGlyph(n.neighborDict),
            n.merged && (g.addMergedEdges(n.merged),
            g.updateEdgeIdMap()),
            e.$broadcast("graph:updated", {
                edges: g.getEdge(),
                nodes: g.getNode(),
                static: !0
            }),
            n.edges && c.curveParallelEdges(),
            n.nodeSize && g.resize(n.nodeSize),
            n.time && g.updateTimeColor({
                data: {
                    nodes: [],
                    edges: []
                },
                type: "load",
                time: n.time
            }),
            g.refresh(),
            r.resolve(),
            r.promise
        }
        ,
        g.updateTimeColor = function(e) {
            n.updateTime(e),
            g.getNode().forEach(function(e) {
                if (!e.srcId) {
                    var t, r = function(e, t) {
                        var n = e.split(",");
                        return n[3] = t + ")",
                        n.join(",")
                    }, i = [], a = n.getTimeMapping(e.localTimeFrame);
                    t = r(e.color, a),
                    e.colors.forEach(function(e) {
                        i.push(r(e, a))
                    }),
                    e.alpha = a,
                    e.color = t,
                    e.colors = i,
                    e.glyphs[0].fillColor = e.color
                }
            }),
            g.getEdge().forEach(function(e) {
                var t, r = n.getTimeMapping(e.localTimeFrame);
                t = function(e, t) {
                    var n = e.split(",");
                    return n[3] = t + ")",
                    n.join(",")
                }(e.color, r),
                e.alpha = r,
                e.color = t
            })
        }
        ,
        g.center = function() {
            var e = t.defer()
              , n = g.shared.locateCenter;
            return n.nodes.length > 0 ? c.locate.nodes(n.nodes, {
                onComplete: function() {
                    g.shared.locateCenter = {
                        nodes: [],
                        edges: []
                    },
                    e.resolve()
                }
            }) : n.nodes.length > 0 ? c.locate.edges(n.edges, {
                onComplete: function() {
                    g.shared.locateCenter = {
                        nodes: [],
                        edges: []
                    },
                    e.resolve()
                }
            }) : c.locate.center(1, {
                onComplete: function() {
                    e.resolve()
                }
            }),
            e.promise
        }
        ,
        g.updateCenter = function(e) {
            g.shared.locateCenter = e,
            g.center()
        }
        ,
        g.expending = function(e) {
            p = {
                x: e.x,
                y: e.y
            }
        }
        ,
        g.addNode = function(e) {
            function t(e) {
                var t = e._properties
                  , n = t._name;
                n = n.length > 20 ? n.substr(0, 20) + "..." : n;
                var r = e.categories.map(function(e) {
                    var t = f[e].color;
                    return function(e, t) {
                        var n = d3.rgb(e);
                        return "rgba(" + n.r + "," + n.g + "," + n.b + "," + t + ")"
                    }(t, 1)
                });
                return {
                    id: e.id,
                    label: n,
                    properties: t,
                    categories: e.categories,
                    neighbor_number: e.neighborNumber,
                    x: Math.random(),
                    y: Math.random(),
                    localTimeFrame: 0,
                    color: r[e.categories.length - 1],
                    colors: r,
                    icon: f[e.categories[0]].icon,
                    glyphs: [{
                        draw: !0,
                        position: "top-right",
                        fillColor: function() {
                            return this.color
                        },
                        content: "?"
                    }],
                    size: 1
                }
            }
            e.forEach(function(e) {
                if (!l.graph.nodes(e.id)) {
                    var n = t(e);
                    e.loadNodes && (n.size = e.size,
                    n.x = e.x,
                    n.y = e.y,
                    n.localTimeFrame = e.localTimeFrame,
                    n.size = 4),
                    n.x = n.x + p.x,
                    n.y = n.y + p.y,
                    l.graph.addNode(n)
                }
            }),
            p = {
                x: 0,
                y: 0
            }
        }
        ,
        g.addMergedEdges = function(e) {
            e.forEach(function(e) {
                var t = e.id.split("-")
                  , n = g.getEdgesBetween(t[0], t[1], "directed");
                g.tryMerge(n[0], e.localTimeFrame)
            })
        }
        ,
        g.addEdge = function(e) {
            e.forEach(function(e) {
                var t = l.graph.edges(e.src + "-" + e.dst)
                  , n = s(e, "normal");
                t ? m[e.id] || (t.children.push(n),
                t.label = t.children[0].label + "(" + t.children.length + ")",
                m[e.id] = t.id) : l.graph.edges(e.id) || (e.loadEdges && (n.localTimeFrame = e.localTimeFrame),
                l.graph.addEdge(n))
            })
        }
        ,
        g.setNodeStyle = function(e) {
            f[e.category] = {},
            f[e.category].icon = {
                font: "FontAwesome",
                glyph: e.glyph,
                content: e.glyphContent,
                scale: .9,
                color: "#ffffff"
            },
            f[e.category].color = e.color,
            l && (g.getNode().filter(function(t) {
                if (t.categories && t.categories.indexOf(e.category) > -1) {
                    var n = t.categories.map(function(e) {
                        return f[e].color
                    });
                    t.icon = f[t.categories[0]].icon;
                    var r = n[t.categories.length - 1];
                    t.color = a(r, t.alpha),
                    t.colors = n.map(function(e) {
                        return a(e, t.alpha)
                    }),
                    t.glyphs && (t.glyphs[0].fillColor = t.color)
                }
            }),
            g.refresh())
        }
        ,
        g.updateGlyph = function(e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                var r = t[n];
                g.setGlyph(r, e[r].hiddenNodes)
            }
        }
        ,
        g.setGlyph = function(e, t) {
            var n = g.getNode(e)
              , r = n.glyphs[0];
            t > 0 ? (r.draw = !0,
            r.content = t) : r.draw = !1
        }
        ,
        g.dropNode = function(t) {
            g.enableHoveringEffect(!1),
            Array.isArray(t) ? t.forEach(function(e) {
                l.graph.dropNode(e)
            }) : l.graph.dropNode(t),
            c.curveParallelEdges(),
            g.enableHoveringEffect(!0),
            g.refresh(),
            e.$broadcast("graph:updated", {
                edges: g.getEdge(),
                nodes: g.getNode(),
                static: !0
            })
        }
        ,
        g.enableHoveringEffect = function(e) {
            e ? r(function() {
                l.settings("enableEdgeHovering", !0)
            }, 0) : (l.settings("enableEdgeHovering", !1),
            g.refresh())
        }
        ,
        g.dropEdge = function(t) {
            function n(e) {
                var t = l.graph.edges(e);
                t.children && t.children.forEach(function(e) {
                    delete m[e.id]
                }),
                l.graph.dropEdge(e)
            }
            g.enableHoveringEffect(!1),
            Array.isArray(t) ? t.forEach(function(e) {
                n(e)
            }) : n(t),
            c.curveParallelEdges(),
            g.enableHoveringEffect(!0),
            g.refresh(),
            e.$broadcast("graph:updated", {
                edges: g.getEdge(),
                nodes: g.getNode(),
                static: !0
            })
        }
        ,
        g.pinNodes = function(e) {
            e ? e.forEach(function(e) {
                l.graph.fixNode(e)
            }) : g.getNode().forEach(function(e) {
                l.graph.fixNode(e.id)
            })
        }
        ,
        g.unpinNodes = function(e) {
            e ? e.forEach(function(e) {
                l.graph.unfixNode(e)
            }) : g.getNode().forEach(function(e) {
                l.graph.unfixNode(e.id)
            })
        }
        ,
        g.closeTooltips = function() {
            c.tooltips.close()
        }
        ,
        g.getPathCanvas = function() {
            return u.getElementsByClassName("sigma-mouse")[0]
        }
        ,
        g.getGraphCanvas = function() {
            return u
        }
        ,
        g.collapse = function(e, t) {
            sigma.plugins.animate(l, {
                x: "collapse_x",
                y: "collapse_y"
            }, {
                nodes: e,
                easing: "cubicInOut",
                onComplete: t
            })
        }
        ,
        g.getSigmaInstance = function() {
            return l
        }
        ,
        g.getPluginConfig = function() {
            return c
        }
        ,
        g.getNodePos = function(e) {
            var t = l.renderers[0].conradId
              , n = "renderer" + t + ":x"
              , r = "renderer" + t + ":y";
            return {
                x: e[n],
                y: e[r]
            }
        }
        ,
        g.defaultClickNode = function(e) {
            l.mousemoveCount
        }
        ,
        g.enableDrag = function() {
            c.dragNodes.enable()
        }
        ,
        g.disableDrag = function() {
            c.dragNodes.disable()
        }
        ,
        g.getCameraSetting = function() {
            return {
                x: l.camera.x,
                y: l.camera.y,
                ratio: l.camera.ratio
            }
        }
        ,
        g.updateCamera = function(e) {
            e && sigma.misc.animation.camera(l.camera, {
                x: e.x,
                y: e.y,
                ratio: e.ratio
            }, {
                duration: 0
            })
        }
        ,
        g.egoNetwork = function(e) {
            g.shared.ego = e
        }
        ,
        g.resize = function(e) {
            var e = e || g.shared.nodeSize
              , t = l.graph.nodes()
              , n = -1 / 0
              , r = 1 / 0
              , i = 1;
            if ("In-degree" === e.value || "Out-degree" === e.value) {
                var a = "In-degree" === e.value ? "in" : "out";
                t.forEach(function(t) {
                    var i = l.graph.degree(t.id, a);
                    t[e.value] = i,
                    r = i < r ? i : r,
                    n = i > n ? i : n
                })
            } else
                "neighbor_number" === e.value && t.forEach(function(e) {
                    var t = e.neighbor_number;
                    r = t < r ? t : r,
                    n = t > n ? t : n
                });
            i = n > r ? (e.range[1] - e.range[0]) / (n - r) : 0,
            t.forEach(function(t) {
                t.size = e.range[0] + i * (t[e.value] - r)
            }),
            g.refresh(),
            g.shared.nodeSize = e
        }
        ,
        g.changeDistance = function(e) {
            var t = 1 / 0
              , n = 1 / 0
              , r = -1 / 0
              , i = -1 / 0
              , a = g.getNode();
            a.forEach(function(e) {
                t = Math.min(t, e.x),
                n = Math.min(n, e.y),
                r = Math.max(r, e.x),
                i = Math.max(i, e.y)
            }),
            a.forEach(function(a) {
                a.rePosition_x = (a.x - (r + t) / 2) * e,
                a.rePosition_y = (a.y - (i + n) / 2) * e
            }),
            sigma.plugins.animate(l, {
                x: "rePosition_x",
                y: "rePosition_y"
            }, {
                duration: 200
            })
        }
        ,
        g.getSigmaRatio = function() {
            return l.camera.ratio
        }
        ,
        g.getSigmaWidth = function() {
            return l.renderers[0].width
        }
        ,
        g.export = function(e) {
            var t = !!e.download && e.download
              , n = g.getSigmaRatio()
              , r = g.getSigmaWidth();
            return sigma.plugins.image(l, l.renderers[0], {
                download: t,
                size: r,
                background: "white",
                zoom: !0,
                zoomRatio: n,
                labels: !0,
                margin: 20 / n
            }).dataUrl
        }
        ,
        g.isMergedEdge = function(e) {
            return !!e.children
        }
        ,
        g.updateEdgeIdMap = function() {
            g.getEdge().forEach(function(e) {
                if (g.isMergedEdge(e)) {
                    var t = e.id;
                    e.children.forEach(function(e) {
                        m[e] = t
                    })
                }
            })
        }
        ,
        g.tryMerge = function(e, t) {
            var n = !1;
            if (g.getEdge(e.id)) {
                var r = g.getEdgesBetween(e.source, e.target, "directed");
                if (1 === r.length)
                    n = !1;
                else if (r.length > 1) {
                    t || (t = r[0].localTimeFrame);
                    var i = d(r);
                    Object.keys(i).forEach(function(r) {
                        var a = i[r];
                        if (a.length > 1) {
                            var o = e.source
                              , d = e.target
                              , u = o + "-" + d
                              , h = s({
                                id: u,
                                src: o,
                                dst: d
                            }, "parallel")
                              , g = a.length;
                            h.label = r + "(" + g + ")",
                            h.localTimeFrame = t,
                            h.children = a,
                            a.map(function(e) {
                                c.activeState.dropEdges(e.id),
                                l.graph.dropEdge(e.id)
                            }),
                            l.graph.addEdge(h),
                            n = h
                        }
                    })
                }
            }
            return n
        }
        ,
        g.trySplit = function(e) {
            var t = !1;
            if (g.isMergedEdge(e)) {
                var n = e.localTimeFrame;
                e.children.forEach(function(e) {
                    e.localTimeFrame = n,
                    l.graph.addEdge(e)
                }),
                c.activeState.dropEdges(e.id),
                l.graph.dropEdge(e.id),
                t = e.children
            }
            return t
        }
        ,
        g.mergeEdges = function(t) {
            g.enableHoveringEffect(!1);
            var r, i = [];
            r = t || g.getEdge(),
            r.forEach(function(e) {
                var t = g.tryMerge(e);
                t && i.push(t)
            }),
            i.length > 0 && (g.updateTimeColor({
                data: {
                    nodes: [],
                    edges: []
                },
                type: "load",
                time: n.getCurrentTimeFrame()
            }),
            c.curveParallelEdges(),
            g.enableHoveringEffect(!0),
            g.refresh(),
            g.updateEdgeIdMap(),
            e.$broadcast("graph:updated", {
                edges: g.getEdge(),
                nodes: g.getNode(),
                static: !0
            }),
            e.$broadcast("graph:save"))
        }
        ,
        g.splitEdges = function(t) {
            g.enableHoveringEffect(!1);
            var r, i = [];
            r = t || g.getEdge(),
            r.forEach(function(e) {
                var t = g.trySplit(e);
                t && (i = i.concat(t))
            }),
            i.length > 0 && (g.updateTimeColor({
                data: {
                    nodes: [],
                    edges: []
                },
                type: "load",
                time: n.getCurrentTimeFrame()
            }),
            c.curveParallelEdges(),
            g.enableHoveringEffect(!0),
            g.refresh(),
            g.updateEdgeIdMap(),
            e.$broadcast("graph:updated", {
                edges: g.getEdge(),
                nodes: g.getNode(),
                static: !0
            }),
            e.$broadcast("graph:save"))
        }
    }
    e.$inject = ["$rootScope", "$q", "timeFrameService", "$timeout"],
    angular.module("mainApp").service("sigmaGraphService", e)



    ngApp.controller("ViewControlsCtrl", ["$scope", "$rootScope", "globalInfoService", "mapService", "sigmaGraphService", "graphLayoutService", "notify", "homeService", "detailService", function(e, t, n, r, i, a, o, s, d) {
    !function() {
        r.initMap()
    }();
    var l = this;
    l.global = n.global,
    l.tooltip = {
        layout: !1
    },
    l.shared = {
        ego: null,
        layout: i.shared.layout,
        incremental: i.shared.incremental
    };
    var c = {};
    l.cancleEgo = function() {
        i.getNode().forEach(function(e) {
            e.hidden = !1
        }),
        i.getEdge().forEach(function(e) {
            e.hidden = !1
        }),
        l.shared.ego = null,
        i.shared.ego = null,
        i.refresh()
    }
    ,
    l.cancleEgo(),
    l.center = function() {
        l.global.mapFlag ? r.fitBounds() : i.center()
    }
    ,
    l.layoutMode = function(e) {
        "Best" == e && (c = {
            mode: "Best",
            algorithm: "force"
        }),
        "Fast" == e && (c = {
            mode: "Fast",
            algorithm: "force"
        }),
        "TB" == e && (c = {
            mode: "TB",
            algorithm: "hierarchical"
        }),
        "BT" == e && (c = {
            mode: "BT",
            algorithm: "hierarchical"
        }),
        "LR" == e && (c = {
            mode: "LR",
            algorithm: "hierarchical"
        }),
        "RL" == e && (c = {
            mode: "RL",
            algorithm: "hierarchical"
        }),
        l.shared.layout.algorithm = c.algorithm,
        l.shared.layout.mode = c.mode,
        l.layout(c)
    }
    ,
    l.layout = function(e) {
        a.toggleLayout(e, {
            global: !0
        })
    }
    ,
    l.toggleIncremental = function(e, t) {
        e.stopPropagation(),
        l.shared.incremental = t,
        i.shared.incremental = t
    }
    ,
    l.zoomInGraphic = function() {
        l.global.mapFlag && null != r.getLeafletPlugin() ? r.getLeafletPlugin().zoomIn() : i.zoomIn()
    }
    ,
    l.zoomOutGraphic = function() {
        l.global.mapFlag && null != r.getLeafletPlugin() ? r.getLeafletPlugin().zoomOut() : i.zoomOut()
    }
    ,
    l.mapButtonClick = function() {
        l.global.mapFlag ? (r.mapKill(),
        s.open("search"),
        l.center()) : (s.close(),
        d.closeDetail(),
        r.mapStart())
    }
    ,
    l.egoNetwork = function() {
        var e = i.getActive("nodes")
          , t = e[0];
        if (e.length > 0) {
            if (0 == i.getAdjacent({
                type: "node",
                id: t.id,
                return_by_id: !0
            }).length)
                return;
            l.cancleEgo(),
            l.shared.ego = e[0],
            i.egoNetwork(l.shared.ego),
            a.applyEgoLayout(l.shared.ego)
        }
    }
}
]),