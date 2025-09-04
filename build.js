import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildProject() {
  try {
    console.log('Starting Vite build process...');
    
    await build({
      configFile: resolve(__dirname, 'vite.config.ts'),
      mode: 'production',
      logLevel: 'info'
    });
    
    console.log('Build completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildProject();