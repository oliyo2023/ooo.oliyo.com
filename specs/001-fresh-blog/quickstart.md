# Fresh Blog Quick Start Guide

**Date**: 2025-10-10 **Feature**: Blog system for Fresh framework **Scale**: Medium (100-1000 posts)
**Multi-language**: Yes (>=3 languages) **Deployment**: Docker containers

## Overview

This guide provides step-by-step instructions for setting up and running the Fresh blog system. The implementation follows Fresh framework patterns, uses PostgreSQL for data persistence, and supports multi-language content with Docker containerization.

## Prerequisites

- **Docker**: Latest stable version (20.10+)
- **Docker Compose**: Latest stable version (2.0+)
- **Deno**: Latest stable version (1.40+) - for local development
- **Basic knowledge**: TypeScript, Preact, Fresh conventions, and Docker

## Quick Start with Docker

### 1. Environment Configuration

Create a `.env` file in the project root:

```env
# Database Configuration
POSTGRES_DB=fresh_blog
POSTGRES_USER=blog_user
POSTGRES_PASSWORD=your-secure-password-here
DATABASE_URL=postgresql://blog_user:your-secure-password-here@postgres:5432/fresh_blog

# Application Configuration
SESSION_SECRET=your-secure-random-session-string-here
BASE_URL=http://localhost:8000
DEV_MODE=true

# Multi-language Support
DEFAULT_LANGUAGE=en
SUPPORTED_LANGUAGES=en,zh,es

# File Upload
MAX_FILE_SIZE=10485760  # 10MB in bytes
UPLOAD_PATH=/app/static/uploads
```

### 2. Start with Docker Compose

```bash
# Start all services
docker-compose up -d

# Initialize database schema
docker-compose exec app deno run --allow-read --allow-write --allow-env scripts/init-db.ts

# Create admin user
docker-compose exec app deno run --allow-read --allow-write --allow-env scripts/create-admin.ts
```

### 3. Access the Application

- **Blog Home**: `http://localhost:8000/`
- **Admin Login**: `http://localhost:8000/admin/login`

## Local Development Setup

### 1. Start PostgreSQL Container

```bash
# Start only the database service
docker-compose up -d postgres

# Wait for database to be ready
docker-compose logs -f postgres
```

### 2. Initialize Local Environment

```bash
# Copy environment file
cp .env.example .env

# Install dependencies
deno install

# Initialize database
deno run --allow-read --allow-write --allow-env scripts/init-db.ts

# Create admin user
deno run --allow-read --allow-write --allow-env scripts/create-admin.ts
```

### 3. Start Development Server

```bash
deno task start
```

## Multi-language Setup

### Supported Languages

The system supports multiple languages out of the box:

- **English** (`en`) - Default
- **Chinese** (`zh`) - Simplified Chinese
- **Spanish** (`es`) - Spanish

Add more languages by:

1. Creating language files in `static/locales/{language_code}.json`
2. Adding the language code to `SUPPORTED_LANGUAGES` environment variable
3. Creating language-specific routes and content

### Language URL Structure

```
http://localhost:8000/                    # Default language (en)
http://localhost:8000/en/blog            # English content
http://localhost:8000/zh/blog            # Chinese content
http://localhost:8000/es/blog            # Spanish content
```

## Access Points

### Public Access

- **Blog Home**: `http://localhost:8000/` or `http://localhost:8000/{language}/`
- **Individual Posts**: `http://localhost:8000/{language}/blog/{post-slug}`
- **Category Pages**: `http://localhost:8000/{language}/category/{category-name}`
- **Tag Pages**: `http://localhost:8000/{language}/tag/{tag-name}`
- **Search**: `http://localhost:8000/{language}/search?q=your-query`

### Admin Access

- **Admin Login**: `http://localhost:8000/admin/login`
- **Admin Dashboard**: `http://localhost:8000/admin/dashboard`
- **Post Management**: `http://localhost:8000/admin/posts`
- **Category Management**: `http://localhost:8000/admin/categories`
- **Tag Management**: `http://localhost:8000/admin/tags`

## Basic Usage

### Creating Your First Multi-language Post

