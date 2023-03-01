// Имеется массив
//
// Создать функцию searchTransactions которая принимает первым параметром массив
// Вторым параметром объект
//
// Обьект вида
// {
//     sortBy -  название поля по которому будет происходить сортировка [ в качестве поля для сортировки могут использоваться поля из основного обекта
//     без вложенности ]
//               сортировка должна происходить только по числовому полю, если значение поля не является числом или нельзя привести
//               к числу, сортировку не проводить
//     sortDir - asc|desc по умолчанию asc направление сортировки
//     searchText - поле в котором может быть текст по которому надо найти элементы в которых есть сплит элемент категория которого содержит
//     startDate - начальная дата для поиска
//     endDate -  конечная дата для поиска

// }
//
// Функция должна возвращать массив объектов удовлетворяющих условиям объекта который описан выше, все поля в объекте
// опциональны если нет ни каих полей в объекте надо просто вернуть не измененный массив
// Условия для фильтрации работают по принципу или
//
//
// Создать функцию getTotal
// Которая принимает параметры аналогично функции searchTransactions
// Только в результате функция должа возвращать сумму всех сплитов расчитаных по полю absAmount
const a = [
  {
    "teams": ["5fd8977aec290cace76dc08d"],
    "sortPreParser": '5',
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Чай/Печенье/Вода",
      "absAmount": -334,
      "amount": 334,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "_id": "6332d7dbb7c876fb9a1ba62f",
      "month": 9,
      "year": 2022,
      "comment": "сладкое",
      "accountName": "Даша",
      "type": "COST",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-10-29T11:00:43.247Z",
      "updatedAt": "2022-09-27T11:00:43.247Z",
      "transactionDate": "2022-09-27T11:00:43.247Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 334,
    "categories": ["Чай/Печенье/Вода"],
    "_id": "6332d7dbb7c876fb9a1ba630",
    "type": "COST",
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "comments": [],
    "createdAt": "2022-09-26T11:00:43.252Z",
    "updatedAt": "2022-09-27T11:00:43.252Z",
    "__v": 0
  }, {
    "sortPreParser": '10',
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Чай/Печенье/Вода",
      "absAmount": -213,
      "amount": 213,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "_id": "6332d7b5b7c876fb9a1ba62c",
      "month": 9,
      "year": 2022,
      "comment": "яблоки",
      "accountName": "Даша",
      "type": "COST",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T11:00:05.500Z",
      "updatedAt": "2022-09-27T11:00:05.500Z",
      "transactionDate": "2022-09-27T11:00:05.500Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 213,
    "categories": ["Чай/Печенье/Вода"],
    "_id": "6332d7b5b7c876fb9a1ba62d",
    "type": "COST",
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "comments": [],
    "createdAt": "2022-09-27T11:00:05.507Z",
    "updatedAt": "2022-09-27T11:00:05.507Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Разное",
      "absAmount": -100,
      "amount": 100,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "_id": "6332d734b7c876fb9a1ba629",
      "month": 9,
      "year": 2022,
      "comment": "оплата симкарта мтс (чтобы не сгорела)",
      "accountName": "Даша",
      "type": "COST",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-28T10:57:56.327Z",
      "updatedAt": "2022-09-27T10:57:56.327Z",
      "transactionDate": "2022-09-27T10:57:56.327Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 100,
    "categories": ["Разное"],
    "_id": "6332d734b7c876fb9a1ba62a",
    "type": "COST",
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "comments": [],
    "createdAt": "2022-09-27T10:57:56.332Z",
    "updatedAt": "2022-09-27T10:57:56.332Z",
    "__v": 0
  }, {
    "sortPreParser": 2,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Чай/Печенье/Вода",
      "absAmount": -683,
      "amount": 683,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "_id": "6332d708b7c876fb9a1ba625",
      "month": 9,
      "year": 2022,
      "comment": "влкадыши А4, а5, разделители",
      "accountName": "Даша",
      "type": "COST",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-25T10:57:12.773Z",
      "updatedAt": "2022-09-27T10:57:12.773Z",
      "transactionDate": "2022-09-27T10:57:12.774Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 683,
    "categories": ["Чай/Печенье/Вода"],
    "_id": "6332d708b7c876fb9a1ba626",
    "type": "COST",
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "comments": [],
    "createdAt": "2022-09-27T10:57:12.778Z",
    "updatedAt": "2022-09-27T10:57:12.778Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -10000,
      "amount": 10000,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "аренда дома",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:55:27.489Z",
      "updatedAt": "2022-09-27T10:55:27.489Z",
      "transactionDate": "2022-09-27T10:55:27.489Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 10000,
    "categories": ["Корпоративы"],
    "_id": "6332d69fb7c876fb9a1ba61d",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:55:27.494Z",
    "updatedAt": "2022-09-27T10:55:27.494Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -160,
      "amount": 160,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "печать меню",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:55:13.283Z",
      "updatedAt": "2022-09-27T10:55:13.283Z",
      "transactionDate": "2022-09-27T10:55:13.283Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 160,
    "categories": ["Корпоративы"],
    "_id": "6332d691b7c876fb9a1ba61a",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:55:13.288Z",
    "updatedAt": "2022-09-27T10:55:13.288Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -658,
      "amount": 658,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "колбаса",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:54:48.300Z",
      "updatedAt": "2022-09-27T10:54:48.300Z",
      "transactionDate": "2022-09-27T10:54:48.300Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 658,
    "categories": ["Корпоративы"],
    "_id": "6332d678b7c876fb9a1ba615",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:54:48.304Z",
    "updatedAt": "2022-09-27T10:54:48.304Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Чай/Печенье/Вода",
      "absAmount": -510,
      "amount": 510,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "вода",
      "teamName": " Pavel Petrash Mkp",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:54:13.071Z",
      "updatedAt": "2022-09-27T10:54:13.071Z",
      "transactionDate": "2022-09-27T10:54:13.071Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 510,
    "categories": ["Чай/Печенье/Вода"],
    "_id": "6332d655b7c876fb9a1ba612",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:54:13.077Z",
    "updatedAt": "2022-09-27T10:54:13.077Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -355,
      "amount": 355,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "такси (сдача дома, кальяна) ",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:53:50.169Z",
      "updatedAt": "2022-09-27T10:53:50.169Z",
      "transactionDate": "2022-09-27T10:53:50.169Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 355,
    "categories": ["Корпоративы"],
    "_id": "6332d63eb7c876fb9a1ba60e",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:53:50.174Z",
    "updatedAt": "2022-09-27T10:53:50.174Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -5000,
      "amount": 5000,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "бармены",
      "teamName": " Pavel Petrash Mkp",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:53:19.864Z",
      "updatedAt": "2022-09-27T10:53:19.864Z",
      "transactionDate": "2022-09-27T10:53:19.864Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 5000,
    "categories": ["Корпоративы"],
    "_id": "6332d61fb7c876fb9a1ba60b",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:53:19.868Z",
    "updatedAt": "2022-09-27T10:53:19.868Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -1468,
      "amount": 1468,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "соки (дополнительно) ",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:53:00.707Z",
      "updatedAt": "2022-09-27T10:53:00.707Z",
      "transactionDate": "2022-09-27T10:53:00.708Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 1468,
    "categories": ["Корпоративы"],
    "_id": "6332d60cb7c876fb9a1ba608",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:53:00.713Z",
    "updatedAt": "2022-09-27T10:53:00.713Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -713,
      "amount": 713,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "призы",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:52:04.064Z",
      "updatedAt": "2022-09-27T10:52:04.064Z",
      "transactionDate": "2022-09-27T10:52:04.064Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 713,
    "categories": ["Корпоративы"],
    "_id": "6332d5d4b7c876fb9a1ba605",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:52:04.068Z",
    "updatedAt": "2022-09-27T10:52:04.068Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -778,
      "amount": 778,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "лёд",
      "teamName": " Pavel Petrash Mkp",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:51:49.380Z",
      "updatedAt": "2022-09-27T10:51:49.380Z",
      "transactionDate": "2022-09-27T10:51:49.380Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 778,
    "categories": ["Корпоративы"],
    "_id": "6332d5c5b7c876fb9a1ba602",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:51:49.385Z",
    "updatedAt": "2022-09-27T10:51:49.385Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -420,
      "amount": 420,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "стаканчики упаковка 400 мл",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:51:21.872Z",
      "updatedAt": "2022-09-27T10:51:21.872Z",
      "transactionDate": "2022-09-27T10:51:21.872Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 420,
    "categories": ["Корпоративы"],
    "_id": "6332d5a9b7c876fb9a1ba5ff",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:51:21.876Z",
    "updatedAt": "2022-09-27T10:51:21.876Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -2305,
      "amount": 2305,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "салаты, картошка",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:50:56.098Z",
      "updatedAt": "2022-09-27T10:50:56.098Z",
      "transactionDate": "2022-09-27T10:50:56.098Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 2305,
    "categories": ["Корпоративы"],
    "_id": "6332d590b7c876fb9a1ba5fc",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:50:56.105Z",
    "updatedAt": "2022-09-27T10:50:56.105Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -360,
      "amount": 360,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "помидоры, зелень",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:50:37.338Z",
      "updatedAt": "2022-09-27T10:50:37.338Z",
      "transactionDate": "2022-09-27T10:50:37.338Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 360,
    "categories": ["Корпоративы"],
    "_id": "6332d57db7c876fb9a1ba5f9",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:50:37.344Z",
    "updatedAt": "2022-09-27T10:50:37.344Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -800,
      "amount": 800,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "мята, лаймы",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:38:15.276Z",
      "updatedAt": "2022-09-27T10:38:15.276Z",
      "transactionDate": "2022-09-27T10:38:15.276Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 800,
    "categories": ["Корпоративы"],
    "_id": "6332d297b7c876fb9a1ba5f6",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:38:15.286Z",
    "updatedAt": "2022-09-27T10:38:15.286Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -400,
      "amount": 400,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "носки, значок ",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:37:23.331Z",
      "updatedAt": "2022-09-27T10:37:23.331Z",
      "transactionDate": "2022-09-27T10:37:23.331Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 400,
    "categories": ["Корпоративы"],
    "_id": "6332d263b7c876fb9a1ba5f3",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:37:23.338Z",
    "updatedAt": "2022-09-27T10:37:23.338Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -6550,
      "amount": 6550,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "month": 9,
      "year": 2022,
      "type": "COST",
      "comment": "шашлык",
      "accountName": "Даша",
      "executedBy": "632c1f00b7c876fb9a1b9ab1",
      "comments": [],
      "createdAt": "2022-09-27T10:35:49.454Z",
      "updatedAt": "2022-09-27T10:35:49.454Z",
      "transactionDate": "2022-09-27T10:35:49.455Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 6550,
    "categories": ["Корпоративы"],
    "_id": "6332d205b7c876fb9a1ba5e1",
    "type": "COST",
    "comments": [],
    "executedAt": "2022-08",
    "accountName": "Даша",
    "executedBy": "632c1f00b7c876fb9a1b9ab1",
    "createdAt": "2022-09-27T10:35:49.466Z",
    "updatedAt": "2022-09-27T10:35:49.466Z",
    "__v": 0
  }, {
    "sortPreParser": 0,
    "accounts": [],
    "isPlanned": false,
    "split": [{
      "category": "Корпоративы",
      "absAmount": -643,
      "amount": 643,
      "amountStr": 0,
      "isPlanned": false,
      "updateLog": [],
      "history": [],
      "_id": "6331cbffb7c876fb9a1ba47f",
      "comment": "Такси ",
      "month": 9,
      "year": 2022,
      "accountName": "HR Лилиана",
      "type": "COST",
      "executedBy": "603617a57a0d822b5f2a8e2e",
      "comments": [],
      "createdAt": "2022-09-26T15:57:51.287Z",
      "updatedAt": "2022-09-26T15:57:51.287Z",
      "transactionDate": "2022-09-26T15:57:51.287Z",
      "__v": 0
    }],
    "updateLog": [],
    "rules": [],
    "amount": 643,
    "categories": ["Корпоративы"],
    "_id": "6331cbffb7c876fb9a1ba480",
    "type": "COST",
    "executedAt": "2022-08",
    "accountName": "HR Лилиана",
    "executedBy": "603617a57a0d822b5f2a8e2e",
    "comments": [],
    "createdAt": "2022-09-26T15:57:51.295Z",
    "updatedAt": "2022-09-26T15:57:51.295Z",
    "__v": 0
  }];

