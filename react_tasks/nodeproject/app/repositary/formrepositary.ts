import { Prisma, PrismaClient } from '@prisma/client';

import { FormModel } from '../models/formmodel';


const prisma = new PrismaClient();

class formRepositary {

    async create(usermodel: FormModel) {
        let responseUser = await prisma.formdata.create({
            data: {
                title: usermodel.title,
                description: usermodel.description,
                category: usermodel.category,
            }
        });

        return responseUser;
    }

    async findMany() {
        const users=await prisma.formdata.findMany();
        return users;
      }

      async delete(id: string) {
        const deletedUser = await prisma.formdata.delete({
          where: {id},
        });
        return deletedUser;
      }
    
      async update(id: string, usermodel: FormModel) {
        const updatedUser = await prisma.formdata.update({
          where: { id },
          data: {
            title: usermodel.title,
            description: usermodel.description,
            category:usermodel.category
          },
        });
        return updatedUser;
      }




}

export default new formRepositary;

