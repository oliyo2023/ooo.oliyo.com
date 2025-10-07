// 管理员相关的类型定义

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  name: string;
  created_at: Date;
  last_login?: Date;
}

export interface CreateAdminData {
  username: string;
  email: string;
  password: string;
  name: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SessionData {
  userId: number;
  username: string;
  name: string;
  loginTime: Date;
}

// 文章统计接口
export interface BlogStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalTags: number;
  totalViews: number;
}

// 管理面板数据接口
export interface AdminDashboard {
  user: AdminUser;
  stats: BlogStats;
  recentPosts: Array<{
    id: number;
    title: string;
    status: string;
    updated_at: Date;
  }>;
}