function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/pages/index/index.tsx' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.tsx` }
  },
  '/src/pages/index/index.module.less' ({ pageName,cssExt}) {
    return { setPageName: `/src/pages/${pageName}/index.module.${cssExt}` }
  },
  '/src/pages/index/index.config.ts' ({ pageName}) {
    return { setPageName: `/src/pages/${pageName}/index.config.ts` }
  }
}

const basePageFiles = [
  '/src/pages/index/index.tsx',
  '/src/pages/index/index.module.less',
  '/src/pages/index/index.config.ts'
]

module.exports = {
  handler,
  basePageFiles,
  platforms: ['react', 'nerv']
}
