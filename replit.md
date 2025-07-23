# Recruitment ROI Calculator

## Overview

This is a React-based single-page application that calculates ROI for recruitment agencies considering Recruiterflow's AI-powered CRM. The app features a two-column layout with a form on the left and live-updating results on the right, along with AI agent recommendations based on user inputs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks (useState, useMemo) for local state
- **Animations**: @react-spring/web for smooth number transitions

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Driver**: Neon Database serverless connection
- **Session Management**: Express sessions with PostgreSQL store

### Design System
- **UI Components**: shadcn/ui component library
- **Theme**: Support for light/dark mode with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Core Application Components
1. **App.tsx** - Main application component with layout and theme management
2. **CalculatorForm.tsx** - Left panel form for user inputs
3. **ResultsPanel.tsx** - Right panel showing calculated ROI metrics
4. **AIAgentRecommender.tsx** - Dynamic AI agent recommendations

### Form State Management
- **FormState Interface**: Defines all form inputs (employees, placements, fees, system, work days)
- **Real-time Calculations**: Updates automatically as user types
- **Input Validation**: Basic validation for numeric inputs

### ROI Calculation Logic (Updated with Real Recruiter Data)
- **Current Revenue**: Monthly placements × average fee × 12 months
- **Time Savings**: 26 hours per week per recruiter (4hrs resume screening + 4hrs scheduling + 8hrs tagging + 10hrs TAT from KMC)
- **Monthly Hours Saved**: 104 hours per recruiter per month × number of employees
- **Placement Cycle Improvement**: 21 days vs 30 days = 50% more placements (3 placements in 90 days becomes 4.5)
- **Extra Placements**: 50% improvement factor applied to current placement volume
- **Incremental Revenue**: Extra placements × average fee × 12 months
- **ROI Percentage**: Incremental revenue ÷ annual cost (employees × $99/month × 12)

### AI Agent Recommendations
- **Dynamic Highlighting**: Agents are emphasized based on form inputs
- **Conditional Logic**: 
  - Spreadsheet users see all agents highlighted
  - Low placement volume emphasizes alerts and lookup
  - Large teams emphasize note-taking and encoding

## Data Flow

1. User inputs are captured in real-time via controlled components
2. Form state is managed in the main App component
3. Calculations are performed client-side using useMemo for performance
4. Results are animated using react-spring for smooth transitions
5. AI agent recommendations are filtered based on current form state

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database queries
- **@radix-ui/***: Accessible UI primitives
- **@tanstack/react-query**: Server state management (prepared for future API calls)
- **@react-spring/web**: Animation library

### Development Tools
- **TypeScript**: Static type checking
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast bundling for production

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` starts Vite dev server with hot reload
2. **Build**: `npm run build` creates optimized production build
3. **Production**: `npm start` runs Express server serving built assets

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Drizzle Configuration**: Configured for PostgreSQL with migrations in `./migrations`
- **Static Assets**: Served from `dist/public` in production

### Database Schema
- **Users Table**: Basic user authentication (username, password)
- **Migrations**: Managed through Drizzle Kit
- **Schema Location**: `./shared/schema.ts` for shared types

The application is designed to be deployed as a single-page app with a lightweight Express backend primarily for potential future API endpoints and database operations.

## Recent Changes: Latest modifications with dates

### January 23, 2025 - Real Recruiter Calculation Logic Implementation
- **Updated ROI Calculations** - Implemented real recruiter time savings data (26 hours/week per recruiter)
- **Specific Task Breakdown** - Resume screening (4hrs), scheduling (4hrs), tagging/reports (8hrs), TAT from KMC (10hrs)
- **Placement Cycle Improvement** - Added 21-day vs 30-day placement cycle logic (50% improvement)
- **Hybrid Testimonials** - Combined colored metric cards with profile photos and personal quotes
- **Calculation Transparency** - Added explanation section showing how ROI is calculated
- **Monthly Time Display** - Updated results panel to show monthly hours saved instead of weekly

### January 15, 2025 - Brand Identity Implementation
- **Brand Colors Applied** - Updated to Recruiterflow's official color palette (#007bff primary, #013f85 secondary, #0a98ff accent)
- **Background Updated** - Changed to brand-specified #F2F2F2 light gray background
- **Typography System** - Implemented Barlow font for headings (uppercase, bold) and Mona Sans for body text
- **Hero Section Redesigned** - Updated main heading to "AI Built In, Not Bolted On" matching brand messaging
- **Component Headings Updated** - All major section titles now use brand typography classes
- **Brand Consistency** - Recruiterflow logo colors and messaging throughout the application

### January 15, 2025 - Major Feature Enhancements
- **Simplified ROI Panel** - Redesigned results panel with large ROI display and clean metrics
- **Dynamic Calculator Logic** - ROI now changes based on current system (Spreadsheet: 65%, JobAdder: 35%, Bullhorn: 25%, Other: 45%)
- **Competitor Comparison** - Added dynamic comparison section showing advantages over current system
- **Success Stories Redesign** - Rebuilt testimonials section with colored metric cards and professional layout
- **System-Aware Recommendations** - AI agent highlighting now varies by current system choice
- **Enhanced Visual Design** - Better typography, spacing, and color scheme throughout

### January 15, 2025 - Core Application Complete
- Built complete recruitment ROI calculator with real-time calculations
- Implemented AI agent recommendations with smart highlighting based on user inputs
- Fixed flickering animation issue by replacing animate-pulse with stable highlighting
- Added comprehensive test coverage for calculation logic

## Current Feature Set

### ✓ Complete Features
1. **Interactive Calculator Form** - 5 input fields with real-time validation
2. **Dynamic ROI Calculations** - System-specific efficiency gains and live updates
3. **Simplified Results Panel** - Large ROI percentage with key metrics
4. **AI Agent Recommendations** - 7 agents with smart highlighting based on inputs
5. **Competitor Comparison** - Dynamic comparison based on current system selection
6. **Success Stories** - Professional testimonials with colored metric cards
7. **Responsive Design** - Mobile-first with dark/light mode support

### Business Logic
- **Spreadsheet Users**: 65% efficiency gain (highest ROI potential)
- **JobAdder Users**: 35% efficiency gain
- **Bullhorn Users**: 25% efficiency gain (lowest but still significant)
- **Other Systems**: 45% efficiency gain

## MVP Development Roadmap

### Current State: Production-Ready Sales Tool
The application is a complete sales and lead generation tool with dynamic ROI calculations and compelling social proof.

### Immediate Deployment Readiness:
- Calculator works for all user scenarios
- Professional design and user experience
- Comprehensive competitor positioning
- Strong social proof with testimonials

### Future Enhancements:
1. **Lead Capture Integration** - Replace demo booking with real contact forms
2. **Email ROI Reports** - Allow users to save and share their analysis
3. **Industry Benchmarking** - Show performance vs. industry averages
4. **Advanced Personalization** - Custom scenarios and saved configurations