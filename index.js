const express=require('express');
const multer=require('multer');
const app=express();
app.use(express.json());
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./upload');

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+Math.floor(Math.random()*9999999)+file.originalname)
    }
});

// const uploader=multer({storage:storage}).single('image');
// const uploaders=multer({storage}).array('images',7);
// app.post('/uploads',uploaders,(req,res)=>{
//     console.log(req.body)
//     console.log(req.file)
//     res.status(200).json({message:"sucess"});
// }
// const uploader = multer({ storage: storage }).array('images', 7); // 'images' is the field name
const uploader = multer({ storage }).fields([
    { name: 'image', maxCount: 1},
    { name: 'images', maxCount: 10 }
]);


app.post('/uploads', uploader, (req, res) => {
    console.log('Request Files:', req.files);
    console.log('Request Body:', req.body);
    res.status(200).json({message:"sucess"})
})



app.listen(4000,()=>{
    console.log('server is running 3800')
});
