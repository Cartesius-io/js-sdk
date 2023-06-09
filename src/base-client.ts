import CartesiusConfig, { CartesiusVersionType } from './config.model';
import axios from 'axios';
import ApiResponse from './api/api-response.model';

const DEFAULT_BASE_URL = 'https://api.cartesius.io/';
const DEFAULT_VERSION: CartesiusVersionType = 'beta';

export default abstract class BaseClient {
  private readonly baseApiUrl: string;
  private readonly apiKey: string;

  constructor(config: CartesiusConfig) {
    this.apiKey = config.apiKey;

    this.baseApiUrl = `${config.apiUrl || DEFAULT_BASE_URL}${
      config.version || DEFAULT_VERSION
    }`;
  }

  protected get<T = unknown>(
    endpoint: string,
    queryParams: Record<string, string> = {},
  ): Promise<ApiResponse<T>> {
    return axios
      .get<ApiResponse<T>>(`${this.baseApiUrl}${endpoint}`, {
        params: queryParams,
        headers: {
          'X-API-KEY': this.apiKey,
        },
      })
      .then(({ data: apiResponse }) => apiResponse)
      .catch((error) => {
        if (error.response) {
          return error.response.data;
        }

        return {
          code: -1,
          status: 'error',
          messages: ['There has been an unexpected error: ' + error.message],
        } as ApiResponse<T>;
      });
  }
}
