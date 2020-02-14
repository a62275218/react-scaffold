export const getImg = (src: String) => {
  const imgContext = (require as any).context('@/images', true)
  const imgIndex = imgContext.keys().findIndex((path: String) => path === `./${src}`)
  return imgContext([imgContext.keys()[imgIndex]])
}