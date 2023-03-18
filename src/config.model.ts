export type CartesiusVersionType = 'beta';
export default interface CartesiusConfig {
  apiKey: string;

  version?: CartesiusVersionType;

  // For enterprise users with their own instance
  apiUrl?: string;
}
