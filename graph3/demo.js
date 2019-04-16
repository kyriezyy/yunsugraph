'use strict'
!(function (n, i) {
  function r () {
    function r () {
      var r = commonService.user()
      i('.containerBox').on('click', '.item-row', function () {
        var e = i(this).data('link'); r && e ? n.open('../' + e + '/') : layer.msg('请先登录')
      })
    }
    var e = {}; return i(function () { r() }), e
  }

  n.galleryService = r()
}(window, jQuery))
