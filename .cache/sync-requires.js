
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("D:\\Projekty\\amadeo-media\\src\\pages\\404.js")),
  "component---src-pages-home-js": preferDefault(require("D:\\Projekty\\amadeo-media\\src\\pages\\home.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\Projekty\\amadeo-media\\src\\pages\\index.js")),
  "component---src-pages-o-mnie-js": preferDefault(require("D:\\Projekty\\amadeo-media\\src\\pages\\o-mnie.js")),
  "component---src-pages-polityka-prywatnosci-js": preferDefault(require("D:\\Projekty\\amadeo-media\\src\\pages\\polityka-prywatnosci.js")),
  "component---src-pages-wyslano-email-js": preferDefault(require("D:\\Projekty\\amadeo-media\\src\\pages\\wyslano-email.js"))
}

