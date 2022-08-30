import { LowSync, JSONFileSync } from 'lowdb';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, "db.json")
const adaptor = new JSONFileSync(file)
const db = new LowSync(adaptor)


// Set default data
db.read();
db.data ||= { users: [] };


export default db;