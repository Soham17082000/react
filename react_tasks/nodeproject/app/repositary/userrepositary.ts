import {PrismaClient} from '@prisma/client';
import { UserdataModel } from '../models/usermodel';
// import { isEmail } from 'validator';
import validator from 'validator';


const prisma=new PrismaClient();

class UserRepository{
    UserRepository: any;
  find(arg0: { email: any; }) {
    throw new Error('Method not implemented.');
  }
  

    async create(usermodel: UserdataModel) {

      if (!validator.isEmail(usermodel.email)) {
        throw new Error('Invalid email address');
      }
        let responseUser = await prisma.userdetail.create({
          data: {
        
            name:usermodel.name,
            email:usermodel.email,
            password:usermodel.password,
            mobile:usermodel.mobile,
            address:usermodel.address,
            pincode:usermodel.pincode

          }
        });
      
        return responseUser;
      }


      async findByEmail(email:string){
        return await prisma.userdetail.findFirst({where:{
            email:email,
        }})
      }


      async findMany(userId:string) {
        const users=await prisma.userdetail.findMany({
          where:{
            id:userId
              
            
          }
        });
        return users;
      }


}

export default new UserRepository();
