export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero: "url('assets/hero-bg.jpg')",
        Features: "url('assets/feature-bg.png')",
        About: "url('assets/about-bg.png')",
        Agency: "url('assets/agency.png')",
        card: "url('assets/card-bg.jpg')",
        call: "url('assets/call-bg.jpg')",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite", // Customize the duration as needed
      },
    },
  },
  plugins: [],
};
