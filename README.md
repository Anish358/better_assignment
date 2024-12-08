# Better Software Internship Assignment

## Project Overview

A React application with Sign Up and Login forms using Formik for form handling and validation.

## Features

- Responsive design
- Form validation with Yup
- Password strength indicator
- Remember Me functionality
- Accessibility features

## Technologies Used

- React
- TypeScript
- Formik
- Yup
- Vite

## Setup and Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Design Choices

- Used Formik for form management
- Implemented client-side validation with Yup
- Created custom password strength checker
- Added local storage for "Remember Me" functionality
- Used pure CSS for styling to meet assignment constraints

## Assumptions

- Basic form submission simulation (no backend integration)
- Password requirements include:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
