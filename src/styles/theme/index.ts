import { rgba } from 'polished'

const DEFAULT_TRANSITION = 'ease-in-out'

const createTransition = (element: string, type = DEFAULT_TRANSITION) =>
  `${element} 400ms ${type}`

const theme = {
  colors: {
    primary: '#4B87F4',
    secondary: '#46E8B9',
    black: '1F2227',
    white: '#F9FBFC',
    silver: '#E3E3E3',
    silverSky: '#EAEDF7',
    success: '#5CF590',
    warning: '#FF9141',
    danger: '#FF4141',
  },
  spacings: {
    xxs: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    xxl: '48px',
  },
  zIndexes: {
    base: 1,
    soft: 2,
    medium: 3,
    hard: 8,
    over: 9,
  },
  breakPoints: {
    mobile: `@media screen and (max-width: 700px)`,
    desktop: `@media screen and (max-width: 992px)`,
    largeDesktop: `@media screen and (max-width: 1200px)`,
  },
  tipographies: {
    type: {
      primary: 'Open Sans',
      secondary: 'Montserrat',
    },
    weight: {
      regular: 400,
      bold: 600,
      bolder: 800,
    },
    size: {
      xxs: '8px',
      xs: '12px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
    },
  },
  borders: {
    radius: '5px',
  },
  opacities: {
    default: '0.7',
  },
  shadows: {
    box: {
      soft: '0px 0px 4px 0px rgba(0,0,0,0.50)',
      medium: '0px 0px 8px 0px rgba(0,0,0,0.50)',
      hard: '0px 0px 10px 0px rgba(0,0,0,0.50)',
      navbar: '0px 3px 10px 0px rgba(0, 0, 0, 0.5);',
      field: `0px 1px 10px 0px ${rgba('black', 0.3)}`,
    },
  },
  transitions: (element: string, type = DEFAULT_TRANSITION) => {
    if (Array.isArray(element)) {
      return element.map((e) => createTransition(e, type)).join(', ')
    }
    return createTransition(element, type)
  },
}

export default theme
