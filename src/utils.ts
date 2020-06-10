const raf =
  typeof window !== undefined && window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : (fn: Function) => {
        setTimeout(fn, 0)
      }
export function nextFrame(fn: Function) {
  raf(() => raf(fn))
}
