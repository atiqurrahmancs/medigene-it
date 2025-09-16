tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
          animation: {
            'gradient-x': 'gradient-x 3s ease infinite',
          },
          keyframes: {
            'gradient-x': {
              '0%, 100%': { 'background-position': '0% 50%' },
              '50%': { 'background-position': '100% 50%' },
            },
          },
        },
      },
}

