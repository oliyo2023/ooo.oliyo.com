// 博客相关的类型定义

export enum PostStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: PostStatus;
  author_id: number;
  published_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  created_at: Date;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  created_at: Date;
}

export interface PostCategory {
  post_id: number;
  category_id: number;
  created_at: Date;
}

export interface PostTag {
  post_id: number;
  tag_id: number;
  created_at: Date;
}

// 创建和更新博客文章的接口
export interface CreatePostData {
  title: string;
  content: string;
  excerpt?: string;
  status: PostStatus;
  category_ids?: number[];
  tag_ids?: number[];
}

export interface UpdatePostData {
  title?: string;
  content?: string;
  excerpt?: string;
  status?: PostStatus;
  category_ids?: number[];
  tag_ids?: number[];
}

// 搜索结果接口
export interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  published_at?: Date;
  rank: number;
}

// 分页接口
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedPosts {
  posts: (BlogPost & { categories: Category[]; tags: Tag[] })[];
  pagination: PaginationInfo;
}
