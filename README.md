# GTX Sports Athlete Registration & Test Management System

A premium, full-stack dynamic web application built for sports labs to manage athlete enrollment and performance testing.

## 🚀 Features
- **Modern SPA Architecture**: Built with Next.js 15 and App Router.
- **Premium Design**: Dark-mode-first aesthetic with glassmorphism and GT Performance Green accents.
- **Athlete Registration**: Form with real-time validation and error handling.
- **Dynamic Database**: SQLite integration with Prisma for efficient data management.
- **API Endpoints**: RESTful GET/POST routes for athlete data.
- **Validation**: Strict schema validation using Zod on both client and server.

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (TypeScript)
- **Database**: [SQLite](https://www.sqlite.org/) via [Prisma ORM](https://www.prisma.io/)
- **Validation**: [Zod](https://zod.dev/)
- **Styling**: Vanilla CSS Modules (Premium bespoke design)
- **Deployment**: Optimized for Vercel or any Node.js environment

## 🏃 How to Run the Project

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 2. Installation
```bash
# Install dependencies
npm install
```

### 3. Database Setup
```bash
# Initialize the SQLite database and generate Prisma client
npx prisma db push
npx prisma generate
```

### 4. Start Development Server
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## 📊 Database Schema
The `Athlete` model includes:
- `id`: Auto-incrementing unique identifier.
- `name`: Full name of the athlete.
- `email`: Unique email address.
- `phone`: Contact number.
- `sportType`: Selected sport from curated list.
- `experienceLevel`: Beginner / Intermediate / Professional.
- `testType`: Type of performance test requested.
- `testDate`: Preferred date for the assessment.
- `createdAt`: Auto-generated enrollment timestamp.

## 📁 Project Structure
- `/src/app`: Application routes and layout.
- `/src/app/api`: Backend API handlers.
- `/src/components`: Reusable UI components (Form, List).
- `/src/lib`: Shared utilities (Prisma client).
- `/prisma`: Database schema and migrations.

---
*Developed as part of the Full-Stack Developer Trial Task.*
