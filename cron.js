const cron = require('node-cron');

cron.schedule('0 */1 * * *', () => {
  console.log('Executando a tarefa a cada 1 minuto');
});