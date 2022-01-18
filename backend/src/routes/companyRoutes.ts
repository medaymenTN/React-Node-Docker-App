
import { Router } from "express";
import { CompanyController } from "../controllers/companyController";

const companyRouter: Router = Router();
const companyController: CompanyController = new CompanyController();

companyRouter.get('/companies',companyController.getAllCompanies);

export default companyRouter;