1. Navigate to `http://localhost:8000/admin/login`
2. Login with your admin credentials
3. Go to `http://localhost:8000/admin/posts/new`
4. Fill in the post details:
   - **Title**: Your post title (required)
   - **Language**: Select the target language
   - **Content**: Rich text content with images, tables, videos (required)
   - **Excerpt**: Short description (optional, auto-generated if empty)
   - **Categories**: Select from existing categories or create new ones
   - **Tags**: Add tags separated by commas
   - **Status**: Draft or Published
5. Click "Save Draft" or "Publish"

### Creating Content in Multiple Languages

For each language version:

1. Create a new post with the same content but different language
2. Use the same title (translated appropriately)
3. Link related posts using categories or tags
4. The system will automatically handle language-specific URLs

### Managing Multi-language Categories and Tags

Categories and tags are language-specific:

- Create categories for each language separately
- Use the same slug structure across languages for consistency
- Tags help organize content within each language

### Using the WYSIWYG Editor

The TipTap rich text editor supports:

- **Text Formatting**: Bold, italic, underline, strikethrough
- **Headings**: H1, H2, H3, H4, H5, H6
- **Lists**: Bulleted and numbered lists
- **Links**: Internal and external links
- **Images**: Upload and embed images (stored locally)
- **Tables**: Create and format tables
- **Code**: Inline code and syntax-highlighted code blocks
- **Quotes**: Blockquotes
- **Media**: Embed videos from YouTube, Vimeo, etc.

## Key Features

### Multi-language Support

- **Language Detection**: Automatic detection from URL path
- **Fallback Logic**: Falls back to default language if content not available
- **SEO Optimization**: Language-specific meta tags and URLs
- **Content Management**: Separate content management per language

### Search Functionality

- **Full-text Search**: Across post titles and content per language
- **Relevance Ranking**: PostgreSQL full-text search with ranking
- **Language-specific**: Search results filtered by language
- **Fast Performance**: Sub-second search responses

### SEO & Accessibility

- **Clean URLs**: Language-prefixed, SEO-friendly URLs
- **Meta Tags**: Comprehensive meta tags for all pages
- **Semantic HTML**: Proper HTML5 structure
- **WCAG AA Compliance**: Color contrast, keyboard navigation, ARIA labels
- **Structured Data**: JSON-LD for blog posts

### Mobile Responsiveness

- **Mobile-First Design**: Responsive design using Tailwind CSS
- **Touch-Friendly**: Optimized for touch interactions
- **Performance**: Fast loading on mobile networks
- **Cross-device**: Consistent experience across all devices

### Docker Deployment

- **Container Isolation**: Separate containers for app and database
- **Easy Scaling**: Horizontal scaling with load balancers
- **Development Parity**: Same environment as production
- **Persistent Data**: Volume mounts for data persistence

## Docker Management

### Container Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Execute commands in app container
docker-compose exec app deno task check

# Database backup
docker-compose exec postgres pg_dump -U blog_user fresh_blog > backup.sql

# Database restore
docker-compose exec -T postgres psql -U blog_user fresh_blog < backup.sql
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `POSTGRES_DB` | Database name | `fresh_blog` |
| `POSTGRES_USER` | Database user | `blog_user` |
| `POSTGRES_PASSWORD` | Database password | *required* |
| `DATABASE_URL` | PostgreSQL connection string | *generated* |
| `SESSION_SECRET` | Session encryption key | *required* |
| `BASE_URL` | Application base URL | `http://localhost:8000` |
| `DEFAULT_LANGUAGE` | Default language code | `en` |
| `SUPPORTED_LANGUAGES` | Comma-separated language codes | `en,zh,es` |

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
# Create database migration
deno run --allow-read --allow-write scripts/create-migration.ts migration_name

# Run migrations
docker-compose exec app deno run --allow-read --allow-write --allow-env scripts/migrate.ts

# Create database backup
docker-compose exec postgres pg_dump -U blog_user fresh_blog > backup.sql

# Restore database from backup
docker-compose exec -T postgres psql -U blog_user fresh_blog < backup.sql
```

### Testing

```bash
# Run all tests
deno task test

# Run tests with coverage
deno task test --coverage

