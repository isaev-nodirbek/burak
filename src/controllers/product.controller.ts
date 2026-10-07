import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("Get All Products");

    res.render("products");
  } catch (err) {
    console.error("Error, Get All Products", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("Create New Product");
    res.send("DONE");
  } catch (err) {
    console.error("Error, Create New Product", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("Update Chosen Product");
  } catch (err) {
    console.error("Error, Update Chosen Product", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
