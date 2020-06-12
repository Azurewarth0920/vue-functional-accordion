import Vue from 'vue'
import { nextFrame } from './utils'

export default Vue.extend({
  functional: true,
  props: {
    status: {
      type: Boolean,
      required: true,
    },
    duration: {
      type: String,
      default: '0.5s'
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.44, 0.03, 0.14, 0.98)'
    },
  },
  render: function (h, context) {
    const data = {
      on: {
        enter: (el: HTMLElement) => {
          const elementStyle = el.style
          const elementHeight = el.scrollHeight
          elementStyle.overflow = 'hidden'
          elementStyle.height = '0'
          elementStyle.transitionProperty = 'height'
          elementStyle.transitionDuration = context.props.duration
          elementStyle.transitionTimingFunction = context.props.timingFunction
          nextFrame(() => {
            elementStyle.height = elementHeight + 'px'
          })
        },
        afterEnter: (el: HTMLElement) => {
          const elementStyle = el.style
          elementStyle.overflow = elementStyle.height = elementStyle.transitionProperty = elementStyle.transitionDuration = elementStyle.transitionTimingFunction = context.props.timingFunction = ''
        },
        leave: (el: HTMLElement) => {
          const elementStyle = el.style
          const elementHeight = el.scrollHeight
          elementStyle.overflow = 'hidden'
          elementStyle.height = elementHeight + 'px'
          elementStyle.transitionProperty = 'height'
          elementStyle.transitionDuration = context.props.duration
          elementStyle.transitionTimingFunction = context.props.timingFunction
          nextFrame(() => {
            elementStyle.height = '0px'
          })
        },
        onAfterLeave (el: HTMLElement) {
          const elementStyle = el.style
          elementStyle.overflow = elementStyle.height = elementStyle.transitionProperty = elementStyle.transitionDuration = elementStyle.transitionTimingFunction = context.props.timingFunction = ''
        }
      },
    }

    return (
      <transition {...data}>
        {context.props.status && <div style="overflow: hidden;">{context.children}</div>}
      </transition>
    )
  },
})
