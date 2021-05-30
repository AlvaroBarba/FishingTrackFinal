let bcrypt = require('bcrypt');
let db = require('mysql');
let pool = new db.createPool({
    host: 'localhost',
    user: 'alvaro',
    password: 'poetalucano31',
    port: 3306,
    database: 'FishingTrack'
});

let path = '/var/www/avatar/';
let fullurl = 'https://fishingtrack.duckdns.org:3022/';
let salt = 10;
let fs = require('fs');

let photoUrl = "https://fishingtrack.duckdns.org:3022/avatar/";

//Functions for user

const createUser = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("FORBBIDEN");
        return;
    }

    let username = request.body.username;
    let password = request.body.password;

    if (username && password) {
        bcrypt.hash(password, salt).then((hash) => {
            let query = `INSERT INTO users (username, password) VALUES ('${username}','${hash}')`;
            pool.query(query, (error, result) => {
                if (error) {
                    console.log(error);
                    response.status(200).json({
                        status: '-1',
                        result: 'error ocurried'
                    });
                } else {
                    response.status(200).json({
                        status: '0',
                        result: result.insertId
                    });
                }
            });
        }).catch((err) => {
            response.status(200).json('Error hashing');
            console.log(err);
        });
    } else {
        response.status(200).json('Fields are empty');
    }
}

const updateUser = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let password = request.body.password;
    let username = request.body.username;
    if (password && username) {
        bcrypt.hash(password, salt).then((hash) => {
            let query = `UPDATE users set password='${hash}' WHERE username='${username}`;
            pool.query(query, (error, result) => {
                if (error) {
                    console.log(error);
                    response.status(200).json({
                        status: '-1',
                        result: 'error ocurried'
                    });
                } else {
                    response.status(200).json({
                        status: '0',
                        result: 'Successful'
                    });
                }
            });
        }).catch((err) => {
            response.status(200).json('Error hashing');
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}

const addAvatar = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("forbidden");;
        return;
    }


    let id_user = request.params.id_user;
    let file = request.file;
    let q, aux;
    if (file && file != '' && id_user) {
        q = `SELECT users.avatar FROM users WHERE users.id = '${id_user}'`
        db.pool.query(q, (error, result) => {
            if (error) {

            } else {
                if (result && result[0].avatar != '' && result[0].avatar != null) {
                    let url = result[0].avatar;
                    let ext = url.split("/").pop();
                    let full = path + ext;
                    console.log(full)
                    fs.unlink(full, (err) => {
                        if (err) {
                            console.log(err)
                        }
                    });
                }
            }
        });

        aux = fullurl + file.filename
        q = `UPDATE users SET avatar = '${file.filename}' WHERE id = '${id_user}' `;
        console.log(q);
        db.pool.query(q, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: "3",
                    result: "error ocurried"
                });
            } else {
                if (result.affectedRows > 0) {
                    response.status(200).json({
                        status: "1",
                        result: aux
                    });
                } else {
                    response.status(200).json({
                        status: "2",
                        result: "avatar doesn't updated"
                    });
                }
            }
        })
    } else {
        response.status(200).json({
            status: "4",
            result: "empty params"
        });
    }
}

const deleteUser = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id = request.params.id;
    if (id) {
        let query = `DELETE FROM users WHERE id='${id}'`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}

const getUser = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
	return;
    }

    let username = request.body.username;
    let password = request.body.password;

    if (username && password) {
        let q = `SELECT users.username, users.id, users.password ,CONCAT('${photoUrl}',users.avatar) as avatar FROM users WHERE username = '${username}'`;
        pool.query(q, (error, result) => {
            if (error) {
                response.status(200).json({
                    status: "-1",
                    result: error
                });
            } else {
                if (result && result != '') {
                    bcrypt.compare(password, result[0].password).then((result2) => {
                        if (result2) {
                            response.status(200).json({
                                status: "0",
                                result: result[0]
                            });
                        } else {
                            response.status(200).json({
                                status: "-1",
                                result: "Password doesn't match"
                            });
                        }
                    }).catch((err) => {
                        response.status(200).json({
                            status: "-1",
                            result: "Error ocurried"
                        });
                    });
                } else {
                    response.status(200).json({
                        status: "-1",
                        result: "User doesn't exist"
                    });
                }
            }
        });
    } else {
        response.status(200).json("Empty fields");
    }
}

