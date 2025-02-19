# 📚 Book Nest

### Overview

A RESTful API-powered book recommendation web application that provides personalized book suggestions based on user preferences. Built using Node.js, Express, MongoDB, and serves a simple HTML, CSS, and JavaScript frontend.

## Application Link

[https://book-recommendation-backend-4w4g.onrender.com/](https://book-recommendation-backend-4w4g.onrender.com/)

## Features

- **Recommendations**: Users receive book suggestions based on genres, authors.
- **RESTful API**: Endpoints for handling book data and recommendations.
- **MongoDB Database**: Stores book details and optionally user preferences.
- **Genre DropDown**: Search books based on genre.
- **Author Search**: Search Books based on Authors.
- **Responsive Design**: The layout adapts seamlessly to different screen sizes.
- **Animations**: Soothing Animations for Application using Javascript.

## Setup Instructions

### 1. Clone the repository

```shell
git clone https://github.com/sanketjaswal/Book-recommendation.git
cd Book-recommendation
```

### 2. Install dependencies

```shell
npm install
```

### 3. Set Up Environment Variables

```shell
MONGO_URI=your_mongo_connection_string
PORT=5000
```

### 4. Start the application

```shell
node server.js
```

This will run the app in development mode in http://localhost:3000.


## Dependencies

Below is a list of dependencies used in the project:

- **Frontend** : HTML, CSS, JavaScript
- **Backend** : Node.js, Express.js, MongoDB
- **Database** : MongoDB
- **Hosting** : Render

## Code Structure

```shell
/book-recommendation
  ├── /public             # FrontEnd
  │    ├── index.html
  │    └── style.css
  │
  ├── /routes             # API routes
  │    ├── bookRoutes.js
  │    └── recommendationRoutes.js
  │
  ├── .env                # Environment variables
  │ 
  ├── server.js           # Express server setup
  │
  ├── package.json        # Dependencies and scripts
  │
  └── README.md           # Project documentation
```


# Conclusion

A simple yet powerful book recommendation app, combining a RESTful API with a minimal frontend for personalized suggestions.

Happy Reading !!
