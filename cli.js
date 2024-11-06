const {exec} = require("node:child_process")
const command = `vips copy E:/C-dwn/dunes/pexels.jpg E:/C-dwn/output.bmp`
exec(command,(err,stdout,stderr)=>{
    if(err || stderr){
        throw err;
    }
    console.log(stdout)
})