const getUserByUsername = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }else{

        let username = request.params.username;
        if (username) {
            let query = `SELECT users.username, users.id, CONCAT('${photoUrl}',users.avatar) as avatar FROM users WHERE username LIKE '%${username}%'`
            pool.query(query, (error, result) => {
                if (error) {
                    console.log(error);
                    response.status(200).json({
                        status: '-1',
                        result: 'Error ocurried'
                    });
                } else {
                    response.status(200).json({
                        status: '0',
                        result: result
                    });
                }
            });
        } else {
            response.status(200).json('Empty fields');
        }
    }
}

const addFriend = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let idUser1 = request.body.idUser1;
    let idUser2 = request.body.idUser2;
    let friendStatus = request.body.friendStatus;

    if (idUser1 && idUser2 && friendStatus) {
        let query = `INSERT INTO friends (id_user, id_user2, status) VALUES ('${idUser1}', '${idUser2}', '${friendStatus}')`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result.insertId
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}

const updateFriend = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let friendStatus = request.body.friendStatus;
    let id = request.body.id;
    let id2 = request.body.id2;

    if (friendStatus && id && id2) {
        let query = `UPDATE friends set status='${friendStatus}' WHERE id_user='${id}' AND id_user2='${id2}'`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}

const removeFriend = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let idUser1 = request.params.id;
    let idUser2 = request.params.idFriend;

    if (idUser1 && idUser2) {
        let query = `DELETE FROM friends WHERE id_user='${idUser1}' AND id_user2='${idUser2}' 
                     OR id_user='${idUser2}' AND id_user2='${idUser1}'`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}
const getFriends = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id = request.params.id;

    if (id) {
        let query = `SELECT users.id, users.username, CONCAT('${photoUrl}',users.avatar) as avatar FROM users WHERE users.id IN (
            SELECT id_user FROM friends WHERE id_user2 = '${id}' AND status = 2
            UNION SELECT id_user2 FROM friends WHERE id_user = '${id}' AND status = 2)`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}

const getFriendRequests = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id = request.params.id;

    if (id) {
        let query = `SELECT users.id, users.username, CONCAT('${photoUrl}',users.avatar) as avatar FROM users where users.id IN (SELECT friends.id_user FROM friends WHERE id_user2='${id}' AND status=1)`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}

//Functions for route

const createRoute = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let idUser = request.body.idUser;
    let title = request.body.title;
    let coordinates = request.body.coordinates;
    let level = request.body.level;

    if (idUser && title && coordinates && level) {
        let query = `INSERT INTO route (id_user, title, coordinates, water_level) VALUES ('${idUser}','${title}', ST_GeomFromGeoJSON('${coordinates}'), '${level}')`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result.insertId
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty');
    }
}

const updateRoute = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let title = request.body.title;
    let id = request.body.id;
    let level = request.body.level;

    if (title && id && level) {
        let query = `UPDATE route set title='${title}', water_level='${level}' WHERE id='${id}'`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}

