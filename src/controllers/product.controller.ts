import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import ProductService from "../models/Product.service";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductCollection } from "../libs/enums/product.enum";

const productService = new ProductService();

const productController: T = {};

/** SPA */
productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProducts");

    const { page, limit, order, productCollection, search } = req.query;
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    if (productCollection) {
      inquiry.productCollection = productCollection as ProductCollection;
    }
    if (search) inquiry.search = String(search);

    const result = await productService.getProducts(inquiry);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.error("Error, getProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct");

    const { id } = req.params;
    console.log("====================================");
    console.log(req.member);
    console.log("====================================");
    const memeberId = req.member?._id ?? null;
    // @ts-ignore
    const result = await productService.getProduct(memeberId, id as string);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("ERROR, getProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

/** SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("Get All Products");
    const data = await productService.getAllProducts();
    res.render("products", { products: data });
  } catch (err) {
    console.error("Error, Get All Products", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("Create New Product");
    console.log("req.files:", req.files);

    if (!req.files?.length)
      // length will always be higher than 0
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });

    await productService.createNewProduct(data);

    res.send(
      `<script>alert("Sucessful creation!"); window.location.replace('all')</script>`,
    );
  } catch (err) {
    console.error("Error, createNewProduct", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('all')</script>`,
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("Update Chosen Product");
    const id = req.params.id;

    const result = await productService.updateChosenProduct(id, req.body);

    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.error("Error, Update Chosen Product", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
