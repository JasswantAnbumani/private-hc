import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core/build/standalone'

const ignitor = new Ignitor(__dirname)

export default async function handler(req, res) {
  try {
    const httpServer = await ignitor.httpServer()
    httpServer.instance(req, res)
  } catch (err) {
    res.statusCode = 500
    res.end(err.message)
  }
}