const deleteRoute = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id = request.params.id;

    if (id) {
        let query = `DELETE FROM route WHERE id='${id}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}

const getRoute = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
        return;
    }

    let id = request.params.id;

    if (id) {
        let query = `SELECT route.id, route.title, ST_AsGeoJSON(route.coordinates) as coordinates, water_level as level FROM route WHERE id_user='${id}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}


const getCountRoutes = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
        return;
    }

    let id = request.params.id;

    if (id) {
        let query = `SELECT count(*) as rutas FROM route WHERE route.id_user = '${id}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}

const addPhotoToRoute = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let idRoute = request.body.idRoute;
    let idPhoto = request.body.idPhoto;

    if (idRoute && idPhoto) {
        let query = `INSERT INTO photo_route (id_route, id_photo) VALUES ('${idRoute}','${idPhoto}')`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result.insertId
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty');
    }
}

//Functions for photo

const takePhoto = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let idUser = request.body.idUser;
    let url = request.body.url;
    let title = request.body.title;
    let description = request.body.description;

    if (likes == undefined || description == undefined) {
        if (likes == undefined) {
            likes = 0;
        }
        if (description == undefined) {
            description = "";
        }
    }
    if (idUser && url && title) {
        let query = `INSERT INTO photo (id_user, image, title, description) VALUES ('${idUser}','${url}',
                        '${title}', '${description}' )`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result.insertId
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty');
    }
}

const updatePhoto = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }


    let title = request.body.title;
    let description = request.body.description;
    let id = request.body.id;

    if (title && id && url && likes && description) {
        let query = `UPDATE photo set title='${title}', description='${description}'
          WHERE id='${id}`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}
const removePhoto = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id = request.params.id;

    if (id) {
        let query = `DELETE FROM photo WHERE id='${id}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}
const getPhoto = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id = request.body.id;

    if (id) {
        let query = `SELECT * FROM photo WHERE id='${id}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}

//Functions for Likes

const getLikes = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id_route = request.body.id_route;

    if (id_route) {
        let query = `SELECT COUNT(*) as likes FROM likes WHERE id_route='${id_route}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}

const getLike = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id_route = request.body.id_route;
    let id_user = request.body.id_user;

    if (id_route && id_user) {
        let query = `SELECT COUNT(*) FROM likes WHERE id_route='${id_route}' AND id_user='${id_user}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'Error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result
                });
            }
        });
    } else {
        response.status(200).json('Empty fields');
    }
}

const addLike = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id_route = request.body.id_route;
    let id_user = request.body.id_user;

    if (id_route && id_user) {
        let query = `INSERT INTO likes (id_route, id_user) VALUES ('${id_route}','${id_user}')`;
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: result.insertId
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty');
    }
}

const removeLike = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("Forbidden");
    }

    let id_route = request.body.id_route;
    let id_user = request.body.id_user;

    if (id_route && id_user) {
        let query = `DELETE FROM likes WHERE id_route='${id_route}' AND id_user='${id_user}'`
        pool.query(query, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: '-1',
                    result: 'error ocurried'
                });
            } else {
                response.status(200).json({
                    status: '0',
                    result: 'Successful'
                });
            }
        });
    } else {
        response.status(200).json('Fields are empty')
    }
}


const updateUserAvatar = (request, response) => {
    let apiKey = request.headers.apikey;
    if (!watchDog(apiKey)) {
        response.status(403).json("forbidden");;
        return;
    }


    let id_user = request.params.id_user;
    let file = request.file;
    let q, aux;
    if (file && file != '' && id_user) {
    // Si tiene avatar despues borramos la foto anterior del disco
        q = `SELECT users.avatar FROM users WHERE users.id = '${id_user}'`
        pool.query(q, (error, result) => {
            if (error) {

            } else {
                if (result && result[0].avatar != '' && result[0].avatar != null) {
                    let url = result[0].avatar;
                    let ext = url.split("/").pop();
                    let full = path + ext;
                    console.log(full)
                    
                    //Borrar la foto del disco duro
                    fs.unlink(full, (err) => {
                        if (err) {
                            console.log(err)
                        }
                    });
                }
            }
        });

        aux = photoUrl + file.filename
        q = `UPDATE users SET avatar = '${file.filename}' WHERE id = '${id_user}' `;
        console.log(q);
        pool.query(q, (error, result) => {
            if (error) {
                console.log(error);
                response.status(200).json({
                    status: "3",
                    result: "error ocurried"
                });
            } else {
                if (result.affectedRows > 0) {
                    response.status(200).json({
                        status: "1",
                        result: aux
                    });
                } else {
                    response.status(200).json({
                        status: "2",
                        result: "avatar doesn't updated"
                    });
                }
            }
        })
    } else {
        response.status(200).json({
            status: "4",
            result: "empty params"
        });
    }

}

const watchDog = (apiKey) => {
    if (apiKey != "HS$TF{nasiRYDk@#") {
        return false
    } else {
        return true;
    }
}

module.exports = {
    createUser, updateUser, deleteUser,
    getUserByUsername, addFriend, updateFriend,
    removeFriend, getFriends, getFriendRequests,
    createRoute, updateRoute, deleteRoute,
    addPhotoToRoute, takePhoto, updatePhoto,
    removePhoto, getPhoto, getRoute, getUser,
    getLikes, addLike, removeLike, addAvatar,
    getCountRoutes, getLike, updateUserAvatar
}