# Data Model: Fresh Blog

**Date**: 2025-10-10 **Storage**: PostgreSQL **Scale**: Medium (100-1000 posts)
**Multi-language**: Yes (>=3 languages)

## Core Entities

### Blog Post

```typescript
interface BlogPost {
  id: string; // UUID primary key
  title: string; // Post title (required)
  slug: string; // URL-friendly identifier (unique per language)
  content: string; // Rich text HTML content
  excerpt: string; // Short description for listings
  status: PostStatus; // draft | published
  author_id: string; // Foreign key to admin users
  language: string; // Language code (en, zh, es, etc.)
  published_at?: Date; // Publication timestamp
  created_at: Date; // Creation timestamp
  updated_at: Date; // Last update timestamp
  deleted_at?: Date; // Soft deletion timestamp
}

enum PostStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}
```

**Validation Rules**:

- Title: Required, max 200 characters
- Slug: Auto-generated from title, unique per language, max 200 characters
- Content: Required for published posts
- Excerpt: Auto-generated from content if not provided, max 500 characters
- Language: Required, valid language code from supported languages

### Category

```typescript
interface Category {
  id: string; // UUID primary key
  name: string; // Category name (required)
  slug: string; // URL-friendly identifier (unique per language)
  description?: string; // Category description
  language: string; // Language code
  created_at: Date; // Creation timestamp
}
```

**Validation Rules**:

- Name: Required, max 100 characters
- Slug: Auto-generated from name, unique per language, max 100 characters
- Language: Required, valid language code

### Tag

```typescript
interface Tag {
  id: string; // UUID primary key
  name: string; // Tag name (required)
  slug: string; // URL-friendly identifier (unique per language)
  language: string; // Language code
  created_at: Date; // Creation timestamp
}
```

**Validation Rules**:

- Name: Required, max 50 characters
- Slug: Auto-generated from name, unique per language, max 50 characters
- Language: Required, valid language code

### Admin User

```typescript
interface AdminUser {
  id: string; // UUID primary key
  username: string; // Login username (required, unique)
  email: string; // Email address (required, unique)
  password_hash: string; // Bcrypt hash (required)
  name: string; // Display name (required)
  created_at: Date; // Creation timestamp
  last_login?: Date; // Last successful login
}
```

**Validation Rules**:

- Username: Required, unique, 3-50 characters, alphanumeric + underscore
- Email: Required, unique, valid email format
- Password: Min 8 characters when creating/updating
- Name: Required, max 100 characters

### Session

```typescript
interface Session {
  id: string; // UUID primary key
  user_id: string; // Foreign key to admin users
  token: string; // Session token (unique)
  expires_at: Date; // Expiration timestamp
  created_at: Date; // Creation timestamp
}
```

**Validation Rules**:

- Token: Required, unique, secure random string
- Expires at: Required, future timestamp
- Max session duration: 24 hours (configurable)

## Relationship Tables

### Post Categories (Many-to-Many)

```typescript
interface PostCategory {
  post_id: string; // Foreign key to posts
  category_id: string; // Foreign key to categories
  created_at: Date; // Assignment timestamp
}
```

### Post Tags (Many-to-Many)

```typescript
interface PostTag {
  post_id: string; // Foreign key to posts
  tag_id: string; // Foreign key to tags
  created_at: Date; // Assignment timestamp
}
```

## Database Schema (PostgreSQL)

### Tables

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Blog posts table
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  status VARCHAR(20) NOT NULL CHECK (status IN ('draft', 'published')),
  author_id UUID NOT NULL,
  language VARCHAR(5) NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP WITH TIME ZONE,
  FOREIGN KEY (author_id) REFERENCES admin_users(id),
  UNIQUE(title, language),
  UNIQUE(slug, language)
);

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL,
  description TEXT,
  language VARCHAR(5) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(name, language),
  UNIQUE(slug, language)
);

-- Tags table
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL,
  slug VARCHAR(50) NOT NULL,
  language VARCHAR(5) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(name, language),
  UNIQUE(slug, language)
);

-- Admin users table
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Sessions table
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  token VARCHAR(255) NOT NULL UNIQUE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

