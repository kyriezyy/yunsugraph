// import echarts from 'echarts';

const prefix = 'image://';

const nodeIcon = 'image://data:image/png;base64,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';
const huaxueIcon = 'image://data:image/png;base64,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';

const newsIcon = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMXmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarVd3VFN3G37uSELCXhEQJMgGUQTZgkCYgoBscBGSAGGEeEkQcVtqFa1bHDjqqLtoHYDUgah1FsVtHR9KUanU4h6ofH8kUGv7z3fO955z733P83ve5x33npy8gP5akUJRSBoARXIlkxgZKkjPyBRw2kCAgiE48BSJSxQhCQmxAND7/Lu9vg4CAK64iRSKQvxvZiiRlogBIgFAtqREXAQQBwC6QqxglADbF4DtJKVCCbDHAjBh0jMyAbYCgEmu2q8AYJKt9lcBMGGSE4UAezegpSMSMbmAXj0AQak4Vwno3QTgLpfI5IC+FoAgcZ5IAuhHARhUVFQsAfSVAJyyP9PJ/Ztmdp+mSJTb56t7AQBohclKFIWiyfh/W1GhqjeHAwCdPCYqEYAJQNwsKI5JBKADEJ3y7Lh4AEYA8VYmAdQ+yctTRaWo+aSluESYCYAPkO4SUVgMAEuAjJAXxsVq8OwcWUQ0AAOALJMpo5M1sXOlJeFJGs21THFifK+fwwhDNLE1IgbQ8E+qClJCNPo386TRvfovy/OS09Q1U7xSWWocAD2A4pcUJMWoOZRdeZ4wrpfDqBJTANgBlL9UHhmq1qfG5zARiRo+U1TS2y81N08WHafx1yjzkqM0OrvFovAkAGYAVS+Vh6T06khL0mN7e5FIw8LVvVOXpPIUTb9Uq0IZmqiJfa4oTNDwaZ60MDIRwECAtiwpTdLE0kFKJlnzjug4hTIhWV0nnZ0vGpmgrocuQyyECIMAKgiQjWLkQ9bcWdcJgeYkAiIwyIUUbhqkNyINIjCQQ4QklOMPyCFFSV9cKERgIEUp5PjYh6rvbsiBCAxKIUUJCvAQDIoQg0JIoQIDKeR92VLxGxjI/pFdjGIUohgMZP+ChUCIWA2i6tUV6Pcy2eHsMHYUO4LtTFvQQXQAHUsH0cF0EO1B+9J+vdX+xWc9ZLWwHrCusVpZtybIZjNf9CPAKLRCpZmVFNmf90w70B60Fx1KB9JBtB8ENJ+2gBs9jPalQ+gRdADtRftBqKlchX9q/62Hz6au4XHduSS3HzeY6/RlpJ6LnlefihTyv01IXWt231yFfSdf5hd+NmkJihHzJZOaS+2nTlPHqbPUYaoOAuoYVU9doI5QdZ99Rb+BQW5ftkRIIUcBCiH7Rz6RJicDKUrcd7l3uH9QnymlZUoAEBYrJjOy3DylIEShKJQKouXiwYMEHu5D/YD0jEyB+mfqBR8EAIJ/7i9s1jZg+Jmenp7Df2GxBsCBFIDX9hfmbA3otQFnFopVTKkaowGABR70YQJzDIAtnOAGD3gjAMEIx0jEIxkZGA8x8lAEBpMwFbMwB/OxGCuwBhuwGdvxA/ahDodxHD/jPC7hGm6jFe14gi68RjdBEBxClzAmzAlrwp5wJTwIXyKICCdiiUQig8gicgk5oSKmEl8R84mlxBpiI7GD+JE4RBwnzhItxC3iPtFBPCfekxSpQ5qQVqQDOYT0JUPIGDKZHEfmkhPJcrKCXEiuIjeRu8la8jh5nrxGtpJPyFcUKG2KT9lQbpQvJaTiqUwqh2Ko6VQlVUVtomqoBuo0dYVqpTqpdzSbNqYFtBsdQEfRKbSYnkhPpxfQa+jtdC19kr5C36e76E8sXZYly5Xlz4pmpbNyWZNYc1hVrK2sg6xTrGusdtZrNpvNZzuyfdhR7Ax2PnsKewF7HXsPu5Hdwm5jv+JwOOYcV04gJ54j4ig5czirObs5xziXOe2ct1raWtZaHloRWplacq3ZWlVaO7WOal3WeqTVzTXg2nP9ufFcCXcydxF3C7eBe5Hbzu3mGfIceYG8ZF4+bxZvFa+Gd4p3h/dCW1t7oLaf9mhtmfZM7VXae7XPaN/XfqdjpOOiI9QZq6PSWaizTadR55bOC11dXQfdYN1MXaXuQt0duid07+m+1TPWG6wXrSfRm6FXrVerd1nvqT5X314/RH+8frl+lf5+/Yv6nQZcAwcDoYHIYLpBtcEhgxsGrwyNDYcaxhsWGS4w3Gl41vCxEcfIwSjcSGJUYbTZ6IRRmzFlbGssNBYbf2W8xfiUcbsJ28TRJNok32S+yQ8mzSZdpkamw0xTTctMq02PmLbyKb4DP5pfyF/E38e/zn/fz6pfSD9pv3n9avpd7vfGrL9ZsJnUrNJsj9k1s/fmAvNw8wLzJeZ15nctaAsXi9EWkyzWW5yy6Oxv0j+gv7h/Zf99/X+1JC1dLBMtp1hutrxg+cpqgFWklcJqtdUJq84B/AHBA/IHLB9wdECHtbF1kLXMern1MevfBaaCEEGhYJXgpKDLxtImykZls9Gm2aZ7oOPAlIGzB+4ZeNeWZ+trm2O73LbJtsvO2m6U3VS7XXa/2nPtfe3z7Ffan7Z/4+DokObwjUOdw2NHM8dox3LHXY53nHSdRjhNdNrkdNWZ7ezrXOC8zvmSC+ni5ZLnUu1y0ZV09XaVua5zbRnEGuQ3SD5o06AbbjpuIW6lbrvc7g/mD44dPHtw3eCnQ+yGZA5ZMuT0kE/uXu6F7lvcbw81Gjpy6OyhDUOfe7h4iD2qPa566npGeM7wrPd8Nsx1mHTY+mE3vYy9Rnl949Xk9dHbx5vxrvHu8LHzyfJZ63PD18Q3wXeB7xk/ll+o3wy/w37v/L39lf77/P8McAsoCNgZ8Hi443Dp8C3D2wIHBooCNwa2BgmCsoK+C2odYTNCNGLTiAfBtsGS4K3Bj0KcQ/JDdoc8DXUPZUIPhr4R+gunCRvDqLDIsMqw5nCj8JTwNeH3IgZG5EbsiuiK9IqcEtkYxYqKiVoSdSPaKlocvSO6a6TPyGkjT8boxCTFrIl5EOsSy8Q2jCJHjRy1bNSdOPs4eVxdPOKj45fF301wTJiY8NNo9uiE0dWjHyYOTZyaeDrJOGlC0s6k18mhyYuSb6c4pahSmlL1U8em7kh9kxaWtjStNX1I+rT08xkWGbKM+kxOZmrm1sxXY8LHrBjTPtZr7Jyx18c5jisbd3a8xfjC8Ucm6E8QTdifxcpKy9qZ9UEUL9okepUdnb02u0ssFK8UP5EES5ZLOqSB0qXSRzmBOUtzHucG5i7L7cgbkVeV1ykTytbInuVH5W/If1MQX7CtoKcwrXBPkVZRVtEhuZG8QH6yeEBxWXGLwlUxR9E60X/iioldTAyztYQoGVdSrzRRKpQXVE6qr1X3S4NKq0vfTkqdtL/MsExedmGyy+R5kx+VR5R/P4WeIp7SNNVm6qyp96eFTNs4nZiePb1phu2MihntMyNnbp/Fm1Uw65fZ7rOXzn75VdpXDRVWFTMr2r6O/HrXHL05zJwb3wR8s2EuPVc2t3me57zV8z5VSirPzXefXzX/wwLxgnPfDv121bc9C3MWNi/yXrR+MXuxfPH1JSOWbF9quLR8aduyUctqlwuWVy5/uWLCirNVw6o2rOStVK1sXRW7qn613erFqz+syVtzrTq0es9ay7Xz1r5ZJ1l3eX3w+poNVhvmb3j/ney7mxsjN9ZucthUtZm9uXTzwy2pW05/7/v9jq0WW+dv/bhNvq11e+L2kzt8duzYablz0S5yl2pXx+6xuy/9EPZDfY1bzcY9/D3z92Kvau/vP2b9eH1fzL6m/b77aw7YH1h70PhgZS1RO7m2qy6vrrU+o77l0MhDTQ0BDQd/GvzTtsM2h6uPmB5ZdJR3tOJoz7HyY68aFY2dx3OPtzVNaLp9Iv3E1ZOjTzafijl15ueIn0+cDjl97EzgmcNn/c8eOud7ru689/naC14XDv7i9cvBZu/m2os+F+sv+V1qaBnecvTyiMvHr4Rd+flq9NXz1+KutVxPuX7zxtgbrTclNx/fKrz17NfSX7tvz7zDulN51+Bu1T3Le5v+4/yfPa3erUfuh92/8CDpwe02cduT30p++9Be8VD3YdUj60c7Hns8PtwR0XHp9zG/tz9RPOnunPOH4R9rnzo9PfBn8J8XutK72p8xz3qeL3hh/mLby2Evm14lvLr3uuh195vKt+Zvt7/zfXf6fdr7R92TPnA+rPro/LHhU8ynOz1FPT0KESMCAFAAyJwc4Pk2QDcDML4E8Mao9zwAAKHeTQH1f5B/99W7IADAG6gBkAhA2AjsbQQcgwHdRiABQHIwSE/PvktjJTmeHmotHQZgve3peWEFcBqAj0xPT/e6np6PWwDqFtA4Ub1fAgDbAPjOEwAu88tmfrnn/Rdk/3+vkieIOQAAACBjSFJNAABtdQAAc6AAAQf+AAB+oQAAZJMAAQnwAAAyaAAAEczyAyQAAAAM2ElEQVR42uydeVyU1RrHf/My7JvIIouBIwiCimIhbuGeoGZ1XVJsUcOuW5amXAvKa4RbfrTsXlFb1DSz1FwgyVIQTTRExA0UQvZhkH2fAWbm/sEFOTMDMy8wM+9M7/OPvmfe5ZzzfZ/nnOc5z3vgSKVSsMIcodguYIGw0oVwOx54c88xrX7qsKccpjUyo2W2YiB6CkDZMziM1RA9hqDq8zl/VyBMndpJtQ2Gy4JgFhiKhaG0zlJ90xB98Dw1pjFcFgSzwFAsDGa1j2JhMKudXBYEs0wYxcJgVvspFgazoFAsDGZBoVgYzIJCsTCYBYVdoGIYFIrVDmYJxcJglpZQLAxmQWHHEIZBoVjtYJZwdbHSln0M4eBkAnsnY9g7tv5rZt7aFLFYiuyMWqTfrkZhTgPTtITTG0C0rh1cQwpjp9hh4ixHvPCKE2z7Gat0XXVFE9JvV+N2UgVOHcoHP6+R8S8bp2MqqYK8LK3CGD3ZDnOWuGLiTEdYWPVMmaVSID5GgKP/eYwb8WVa7XPZgo55WYwEEjzPGcvDPeE51Eot98+8X4N9UZmIO8HXKSAah+E2yByR+0fAP9C203PEYikepFahILsBRbkNKOEL0SSSYMAgc4Ss4OHSuWL0tTeGu7cl+rmYdPm8m1fK8dE/05CXVa9VKIzMXJw+xxlbv/WDqbmB3G8ioQQXzxTj7JEC3LxSDmGjGBTFQdA8Z4Ru8ID3COv2cy+dFeDXk61vvpOrKWbMd8HMBS7EOW3iH2iL0ykT8cHS27hwis+IfmCEhmzcOQRvvucuV97cJMHx/bmIjspEZVlTe3lgkAPCPhsCd29LAAA/rxGWfbiwtDbEd188xtb378vda8jIPggN88D0Oc7gKJjrHNyVjR1hD7SiJaqYLI3A4HCAyAMjMGeJq9xvcSf42BH2AIKCRmK2tWGbD954d2B7WZNIgplD41We4roNMsfWb/3gN6av3G8nvs7DphV3oKFPZjiMM1mbo4fLwaiuaELYG6m48usTotzYhMKBX0Zj1AQ7ojw6KhMioQShYR7w9bdBH1ujdu3aG/kIt65VEOfnZdXjtQnX8PbGQVj9sRcMuE/VZV6oG8RiKTavuqs1v0RrGrJm82CsCPckygoeN2DxtGty/oKhEYX9MQEYM8Ve7j6vjLwMc0sujiaOl/stN7MOwT7xndYhYKIdos8GyI1b0VGZ2LPpoca0pKOGUNpwBJ+f7iAHIy+rHgufv6rQedscPVwhDADoP9AcZU9ECn8b4GkBt0Hmndbjz8tlWDThD5TLXL8i3BOBwf0YM6irFUg/FxPE3JkEyz6G7WWCgka8Ou4qnvCFCp3Dg7+N7ZHP8dKIy12e4+5tiRM3AglNqa1qxovDE1BSJFQ7A2Uaolb5186hBAyRUIKlQdcVwjCz4GL7oZE9ep6RkfImZmfUYvWcZIjFUiJetuUbP41riEaB+I6yQfA8Z6Jsy9p7yHlUp/D8Jevc4eBs0qNnHv1vjkrnJV0sxe7wDKJs7FR7zFrYX6tA1Gqu1m/zIY6TE8vw01d5Cs81s+DizTUDe/S804cL8L2KQADg0O5spN+uJsreixwMiuLon4b4jelLhESaRBKEh6Z1ev7C5QMI00ZXBIWNiI8R0LpGLJYiYlkaJJKn76XLADMEyWi1Gqa/mgey9H3SEz++L7dLZ64nnbBpxR1MGvA7Lp4ppn1tRlo1zh0tJMpCVgzQLw2xsTPC5NmO7cctzRIc2J6llmfdvFLeqRlUVaK3ZBJaMnKcLRyfMdUfIC8u6k/Y4YTYErm5v6y0NNMbzpqbJEiIFSBiWVqP6mpiagD/QFvU17YQIZ6guc76A2SsjFN3/sci5RWjWbO4n/hY+XIy8rO7H0qfMKMfrhZNx6cHRsDSmhy/AoMcNAJE7bEsDgdy8afrKqzY2djJL9OWFgsRueYePIZYwoDioLK8CfNC3eA1zAqzQlzw6bv3UFvd3K16Dg+wwZcn/WHYid/y7HhbGJtQEAklug2E52VBeMCPH9ahuqJJ6XWmZmR86QlfiMXTkpDzqA6/n346WDfUtWDLN36gKA7MLAy6BcTU3AC7f3iuUxgAYGRMgedpgYd3a3TbZPG8LIjjh3eqVZsLdgjpiIQSRCxLQ3OT/NsZc6wIN+LLIG6RKvT2STPIQfB8FxgYkH7F+q0+cHJVPmi7epjrvslyk2lE9sM6la5rbBC3/78t9C6VAstn/4krcSXEjO2toOuYPNtR6TqGRCJF4eN6nEwOxPd7c5H/Vz2en+6AkJU8ler0zEA9AGJtY0QcV5aKVLruWHQuNu4cIjce2dgZKexoVX2OeylVOP8TH5H7h9Nui+xAr5MmSzZ9p+N0sis5/Hk2doVnoLxEhEtnBe3xrpKinudWfbU9S6WME1kT2dNUJEYAkfZgM6SvtmdhvMsFrJ6TjMTzrWaq6v9r6wZcDsZNs8dHe4Zh20E/2DoY06rXhtdvISG289BKabEQ0VGZXbdFF02WrEZYWHVP7S+c4mPxWnds3DUUIqEEz43vCzMLLjEtjTlWiNysOggKhGhpluBeSpXCiQAAiFukeGfuTayN9Mbide7EQN9YL0Zo8A1MecmxW9rNaCA1MtPQtjVvupJ2oxL8vEYETLRT+Ht/npncKiQA3L1ZiSN7cnD+xyIiHNIGZecH6Th9pABrI71hZWOI4vxG7NuaiZxHdXj1bTfi/O76OIwCUiQTQHTr5tQxeJ4znN3ox5N8/W3w2REbvPNvL6z+RzKyHtTKnZOd3rpAJSt2juRaTG5WndqBqH0MkQ1luHtbdOs+fmP79qgeru7m2LBjCK1rfPysZYDU6z6Q7IxaNIkkHRrZR2F2ojJxdjXrUT2K8xuxfYPqiXCuHubozzMjIgI5D/VAQ0RCCW79UU74EoFB9DM6urvhs0QixbG9OXjJ7zKy02tVvm6CTNZJcmK53Bikk0AAIDGOTHqbucCF9j1yM7tnLnZuTEfkGvpBx8BgMrp7/VKpJrpKM0Bifygk5vCTZvVT6HF3JZn36Qf1aqua8cO+XPrjjYc5xk61J8IzMccKtQJELav55SUipCY9TenkGlIqx4+ealkJWprphb5Pf1cAYYeYmKqyMtyTWFC7/EsJkezdy8LRuIYArWvoHeW1VTzCsVPqz1Q24935KUojuh19jIO7smnX08nVFLNCyNQfWY9d500W0LpKWJTbQDiI66K8ad0jPkaAFzwvYtv6B0rf2J8P5UNQSD/uFfHFMMJrv/VHuVxqkF4AkUik2B1BJqKFrORh9GQ72rO2w59nY25AYqfmKCFWgM82ptOu48LlAzD5RTJcsiMsHZoUSplN60355XgRki6WElPgL0+O6tbCDz+vEYkd1kXa5AlfiLULUlBbRW9W5TXMCh/uHiqn1XeTK9XZ/xytaUibfPjWbaKzLKy42Hc2gNZ40iay+VMAUPC4nva6t2N/U+w9EwCuIUXM0DT8RZV2gJQUCbH+9VSijOdlgV3HnoWRMb3qJMQKcPUC6ePU1bTQhvF94ni5ONn611M1kfmuMhC1JrNeiSuRm7lMmNEPP14PpJWQJpUC6xamEB3n42dNvOndgREdlUksE2vKXGlFQ9pkz6aHOL6fnAoP9rXCmVsTaOVA1dW0YN3ClPZjeycTzHhVeVLbzAUuOJkcKAfj+P5cTX09RdtkqT3l+5PVd3HiazLt07qvEfbFjEbEF8NgbKLa+5KaVEEsHsnOlDqKs5spvo4bg51Hn5VbZTx1MB+frNbI94Ucxowhsibn4+V35Bw4DgdYtIqHc2mTsGgVT6Xkgo5gFdl+X38bbD80Er9mTMG4afKfxx3+PBsRy9Kg7T9ax5itNVTZOODc0QIkJ7ZuHCArdo7G+O3RVJiaG2D1nGRcOisAz8sCY6faY+5SVwwebq3wuY31Ym1sHNDpTg7KgGgUiqpba9xPqULqtQqkJlWgprJ1Cu3gbIL5y9zgH2iL334uxojRNkq/vrp5pRwRb6ch/696rcHoDhCNQgH0evMZhWMH44G0yejJdghZwcPUl50UbodBR+pqWhAfI8Dpw/na3J6p14BoDUrbzGjuEjf4BtjAd1QflTMIn/CFSIgV4OIZAW4klNEO32tqZqVzQGSlP88MPn7WcPdp/SwBABrqW1BaLEJpsRClJSI84Qtpx7N0DQijoOiYdGlwe7JxAIft296F0RuOIQtFjX3FbqTMMKE0RZ7VDvVrCAtFDX1DaevBLAz1jSEslF7sC4opFWFh9P4si8PC6Llw1VQxKQtC+xryd9MWtbSR0rUK6zMMdZgsfTdhOv0H7vUJjMa0ndLXhulqnblabqCUhaB9IEw2ZVrXYC4DO0L6d4PARCBddZBUnwHIVU4qZZfJmSTsiiELhJWu5H8DADyr/3LmLs8SAAAAAElFTkSuQmCC';
const articleIcon = 'image://data:image/png;base64,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';
class GraphChart {
  constructor(chart) {
    this.app = echarts.init(chart);
    this.cass = [{ name: 'ups' }, { name: 'downs' }, { name: '合成路线' }];
    // this.app.on('mouseup', (params) => {
    // const option = this.app.getOption();
    // option.series[0].data[params.dataIndex].x = params.event.offsetX;
    // option.series[0].data[params.dataIndex].y = params.event.offsetY;
    // option.series[0].data[params.dataIndex].fixed = true;
    // this.app.setOption(option);
    // console.log(option, params);
    // });
    this.app.on('graphRoam', (params) => {
      console.log(params.zoom);
    });
    // window.onresize = () => {
    //   console.log(1);
    //   this.app.resize();
    // };
  }


