'use strict'
import $ from 'jquery'

/**
* @param {object} opts - an object with the config options
* @return {object} object of the xmlHttpRequest
*/
const ludensAjax = (opts) => {
  if (!opts) {
    throw new Error(`loadmore requires an object as a param`)
  } else if (typeof opts != 'object') {
    throw new Error(`Expected '${opts}' to be an object`)
  }

  opts = ({
    method: null,
    url: null,
    data: null,
    dataType: null,
    outputTarget: null,
    cb: Function,
    loading: {
      selector: null,
      loadingText: null
    },
    errorMsg: null,
    jsonResult: Function
  }, opts)

  const setup = {} || null

  setup.type = opts.method
  setup.url = opts.url
  setup.data = opts.data ? setup.data = opts.data : null
  setup.dataType = opts.dataType ? setup.dataType = opts.dataType : null

  setup.beforeSend = () => {
    if (opts.loading) {
      $(opts.loading.selector).text(opts.loading.loadingText)
    }
  }

  setup.success = (data) => {
    if (!data) throw new Error('There is no data to collect')
    let lowerCasedDataType = setup.dataType ? setup.dataType.toLowerCase() : null
    if (lowerCasedDataType === 'json') {
      if (typeof opts.jsonResult === 'function') {
        opts.jsonResult(data)
      } else {
        throw new Error(`Expected '${opts.jsonResult}' to be a function`)
      }
    } else {
      $(opts.outputTarget).append(data)
    }
    $(opts.loading.selector).remove()
  }

  setup.complete = () => {
    if (opts.cb && typeof opts.cb == 'function') {
      opts.cb()
    } else {
      throw new Error(`Expected '${opts.cb}' to be a function`)
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
