import './services'

export const getImg = (src: string) => {
  const imgContext = (require as any).context('@/images', true)
  const imgIndex = imgContext.keys().findIndex((path: string) => path === `./${src}`)
  return imgContext([imgContext.keys()[imgIndex]])
}