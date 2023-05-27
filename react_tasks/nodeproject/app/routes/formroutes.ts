import {Router} from 'express';
import controller from '../controller';



const router=Router();
router.post('/postformdata', controller.formdatacontroller.postformdata);
router.get('/getformdata',controller.formdatacontroller.getformdata);
router.delete('/deleteformdata/:id', controller.formdatacontroller.deleteformdata);
router.put('/updateformdata/:id', controller.formdatacontroller.updateformdata);


export default router;