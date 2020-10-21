function createWhenTs (params) {
  return params.typescript ? true : false
}

//'none' or 'sass' or 'stylus' or 'less'
const cssExts = {
  'none':'css',
  'sass':'scss',
  'less':'less',
  'stylus':'styl',
}


const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/pages/index/index.tsx' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.tsx` }
  },
  '/src/pages/index/index.module.less' ({ pageName,css}) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.module.${cssExts[css]}` }
  },
  '/src/pages/index/index.config.ts' ({ pageName}) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.config.ts` }
  },
  //增加一个模板
  '/src/pages/index/components/index.ts' ({ pageName}) {
    return { setPageName: `/src/pages/${pageName}/components/index.ts` }
  }
}

const basePageFiles = [
  '/src/pages/index/index.tsx',
  '/src/pages/index/index.module.less',
  '/src/pages/index/index.config.ts',
  '/src/pages/index/components/index.ts'
]

module.exports = {
  handler,
  basePageFiles,
  platforms: ['react', 'nerv']
}
