import fs from 'fs'
import readline from 'readline'

export const addMessageToRoom = async (roomID, message) => {
    let filePath = "messages" + roomID + ".log"
    let stringMessage=JSON.stringify(message) + "\n"
    fs.appendFile(filePath, stringMessage, (err) => {  
        if (err) {  
            console.error(err);  
        } else {
            console.log("save message " + stringMessage);  
        }
    });
}

export const loadRoomMessages = (roomID, cb) => {
    let filePath = "messages" + roomID + ".log"

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
    let messages = new Array()
    let ended = false;
    inputStream.on('end', () => { ended = true });
    file.on('line', (line) => {
        if (ended) {
            messages=messages.reverse()
            if (cb!=null) cb(messages)
        }
        let message = JSON.parse(line)
        if (message != null) {
            messages.push(message)
        }
        console.log(line);
    });
}
