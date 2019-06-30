import app from './app';

const PORT = 3000;

const handleListening = () => {
	console.log(`Listening on: 127.0.0.1:${PORT}`);
}

app.listen(PORT, handleListening)