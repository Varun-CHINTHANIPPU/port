import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function contactApiPlugin() {
  return {
    name: 'contact-api-handler',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const { name, email, message } = data;

              if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'All fields (Name, Email, Message) are required.' }));
              }

              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email.trim())) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'Please provide a valid email address.' }));
              }

              console.log(`[Contact API] Received validated message from ${name.trim()} <${email.trim()}>`);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ 
                success: true, 
                message: 'Your message has been delivered to Varun Chinthanippu.' 
              }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: 'Failed to process message submission.' }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    contactApiPlugin()
  ],
  server: {
    port: 3000,
    open: false,
    host: true,
    proxy: {
      '/api/cryptohack': {
        target: 'https://cryptohack.org/api/user/varamm/',
        changeOrigin: true,
        rewrite: () => ''
      }
    }
  }
});
