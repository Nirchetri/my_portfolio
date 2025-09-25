# Overview

This is a full-stack web application built as a personal portfolio website for Nikhil Chetry, a Software Engineer. The project showcases his professional experience, skills, education, and projects through a modern, responsive single-page application. The application features sections for about, work experience, featured projects, technical skills, education, and a contact form. It's built using the MERN stack with TypeScript and modern UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components**: ShadCN UI component library built on Radix UI primitives
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submissions and data retrieval
- **Data Storage**: In-memory storage (MemStorage class) with interface for future database integration
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures for users and contacts
- **Future Ready**: Drizzle ORM configured with PostgreSQL schema definitions
- **Database Schema**: Prepared tables for users (id, username, password) and contacts (id, name, email, subject, message, createdAt)

## Authentication and Authorization
- **Current**: Basic user schema defined but not implemented in the UI
- **Prepared**: User creation and retrieval methods in storage layer
- **Session Management**: Express session configuration with PostgreSQL store setup (connect-pg-simple)

## Development and Build Process
- **Development**: Vite dev server with HMR and TypeScript checking
- **Build**: Vite for frontend bundling, esbuild for backend compilation
- **Code Quality**: TypeScript strict mode, path aliases for clean imports
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

# External Dependencies

## Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI and Styling
- **Radix UI**: Comprehensive collection of accessible UI components (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

## Development Tools
- **Vite**: Fast build tool with development server and HMR
- **TypeScript**: Static type checking and improved developer experience
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library

## State Management and Data Fetching
- **TanStack Query**: Server state management with caching, synchronization, and background updates
- **Wouter**: Minimalist routing library for React applications

## Utilities and Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx/tailwind-merge**: Conditional CSS class utilities
- **cmdk**: Command palette component for enhanced user experience