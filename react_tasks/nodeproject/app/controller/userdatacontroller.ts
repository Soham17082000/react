
import { NextFunction, Request, Response } from 'express';
import { UserdataModel } from "../models/usermodel"
import { responseModel } from '../models/interface';
import {LoginModel} from '../models/loginmodel';
import userservices from '../services/userservices';
import UserRepository from '../repositary/userrepositary'
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config()


const register = async (req: Request, res: Response) => {
  let user: UserdataModel;
  user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile:req.body.mobile,
    address:req.body.address,
    pincode:req.body.pincode

  }
  try {
    user.password = await userservices.hashPassword(user.password as string)
    let users = await UserRepository.create(user)
    user.id = users.id

    let userResponses: UserdataModel = {
        id: users.id,
        email: users.email,
        name: users.name,
        mobile: users.mobile,
        address: users.address,
        pincode: users.pincode,
        password:users.password
    }

    const token = jwt.sign(userResponses, process.env.APP_KEY as string, { expiresIn: 3600 })
    let response: responseModel = {
      status: 201,
      message: "data saved",
      data: { user: userResponses, accesstoken: token },
      error: null
    }

    res.status(201).json(response);
  }

  catch (e) {
    console.log("error", e)
    let response: responseModel = {
      status: 400,
      message: "data save failed",
      data: null,
      error: e as string
    }

    res.status(400).json(response);
  }


}


const login = async (req: Request, res: Response) => {

  let user: LoginModel;
  user = {
    email: req.body.email,
    password: req.body.password,
    id: req.body.id
  }

  try {

    console.log(user);

    const userResponse = await UserRepository.findByEmail(user.email)
    var responseModel: responseModel


    if (userResponse && !await bcrypt.compare(user.password, userResponse!.password)) {
      responseModel = {
        status: 201,
        message: "please check login details",
        data: null,
        error: null
      }
    }
    else {
      if (userResponse != null) {
        user.id = userResponse.id

        const token =  jwt.sign(user, process.env.APP_KEY as string, { expiresIn: 3600 })

        let userResponses: UserdataModel = {
          id: userResponse.id,
          name: userResponse.name,
          email: userResponse.email,
          password:userResponse.password,
          mobile:userResponse.mobile,
          address:userResponse.address,
          pincode:userResponse.pincode


        }
        responseModel = {
          status: 201,
          data: { user: userResponses, token: token },
          message: "Loggedin Successfully",
          error: null
        }
      }
      else {
        responseModel = {
          status: 201,
          data: null,
          message: "please check your login details",
          error: null
        }
      }
    }


    res.status(201).send(responseModel);

  } catch (e) {
    console.log("error", e)


    res.status(400).json(e);
  }
}


const getdata = async (req: any, res: Response) => {
  try {
    console.log("getdata", req.Id)
 

    const users = await UserRepository.UserRepository.findMany(req.Id);

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

export default {
  login,
  register,
  getdata
}


