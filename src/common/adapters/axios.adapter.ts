import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/htttp-adapter.interface';

export class AxiosAdapter implements HttpAdapter {
  private readonly axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
    } catch (error) {}
  }
}
