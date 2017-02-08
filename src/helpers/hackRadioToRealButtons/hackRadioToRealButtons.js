import $ from 'jquery'

export default function hackRadioToRealButtons(trigger, styles = {}) {
  const { initialStyles, activeStyles } = styles

  if (!trigger) {
    throw new Error(
      `You are missing a selector.`
    )
  }

  if (styles) {
    if (
      !styles.hasOwnProperty('initialStyles') ||
      !styles.hasOwnProperty('activeStyles')
    ) {
      throw new Error(
        `When using styles, you need to ` +
        `explicitly set 'initialStyles' and 'activeStyles' as keys`
      )
    }
  }

  trigger.css(styles.initialStyles)

  trigger.on('click', function() {
    const $this = $(this)

    if ($this.find('input').is(':checked')) {
      $this.css(styles.activeStyles)
    } else {
      trigger.css(styles.initialStyles)
    }
  })
}
