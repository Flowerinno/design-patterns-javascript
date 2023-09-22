// Creational Singleton Pattern

// Pros:
// 1. When you need to have only one instance of a class throughout the whole application lifetime cycle
// 2. When you need to have a global access point to that instance (e.g. global variable like DB connection)

//CONS:
// 1. Difficult to test and maintain

import mysql from "mysql2";

class Logger {
	private static instance: Logger;
	private logs: string[];

	constructor() {
		if (Logger.instance) {
			return Logger.instance;
		}
		this.logs = [];
		Logger.instance = this;
	}

	log(message: string) {
		this.logs.push(message);
		console.log(`[${new Date().toISOString()}] ${message}`);
	}
}

class Database {
	private static instance: Database | null;
	private connection: mysql.Connection;

	constructor() {
		if (Database.instance) {
			return Database.instance;
		}
		this.connection = mysql.createConnection({}); //creds
		this.connection.connect(); // connect to db
		Database.instance = this;
	}

	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err) {
					return reject(err);
				}
				resolve(rows);
			});
		});
	}

	close() {
		this.connection.end();
		Database.instance = null;
	}
}
