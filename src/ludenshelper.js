'use strict'
import $ from 'jquery'

class Ludenshelper {
  constructor(elem) {
    this.elem = elem
    this.selector = $(this.elem)
  }

  toggleOnEvent(opts) {
    if (typeof opts != 'object') throw new Error(`Expected options to be an object`)
    opts = ({
      event: 'click',
      menuElement: null,
      toggleType: null,
      speed: 500
    }, opts)

    if (typeof opts.toggleType != 'string') {
      throw new Error('Expected toggleType to be a string, and to match a jquery event method')
    }

    if (opts.toggleType == 'slideToggle' || opts.toggleType == 'toggle') {

      this.selector.on(opts.event, function(e) {
        $(opts.menuElement)[opts.toggleType](opts.speed)
      })

    } else {
      throw new Error(`
        Only toggle-methods available
        in the jQuery API is 'slideToggle()'
        and 'toggle(). Please choose either one'
      `)
    }
    return this
  }
}

export default ludens = selector => new Ludenshelper(selector)
