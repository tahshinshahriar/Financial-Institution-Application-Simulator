from pymongo import MongoClient
import certifi
from pymongo.errors import DuplicateKeyError, PyMongoError

class Database:
    def __init__(self, connection_string, db_name, collection_name):
        self.connection_string = connection_string
        self.db_name = db_name
        self.collection_name = collection_name
        self.client = None
        self.db = None
        self.collection = None
        self.connect()
    
    def connect(self):
        self.client = MongoClient(self.connection_string, tlsCAFile=certifi.where())
        self.db = self.client[self.db_name]
        self.collection = self.db[self.collection_name]
    
    
    def get_password(self, email:str):
        user_data = self.collection.find_one({"Email": email})
        if user_data:
            return user_data.get("Password")
        return None
    
    def get_userinfo(self, username:str):
        user_data = self.collection.find_one({"Username": username})
        return user_data
    
    def insert_user(self, user_data: dict):
        try:
            result = self.collection.insert_one(user_data)
            return result
        except DuplicateKeyError as e:
            # Handle duplicate key error
            print(f"Duplicate key error: {e}")
            return None
        except PyMongoError as e:
            print(f"PyMongo error: {e}")
            return None


