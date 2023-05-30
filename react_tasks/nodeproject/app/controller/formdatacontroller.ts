import { Request, Response } from 'express';
import { FormModel } from "../models/formmodel"
import { responseModel } from '../models/interface';
import formRepositary from '../repositary/formrepositary';
import { PrismaClient } from '@prisma/client';
// import { log } from 'console';
const prisma = new PrismaClient();

const getformdata = async (req: Request, res: Response) => {
  try {
    const users = await formRepositary.findMany();

    let response: responseModel = {
      status: 200,
      message: "data retrieved successfully",
      data: { users: users },
      error: null
    };
    console.log(users);
    res.status(200).json(response);
  } catch (e) {
    let response: responseModel = {
      status: 400,
      message: "data record not found",
      data: null,
      error: e as string
    };
    console.log("response ", response);

    res.status(400).json(response);
  }
};

const postformdata = async (req: Request, res: Response) => {
  console.log("insertttt");
  // const temp = new User(req.body);
  try {
    const user: FormModel = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category

    }
    console.log("userinsert", user);

    const userResponse = await formRepositary.create(user)
    let response: responseModel = {
      status: 201,
      message: "data saved",
      data: userResponse,
      error: null
    }
    // res.send(userResponse)
    // console.log(response)
    console.log("response userlist", response);

    console.log("userResponse ", userResponse);
    res.status(201).json(response);
  } catch (e) {
    console.log("error userlist", e)
    let response: responseModel = {
      status: 400,
      message: "data save failed",
      data: null,
      error: e as string
    }

    res.status(400).json(response);
  }
}



const deleteformdata = async (req: Request, res: Response) => {
  try {
    console.log(req.params)

    const deletedUser = await formRepositary.delete(req.params.id);

    if (deletedUser) {
      let response: responseModel = {
        status: 200,
        message: "User deleted successfully",
        data: null,
        error: null,
      };
      console.log("deleteresponse", response)
      res.status(200).json(response);
    } else {
      let response: responseModel = {
        status: 404,
        message: "User not found",
        data: null,
        error: null,
      };
      res.status(404).json(response);
    }
  } catch (e) {
    console.log("deleteerror", e)
    let response: responseModel = {
      status: 500,
      message: "Data delete failed",
      data: null,
      error: e as string,
    };
    res.status(500).json(response);
  }
};

const updateformdata = async (req: Request, res: Response) => {
  console.log(req.params)
  try {
    const updatedUser = await formRepositary.update(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,


    });

    if (!updatedUser) {
      let response: responseModel = {
        status: 404,
        message: "User not found",
        data: null,
        error: null,
      };
      res.status(404).json(response);
    } else {
      let response: responseModel = {
        status: 200,
        message: "User updated successfully",
        data: { user: updatedUser },
        error: null,
      };
      res.status(200).json(response);
    }
  } catch (e) {
    let response: responseModel = {
      status: 500,
      message: "Data update failed",
      data: null,
      error: e as string,
    };
    res.status(500).json(response);
  }
};




export default {
  postformdata,
  getformdata,
  deleteformdata,
  updateformdata,

}

