# Career Compass

Welcome to **Career Compass**, your trusted partner in navigating the path to professional success. This website is a robust platform that offers personalized career guidance, resources, and support to help users make informed decisions about their career journeys.

## Live Site URL

Explore the website here: [Career Compass](https://b10-a9-career-compass.web.app/)

## Features and Characteristics

1. **Interactive Career Counseling Services**

   - Offers services like "Career Counseling Sessions" and "Resume Review" tailored to user needs.

2. **Dynamic and User-Friendly Design**

   - A seamless and intuitive single-page application designed with modern aesthetics using React and Tailwind CSS.

3. **Secure User Authentication**

   - Includes email/password and Google authentication to ensure user data security.

4. **Service Details with Feedback Option**

   - Protected routes display detailed information about selected services and allow users to provide comments and feedback.

5. **Responsive Design**

   - Fully responsive layout optimized for mobile, tablet, and desktop devices.

## Technology Stack

- **Frontend**: React, React Router, Tailwind CSS, DaisyUI
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting

---

## Dependencies

The following dependencies were used in this project:

```json
"dependencies": {
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^7.0.1",
    "sort-by": "^1.2.0",
    "swiper": "^11.1.15"
}
```

---

## How to Run the Project Locally

Follow the steps below to set up and run the project on your local machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/abdurrahmansoftlinkbd/career-compass.git
cd career-compass
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a .env.local file in the root directory and add the following environment variables:

```bash
VITE_apiKey=Your Firebase API Key
VITE_authDomain=Your Firebase Auth Domain
VITE_projectId=Your Firebase Project ID
VITE_storageBucket=Your Firebase Storage Bucket
VITE_messagingSenderId=Your Firebase Messaging Sender ID
VITE_appId=Your Firebase App ID
```

### Step 4: Run the Project

```bash
npm run dev
```
