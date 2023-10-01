const express = require("express")
const cors = require("cors")
const app = express()

const PORT = 4000;

app.use(cors({
    origin: "http://localhost:3000"
}))

app.get("/stream", (_, res) => {
    // Content-Type: text/event-stream is a must to make this response a stream.
    res.header("Content-Type", "text/event-stream")
    res.header("Cache-Control", "no-store")
    
    setInterval(() => {
        data = {
            message: "Data Streaming!",
            timestamp: new Date().toLocaleTimeString(),
        };
        response = `event: ping\ndata: ${JSON.stringify(data)}\n\n`;
        res.write(response);
    }, 3000);
})

app.listen(PORT, () => {
    console.log(`Server started on Port #${PORT}`)
})
