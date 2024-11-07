
export const theme = {
  // Colors
  colors: {
    primary: '#1DA1F2',    // OxDev blue
    secondary: '#1A1A1A',  // Dark gray
    accent: '#0D8BD9',     // Darker blue for hover states
    background: '#FFFFFF', // White
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      light: '#FFFFFF',
    }
  },

  // Typography
  fonts: {
    primary: "'Inter', sans-serif",     // Modern, clean font
    secondary: "'Poppins', sans-serif", // Good for headings
    plus: "'Nunito', sans-serif", // Good for headings
    mono: "'JetBrains Mono', monospace" // For code snippets
  },

  // Font sizes
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem' // 30px
  },

  // Spacing
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '2.5rem'   // 40px
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Border radius
  borderRadius: {
    sm: '0.125rem',   // 2px
    md: '0.25rem',    // 4px
    lg: '0.5rem',     // 8px
    full: '9999px'    // Fully rounded
  },

  // Transitions
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out'
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  },

  // Z-index
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    modal: 1300,
    popover: 1400,
    tooltip: 1500
  }
}

// Type definitions for better TypeScript support
export type Theme = typeof theme
export type ThemeColors = typeof theme.colors
export type ThemeFonts = typeof theme.fonts
// ... add more type exports as needed

export default theme 