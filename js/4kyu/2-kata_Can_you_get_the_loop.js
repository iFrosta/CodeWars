function loop_size(node) {
  let loop = []
  while (node && loop.indexOf(node) < 0) {
    loop.push(node)
    node = node.next
  }
  return loop.length - Math.max(0, loop.indexOf(node))
}
