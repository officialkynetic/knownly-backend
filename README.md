# Knownly Backend Intern - Stage 3 By Emmanuel Eluebo

## Live URL

https://knownly-backend.onrender.com

## API Endpoints

**GET /** - Returns welcome message

**GET /status** - Returns server status

**GET /api/admin** - Protected admin route

## Protected Route - /api/admin

This route requires an Authorization header.

**No token provided**
Returns 401 with message "Unauthorized"

**Wrong token provided**
Returns 403 with message "Forbidden"

**Correct token (admin123)**
Returns 200 with message "Welcome Admin"
