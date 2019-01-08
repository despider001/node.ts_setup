import { Messenger } from './src/controllers/messenger';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

dotenv.config();
// mongoose connection
mongoose.connect(`mongodb://${process.env.monogo_username}:${process.env.monogo_password}@ds251894.mlab.com:51894/${process.env.monogo_dbname}`, {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req: express.Request, res: express.Response) =>
    res.send(`Node and express ${new Messenger(PORT).printMessage()}`)
);

app.listen(PORT, () =>
    console.log(new Messenger(PORT).printMessage())
);