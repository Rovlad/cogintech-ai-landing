import React from 'react';
import { isDevelopment, mode, config } from '@/lib/env';

const DevInfo = () => {
  if (!isDevelopment) {
    return null; // Не показываем в продакшене
  }

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-lg shadow-lg z-50 text-sm">
      <div className="font-bold mb-1">🔧 Development Mode</div>
      <div>Environment: {mode}</div>
      <div>API: {config.apiUrl}</div>
      <div>Debug: {config.enableDebug ? 'ON' : 'OFF'}</div>
      <div>Cache: {config.cacheEnabled ? 'ON' : 'OFF'}</div>
    </div>
  );
};

export default DevInfo; 