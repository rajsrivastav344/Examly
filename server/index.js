const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const URL = "mongodb+srv://examly2214:2214examly@cluster0.oceiyqb.mongodb.net/exam?retryWrites=true&w=majority";

mongoose.connect(URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// API routes
app.use('/api/admin', require('./routes/adminRoute'));
app.use('/api/session', require('./routes/sessionRoute'));
app.use('/api/subject', require('./routes/subjectRoute'));
app.use('/api/exams', require('./routes/examinationRoute'));
app.use('/api/question', require('./routes/questionBankRoute'));
app.use('/api/examinee', require('./routes/examineeRoute'));
app.use('/api/message', require('./routes/messageRoute'));
app.use('/api/admindashboard', require('./routes/adminDashboard'));

if (process.env.NODE_ENV === 'production') {
    const clientDistPath = path.join(__dirname, '../client/dist');

    // Serve static files
    app.use(express.static(clientDistPath));
    app.use('/assets', express.static(path.join(clientDistPath, 'assets')));

    // For React Router fallback
    app.get('*', (req, res) => {
        res.sendFile(path.join(clientDistPath, 'index.html'));
    });
}


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
