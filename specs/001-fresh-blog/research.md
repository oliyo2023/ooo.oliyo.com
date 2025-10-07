# Research Findings: Fresh Blog Storage Solutions

**Date**: 2025-10-07 **Scope**: Storage solution evaluation for medium-scale
blog (100-1000 posts)

## Storage Solution Decision

**Decision**: SQLite with Full-Text Search (FTS5) extension

**Rationale**:

- Perfect scale match for 100-1000 posts with excellent performance
- Native full-text search capabilities eliminate need for external search
  service
- Single file database with no server administration required
- Excellent Deno/SQLite driver support in the ecosystem
- ACID compliance ensures data consistency
- Sub-millisecond query times with proper indexing
- Handles 1000+ concurrent users easily
- Clear upgrade path to PostgreSQL if scale increases significantly

**Alternatives Considered**:

- **JSON Files**: Rejected due to poor performance and search limitations
- **PostgreSQL**: Excellent but overkill for current scale, higher complexity
- **MongoDB**: Limited search capabilities without additional services
- **Deno KV**: Poor search functionality for blog content requirements

## Key Technical Decisions

### Database Schema

- **Posts table** with soft deletion (deleted_at timestamp)
- **Categories and Tags** with many-to-many relationships via junction tables
- **Admin users** table with bcrypt password hashing
- **FTS5 virtual table** for full-text search across titles and content
- **Proper indexing** on frequently queried columns

### Search Implementation

- SQLite FTS5 provides sophisticated search out of the box
- Supports relevance ranking, phrase matching, and boolean queries
- Automatic index maintenance via database triggers
- Search response times under 1 second with optimized queries

### Performance Characteristics

- **Read Performance**: Excellent with proper indexing
- **Search Performance**: Outstanding with FTS5 extension
- **Concurrent Users**: Easily handles 1000+ concurrent users
- **Page Load Times**: <2 seconds easily achievable
- **Database Size**: Estimated 10-50MB for 1000 posts with rich content

### Integration Approach

- Use `deno-sqlite` driver for TypeScript support
- Create TypeScript interfaces for type safety
- Implement connection pooling for performance
- Use prepared statements for security and performance
- Implement proper error handling and connection management

## Security Considerations

- Password hashing using bcrypt for admin authentication
- SQL injection prevention through prepared statements
- Input validation and sanitization for all user inputs
- Session-based authentication with secure token generation
- File upload security for rich text media content

## Backup and Maintenance

- SQLite native backup API for consistent backups
- Point-in-time recovery capability
- Vacuum and analyze operations for performance optimization
- Simple file-based backup strategy
- Migration scripts for schema updates

## Migration Path

If the blog grows beyond 10,000 posts or requires multi-user content management:

1. **Phase 1**: Current SQLite implementation (100-1000 posts)
2. **Phase 2**: Migrate to PostgreSQL with full-text search (10,000+ posts)
3. **Phase 3**: Add read replicas for high-traffic scenarios

Migration tools and scripts available for SQLite to PostgreSQL migration when
needed.
