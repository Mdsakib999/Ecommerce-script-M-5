/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.createCategory(req);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await categoryService.getAllCategories();
    res.status(200).json({
      success: true,
      data: allCategories,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const updatedCategory = await categoryService.updateCategory(req);
    res.status(200).json({
      success: true,
      data: updatedCategory,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    await categoryService.deleteCategory(req.params.id);
    res.status(200).json({
      success: true,
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const categoryController = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
