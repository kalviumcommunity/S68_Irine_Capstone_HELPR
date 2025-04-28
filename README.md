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

- Deployment is done in Netlify (Frontend), Render (Backend)

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



## Create a GET request 

Explanation of Task 5: GET API Implementation

In this task I implemented a GET API endpoint that allows users to retrieve a list of available volunteer job postings from the database. Here's a breakdown of what was done:

1. Database Setup:
I set up a MongoDB database connection using Mongoose. The database will store information about volunteer jobs.

The database URL is stored securely in the .env file to keep it private.

2. Job Model:
I created a Job schema using Mongoose to define the structure of a job posting. This includes fields like:

title: The title of the job.

description: Details about the job.

location: Where the job is located.

postedBy: The organization posting the job.

datePosted: When the job was posted.

3. GET API Route:
I created a new route /api/jobs to handle GET requests. This route fetches all job postings from the MongoDB database and returns them as a JSON response.

The route is public and does not require any authentication. It simply returns a list of jobs in the database.

4. Testing:
After starting the server, I tested the route using Postman or a browser to ensure it returns the job listings correctly.

If no jobs are in the database, it will return an empty array [].

This task is the first step towards building out the full functionality of the site, where users can retrieve job listings from different organizations.

# Create a POST request

 Explanation of Task 6: POST API Implementation
In this task, I implemented a POST API that allows organizations to create new volunteer job postings and store them in the MongoDB database.

 What I did:
Created a POST Route:
 
I built a new POST endpoint at /api/jobs to allow organizations to submit job listings.

i set up a new file called jobRoutes.js to organize our job-related API routes.

Connected Routes to the Server:

I imported jobRoutes.js into server.js and mounted it on the path /api/jobs using app.use('/api/jobs', jobRoutes).

This allows all job-related requests (like GET and POST) to go through the same route file.

Handled Data Validation:

I added simple validation to check that all required fields (title, description, location, and postedBy) are present in the incoming request before saving a job to the database.

Saved Data to MongoDB:

When a correct POST request is received, a new job posting is created and stored in MongoDB using the Mongoose model.

Tested the API:

I used Postman to test the POST request, sending job details in JSON format to the /api/jobs endpoint.

After successful creation, we received a response with the newly created job data and a status code 201 Created.


# Create a PUT request

Explanation of Task 7: PUT API Implementation
In this task, I implemented a PUT API that allows organizations to update an existing volunteer job posting stored in the MongoDB database.

 What I did:
Created a PUT Route:

I added a new PUT endpoint at /api/jobs/:id in the jobRoutes.js file.

This route accepts an id parameter in the URL, which identifies the job to be updated.

Handled Data Updating:

In the request body, I receive updated fields like title, description, location, and postedBy.

I used Mongoose’s findByIdAndUpdate method to find the job by ID and update it in the database.

I ensured that the updated data is returned by setting { new: true }.

Error Handling:

If the provided ID does not match any existing job, I return a 404 Not Found error.

If there’s any server error during the update, I return a 500 Internal Server Error.

Tested the API:

I used Postman to send a PUT request to /api/jobs/:id with the updated job information.

On a successful update, we received the updated job object and a 200 OK status.

# Backend deploymentlink

https://s68-irine-capstone-helpr.onrender.com

# Create database schema 

 Explanation of Task 9: Create Database Schema (Mongoose Model)
In this task, I created a Mongoose schema for the Job data that defines how the job postings will be structured and stored in the MongoDB database.

 What I did:
Created a Mongoose Schema:

I defined a schema for a Job posting using Mongoose’s Schema class.

The schema includes the following fields:

title: The title of the job (e.g., "Volunteer Helper")

description: A description of the job role

location: The location where the volunteer job will take place

postedBy: The organization or person posting the job

Ensured Data Validity:

I marked all fields (title, description, location, postedBy) as required to ensure the data is complete before saving to the database.

I also used trim: true to remove any leading or trailing whitespace in the input.

Timestamps:

I enabled timestamps: true to automatically track the creation and update time of each job posting in the database.

Exported the Model:

I used mongoose.model('Job', JobSchema) to create a Job model based on the schema and exported it for use in other parts of the application (like in routes).


 # Database read and write performed

 Explanation of Task 10: Database Read & Write Operations 

Objective: 
Demonstrated successful database interactions by implementing and testing:
- Write Operations: Creating new volunteer job postings via `POST /api/jobs`
- Read Operations: Fetching existing job listings via `GET /api/jobs`

Key Components:  
1. Mongoose Models:  
   - Defined `Job` schema with fields: `title`, `description`, `location`, `postedBy`, `DatePosted`
2. API Endpoints:
   - Implemented CRUD routes in `jobRoutes.js`
3. Testing:  
   - Verified operations using:
     - Postman requests (manual testing)
     - Automated tests with Supertest (see `tests/db.test.js`)
4. =MongoDB Atlas:  
   - Confirmed data persistence in cloud database
