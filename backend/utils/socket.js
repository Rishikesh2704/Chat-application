import express from 'express'
import http from 'http'
import io from 'socket.io'
import { Server } from 'socket.io'

const app = express();
const server = http.createServer(app)
const io =  new Server(server)
const PORT = 3000

export {io, app, server}