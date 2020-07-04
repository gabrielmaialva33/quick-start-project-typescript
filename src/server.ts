import * as dotenv from 'dotenv';
import express from 'express';
import routes from './routes';

dotenv.config();

const App = express();

App.use(routes);

App.listen(process.env.HTTP_PORT || 3333, () => {
	console.log(
		` 🚀 Servidor iniciado. Link => http://localhost:${process.env.HTTP_PORT}/`,
	);
});
