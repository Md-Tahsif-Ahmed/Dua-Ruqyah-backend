// src/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: './dua_main.sqlite',
  driver: sqlite3.Database,
});

export default dbPromise;
