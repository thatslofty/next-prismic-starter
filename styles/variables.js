export const styles = {
  white: '#ffffff',
  black: '#000000',
  brandPrimary: '#000000',
  backgroundLight: '#EAF4F6',
  // backgroundDark: '#212A35',
  backgroundDark: '#213B48',
  mainDarkBlue: '#213B48',
  mainLightBlue: '#3396BD',
  whiteCopy: '#F1FAEE',
  darkCopy: '#555555',
  homeHeaderHeight: '138px',
  headerHeight: '100px',
  headerBackground: 'rgba(33,60,73,0.95)',
  // quote page
  backgroundMainColor: '#E6EBE0',
  backgroundBlockColor: 'rgba(17,75,95,.15)',
  backgroundBlueColor: '#114B5F',
  backgroundRedColor: '#DE8B76',
  offWhiteFont: '#E6EBE0',
  blueFont: '#114B5F',
  redFont: '#CD5C46',
  spacing: {
    small: 10,
    medium: 25,
    large: 69,
    extraLarge: 96,
    tabletMargin: 75,
    phoneMargin: 50
  },
  mediaSizes: {
    largeDesktop: 1200,
    desktop: 992,
    tablet: 900,
    largePhone: 768,
    phone: 575,
    smallPhone: 376
  },
  fonts: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  }
}

export const mediaQueries = {
  largeDesktop: `only screen and (max-width: ${styles.mediaSizes.largeDesktop}px)`,
  desktop: `only screen and (max-width: ${styles.mediaSizes.desktop}px)`,
  tablet: `only screen and (max-width: ${styles.mediaSizes.tablet}px)`,
  largePhone: `only screen and (max-width: ${styles.mediaSizes.largePhone}px)`,
  phone: `only screen and (max-width: ${styles.mediaSizes.phone}px)`,
  smallPhone: `only screen and (max-width: ${styles.mediaSizes.smallPhone}px)`
}
