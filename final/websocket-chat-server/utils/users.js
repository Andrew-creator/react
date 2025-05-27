import fs from 'fs'
import readline from 'readline'

export const addUser = async (user) => {
    let filePath = "users.db"
    let stringUser=JSON.stringify(user) + "\n"
    fs.appendFile(filePath, stringUser, (err) => {  
        if (err) {  
            console.error(err);  
        } else {
            console.log("save user " + stringUser);  
        }
    });
}

export const loadUsers = (cb) => {
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
        if (cb!=null) cb(null)
    }); 
    
    // Printing the content of file line by
    //  line to console by listening on the
    // line event which will triggered
    // whenever a new line is read from
    // the stream
    let users = new Array()
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
            }
            console.log(line);
        }
    });
}
