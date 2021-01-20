from pymongo import MongoClient
import datetime
import pprint

num_sep = 150
print(f"{'*' * num_sep}\n")

# -----Подключение----------------------------------------------------------------

# Установление соединения с MongoClient
# MongoClient('mongodb://localhost:27017/')
client = MongoClient('localhost', 27017)
print(f"client: {client}\n")

# Получение базы данных
# db = client['test-database']
db = client['test-database']
print(f"db: {db}\n")

# Получение коллекции
# collection = db['test_collection']
collection = db.test_collection
print(f"collection: {collection}\n")
print(f"{'*' * num_sep}\n")

# ------Добавление------------------------------------------------------------------------------------------------------
one_post = {"author": "Mike",
            "text": "My first blog post!",
            "tags": ["mongodb", "python", "pymongo"],
            "date": datetime.datetime.utcnow()}

# добавить один документ и получить его id
insert_one_result = db.test_collection.insert_one(one_post)
print(f"db.test_collection..insert_one(one_post):\n"
      f"\ttype = {type(insert_one_result)}\n"
      f"\tvalue = {insert_one_result}\n")
one_post_id = insert_one_result.inserted_id
print(f"db.test_collection.insert_one(one_post).inserted_id:\n"
      f"\ttype = {type(one_post_id)}\n"
      f"\tvalue = {one_post_id}\n")

# DeprecationWarning: insert is deprecated. Use insert_one or insert_many instead
# post_id = db.test_collection.insert(one_post)
# print(f"insert(one_post).inserted_id: {post_id}\n")

print(f"{'-' * num_sep}\n")

# добавить несколько документов (bulk inserts)
many_posts = [{"author": "Ira",
               "text": "Cute cats!",
               "tags": ["bulk", "insert"],
               "date": datetime.datetime.utcnow()},
              {"author": "Misha",
               "title": "Craze stories about dogs!!!",
               "tags": ["bulk", "insert"],
               "text": "bla bla bla",
               "date": datetime.datetime.utcnow()}]

insert_many_result = db.test_collection.insert_many(many_posts)
print(f"db.test_collection.insert_many(many_posts):\n"
      f"\ttype = {type(insert_many_result)}\n"
      f"\tvalue = {insert_many_result}\n")
many_post_ids = insert_many_result.inserted_ids
print(f"db.test_collection.insert_many(many_posts).inserted_ids:\n"
      f"\ttype = {type(many_post_ids)}\n"
      f"\tvalue = {many_post_ids}\n")

print(f"{'*' * num_sep}\n")
# ------Обновление------------------------------------------------------------------------------------------------------

# ------Удаление--------------------------------------------------------------------------------------------------------

# ------Запросы---------------------------------------------------------------------------------------------------------

# получить имена коллекций из БД
print(f"db.list_collection_names(): {db.list_collection_names()}\n")

print(f"{'-' * num_sep}\n")

# получить один любой документ из коллекции
print(f"db.test_collection.find_one():\n{pprint.pformat(db.test_collection.find_one())}\n")

print(f"{'-' * num_sep}\n")

# получить все документы из коллекции
print("db.test_collection.find():")
for doc in db.test_collection.find():
    print(f"id: {doc['_id']}")
    # print(f"{pprint.pformat(doc)}\n")

print(f"{'-' * num_sep}\n")

# получить один документ удовлетворяющий условию из коллекции (такой существует)
print(f"db.test_collection.find_one({{'author': 'Mike'}}):\n"
      f"{pprint.pformat(db.test_collection.find_one({'author': 'Mike'}))}\n")

# получить один документ удовлетворяющий условию из коллекции (такого не существует)
print(f"db.test_collection.find_one({{'author': 'Eliot'}}): {db.test_collection.find_one({'author': 'Eliot'})}\n")

print(f"{'-' * num_sep}\n")

# получить все документы удовлетворяющие условию из коллекции
print("db.test_collection.find({{'author': 'Ira'}}):")
for doc in db.test_collection.find({'author': 'Ira'}):
    print(f"id: {doc['_id']}")
    # print(f"{pprint.pformat(doc)}\n")

print(f"{'-' * num_sep}\n")

# получить один документ по id из коллекции (такой существует)
# ВНИМАНИЕ: id должен быть типа bson.objectid.ObjectId
print(f"db.test_collection.find_one({{'_id': {one_post_id}}}):\n"
      f"{pprint.pformat(db.test_collection.find_one({'_id': one_post_id}))}\n")

# если id НЕ bson.objectid.ObjectId
# можно преобразовать строку bson.objectid.ObjectId(str_id)
print(f"db.test_collection.find_one({{'_id': str({one_post_id})}}): "
      f"{pprint.pformat(db.test_collection.find_one({'_id': str(one_post_id)}))}\n")



print(f"{'*' * num_sep}\n")
