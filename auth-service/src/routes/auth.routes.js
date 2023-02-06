import Express from 'express'
import { authContoller } from '../controllers/authController.js'

const Router = Express.Router()

// Auth Endpoints
Router.post(`/register`, authContoller.register)


export default Router