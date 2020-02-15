// Application entry, setting up server
import app from './app'; // The express app we just created

const port = parseInt(process.env.PORT, 10) || 5000; // Use port 5000
app.set('port', port);

// 0.0.0.0 makes it available on your local network
// app.listen(port, '0.0.0.0');
app.listen(port);
