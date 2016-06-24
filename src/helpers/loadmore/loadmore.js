'use strict'
import $ from 'jquery'

const loadmore = (opts) => {
  if (!opts || typeof opts != 'object') {
    throw new Error('Not exisiting or not an object')
  }

  opts = ({
    method: null,
    url: null,
    outputTarget: null,
    cb: Function,
    loading: {
      selector: null,
      loadingText: null
    }
  }, opts)

  $.ajax({
    type: opts.method,
    url: opts.url,
    beforeSend: () => {
      if (opts.loading) {
        $(opts.loading.selector).text(opts.loading.loadingText)
      }
    },
    success: (data) => {
      $(opts.outputTarget).append(data)
    },
    complete: () => {
      if (opts.cb && typeof opts.cb == 'function') {
        opts.cb()
      } else {
        throw new Error('Expected cb() to be a function.')
      }
    },
    error: (xhr, status) => {
      $(opts.outputTarget).html(`Error: ${xhr.status}`)
    }
  })
}

export default loadmore
