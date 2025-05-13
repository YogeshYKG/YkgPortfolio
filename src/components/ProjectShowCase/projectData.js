const projectData = [
  {
    id: 0,
    title: "VDB Marketplace",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://vdbapp.com/marketplace/",
    iframeView: "None",
    description: "Jewelry Tech. Partner, Buy, sell, and advertise on the jewelry industry’s largest and most powerful B2B marketplace",
    tags: ["Angular", "TypeScript", "SPA", "Ring Configurator", "3D Configurator", "Iframe Intergration"],
    workedtags: ["Dynamic Filter's", "Search Enhancement", "3D Configurator Enhancement", "Dynamic SignUp"],
    thumbnail: "/images/Works/VDB.gif",
    thumbVideo: "https://ecdn.speedsize.com/778525a6-77ac-48d2-a2c7-14c32964a659/vdbapp.com/wp-content/uploads/2024/05/VDB-Marketplace.mp4",
    Links: {
      LiveUrl: {
        url: "https://vdbapp.com/",
        icon: "",
      },
      Clairamor_Client: {
        url: "http://clairamor.com/apps/ring-creator/",
        icon: "",
      },
      GNDiamonds_Client: {
        url: "https://www.gndiamond.com/webapp/search/new",
        icon: "",
      }
    },
  },
  {
    id: 1,
    title: "Roadster Bikes",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://testingfrontend.roadsterbikes.com/",
    iframeView: "LargeScreen",
    description: "OnBoarding Bajaj & Davido Bikes for Roadster Landing Site",
    tags: ["React", "JavaScript", "Bajaj OnBoarding", "Dealer Connectivitiy", "Admin Panel"],
    workedtags: ["Complete Solo Project"],
    thumbnail: "https://testingfrontend.roadsterbikes.com/assets/about-banner.jpg",
    Links: {
      LiveUrl: {
        url: "https://testingfrontend.roadsterbikes.com/",
        icon: "",
      },
    },
  },
  {
    id: 2,
    title: "NIC Diner Web",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "/images/Works/NIC.gif",
    iframeView: "LargeScreen",
    description: "Full-stack restaurant web app...",
    tags: ["PHP", "MySQL", "Bootstrap"],
    thumbnail: "/images/Works/NIC.gif",
    Links: {
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/NIC-Intern-Work",
        icon: "",
      },
    },
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://social-media-six-gray.vercel.app/",
    iframeView: "None",
    description: "A React JS social media dashboard application with user interaction features",
    tags: ["React", "JavaScript", "Social Media", "Dashboard", "User Interface"],
    thumbnail: "", // Add a path if available
    projectLink: "https://github.com/YogeshYKG/social-media",
    Links: {
      LiveUrl: {
        url: "https://social-media-six-gray.vercel.app/",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/social-media",
        icon: "",
      },
    },
  },
  {
    id: 4,
    title: "WeatherApp",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://weather-app-ruddy-two-48.vercel.app/",
    iframeView: "None",
    description: "A Vite React JS application that fetches and displays real-time weather data using the OpenWeatherMap API",
    tags: ["Vite", "React", "JavaScript", "WeatherApp", "OpenWeatherMap API", "API Integration", "Real-time Data"],
    thumbnail: "/images/MyAppItem/WeatherApp.png",
    projectLink: "https://github.com/YogeshYKG/WeatherApp",
    Links: {
      LiveUrl: {
        url: "https://weather-app-ruddy-two-48.vercel.app/",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/WeatherApp",
        icon: "",
      },
    },
  },
  {
    id: 5,
    title: "Random Quote Generator",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://quote-generator-ecru-xi.vercel.app/",
    iframeView: "None",
    description: "A Vite React JS application that fetches random quotes via API and displays them with a typewriter animation effect",
    tags: ["Typewriter Effect", "Random Quote", "React", "API Fetch", "Tailwind CSS", "JavaScript", "Quote Generator"],
    thumbnail: "/images/MyAppItem/quote-generator.png",
    projectLink: "#",
    Links: {
      LiveUrl: {
        url: "https://quote-generator-ecru-xi.vercel.app/",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/NIC-Intern-Work",
        icon: "",
      },
    },
  },
  {
    id: 6,
    title: "Food Ordering App",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://react-food-app-pz1u.vercel.app/",
    iframeView: "None",
    description: "A React-based food ordering application with menu display and ordering functionality",
    tags: ["React", "JavaScript", "Food Ordering", "E-commerce", "UI/UX"],
    thumbnail: "", // Add a path if available
    projectLink: "https://github.com/YogeshYKG/React-Food-App",
    Links: {
      LiveUrl: {
        url: "https://react-food-app-pz1u.vercel.app/",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/React-Food-App",
        icon: "",
      },
    },
  },
  {
    id: 7,
    title: "Dynamic Clock",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://react-dynamic-clock.vercel.app/",
    iframeView: "None",
    description: "A React JS application displaying a real-time dynamic clock",
    tags: ["React", "JavaScript", "Dynamic Clock", "Real-time", "Time Display"],
    thumbnail: "", // Add a path if available
    projectLink: "https://github.com/YogeshYKG/React-dynamic-clock",
    Links: {
      LiveUrl: {
        url: "https://react-dynamic-clock.vercel.app/",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/React-dynamic-clock",
        icon: "",
      },
    },
  },
  {
    id: 8,
    title: "StopWatch",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://stopwatch-lac-nu.vercel.app/",
    iframeView: "None",
    description: "A Vite React JS application featuring a stopwatch with start, stop, and reset functionalities",
    tags: ["Vite", "React", "JavaScript", "Tailwind CSS", "StopWatch", "Timer"],
    thumbnail: "/images/MyAppItem/StopWatch.png",
    projectLink: "#",
    Links: {
      LiveUrl: {
        url: "https://stopwatch-lac-nu.vercel.app/",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/NIC-Intern-Work",
        icon: "",
      },
    },
  },
  {
    id: 9,
    title: "Calculator",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://react-calculator-app-six.vercel.app/",
    iframeView: "None",
    description: "A React JS calculator application with basic arithmetic operations",
    tags: ["React", "JavaScript", "Calculator", "Math Operations", "Functional Components"],
    thumbnail: "", // Add a path if available
    projectLink: "https://github.com/YogeshYKG/React-Calculator-App",
    Links: {
      LiveUrl: {
        url: "https://react-calculator-app-six.vercel.app/",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/React-Calculator-App",
        icon: "",
      },
    },
  },
  {
    id: 10,
    title: "PasteApp",
    tilteLabel: "Full-Stack WebApp",
    iframeUrl: "https://paste-app-gilt-two.vercel.app",
    iframeView: "None",
    description: "A Vite React JS application for creating and managing text snippets",
    tags: ["Vite", "React", "JavaScript", "PasteApp", "Text Management"],
    thumbnail: "/images/MyAppItem/PasteApp.png",
    projectLink: "#",
    Links: {
      LiveUrl: {
        url: "https://paste-app-gilt-two.vercel.app",
        icon: "",
      },
      GitHub_Repo: {
        url: "https://github.com/YogeshYKG/NIC-Intern-Work",
        icon: "",
      },
    },
  },
];


export default projectData;