const searchObj = {
  sortBy: "sortPreParser",
  sortDir: "asc",
  searchText: "сладкое",
  startDate: "2022-09-05",
  endDate: "2023-01-01"
}

// const funct = (arr,obj)=> {
//   let array = [];
//   array = arr.filter(item => item.split.filter(item => item.category.includes(obj.searchText)).length)
//   array = array.filter(item => Date.parse(item.createdAt) >= Date.parse(obj.startDate) && Date.parse(item.createdAt) <= Date.parse(obj.endDate))
//   let sortYesOrNo = array.filter(item => (typeof item[obj.sortBy]) !== "number" ? isNaN(item[obj.sortBy]) : false)
//   if(sortYesOrNo.length===0 && obj.sortBy) {
//     array.sort(obj.sortDir === "asc" ? (a,b) => a[obj.sortBy] - b[obj.sortBy]:  b[obj.sortBy] - a[obj.sortBy])
//   }
//   return array
// }
// console.log(funct(a,searchObj))
// const getTotal = (arr,obj) => funct(arr,obj).reduce((acum,current) => acum + Number(current.split.map(item => (item.absAmount))),0)
// console.log(getTotal(a,searchObj))



// const searchTransactions = (arr, obj) => {
//   let array=[];
//   //search text
//   array = arr.filter(item => item.split.filter(item => item.category.includes(obj.searchText)).length)
//   //Date
//   array = array.filter(item=>Date.parse(item.createdAt)>=Date.parse(obj.startDate) && Date.parse(item.createdAt)<=Date.parse(obj.endDate))
//   //Sort
//   let sortYesOrNo = array.filter(item => typeof item[obj.sortBy] !== "number" ? isNaN(item[obj.sortBy]) : false )
//   array.sort((a,b) => (sortYesOrNo.length === 0) ? obj.sortDir === "asc" ? a[obj.sortBy] - b[obj.sortBy] : b[obj.sortBy] - a[obj.sortBy] : false)
//   return array
// }
// console.log(searchTransactions(a,searchObj))
//
// // const getTotal = (arr,obj) => searchTransactions(arr,obj).reduce((acum, current) => acum + Number(current.split.map(item => item.absAmount)),0)
// // console.log(getTotal(a,searchObj))
// const getTotal = (arr,obj) => searchTransactions(arr,obj).reduce((acum,current) => acum + Number(current.split.map(item => item.absAmount)),0)
// console.log(getTotal(a,searchObj))

const searchTransactions = (arr, obj) => {
  let array=[];
  //search text
  array = arr.map(item=> item.split.filter(item => item.comment.includes(obj.searchText)))
  console.log(arr.map(item=> item.split.filter(item => item.comment.includes(obj.searchText))).filter(item => item.length).filter(item=>item.flat( )))
  //date
  array = array.filter(item => Date.parse(item.createdAt) >= Date.parse(obj.startDate) && Date.parse(item.createdAt) <= Date.parse(obj.endDate))
  //sort
  let sortYesOrNo = array.filter(item => typeof item[obj.sortBy] !== "number" ? isNaN(item[obj.sortBy]): false)
  array.sort((a, b) => Date.parse(b.split.map(item=> item.createdAt)) - Date.parse(a.split.map(item=>item.createdAt)))
  return array
}
console.log(searchTransactions(a,searchObj))
const getTotal = (arr,obj) => {
  return searchTransactions(arr,obj).reduce((acum,current) => {
    return acum + Number(current.split.map(item => item.absAmount))
  },0)
}
console.log(getTotal(a,searchObj))
