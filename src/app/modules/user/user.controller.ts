import { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  //   console.log(req.file, req.body);
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent
};
