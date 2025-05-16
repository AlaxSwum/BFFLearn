// Font configurations
export const fontConfig = {
  primary: {
    family: 'Mabry Pro',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  secondary: {
    family: 'var(--font-poppins)',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
};

// Spacing system
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96pxz
};

// Color palette
export const colors = {
  primary: {
    DEFAULT: '#FFB333',    // Primary color
    light: '#FFC266',      // Lighter variant
    dark: '#E6A12E',       // Darker variant
  },
  secondary: {
    DEFAULT: '#FFB333',    // Secondary 1
    variant2: '#3660D4',   // Secondary 2
  },
  background: {
    DEFAULT: '#F5F5ED',    // Light background
    dark: '#272727',       // Dark background
  },
  text: {
    primary: '#1e293b',    // slate-800
    secondary: '#64748b',  // slate-500
    light: '#94a3b8',      // slate-400
  },
};

// Common section styles
export const sectionStyles = {
  padding: {
    default: `${spacing.md} ${spacing.lg}`,
    small: `${spacing.sm} ${spacing.md}`,
    large: `${spacing.xl} ${spacing['2xl']}`,
  },
  margin: {
    default: `${spacing.lg} 0`,
    small: `${spacing.md} 0`,
    large: `${spacing['2xl']} 0`,
  },
};

// Common container styles
export const containerStyles = {
  maxWidth: '1200px',
  padding: `0 ${spacing.lg}`,
  margin: '0 auto',
};

// Common text styles
export const textStyles = {
  h1: {
    fontSize: '2.5rem',
    fontWeight: fontConfig.primary.weights.bold,
    lineHeight: '1.2',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: fontConfig.primary.weights.semibold,
    lineHeight: '1.3',
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: fontConfig.primary.weights.semibold,
    lineHeight: '1.4',
  },
  body: {
    fontSize: '1rem',
    fontWeight: fontConfig.primary.weights.regular,
    lineHeight: '1.5',
  },
  small: {
    fontSize: '0.875rem',
    fontWeight: fontConfig.primary.weights.regular,
    lineHeight: '1.5',
  },
}; 