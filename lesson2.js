
use bookStoreDB
show dbs

db.createColleection('sites')
db.sites.insert({ websiteID:2, NAME:"GGG", link:"dddddd", code:[] })

db.createCollection('books')

db.books.insert({ name:"sara", short_desc:"bbb", img_url:"x", book_url:"cc", ISBN:"isbn", price:"5.5", categories:["a", "b", "c", "d"], websiteID:2 })
db.books.insert({ name:"noa", short_desc:"bbb", img_url:"x", book_url:"cc", ISBN:"isbn", price:"5.5", categories:["a", "b", "c", "d"], websiteID:2 })
db.books.insert({ name:"hhh", short_desc:"bbb", img_url:"x", book_url:"cc", ISBN:"isbn", price:"5.5", categories:["a", "b", "c", "d"], websiteID:2 })
db.books.insert({ name:"jjj", short_desc:"bbb", img_url:"x", book_url:"cc", ISBN:"isbn", price:"5.5", categories:["a", "b", "c", "d"], websiteID:2 })
  
show collections
db.sites.drop()
  
  