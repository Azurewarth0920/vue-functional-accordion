export default {
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
        enter: (el: ) => {
          console.log(el)
        },
        afterEnter: (el) => {
          console.log(el)
        },
        leave: (el) => {
          console.log(el)
        },
        afterLeave: (el) => {
          console.log(el)
        }
      },
    }

    return (
      <transition {...data}>
        {context.props.status && <div style="overflow: hidden;">{context.children}</div>}
      </transition>
    )
  },
}
