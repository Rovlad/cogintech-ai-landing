// Environment detection utilities
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
export const mode = import.meta.env.MODE;

// Log environment info in development
if (isDevelopment) {
  console.log('🔧 Development mode detected');
  console.log('📦 Environment:', mode);
  console.log('🌐 Production:', isProduction);
}

// Environment-specific configurations
export const config = {
  // API endpoints
  apiUrl: isDevelopment 
    ? 'http://localhost:8080/api' 
    : 'https://cogintech.com/api',
  
  // Supabase configuration
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || '',
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  
  // Feature flags
  enableDebug: isDevelopment,
  enableAnalytics: isProduction,
  
  // Cache settings
  cacheEnabled: isProduction,
  cacheDuration: isProduction ? 3600 : 0, // 1 hour in production, no cache in dev
  
  // Error reporting
  enableErrorReporting: isProduction,
  
  // Performance monitoring
  enablePerformanceMonitoring: isProduction,
};

// Helper function to get environment-specific values
export function getEnvValue<T>(devValue: T, prodValue: T): T {
  return isDevelopment ? devValue : prodValue;
}

// Helper function to conditionally execute code based on environment
export function ifDevelopment<T>(callback: () => T): T | undefined {
  return isDevelopment ? callback() : undefined;
}

export function ifProduction<T>(callback: () => T): T | undefined {
  return isProduction ? callback() : undefined;
} 