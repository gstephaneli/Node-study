import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares ():void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void{
      mongoose.connect('mongodb://localhost:27017/tsnode', {
        useNewUrlParser: true
      })
    }

    private routes (): void{
      this.express.get('/', (req, res) => {
        // return res.send('Hello World')
        const dir = __dirname
        return res.sendFile(dir + '/views/home.html')
      })
    }
}
export default new App().express
