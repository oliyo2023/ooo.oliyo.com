# Data Model: Fresh Blog

**Date**: 2025-10-07
**Storage**: SQLite with FTS5 extension
**Scale**: Medium (100-1000 posts)

## Core Entities

### Blog Post

```typescript
interface BlogPost {
  id: number;                    // Primary key
  title: string;                 // Post title (required, unique)
  slug: string;                  // URL-friendly identifier (unique)
  content: string;               // Rich text HTML content
  excerpt: string;               // Short description for listings
  status: PostStatus;            // draft | published
  author_id: number;             // Foreign key to admin users
  published_at?: Date;           // Publication timestamp
  created_at: Date;              // Creation timestamp
  updated_at: Date;              // Last update timestamp
  deleted_at?: Date;             // Soft deletion timestamp
}

enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published'
}
```

**Validation Rules**:
- Title: Required, unique, max 200 characters
- Slug: Auto-generated from title, unique, max 200 characters
- Content: Required for published posts
- Excerpt: Auto-generated from content if not provided, max 500 characters

### Category

```typescript
interface Category {
  id: number;                    // Primary key
  name: string;                  // Category name (required, unique)
  slug: string;                  // URL-friendly identifier (unique)
  description?: string;          // Category description
  created_at: Date;              // Creation timestamp
}
```

**Validation Rules**:
- Name: Required, unique, max 100 characters
- Slug: Auto-generated from name, unique, max 100 characters

### Tag

```typescript
interface Tag {
  id: number;                    // Primary key
  name: string;                  // Tag name (required, unique)
  slug: string;                  // URL-friendly identifier (unique)
  created_at: Date;              // Creation timestamp
}
```

**Validation Rules**:
- Name: Required, unique, max 50 characters
- Slug: Auto-generated from name, unique, max 50 characters

### Admin User

```typescript
interface AdminUser {
  id: number;                    // Primary key
  username: string;              // Login username (required, unique)
  email: string;                 // Email address (required, unique)
  password_hash: string;         // Bcrypt hash (required)
  name: string;                  // Display name (required)
  created_at: Date;              // Creation timestamp
  last_login?: Date;             // Last successful login
}
```

**Validation Rules**:
- Username: Required, unique, 3-50 characters, alphanumeric + underscore
- Email: Required, unique, valid email format
- Password: Min 8 characters when creating/updating
- Name: Required, max 100 characters

## Relationship Tables

### Post Categories (Many-to-Many)

```typescript
interface PostCategory {
  post_id: number;               // Foreign key to posts
  category_id: number;           // Foreign key to categories
  created_at: Date;              // Assignment timestamp
}
```

### Post Tags (Many-to-Many)

```typescript
interface PostTag {
  post_id: number;               // Foreign key to posts
  tag_id: number;                // Foreign key to tags
  created_at: Date;              // Assignment timestamp
}
```

## Database Schema

### Tables

```sql
-- Blog posts table
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  status TEXT NOT NULL CHECK (status IN ('draft', 'published')),
  author_id INTEGER NOT NULL,
  published_at DATETIME,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME,
  FOREIGN KEY (author_id) REFERENCES admin_users(id)
);

-- Categories table
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tags table
CREATE TABLE tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Admin users table
CREATE TABLE admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME
);

-- Post categories junction table
CREATE TABLE post_categories (
  post_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (post_id, category_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Post tags junction table
CREATE TABLE post_tags (
  post_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);
```

### Full-Text Search Table

```sql
-- FTS5 virtual table for search
CREATE VIRTUAL TABLE posts_fts USING fts5(
  title,
  content,
  excerpt,
  content=posts,
  content_rowid=id
);

-- Triggers to maintain FTS index
CREATE TRIGGER posts_fts_insert AFTER INSERT ON posts BEGIN
  INSERT INTO posts_fts(rowid, title, content, excerpt)
  VALUES (new.id, new.title, new.content, new.excerpt);
END;

CREATE TRIGGER posts_fts_delete AFTER DELETE ON posts BEGIN
  INSERT INTO posts_fts(posts_fts, rowid, title, content, excerpt)
  VALUES ('delete', old.id, old.title, old.content, old.excerpt);
END;

CREATE TRIGGER posts_fts_update AFTER UPDATE ON posts BEGIN
  INSERT INTO posts_fts(posts_fts, rowid, title, content, excerpt)
  VALUES ('delete', old.id, old.title, old.content, old.excerpt);
  INSERT INTO posts_fts(rowid, title, content, excerpt)
  VALUES (new.id, new.title, new.content, new.excerpt);
END;
```

### Indexes

```sql
-- Performance indexes
CREATE INDEX idx_posts_status_published ON posts(status, published_at DESC);
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_tags_slug ON tags(slug);
CREATE INDEX idx_admin_users_username ON admin_users(username);
CREATE INDEX idx_admin_users_email ON admin_users(email);
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

### Business Rules

1. **Unique Constraints**: Title and slug must be unique across all posts (including soft-deleted)
2. **Publication Logic**: Post can only be published if it has title and content
3. **Slug Generation**: Auto-generated from title, ensures URL-friendly format
4. **Search Index**: Automatically maintained via database triggers
5. **Soft Deletion**: Deleted posts remain in database but excluded from public queries
6. **Category/Tag Assignment**: Only published posts can be assigned categories/tags
7. **Admin Authentication**: Password stored as bcrypt hash, never stored in plain text

## Data Access Patterns

### Public Blog Queries
- List published posts with pagination
- Get single published post by slug
- Search published posts with FTS5
- Filter posts by category or tag
- Get category/tag details with post counts

### Admin Queries
- Full CRUD operations on posts (including drafts)
- Category and tag management
- Admin user authentication
- Soft deletion and restoration
- Content statistics and analytics

## Performance Considerations

- **Read Performance**: Optimized indexes for common query patterns
- **Search Performance**: FTS5 provides sub-second search with relevance ranking
- **Pagination**: Efficient LIMIT/OFFSET with indexed ordering
- **Cache Strategy**: Static content can be cached at Fresh level
- **Database Size**: Estimated 10-50MB for 1000 rich posts