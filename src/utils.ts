export function nextFrame(cb): void {
  if (window === undefined) return
  requestAnimationFrame ? requestAnimationFrame(cb) : setTimeout(() => cb(), 0)
}
