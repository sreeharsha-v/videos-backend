const express = require('express');
const https = require('https');
const cors = require('cors');
const path = require('path');
const fs = require('fs');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('videos'));
app.use(express.static('videosss'));

// app.use(express.static('shaka-player-angular'));

app.get('/',(req,res)=>{
  // res.send(path.join(__dirname,'shaka-player-angular','index.html'));
  res.send("https server running");
})

app.get('/video-10829.mpd',(req,res) => {
  
   const mpdFilePath = path.join(__dirname, 'videos', 'VID_10829_drm_meta.mpd');
   res.sendFile(mpdFilePath)
});

app.get('/video-10830.mpd', (req, res) => {
  
  const mpdFilePath = path.join(__dirname, 'videosss', 'VID_10830_drm_meta.mpd');
  res.sendFile(mpdFilePath);
});



// const httpsOptions = {
//   key: fs.readFileSync('C:/Users/user/sslcert/server.key'),   
//   cert: fs.readFileSync('C:/Users/user/sslcert/server.cert') 
// };

// const server = https.createServer(httpsOptions, app);

app.listen(port, () => {
  console.log(`Server is running on port ${port} (HTTPS)`);
});
