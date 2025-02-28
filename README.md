# Learning Management System using MERN stack

### User Credentials for Testing

- `user one`
  - `email` : one@gmail.com
  - `password` : one@1234
- `user two`
  - `email` : two@gmail.com
  - `password` : two@1234

## Features

- `authentication`
  - complete auth including update profile, forgot, reset and change password
- `authoriztion` - protected routes that access by only admin
- `protected courses` - user access only purchase courses
- `lecture mark` - user can mark viewd lecture
- `dashboard` - details of users and courses
- `languages` - app available in english, hindi and gujarati language

## Project Setup

project short video

```
https://www.linkedin.com/feed/update/urn:li:activity:7119641188646727681/
```

To run project locally

- clone repo

```
git clone https://github.com/bhalaniyatin2402/LMS.git
```

### Frontend setup

- `cd client` in root directory
- `npm install` in client directory to install all depedncies
- Set `environment variables`
  - `VITE_APP_NODE_ENV`
  - `VITE_APP_COURSIFY_API`
  - `VITE_APP_STRIPE_KEY`
- `npm run dev` to start project

### Backend setup

- `cd server` in root directory
- `npm install` in server directory to install all depedncies
- Set `environment variables`
  - `PORT` - port number to listen the server
  - `FRONT_URL`
  - `MONGO_URL` - url of your local_database or Atlas
  - secret token and expiry
    - `JWT_SECRET_KEY`
    - `JWT_EXPIRY`
  - gmail credentials
    - `SMTP_USERNAME`
    - `SMTP_PASSWORD`
  - cloudinary credentials
    - `CLOUD_NAME`
    - `CLOUD_API_KEY`
    - `CLOUD_API_SECRET`
  - stripe credentials
    - `STRIPE_SECRET`
- `npm run dev` to start project
