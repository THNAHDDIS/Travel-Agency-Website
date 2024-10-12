# Travel Agency Website

**Author:** Siddhanth Chapade (Artificial Intelligence and Machine Learning Student at Dwarkadas J. Sanghvi College of Engineering)

## Project Overview

This project is a beginner-level travel agency website developed using React. It aims to provide a visually appealing, responsive, and user-friendly platform to showcase the various travel services and packages offered by a travel agency. The website is designed with a clean and modern aesthetic to offer potential travelers a seamless browsing experience across different devices, such as desktops, tablets, and mobile phones. 

The website features multiple sections that cover essential aspects of travel planning, such as browsing through destinations, booking trips, subscribing to newsletters for the latest updates, and reading client testimonials. Each section is implemented as a React component, allowing for modular development and ease of future enhancements. Due to time constraints, some interactive components have been replaced with static images, but the project is structured to easily support these features in the future. The layout and design were crafted using Figma, which is replicated in the front-end to maintain visual consistency.

This project is an excellent starting point for beginners looking to get hands-on experience with React.js, CSS modules, and Figma-based web design. It introduces core concepts of component-based architecture, state management, and responsive design, making it a strong foundation for further development or more advanced projects.

## Features

- **Beginner-Friendly:** The project is free from complex algorithms and intricate CSS, making it an ideal choice for those just starting with React.
- **Service Listings:** Detailed sections for travel packages, destinations, and booking options.
- **Figma Cloning:** All components were designed based on a Figma file, and most have been faithfully reproduced in the project.
  
## Technology Stack

- **React.js**: A popular JavaScript library for building user interfaces in a component-based architecture.
- **CSS Modules**: Used for styling individual components, ensuring styles are scoped locally to avoid conflicts.
- **Figma**: The design tool used to create the layout and visual elements, ensuring a modern and consistent look across the website.

> Figma Design Reference: [Travel Website Landing Page](https://www.figma.com/design/X07iDaOuLjKoRRV5FFn2AV/Travel-Website-Landing-Page-(Community)?node-id=0-1&node-type=canvas&t=GnN24Qf4lPPVDHIa-0)

## Project Structure

```plaintext
src/
├── assets/
│   └── img/
│       ├── Hero/
│       ├── Section1/
│       ├── Section2/
│       ├── Section3/
│       ├── Section4/
│       └── Section5/
├── components/
│   ├── Body/
│   │   ├── Body.jsx
│   │   ├── BookTrip.jsx
│   │   ├── Destinations.jsx
│   │   ├── Partners.jsx
│   │   ├── Services.jsx
│   │   ├── Subscribe.jsx
│   │   └── Testimonials.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Hero/
│       ├── Banner.jsx
│       ├── Header.jsx
│       └── Hero.jsx
├── styles/
│   ├── Body/
│   │   ├── Body.module.css
│   │   ├── BookTrip.module.css
│   │   ├── Destinations.module.css
│   │   ├── Partners.module.css
│   │   ├── Services.module.css
│   │   ├── Subscribe.module.css
│   │   └── Testimonial.module.css
│   ├── Footer/
│   │   └── Footer.module.css
│   ├── Hero/
│       ├── Banner.module.css
│       ├── Header.module.css
│       └── Hero.module.css
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

The project follows a structured and organized file system. Images are stored under `assets/img/`, and all React components are categorized into subfolders under `components/`. Each component has its respective CSS module for isolated styling.

## Installation and Setup

To run this project locally, follow the steps below:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/travel-agency-website.git
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```



## Known Issues and Limitations

- Some components, like the booking form and testimonials, are currently non-functional due to time constraints. These have been replaced with static images as placeholders.
  
## Future Enhancements

- **Implement Booking Functionality**: Create a fully functional booking form to allow users to reserve trips directly on the website.
- **Add Customer Reviews**: Develop a system for collecting and displaying user feedback and testimonials.
- **Enhance Accessibility**: Ensure that the website meets modern accessibility standards for all users.
- **Replace Static Images**: Replace the placeholder images with fully functional React components.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes. Ensure code quality and adhere to the existing coding standards.

---

This project serves as a great introduction to React development and modular design. It showcases the fundamentals of building responsive websites, making it ideal for both learning and practice.
