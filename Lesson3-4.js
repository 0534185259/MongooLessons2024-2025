//1
//--ייבוא קובץ של books
//2
db.books.find().pretty()
//3
db.books.find({isbn:'1933988797'})
//4
db.books.find({title:/java/},{title})
//5
db.books.find({status:'PUBLISH'},{title,date,_id})
//6
db.books.find({pageCount:{$gt:100}},{title,pageCount,isbn})
//7
db.books.find({title:/c#/})
//8
db.books.find({title:/$a/})
//9
db.books.find({pageCount:[10-100]},{title,pageCount})
//10
db.books.find({title:/r/})
//11
db.books.find({title:/data/i},{title})
//12
db.books.find({title:/$e/},{_id,title})
//13
db.books.sort({title:1})
//14
db.books.find().sort({title:-1})
//15
db.countDocuments({title:/^j/i})
//16
db.books.sort({pageCount:1}).limit(5)
//17
db.books.find({categories: { $exists: false }})
//18
db.books.find({ shortDescription: {$exists: true}})
//19
db.aaa.find({ _id: {$type:"objectId"} })




