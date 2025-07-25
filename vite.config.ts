import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';
  
  console.log(`🚀 Building in ${mode} mode`);
  console.log(`📦 Development: ${isDevelopment}`);
  console.log(`🌐 Production: ${isProduction}`);
  
  return {
    server: {
      host: "::",
      port: 8080,
      // Add headers to prevent caching in development only
      headers: isDevelopment ? {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      } : {}
    },
    plugins: [
      react(),
      isDevelopment && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      // Define global constants for mode detection
      __IS_DEVELOPMENT__: JSON.stringify(isDevelopment),
      __IS_PRODUCTION__: JSON.stringify(isProduction),
      __MODE__: JSON.stringify(mode),
    },
    build: {
      // Add cache headers for production
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['@radix-ui/react-slot', '@radix-ui/react-toast', '@radix-ui/react-dialog', '@radix-ui/react-popover'],
            router: ['react-router-dom'],
            forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
            supabase: ['@supabase/supabase-js'],
            utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          },
          assetFileNames: (assetInfo) => {
            // Set cache-friendly names for assets
            if (assetInfo.name) {
              const info = assetInfo.name.split('.');
              const ext = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                return `assets/images/[name].[hash][extname]`;
              }
            }
            return `assets/[name].[hash][extname]`;
          },
        },
      },
      assetsInlineLimit: 0,
      minify: 'esbuild', // Use esbuild instead of terser for better compatibility
    },
  };
});
