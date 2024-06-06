const { options } = require('../routes/root')
const allowedOrgins=require('./allowedOrgins')

const corsOptions={
    origin:(origin,callback)=>{
        if(allowedOrgins.indexOf(origin)!==-1 || !origin)
            {
                callback(null,true)
            }
            else{
                callback(new Error('Not allowed by cors'))
            }
    },
    credentials:true,
    optionsSuccessStatus:200
}

module.exports=corsOptions