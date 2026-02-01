const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('selybi_admin_token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getAuthHeaders(),
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Projects endpoints
  async getProjects(params?: {
    page?: number;
    limit?: number;
    category?: string;
    status?: string;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<ApiResponse> {
    const queryString = params ? new URLSearchParams(params as any).toString() : '';
    return this.request(`/projects${queryString ? `?${queryString}` : ''}`);
  }

  async getProject(id: string): Promise<ApiResponse> {
    return this.request(`/projects/${id}`);
  }

  async createProject(projectData: any): Promise<ApiResponse> {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async updateProject(id: string, projectData: any): Promise<ApiResponse> {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(id: string): Promise<ApiResponse> {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  async placeBid(projectId: string, amount: number): Promise<ApiResponse> {
    return this.request(`/projects/${projectId}/bid`, {
      method: 'POST',
      body: JSON.stringify({ amount }),
    });
  }

  async getBiddingHistory(projectId: string): Promise<ApiResponse> {
    return this.request(`/projects/${projectId}/bids`);
  }

  async closeAuction(projectId: string): Promise<ApiResponse> {
    return this.request(`/projects/${projectId}/close`, {
      method: 'POST',
    });
  }

  async getProjectStats(): Promise<ApiResponse> {
    return this.request('/projects/admin/stats');
  }

  // Auth endpoints
  async login(identifier: string, password: string): Promise<ApiResponse> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ identifier, password }),
    });
  }

  async register(userData: any): Promise<ApiResponse> {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async verifyToken(): Promise<ApiResponse> {
    return this.request('/auth/verify-token');
  }

  // Contact endpoints
  async getContacts(params?: {
    page?: number;
    limit?: number;
    status?: string;
    priority?: string;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<ApiResponse> {
    const queryString = params ? new URLSearchParams(params as any).toString() : '';
    return this.request(`/contacts${queryString ? `?${queryString}` : ''}`);
  }

  async getContact(id: string): Promise<ApiResponse> {
    return this.request(`/contacts/${id}`);
  }

  async updateContact(id: string, data: {
    status?: string;
    priority?: string;
    notes?: string;
  }): Promise<ApiResponse> {
    return this.request(`/contacts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteContact(id: string): Promise<ApiResponse> {
    return this.request(`/contacts/${id}`, {
      method: 'DELETE',
    });
  }

  async getContactStats(): Promise<ApiResponse> {
    return this.request('/contacts/admin/stats');
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;
