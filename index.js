let express = require("express");
let app = express();
let bodyParser  = require("body-parser");
let db = require("./database");
let cors = require('cors');
const { get } = require("https");

let port=3021;

//Fotos
let avatarDirectory = '/var/www/avatar';
let path = require('path');
let multer = require('multer');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, avatarDirectory)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });



app.use(bodyParser.urlencoded({ limit:'50mb',extended: true }));
app.use(bodyParser.json({ limit:'50mb',extended: true }));
app.use(cors());
let router=express.Router();

//post methods


router.post('/user/register',db.createUser);
router.post('/user',db.getUser);
router.post('/user/avatar', db.addAvatar);
router.post('/user/friends/request',db.addFriend);
router.post('/route/add',db.createRoute);
router.post('/route/newPhoto',db.addPhotoToRoute);
router.post('/photo/add',db.takePhoto);
router.post('/route/like', db.addLike);
router.post('/route/user/like', db.getLike);
router.post('/route/likes', db.getLikes);
router.post("/user/:id_user/avatar",upload.single('avatar'),db.updateUserAvatar);

//put methods

router.put('/user/profile/update',db.updateUser);
router.put('/user/friends/update',db.updateFriend);
router.put('/route/update',db.updateRoute);
router.put('/photo/update',db.updatePhoto);

//delete methods

router.delete('/user/remove/account/:id',db.deleteUser);
router.delete('/user/:id/friend/:idFriend',db.removeFriend);
router.delete('/route/remove/:id',db.deleteRoute);
router.delete('/photo/remove/:id',db.removePhoto);
router.delete('/route/like', db.removeLike);

//get methods

router.get('/user/:username',db.getUserByUsername);
router.get('/user/friends/request/:id',db.getFriendRequests);
router.get('/route/:id',db.getRoute);
router.get('/photo/:id',db.getPhoto);
router.get('/friend/:id', db.getFriends);
router.get('/routes/:id', db.getCountRoutes);


app.use(router);
app.listen(port,()=>{
    console.log("Arrancando en el puerto " + port);
})