import { Request, Response } from "express";
import { data } from "../data";

export class CompanyController {
  public getAllCompanies = (req: Request, res: Response) => {
    setTimeout(() => {
      return res.status(200).json(data);
    }, 2000);
  };
}
