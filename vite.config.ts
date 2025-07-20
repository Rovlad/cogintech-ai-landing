import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      // Cache static assets for 1 year
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Add cache headers for production
    assetsDir: 'assets',
    rollupOptions: {
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false,
      },
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor';
          }
          // Radix UI components - split by functionality
          if (id.includes('@radix-ui')) {
            if (id.includes('toast') || id.includes('dialog') || id.includes('popover')) {
              return 'ui-core';
            }
            return 'ui-extended';
          }
          // Router
          if (id.includes('react-router')) {
            return 'router';
          }
          // Forms and validation
          if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) {
            return 'forms';
          }
          // Supabase
          if (id.includes('supabase')) {
            return 'supabase';
          }
          // Charts (if used)
          if (id.includes('recharts')) {
            return 'charts';
          }
          // Utilities
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils';
          }
          // Lucide icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          // Large libraries
          if (id.includes('node_modules')) {
            return 'vendor-misc';
          }
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
    minify: 'esbuild',
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
}));
