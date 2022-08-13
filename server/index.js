import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://esolis205:ESOLIS205@cluster0.esjnwdf.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//ensures that we do not receive any warnings in the console
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);