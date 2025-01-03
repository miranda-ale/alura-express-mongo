// import http from 'http';
import app from './src/app.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor escutando na Porta ${PORT} \nhttp://localhost:${PORT}`)
});