# Run integration tests
deno task test integration
```

## File Management

### Image Upload

Images are stored in `static/uploads/` with the following structure:

```
static/uploads/
├── images/
│   ├── 2025/
│   │   ├── 10/
│   │   │   └── {uuid-filename}.jpg
│   └── thumbnails/
└── documents/
```

### File Limits

- **Maximum file size**: 10MB (configurable via `MAX_FILE_SIZE`)
- **Supported image formats**: JPEG, PNG, GIF, WebP
- **Supported document formats**: PDF, DOC, DOCX

## Testing Checklist

### Manual Testing

1. **Multi-language Functionality**
   - [ ] Test language switching
   - [ ] Verify language-specific URLs
   - [ ] Check fallback behavior
   - [ ] Test content creation in different languages

2. **Blog Functionality**
   - [ ] View blog homepage in all languages
   - [ ] Navigate to individual posts
   - [ ] Use search functionality per language
   - [ ] Filter by categories and tags
   - [ ] Test pagination

3. **Admin Functionality**
   - [ ] Login to admin panel
   - [ ] Create multi-language posts
   - [ ] Edit existing posts
   - [ ] Upload images and media
   - [ ] Manage language-specific categories and tags
   - [ ] Publish and unpublish posts

4. **Responsive Design**
   - [ ] Test on mobile devices
   - [ ] Test on tablet devices
   - [ ] Test on desktop devices
   - [ ] Test different screen sizes

5. **Performance**
   - [ ] Check page load times (< 2s)
   - [ ] Test search performance (< 1s)
   - [ ] Verify image optimization
   - [ ] Test Core Web Vitals

6. **Docker Environment**
   - [ ] Verify containers start correctly
   - [ ] Test database connectivity
   - [ ] Check file uploads persist
   - [ ] Test environment variables

## Troubleshooting

### Docker Issues

**Container won't start**:
```bash
# Check container logs
docker-compose logs app
docker-compose logs postgres

# Verify environment variables
docker-compose config

# Rebuild containers
docker-compose down
docker-compose up --build
```

**Database connection errors**:
- Verify PostgreSQL container is running: `docker-compose ps`
- Check database credentials in `.env` file
- Ensure database exists: `docker-compose exec postgres psql -U blog_user -l`

**File upload issues**:
- Check volume mounts in `docker-compose.yml`
- Verify upload directory permissions
- Check file size limits

### Application Issues

**Admin login issues**:
- Verify admin user exists in database
- Check session secret is set in `.env`
- Clear browser cookies and try again

**Search not working**:
- Verify search vector is updated: Check database triggers
- Ensure posts are published (not draft)
- Check language-specific search configuration

**Multi-language issues**:
- Verify language files exist in `static/locales/`
- Check `SUPPORTED_LANGUAGES` environment variable
- Verify URL routing configuration

## Production Deployment

### Docker Production Setup

1. **Configure Production Environment**:
   ```env
   DEV_MODE=false
   BASE_URL=https://your-domain.com
   SESSION_SECRET=production-secret-key
   POSTGRES_PASSWORD=strong-production-password
   ```

2. **Use Production Docker Compose**:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

3. **Set up Reverse Proxy** (Nginx/Caddy example):
   - Configure HTTPS certificates
   - Set up load balancing
   - Configure caching headers

4. **Database Backups**:
   ```bash
   # Automated backup script
   docker-compose exec postgres pg_dump -U blog_user fresh_blog | gzip > backup_$(date +%Y%m%d).sql.gz
   ```

5. **Monitoring**:
   - Set up health checks
   - Configure logging aggregation
   - Monitor resource usage

### Performance Optimization

1. **Database**:
   - Configure connection pooling
   - Optimize queries with proper indexing
   - Set up read replicas for high traffic

2. **Caching**:
   - Configure CDN for static assets
   - Set up application-level caching
   - Optimize Core Web Vitals

3. **Security**:
   - Use HTTPS in production
   - Configure security headers
   - Regular security updates

## Next Steps

After completing the quick start:

1. **Customize Design**: Modify Tailwind CSS classes and components
2. **Add Languages**: Implement additional language support
3. **Configure Production**: Set up production deployment
4. **Monitor Performance**: Track Core Web Vitals and user metrics
5. **Backup Strategy**: Implement regular database backups
6. **SEO Optimization**: Configure sitemaps and structured data

This quick start guide should get you up and running with the multi-language Fresh blog system. The implementation is designed to be scalable, maintainable, and production-ready while following Fresh framework best practices.