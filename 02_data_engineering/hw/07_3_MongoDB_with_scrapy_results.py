# -----Импорт пакетов-------------------------------------------------------------


# -----Подключение----------------------------------------------------------------

# установить соединение с MongoClient

# удалить БД (каждый раз начинаем "с чистого листа")

# создать БД

# создать коллекцию

# ------Добавление------------------------------------------------------------------------------------------------------

# загрузить json полученный в результате работы scrapy

# добавить все данные из json в mongodb

# ------Запросы---------------------------------------------------------------------------------------------------------

# количество документов в коллекции

# получить имена коллекций из БД

# получить один любой документ из коллекции

# получить один документ из коллекции удовлетворяющий условию {'news_id': 529690}

# получить все документы из коллекции удовлетворяющие условию {'comments_counter': 3} + сортировка по 'news_id'

# получить все документы из коллекции удовлетворяющие условию {'author': 'avouner'}

# получить количество документов из коллекции
# поле tags которых содержит `Научно-популярное` (другие теги тоже допустимы)

# ------Обновление------------------------------------------------------------------------------------------------------

# установить в качестве `author` имя `MONGO`
# во всех документах удовлетворяющие условию {'hubs': {'$all': ['Астрономия']}}
# и получить количество обновленных

# получить количество документов из коллекции, в которых 'author' = 'MONGO'

# ------Удаление--------------------------------------------------------------------------------------------------------

# удалить все документы, у которых 'comments_counter' равен 0
# и получить количество удаленных
