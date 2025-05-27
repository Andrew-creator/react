import fs from 'fs'
import readline from 'readline'

export const addRoom = async (room) => {
    let filePath = "rooms.db"
    let stringRoom=JSON.stringify(room) + "\n"
    fs.appendFile(filePath, stringRoom, (err) => {  
        if (err) {  
            console.error(err);  
        } else {
            console.log("save room " + stringRoom);  
        }
    });
}

export const loadRooms = (cb) => {
    let filePath = "rooms.db"
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
    let rooms = new Array()
    let ended = false;
    inputStream.on('end', () => { 
        ended = true
        console.log("rooms get end file") 
        if (rooms != null) rooms=rooms.reverse()
        if (cb!=null) cb(rooms)
    });
    file.on('line', (line) => {
        if (!ended) {
            let room = JSON.parse(line)
            if (room != null) {
                rooms.push(room)
            }
            console.log(line);
        }
    });
}
