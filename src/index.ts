export default {
  name: 'functional-component',
  functional: true,
  props: {
    status: {
      type: Boolean,
      required: true,
    },
  },
  render: function (h, context) {
    const data = {
      on: {
        enter: function (el) {
          console.log(el)
        },
        afterEnter: function (el) {
          console.log(el)
        },
        leave: (el) {
          console.log(el)
        },
        afterLeave: (el) {
          console.log(el)
        }
      },
    }

    return (
      <transition {...data}>
        {context.props.status && <div>{context.children}</div>}
      </transition>
    )
  },
}
