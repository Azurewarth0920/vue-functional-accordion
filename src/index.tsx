import Vue from 'vue'
import { nextFrame } from './utils'

export default Vue.extend({
  functional: true,
  props: {
    status: {
      type: Boolean,
      required: true,
    },
    accrodionTransitionProperty: {
      type: String,
      default: 'height 0.3s cubic-bezier(0.44, 0.03, 0.14, 0.98)'
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
          elementStyle.transition = context.props.accrodionTransitionProperty
          nextFrame(() => {
            elementStyle.height = elementHeight + 'px'
          })
        },
        afterEnter: (el: HTMLElement) => {
          const elementStyle = el.style
          elementStyle.overflow = elementStyle.height = elementStyle.transition = ''
        },
        leave: (el: HTMLElement) => {
          const elementStyle = el.style
          const elementHeight = el.scrollHeight
          elementStyle.overflow = 'hidden'
          elementStyle.height = elementHeight + 'px'
          elementStyle.transition = context.props.accrodionTransitionProperty
          nextFrame(() => {
            elementStyle.height = '0px'
          })
        },
        onAfterLeave (el: HTMLElement) {
          const elementStyle = el.style
          elementStyle.overflow = elementStyle.height = elementStyle.transition = ''
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