-- Post categories junction table
CREATE TABLE post_categories (
  post_id UUID NOT NULL,
  category_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (post_id, category_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Post tags junction table
CREATE TABLE post_tags (
  post_id UUID NOT NULL,
  tag_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);
```

### Full-Text Search

```sql
-- Create GIN indexes for full-text search
ALTER TABLE posts ADD COLUMN search_vector tsvector;

-- Create function to update search vector
CREATE OR REPLACE FUNCTION update_post_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := to_tsvector('english', COALESCE(NEW.title, '') || ' ' || COALESCE(NEW.content, '') || ' ' || COALESCE(NEW.excerpt, ''));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update search vector
CREATE TRIGGER update_post_search_vector_trigger
  BEFORE INSERT OR UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_post_search_vector();

-- Create GIN index for search performance
CREATE INDEX idx_posts_search_vector ON posts USING GIN(search_vector);

-- Function to search posts
CREATE OR REPLACE FUNCTION search_posts(query_text TEXT, language_param VARCHAR(5))
RETURNS TABLE(id UUID, title VARCHAR, content TEXT, excerpt TEXT, slug VARCHAR) AS $$
BEGIN
  RETURN QUERY
  SELECT p.id, p.title, p.content, p.excerpt, p.slug
  FROM posts p
  WHERE p.status = 'published'
    AND p.deleted_at IS NULL
    AND p.language = language_param
    AND to_tsvector('english', p.title || ' ' || p.content || ' ' || COALESCE(p.excerpt, '')) @@ plainto_tsquery('english', query_text)
  ORDER BY ts_rank(to_tsvector('english', p.title || ' ' || p.content || ' ' || COALESCE(p.excerpt, '')), plainto_tsquery('english', query_text)) DESC;
END;
$$ LANGUAGE plpgsql;
```

### Indexes

```sql
-- Performance indexes
CREATE INDEX idx_posts_status_published ON posts(status, published_at DESC);
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_language ON posts(language);
CREATE INDEX idx_posts_status_language ON posts(status, language);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_language ON categories(language);
CREATE INDEX idx_tags_slug ON tags(slug);
CREATE INDEX idx_tags_language ON tags(language);
CREATE INDEX idx_admin_users_username ON admin_users(username);
CREATE INDEX idx_admin_users_email ON admin_users(email);
CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at);

-- Junction table indexes
CREATE INDEX idx_post_categories_post_id ON post_categories(post_id);
CREATE INDEX idx_post_categories_category_id ON post_categories(category_id);
CREATE INDEX idx_post_tags_post_id ON post_tags(post_id);
CREATE INDEX idx_post_tags_tag_id ON post_tags(tag_id);
```

### Triggers for Updated Timestamp

```sql
-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for posts table
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## State Transitions

### Post Status Flow

```
draft → published
published → draft
draft → deleted (soft delete)
published → deleted (soft delete)
deleted → draft (restore)
```

### Session Lifecycle

```
created → active → expired
created → active → revoked (logout)
```

## Business Rules

1. **Multi-language Constraints**: Title and slug must be unique per language
2. **Publication Logic**: Post can only be published if it has title and content
3. **Slug Generation**: Auto-generated from title, ensures URL-friendly format per language
4. **Search Index**: Automatically maintained via database triggers
5. **Soft Deletion**: Deleted posts remain in database but excluded from public queries
6. **Category/Tag Assignment**: Categories and tags are language-specific
7. **Admin Authentication**: Password stored as bcrypt hash, never stored in plain text
8. **Session Management**: Sessions expire automatically and are cleaned up
9. **Content Localization**: Each post, category, and tag belongs to a specific language

## Data Access Patterns

### Public Blog Queries

- List published posts by language with pagination
- Get single published post by slug and language
- Search published posts with full-text search per language
- Filter posts by category or tag within a language
- Get category/tag details with post counts per language
- Language detection and fallback logic

### Admin Queries

- Full CRUD operations on posts (including drafts)
- Multi-language content management
- Category and tag management per language
- Admin user authentication and session management
- Soft deletion and restoration
- Content statistics and analytics
- Cross-language content overview

## Performance Considerations

- **Read Performance**: Optimized indexes for common query patterns
- **Search Performance**: PostgreSQL GIN indexes provide sub-second search with relevance ranking
- **Multi-language**: Efficient queries per language with proper indexing
- **Pagination**: Efficient LIMIT/OFFSET with indexed ordering
- **Cache Strategy**: Static content can be cached at Fresh level
- **Database Size**: Estimated 50-200MB for 1000 rich posts with multi-language support
- **Connection Pooling**: Recommended for PostgreSQL connections in Docker environment