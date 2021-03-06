const facebookID = process.env.facebookID;
const facebookSecret = process.env.facebookSecret;
const PORT_DEFAULT = process.env.PORT;

export const MODE = process.env.npm_lifecycle_event;

export const FACEBOOK_CLIENT_ID = (MODE === 'startFB') ? process.argv[2] : facebookID;
export const FACEBOOK_CLIENT_SECRET = (MODE === 'startFB') ? process.argv[2] : facebookSecret;

export const PORT = (MODE === 'fork') ? (process.argv[2] ? parseInt(process.argv[2]) : PORT_DEFAULT) : PORT_DEFAULT;

export const MONGO_URI = 'mongodb+srv://user:pass@cluster0.99scg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';