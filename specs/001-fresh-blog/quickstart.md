# Fresh Blog Quick Start Guide

**Date**: 2025-10-07
**Feature**: Blog system for Fresh framework
**Scale**: Medium (100-1000 posts)

## Overview

This guide provides step-by-step instructions for setting up and running the Fresh blog system. The implementation follows Fresh framework patterns and uses SQLite for data persistence with full-text search capabilities.

## Prerequisites

- **Deno**: Latest stable version (1.40+)
- **Fresh**: Framework already set up in the project
- **Basic knowledge**: TypeScript, Preact, and Fresh conventions

## Setup Steps

### 1. Database Initialization

```bash
# Create database directory
mkdir -p data

# Initialize SQLite database with schema
deno run --allow-read --allow-write scripts/init-db.ts
```

### 2. Admin User Setup

```bash
# Create initial admin user
deno run --allow-read --allow-write --allow-env scripts/create-admin.ts
```

Follow the prompts to create your admin account with username and password.

### 3. Environment Configuration

Create a `.env` file in the project root:

```env
# Database
DATABASE_PATH=./data/blog.db

# Admin Session
SESSION_SECRET=your-secure-random-string-here

# Development
DEV_MODE=true
```

### 4. Start Development Server

```bash
deno task start
```

The blog will be available at `http://localhost:8000`

## Access Points

### Public Access
- **Blog Home**: `http://localhost:8000/` - List of published posts
- **Individual Posts**: `http://localhost:8000/blog/{post-slug}`
- **Category Pages**: `http://localhost:8000/blog/category/{category-name}`
- **Tag Pages**: `http://localhost:8000/blog/tag/{tag-name}`
- **Search**: `http://localhost:8000/search?q=your-query`

### Admin Access
- **Admin Login**: `http://localhost:8000/admin/login`
- **Admin Dashboard**: `http://localhost:8000/admin/dashboard`
- **Post Management**: `http://localhost:8000/admin/posts`

## Basic Usage

### Creating Your First Post

1. Navigate to `http://localhost:8000/admin/login`
2. Login with your admin credentials
3. Go to `http://localhost:8000/admin/posts/new`
4. Fill in the post details:
   - **Title**: Your post title (required)
   - **Content**: Rich text content with images, tables, videos (required)
   - **Excerpt**: Short description (optional, auto-generated if empty)
   - **Categories**: Select from existing categories or create new ones
   - **Tags**: Add tags separated by commas
   - **Status**: Draft or Published
5. Click "Save Draft" or "Publish"

### Managing Categories and Tags

Categories and tags are automatically created when you assign them to posts. You can manage them through the post editing interface.

### Using the Rich Text Editor

The rich text editor supports:
- **Text Formatting**: Bold, italic, underline, strikethrough
- **Headings**: H1, H2, H3, H4, H5, H6
- **Lists**: Bulleted and numbered lists
- **Links**: Internal and external links
- **Images**: Upload and embed images
- **Tables**: Create and format tables
- **Code**: Inline code and code blocks
- **Quotes**: Blockquotes
- **Media**: Embed videos from YouTube, Vimeo, etc.

## Key Features

### Search Functionality
- Full-text search across post titles and content
- Relevance ranking for search results
- Fast search responses (< 1 second)
- Search result pagination

### SEO Optimization
- Clean URLs with post slugs
- Meta tags for all pages
- Semantic HTML structure
- Structured data for blog posts
- Sitemap generation

### Mobile Responsiveness
- Mobile-first responsive design
- Touch-friendly interface
- Optimized for all screen sizes
- Fast loading on mobile networks

### Performance
- Server-side rendering for fast initial loads
- Code splitting for JavaScript
- Optimized images and media
- Sub-2-second page load times

## Development Workflow

### Code Quality

```bash
# Check code formatting, linting, and types
deno task check

# Format code
deno fmt

# Run linter
deno lint

# Type checking
deno check
```

### Database Management

```bash
# Create database backup
deno run --allow-read --allow-write scripts/backup-db.ts

# Restore database from backup
deno run --allow-read --allow-write scripts/restore-db.ts

# Migrate database schema (if needed)
deno run --allow-read --allow-write scripts/migrate-db.ts
```

### Content Management

All content management is done through the web interface:
- Create and edit posts
- Manage categories and tags
- Upload images and media
- Publish and schedule posts
- View analytics and statistics

## Testing

### Manual Testing Checklist

1. **Blog Functionality**
   - [ ] View blog homepage
   - [ ] Navigate to individual posts
   - [ ] Use search functionality
   - [ ] Filter by categories and tags
   - [ ] Test pagination

2. **Admin Functionality**
   - [ ] Login to admin panel
   - [ ] Create new post
   - [ ] Edit existing post
   - [ ] Upload images
   - [ ] Manage categories and tags
   - [ ] Publish and unpublish posts

3. **Responsive Design**
   - [ ] Test on mobile devices
   - [ ] Test on tablet devices
   - [ ] Test on desktop devices
   - [ ] Test different screen sizes

4. **Performance**
   - [ ] Check page load times
   - [ ] Test search performance
   - [ ] Verify image optimization

## Troubleshooting

### Common Issues

**Database connection errors**:
- Ensure the database file exists in `data/blog.db`
- Check file permissions on the database directory
- Verify DATABASE_PATH in `.env` file

**Admin login issues**:
- Verify admin user exists in database
- Check session secret is set in `.env`
- Clear browser cookies and try again

**Image upload issues**:
- Ensure `static/uploads/` directory exists and is writable
- Check file size limits
- Verify supported image formats

**Search not working**:
- Rebuild search index: `deno run scripts/rebuild-search.ts`
- Check FTS5 is enabled in SQLite
- Verify posts are published (not draft)

### Getting Help

1. Check the browser console for JavaScript errors
2. Review Deno server logs for backend errors
3. Verify all environment variables are set correctly
4. Ensure database schema is up to date

## Next Steps

After completing the quick start:

1. **Customize Design**: Modify Tailwind CSS classes and components
2. **Add Features**: Implement additional functionality as needed
3. **Configure Production**: Set up production deployment
4. **Monitor Performance**: Track Core Web Vitals and user metrics
5. **Backup Strategy**: Implement regular database backups

## Production Deployment

For production deployment:

1. Set production environment variables
2. Configure HTTPS certificate
3. Set up database backups
4. Configure monitoring and logging
5. Optimize for production performance
6. Test thoroughly before going live

This quick start guide should get you up and running with the Fresh blog system. The implementation is designed to be scalable and maintainable while following Fresh framework best practices.