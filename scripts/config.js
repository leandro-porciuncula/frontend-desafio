// Detecta o ambiente automaticamente (localhost ou produção)
//const BACKEND_URL = 'http://ENDEREÇO_DO_BACKEND:3000'; // Altere aqui para o IP da sua EC2
window.CONFIG = {
  BACKEND_URL: process.env.BACKEND_URL || "http://localhost:3000"
};
