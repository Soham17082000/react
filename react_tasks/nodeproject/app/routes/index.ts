
import express from 'express';
import formroutes from '../routes/formroutes';


const router = express.Router();
router.use(formroutes);


export default router;

