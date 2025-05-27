const fs = require('fs')
const readline = require('readline')

let users = new Array();
let maxID = 1

exports.addUser = async (user) => {
    let filePath = "users.db"
    user.id = maxID
    maxID++
    let stringUser=JSON.stringify(user) + "\n"
    fs.appendFile(filePath, stringUser, (err) => {  
        if (err) {  
            console.error(err);  
        } else {
            console.log("save user " + stringUser);  
        }
    });
}

exports.loadUsers = (cb) => {
    let filePath = "users.db"
    let inputStream = fs.createReadStream(filePath)

    // Creating a readable stream from file
    // readline module reads line by line 
    // but from a readable stream only.
    const file = readline.createInterface({
        input: inputStream,
        output: null,
        terminal: false
    });

    file.on('error', (error) => {  
        console.error(`Упс! Произошла ошибка: ${error}`);  
        users = null
        if (cb!=null) cb(null)
    }); 
    
    // Printing the content of file line by
    //  line to console by listening on the
    // line event which will triggered
    // whenever a new line is read from
    // the stream
    users = new Array()
    let ended = false;
    inputStream.on('end', () => { 
        ended = true
        console.log("users get end file") 
        if (users != null) users=users.reverse()
        if (cb!=null) cb(users)
    });
    file.on('line', (line) => {
        if (!ended) {
            let user = JSON.parse(line)
            if (user != null) {
                users.push(user)
                if (user.id>=maxID) maxID=user.id+1
            }
            console.log(line);
        }
    });
}

exports.findUserByName = (name) => {
    let user = null
    if (Array.isArray(users)) {
        user=users.find(
            user => user.name == name
        );
    }
    return user
}

exports.findUserByNic = (nic) => {
    let user = null
    if (Array.isArray(users)) {
        user=users.find(
            user => user.nic == nic
        );
    }
    return user
}

exports.findUserByEmail = (email) => {
    let user = null
    if (Array.isArray(users)) {
        user=users.find(
            user => user.email == email
        );
    }
    return user
}

exports.findUserByID = (id) => {
    let user = null
    if (Array.isArray(users)) {
        user=users.find(
            user => user.id == id
        );
    }
    return user
}