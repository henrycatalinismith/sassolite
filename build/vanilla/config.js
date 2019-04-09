({
  name: "sassolite",
  baseUrl: "../../src",
  optimize: "none",
  paths: {
    'parser': '../build/parser'
  },
  wrap: {
    startFile: 'start.frag',
    endFile: 'end.frag'
  }
})
