import api from './api';
import { Task, TaskStats, ApiResponse } from '@/types';

interface TaskFilters {
  status?: string;
  priority?: string;
  search?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export const taskService = {
  getTasks: async (filters?: TaskFilters): Promise<ApiResponse<{ tasks: Task[] }>> => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
    }
    const response = await api.get<ApiResponse<{ tasks: Task[] }>>(`/tasks?${params.toString()}`);
    return response.data;
  },

  getTask: async (id: string): Promise<ApiResponse<{ task: Task }>> => {
    const response = await api.get<ApiResponse<{ task: Task }>>(`/tasks/${id}`);
    return response.data;
  },

  createTask: async (data: Partial<Task>): Promise<ApiResponse<{ task: Task }>> => {
    const response = await api.post<ApiResponse<{ task: Task }>>('/tasks', data);
    return response.data;
  },

  updateTask: async (id: string, data: Partial<Task>): Promise<ApiResponse<{ task: Task }>> => {
    const response = await api.put<ApiResponse<{ task: Task }>>(`/tasks/${id}`, data);
    return response.data;
  },

  deleteTask: async (id: string): Promise<ApiResponse<{ task: Task }>> => {
    const response = await api.delete<ApiResponse<{ task: Task }>>(`/tasks/${id}`);
    return response.data;
  },

  getStats: async (): Promise<ApiResponse<{ stats: TaskStats }>> => {
    const response = await api.get<ApiResponse<{ stats: TaskStats }>>('/tasks/stats');
    return response.data;
  },
};
