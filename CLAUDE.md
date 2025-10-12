# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**东方命理 · AI 八字算命平台** - A modern AI-powered Chinese fortune-telling platform that combines traditional BaZi (八字) astrology with artificial intelligence. The application serves Chinese-speaking users with personalized fate analysis and运势 guidance.

## Technology Stack

- **Frontend**: Next.js 15.3.3 with App Router, React 19.0.0
- **Styling**: Tailwind CSS 3.4.1 with custom Chinese mystical theme
- **Language**: TypeScript 5.8.3
- **Deployment**: Cloudflare Workers with OpenNext integration
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2 for file uploads
- **Cache**: Cloudflare KV for sessions and caching
- **Runtime**: Node.js compatibility mode

## Architecture & Structure

### Core Application Structure
```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx          # Root layout with comprehensive SEO metadata
│   ├── page.tsx            # Landing page with mystical theme
│   ├── login/              # User authentication
│   ├── register/           # User registration with phone verification
│   ├── demo/               # Demo fortune-telling examples
│   ├── stories/            # User testimonials
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── globals.css         # Custom CSS with mystical theme
│   └── components/
│       └── LocaleNav.tsx   # Navigation component
├── services/               # Business logic services
│   ├── user.ts            # User management and authentication
│   ├── session.ts         # Session management
│   ├── storage.ts         # Database operations
│   ├── admin.ts           # Admin functionality
│   └── blog.ts            # Blog/content management
├── types/                  # TypeScript type definitions
│   └── admin.ts           # Admin-related types
├── migrations/             # Database migrations
│   └── 001_init.sql       # Complete database schema
└── scripts/               # Utility scripts
    ├── create-admin.ts    # Admin user creation
    ├── init-db.ts        # Database initialization
    └── deploy-workers.sh # Deployment script
```

### Database Schema (D1 SQLite)
- **Users & Authentication**: Extended user profiles with birth information for BaZi calculations
- **Content Management**: Blog posts, categories, tags, comments with moderation
- **Sessions**: Secure session-based authentication
- **Media**: File uploads via R2 storage with metadata
- **Phone Verification**: SMS-based verification system
- **Settings**: Configurable application settings

## Key Development Commands

```bash
# Development
npm run dev              # Start Next.js development server
npm run build            # Build for production
npm run start            # Start production server
npm run check            # Type check and build
npm run lint             # Run ESLint

# Cloudflare Workers
npm run deploy           # Deploy to Cloudflare Workers via OpenNext
npm run preview          # Preview build locally
npm run cf-typegen       # Generate Cloudflare types

# Database
wrangler d1 execute DB --file=migrations/001_init.sql --env=production
wrangler d1 migrations list DB --env=production
```

## Design System & Theme

### Chinese Mystical Theme
- **Color Palette**: Purple-based gradients with mystical aesthetics
- **Custom CSS Classes**: `.glass-mystic`, `.shadow-mystic`, `.btn-mystic`
- **Visual Elements**: Chinese characters (八卦, 阴阳, 五行, 天干) as decorative elements
- **Animations**: Floating effects, glow animations, pulse effects

### Cultural Considerations
- All content should be in Chinese (Simplified)
- Design should incorporate traditional Chinese elements with modern aesthetics
- Color scheme should reflect mystical/spiritual themes appropriate for fortune-telling

## Configuration Files

- **next.config.ts**: Basic Next.js config with OpenNext integration
- **tailwind.config.mjs**: Extensive custom theme with mystical colors
- **wrangler.toml**: Cloudflare Workers config with D1, KV, R2 bindings
- **open-next.config.ts**: OpenNext configuration for deployment
- **tsconfig.json**: TypeScript with path aliases (`@/*` → `./src/*`)

## Deployment Architecture

The application is built entirely for Cloudflare's edge computing platform:
- **Workers**: Serverless functions for API endpoints
- **D1 Database**: SQLite-compatible database at the edge
- **KV Storage**: Low-latency key-value storage for sessions
- **R2 Storage**: S3-compatible object storage for media files

## Code Style Guidelines

- **TypeScript**: Strict mode enabled, comprehensive type definitions
- **React**: Functional components with hooks, App Router patterns
- **CSS**: Tailwind utility classes with custom mystical theme
- **Database**: SQL migrations with proper indexing
- **API**: RESTful patterns with proper error handling

## Security Notes

- Session-based authentication with secure password hashing
- Phone verification system for user registration
- File upload restrictions and validation
- Environment-specific configuration management

## Environment Setup

Required environment variables:
```env
# Application
NEXT_PUBLIC_APP_URL=https://ooo.oliyo.com
NEXT_PUBLIC_APP_NAME=东方命理 AI 平台

# Cloudflare
CLOUDFLARE_API_TOKEN=your-token
CLOUDFLARE_ACCOUNT_ID=your-id

# AI Services (for fortune-telling features)
AI_API_KEY=your-ai-key
AI_API_URL=your-ai-endpoint
```

## Recent Migration

The project was recently migrated from Fresh framework to Next.js 15.3.3. All Deno runtime dependencies have been removed and replaced with Node.js-compatible equivalents for Cloudflare Workers deployment.
