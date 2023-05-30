
import express from 'express';
import formroutes from '../routes/formroutes';
import userroutes from '../routes/userroutes';


const router = express.Router();
router.use(formroutes);
router.use(userroutes);


export default router;

