import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faCodeBranch, faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt, faSass, faBootstrap, faAngular, faReact, faJsSquare, faNpm, faNodeJs, faGithub, faDocker, faWordpress, faFigma, faAndroid, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

// Importing solid icons
library.add(
  faRulerCombined,
  faCodeBranch
)

// Importing regular icons
library.add(
  faCopy
)

// Importing brands icons
library.add(
  faHtml5,
  faCss3Alt,
  faSass,
  faWordpress,
  faJsSquare,
  faNpm,
  faBootstrap,
  faAngular,
  faReact,
  faNodeJs,
  faGithub,
  faDocker,
  faAndroid,
  faFigma,
  faTwitter,
  faInstagram,
  faDribbble
)