  static loadingData(data, cas, key = [], news = []) {
    this.keys = key;
    const nodes = [];
    const links = [];
    console.log(news);
    // this.cass = this.cass.unshift({ name: cas });

    function genEleNode(v, cate) {
      if (key.indexOf(v.cas) < 0) {
        // const symbol = v.url ? prefix + v.url : 'rect';
        nodes.push({
          type: 'element',
          img: v.url,
          name: v.cas,
          id: v.cas,
          symbol: huaxueIcon,
          category: cate,
          symbolSize: 40,
          label: { normal: { show: true } },
          emphasis: {
            itemStyle: {
              borderColor: 'blue',
            },
          },
        });
        // nodes.push({name: v.cas, id: v.cas, category: cate, symbolSize: 30, label: {normal: {show: true}}})
        key.push(v.cas);

        if (news.length) {
          const selectNews = news.splice(0, 1);
          nodes.push({
            type: 'news',
            url: selectNews[0].link,
            name: selectNews[0].title,
            source_web: selectNews[0].source_web,
            id: `news${v.cas}`,
            symbol: newsIcon,
            symbolSize: 40,
            // label: { normal: { show: true } },
            emphasis: {
              itemStyle: {
                borderColor: 'blue',
              },
            },
          });
          links.push({ name: null, source: v.cas, target: `news${v.cas}`, value: '新闻', lineStyle: { color: 'red' } });
        }
      }
    }


    genEleNode(data.info, 0);

    function loadingNodes() {
      data.synts.forEach((val, index) => {
        const mid = `${val.pre}:${Math.random().toString(36).substr(2)}`;
        // var cate = cass.push(`路线${index.toString()}`)
        nodes.push({
          type: 'element',
          name: mid,
          id: mid,
          value: val.pre,
          category: 3,
          symbolSize: 40,
          symbol: nodeIcon,
          label: { normal: { show: false } },
        });
        val.front.forEach((v) => {
          genEleNode(v, 3);
          links.push({ name: null, source: v.cas, target: mid, value: '构成', lineStyle: { color: 'darkgreen' } });
        });
        val.back.forEach((v) => {
          genEleNode(v, 3);
          links.push({ name: null, source: mid, target: v.cas, value: '转化', lineStyle: { color: 'darkblue' } });
        });
      });
    }

    function loadingupdown(data, cas) {
      data.updown.ups.forEach((val) => {
        genEleNode(val, 1);
        // console.log(val);
        links.push({ name: null, source: cas, target: val.cas, value: '上游', lineStyle: { color: '#888' } });
      });
      data.updown.downs.forEach((val) => {
        genEleNode(val, 2);
        // console.log(val);
        links.push({ name: null, source: cas, target: val.cas, value: '下游', lineStyle: { color: 'darkred' } });
      });
    }

    loadingNodes();
    loadingupdown(data, cas);

    return { nodes, links };
  }
  static option(categories, graph) {
    // console.log(this.a);
    // let height = window.innerHeight
    // let width = window.innerWidth
    graph.nodes.map((n) => {
      // n.draggable = true;
      // n.x = Math.random()*width
      // n.y = Math.random()*height
      n.x = n.y = null;
    });
    return {
      tooltip: {
        show: false,
      },
      legend: [],
      // animation: false,
      animationDuration: 1,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: '',
          type: 'graph',
          layout: 'force',
          // layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories,
          roam: true,
          nodeScaleRatio: 0.8,
          focusNodeAdjacency: true,
          draggable: true,
          symbolRotate: 2,
          scaleLimit: {
            max: 2,
            min: 0.3,
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)',
            },
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [2, 8],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 12,
              },
            },
          },
          force: {
            // initLayout: 'circular',
            edgeLength: 100,
            repulsion: 500,
            layoutAnimation: false,
          },
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            // curveness: 0.3,
            width: 2,
          },
          emphasis: {
            lineStyle: {
              width: 4,
            },
          },
          markPoint: {
            silent: true,
          },
          markLine: {
            silent: true,
          },
          markArea: {
            silent: true,
          },
          zlevel: 100,
        },

      ],
    };
  }


  gen_synt(data, key = []) {
    this.keys = key;
    const nodes = [];
    const links = [];

    function genEleNode(v, cate) {
      if (key.indexOf(v.cas) < 0) {
        const symbol = v.url ? prefix + v.url : 'rect';
        nodes.push({
          name: v.cas,
          id: v.cas,
          symbol,
          category: cate,
          symbolSize: 50,
          label: { normal: { show: true } },
        });
        // nodes.push({name: v.cas, id: v.cas, category: cate, symbolSize: 30, label: {normal: {show: true}}})
        key.push(v.cas);
      }
    }

    function loadingNodes() {
      data.synts.forEach((val, index) => {
        const mid = `${val.pre}:${Math.random().toString(36).substr(2)}`;
        // var cate = cass.push(`路线${index.toString()}`)
        nodes.push({
          name: mid,
          id: mid,
          value: val.pre,
          category: 3,
          symbolSize: 15,
          symbol: 'diamond',
          label: { normal: { show: false } },
        });
        val.front.forEach((v) => {
          genEleNode(v, 3);
          links.push({ name: null, source: v.cas, target: mid, value: '构成', lineStyle: { normal: {} } });
        });
        val.back.forEach((v) => {
          genEleNode(v, 3);
          links.push({ name: null, source: mid, target: v.cas, value: '转化', lineStyle: { normal: {} } });
        });
      });
    }

    loadingNodes();
    return { nodes, links };
  }


  gen_updowns(data, cas, updown, key = []) {
    this.keys = key;
    const nodes = [];
    const links = [];

    function genEleNodes(v, cate) {
      if (key.indexOf(v.cas) < 0) {
        const symbol = v.url ? prefix + v.url : 'rect';
        nodes.push({
          name: v.cas,
          id: v.cas,
          symbol,
          category: cate,
          symbolSize: 50,
          label: { normal: { show: true } },
        });
        // nodes.push({name: v.cas, id: v.cas, category: cate, symbolSize: 30, label: {normal: {show: true}}})
        key.push(v.cas);
      }
    }

    // console.log(data.info.cas)
    genEleNodes(data.info, 0);
    data.updown[updown].forEach((val) => {
      genEleNodes(val, 2);
      links.push({ name: null, source: cas, target: val.cas, value: '下游', lineStyle: { normal: {} } });
    });
    return { nodes, links };
  }


  show(d, merge = false) {
    // var d = {nodes, links};
    const options = GraphChart.option(this.cass, d);
    // options.series[0].fixed = false;
    this.app.clear();
    this.app.setOption(options, merge);
    options.series[0].fixed = true;

    // setTimeout(() => {
    //   this.app.setOption(options);
    // }, 1000);
    // window.onresize = () => {
    // this.app.clear();
    // this.app.setOption(options, merge);
    // this.app.setOption(options);
    // };
  }
}

export default GraphChart;

