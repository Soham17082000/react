import { Router } from "express";
// import authcontroller from "../../controller/auth/authcontroller";
import usedatacontroller from "../controller/userdatacontroller"
import { userauthvalidation } from "../middleware/usermiddleware";


const router=Router();

router.post('/authroutes/register',usedatacontroller.register);
router.post('/authroutes/login',usedatacontroller.login);
router.get('/authroutes/getdata',usedatacontroller.getdata);
export default router;