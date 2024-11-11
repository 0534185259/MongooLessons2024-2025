//1
//--ייבוא קובץ של books
//2
db.books.find().pretty()
//3
db.books.find({ISBN:'1933988797'})
//4
db.books.find({nameBook:/java/},{nameBook})
//5
db.books.find({status:'PUBLISH'},{nameBook,date,_id})
//6
db.books.find({amount:{$gt:100}},{nameBook,amount,ISBN})
//7
db.books.find({nameBook:/c#/})
//8
db.books.find({nameBook:/$a/})
//9
db.books.find({amount:[10-100]},{nameBook,amount})
//10
db.books.find({nameBook:/r/})
//11
db.books.find({nameBook:/data/i},{nameBook})
//12
db.books.find({nameBook:/$e/},{_id,nameBook})
//13
db.books.sort({name:1})
//14
db.books.find().sort({name:-1})
//15
db.books.find().countDocuments({name:/^j/i})
//16
db.books.find().sort({pageCount:-1}).limit(5)
//17
db.books.find({categories: { $exists: false }})
//18
db.books.find({ shortDescription: {$exists: true}})
//19
db.books.find({ _id: {$type:"objectId"} })

