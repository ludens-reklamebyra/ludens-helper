'use strict'
import $ from 'jquery'

/**
* @param {object} opts - an object with the config options
* @return object of xmlHttpRequest
*/
const ludensAjax = (opts) => {
  if (!opts) {
    throw new Error(`loadmore requires an object as a param`)
  } else if (typeof opts != 'object') {
    throw new Error(`Expected ${opts} to be an object`)
  }

  opts = ({
    method: null,
    url: null,
    data: null,
    outputTarget: null,
    cb: Function,
    loading: {
      selector: null,
      loadingText: null
    },
    errorMsg: null,
  }, opts)

  const setup = {}

  setup.type = opts.method
  setup.url = opts.url
  setup.data = opts.data ? setup.data = opts.data : null

  setup.beforeSend = () => {
    if (opts.loading) {
      $(opts.loading.selector).text(opts.loading.loadingText)
    }
  }

  setup.success = (data) => {
    $(opts.outputTarget).append(data)
  }

  setup.complete = () => {
    if (opts.cb && typeof opts.cb == 'function') {
      opts.cb()
    } else {
      throw new Error(`Expected ${opts.cb} to be a function`)
    }
  }

  setup.error = () => {
    if (!opts.errorMsg) {
      throw new Error(`There is no errorMsg to display`)
    } else if (typeof opts.errorMsg !== 'string') {
      throw new Error(`Error message should not be a ${typeof opts.errorMsg}`)
    }
    $(opts.outputTarget).html(opts.errorMsg)
  }

  return $.ajax(setup)
}

export default ludensAjax
