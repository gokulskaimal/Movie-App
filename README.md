# MERN Movie Search & Favorites (Take-Home Assignment)

A React & Node.js web application that allows users to search for movies using the OMDB API and save their favorites. 

## Design Decisions
- **Server-Side Storage (Scalability):** Instead of parsing a JSON string which hurts performance at scale, this app uses `sqlite3`. It provides file-based, server-side storage with constant-time lookup performance. No MongoDB was used, adhering strictly to requirements.
- **Server-Generated Session:** A session is managed using an HTTP-only cookie containing a server-generated UUID (`crypto.randomUUID()`). This eliminates the need for user login while securely persisting favorites.
- **Debounced Search:** Custom hook implemented to prevent OMDB API spam.

## Setup Instructions

1. **Clone the repository.**
2. **Setup Environment Variables:**
   - In the `backend` folder, create a `.env` file with your `OMDB_API_KEY`.
3. **Start the Backend:**
   ```bash
   cd backend
   npm install
   npm run dev
