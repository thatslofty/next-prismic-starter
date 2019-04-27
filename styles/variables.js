export const styles = {
  white: '#ffffff',
  black: '#000000',
  brandPrimary: '#000000',
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
