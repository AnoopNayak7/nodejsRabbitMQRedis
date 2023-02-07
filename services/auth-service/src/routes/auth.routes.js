import Express from 'express'
import { authContoller } from '../interfaces/authController.js'

const Router = Express.Router()

// Auth Endpoints
Router.post(`/register`, authContoller.register);

Router.post('/login', authContoller.login)


export default Router