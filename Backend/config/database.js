const mongoose = require('mongoose');



    mongoose
        .connect(
            process.env.DATABASE_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                connectTimeoutMS: 60000,
                serverSelectionTimeoutMS: 60000, // Keep trying to send operations for 5 seconds
            })
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('Failed to connect to MongoDB', err));