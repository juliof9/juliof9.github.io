/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url(/assets/images/bg-primary-main.png)",
        'services-background-1': "url(/assets/images/services/blog.jpg)",
        'services-background-2': "url(/assets/images/services/call.jpg)",
        'services-background-3': "url(/assets/images/services/dev.jpg)",
        'services-background-4': "url(/assets/images/services/seo.jpg)",
        'services-background-5': "url(/assets/images/services/server.jpg)",
        'services-background-6': "url(/assets/images/services/consulting.jpg)",
      },
      colors: {
        // ...defaultTheme.colors,
        'primary-color': '#003554',
        'secondary-color': '#00A6FB',
        'card-color': '#F2F2F2',
        'service-color': '#003554',
        'list-color': '#051923',
        'footer-color': '#333131'
      }
    },  },
  plugins: [],
}