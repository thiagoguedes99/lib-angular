const isMobile = (media: string = 'max-width: 960px') => window.matchMedia(`(${media})`).matches

export default isMobile
