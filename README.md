# HELPR
# Project Overview
HELPR is a full-stack web application built using the MERN (MongoDB, Express.js, React and Node.js) stack. The aim of this project is to create a digital platform that bridges the gap between individuals who are passionate about giving back to society and organizations that are actively looking for volunteers to support their causes. This platform provides a space for volunteers to discover, apply to and track community-based opportunities while organizations can post volunteer job openings, manage applicants and reach a wider audience. The application is designed to be intuitive, accessible and scalable — with the potential to be a real-world solution to mobilize support and promote social impact.

The application supports secure user authentication and provides dedicated dashboards for both user types. Core features include job listing and search functionality, a responsive design for seamless navigation and structured backend architecture to support CRUD operations. It also integrates image upload features, JWT-based secure sessions and future scalability for donations, impact metrics etc.

# User Roles
There are two primary user types in this platform:

Helper: These users sign up to find and apply for volunteering roles. They can browse job listings using filters like location, category and availability, view detailed job descriptions and keep track of their applications on their personal profile page.

Host: These users represent NGOs, clubs or causes looking for volunteers. They can register and post new job listings through a dedicated form track the list of applicants for each role and manage their posted jobs directly from their profile.

# Technologies Used
The project is developed using the MERN Stack:

- MongoDB for database management and schema design

- Express.js for building the backend API

- React.js for developing responsive and component-based frontend UI

- Node.js for creating the server and handling backend logic

- JWT (JSON Web Tokens) for secure user sessions

- Multer for handling image uploads

- Git & GitHub for version control and project collaboration

- Figma for UI/UX design (both low-fidelity and high-fidelity prototypes)

# Features Overview
- Role-based sign-up/login system for volunteers and organizations

- Searchable and filterable job listings (by location, category, and date)

- Detailed job description pages with an “Apply” button

- Volunteer profile page with application history

- Organization profile page with job management tools

- "Post a Job" form for organizations with support for image uploads

- Donation page to support causes and social initiatives

- JWT-based authentication for secure user login

- Responsive UI compatible across all devices

- Footer and contact section for site-wide navigation and information

# Day-by-Day Development Plan

- Week 1 – Planning & Design

The first few days i focused on planning the platform’s features and UI/UX. 

On Day 1 a low-fidelity wireframe has been created for core pages like the Home Page, Job Listings, Job Details, Profile Page and Post Job Page. 

On Day 2 converted them into high-fidelity UI designs using Figma. 

On Day 3 the GitHub repository has been set up with a README, project board and initial issues. 

By Day 4 folder structure for both frontend and backend will be finalized and basic setup will be completed.

- Week 2 – Backend Development

On Day 5 backend setup begins with Express and MongoDB connection. 

Day 6 focuses on creating Mongoose schemas for users, jobs and applications. 

Day 7–8 involve creating CRUD APIs for jobs and users, implementing JWT authentication and testing all endpoints using Postman. 

By Day 9–10 file/image upload support will be integrated and all backend features will be functional and deployed (using Render or similar service).

- Week 3 – Frontend Development

The React app will be initialized on Day 11 with routing and component structure set up. 

On Days 12–14 sign-up/login pages will be built for both user types, along with the Home Page, Job Listings and Job Detail views. 

Day 15–16 will focus on developing profile pages and the Post Job form. Conditional rendering based on user role will be implemented to manage dashboard functionality.

- Week 4 – Integration, Testing & Deployment

Day 17–18 will be used for API integration between frontend and backend. Form data will be connected to the database and UI components will be populated dynamically. 

On Day 19 responsiveness and cross-browser testing will be done. Any bugs or inconsistencies will be addressed. 

Days 20–21 will be reserved for performance tuning, UI polish and accessibility checks. 

On Day 22 the full application will be deployed (frontend via Vercel/Netlify), and final documentation will be completed and submitted.


# Project Slogan

“Volunteering Made Simple.”

