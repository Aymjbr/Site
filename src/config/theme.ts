export const theme = {
  colors: {
    primary: '#1DA1F2',
    accent: '#0D8BD9',
    dark: {
      primary: '#4F46E5',
      accent: '#4338CA',
      background: '#0F172A',
      surface: '#1E293B',
      border: '#334155',
    },
    light: {
      primary: '#1DA1F2',
      accent: '#0D8BD9',
      background: '#FFFFFF',
      surface: '#F8FAFC',
      border: '#E2E8F0',
    },
    background: {
      light: '#FFFFFF',
      dark: '#0F172A'
    },
    text: {
      light: {
        primary: '#1A1A1A',
        secondary: '#666666'
      },
      dark: {
        primary: '#FFFFFF',
        secondary: '#94A3B8'
      }
    },
    card: {
      light: '#FFFFFF',
      dark: '#1E293B'
    },
    border: {
      light: '#E5E7EB',
      dark: '#334155'
    }
  },

  fonts: {
    primary: "'Inter', sans-serif",
    secondary: "'Poppins', sans-serif",
    mono: "'JetBrains Mono', monospace"
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem'
  },

  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out'
  },

  shadows: {
    light: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
    },
    dark: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
      md: '0 4px 6px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.3)'
    }
  }
}

export type Theme = typeof theme
export default theme 