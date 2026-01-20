/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "express";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import Category from "./category.model";

// Assuming ICategory is exported from model file or we might need to adjust import if it's separate.
// In the previous step I saw it in category.model.ts.
// Let's import it from there.

const createCategory = async (req: Request) => {
  const file = req.file;
  let imageUrl = "";

  if (file) {
    const uploadResult = await uploadToCloudinary(file.buffer, "categories");
    imageUrl = uploadResult.url;
  }

  const categoryData = {
    ...req.body,
    image: imageUrl,
  };

  const existing = await Category.findOne({
    name: { $regex: `^${categoryData.name}$`, $options: "i" },
  }).lean();

  if (existing) {
    throw new Error("Category with this name already exists.");
  }

  const result = await Category.create(categoryData);
  return result;
};

const getAllCategories = async () => {
  return await Category.find().lean().sort("-createdAt");
};

const updateCategory = async (req: Request) => {
  const { id } = req.params;
  const file = req.file;
  let imageUrl = "";

  if (file) {
    const uploadResult = await uploadToCloudinary(file.buffer, "categories");
    imageUrl = uploadResult.url;
  }

  const updateData = { ...req.body };
  if (imageUrl) {
    updateData.image = imageUrl;
  }

  const result = await Category.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new Error("Category not found");
  }

  return result;
};

const deleteCategory = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Category not found");
  }
  return result;
};

export const categoryService = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
