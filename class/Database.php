<?php

class Database
{

	static function connection()
	{
		try {
			$conn = new \PDO("mysql:host=us-cdbr-east-05.cleardb.net;dbname=heroku_5f7c029aa9e9f41", 'bcc58c8717eede', '3a5fb8ab');
	        $conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		} catch (\Exception $e) {
			 $conn = null;
		}
			return $conn;
	}
}