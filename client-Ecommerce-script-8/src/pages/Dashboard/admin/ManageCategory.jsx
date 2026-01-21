import { Edit, Plus, Save, Trash2, Upload, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    useAddCategoryMutation,
    useDeleteCategoryMutation,
    useGetAllCategoriesQuery,
    useUpdateCategoryMutation,
} from "../../../redux/app/services/category/categoryApi";
import confirmToast from "../../../utils/confirmToast";

export default function ManageCategory() {
  const [newCategory, setNewCategory] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [newImagePreview, setNewImagePreview] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [editingImage, setEditingImage] = useState(null);
  const [editingImagePreview, setEditingImagePreview] = useState(null);

  const { data, isLoading, isError } = useGetAllCategoriesQuery();
  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const categories = data?.data || [];

  // --- Handlers ---
  const handleImageChange = (e, isEditing = false) => {
    const file = e.target.files[0];
    if (file) {
      if (isEditing) {
        setEditingImage(file);
        setEditingImagePreview(URL.createObjectURL(file));
      } else {
        setNewImage(file);
        setNewImagePreview(URL.createObjectURL(file));
      }
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim())
      return toast.error(<h1 className="font-serif">Category name required</h1>);
    if (!newImage)
      return toast.error(<h1 className="font-serif">Image is required</h1>);

    const formData = new FormData();
    formData.append("name", newCategory.trim());
    formData.append("image", newImage);

    try {
      const result = await addCategory(formData).unwrap();
      if (result.success) {
        toast.success(<h1 className="font-serif">New category added</h1>, {
          position: "top-center",
        });
        setNewCategory("");
        setNewImage(null);
        setNewImagePreview(null);
      }
    } catch (err) {
      toast.error(
        <h1 className="font-serif">
          {err?.data?.message || "Failed to add category"}
        </h1>
      );
    }
  };

  const handleDeleteCategory = (id) => {
    confirmToast({
      message: "Do you really want to delete this category?",
      onConfirm: async () => {
        try {
          await deleteCategory(id).unwrap();
          toast.success(
            <h1 className="font-serif">Category deleted successfully</h1>
          );
        } catch (err) {
          toast.error(
            <h1 className="font-serif">
              {err?.data?.message || "Failed to delete category"}
            </h1>
          );
        }
      },
    });
  };

  const handleEditCategory = (id, name, image) => {
    setEditingId(id);
    setEditingName(name);
    setEditingImage(null);
    setEditingImagePreview(image); // Verify if image is URL
  };

  const handleSaveEdit = async (id) => {
    if (!editingName.trim()) return;

    const formData = new FormData();
    formData.append("name", editingName.trim());
    if (editingImage) {
      formData.append("image", editingImage);
    }

    try {
      await updateCategory({
        categoryId: id,
        categoryName: formData, // passing formData as the second arg
      }).unwrap();
      setEditingId(null);
      setEditingName("");
      setEditingImage(null);
      setEditingImagePreview(null);
      toast.success(<h1 className="font-serif">Category updated</h1>);
    } catch (err) {
      toast.error(
        <h1 className="font-serif">
          {err?.data?.message || "Failed to update category"}
        </h1>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Manage Categories
      </h2>

      {/* Add Category */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-start">
        <div className="flex-1 w-full space-y-3">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter new category name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-2">
            <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Upload className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, false)}
                className="hidden"
              />
            </label>
            {newImagePreview && (
              <img
                src={newImagePreview}
                alt="Preview"
                className="h-10 w-10 object-cover rounded-md border border-gray-200"
              />
            )}
          </div>
        </div>
        <button
          onClick={handleAddCategory}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors h-10 mt-1"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      {/* Category Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Created At</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-red-500">
                  Failed to load categories
                </td>
              </tr>
            ) : categories.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-400">
                  No categories found
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr
                  key={cat._id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  {/* Image */}
                  <td className="py-3 px-4">
                    {editingId === cat._id ? (
                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer p-1 bg-gray-100 rounded hover:bg-gray-200">
                          <Upload className="w-4 h-4 text-gray-500" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, true)}
                            className="hidden"
                          />
                        </label>
                        {editingImagePreview ? (
                          <img
                            src={editingImagePreview}
                            alt="Edit Preview"
                            className="w-10 h-10 object-cover rounded"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
                            No Img
                          </div>
                        )}
                      </div>
                    ) : (
                      <img
                        src={cat.image || "/placeholder.png"}
                        alt={cat.name}
                        className="w-10 h-10 object-cover rounded border border-gray-200"
                      />
                    )}
                  </td>

                  {/* Name / Edit Field */}
                  <td className="py-3 px-4">
                    {editingId === cat._id ? (
                      <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <span className="font-medium text-gray-800">
                        {cat.name}
                      </span>
                    )}
                  </td>

                  {/* Created At */}
                  <td className="py-3 px-4 text-gray-600 text-sm">
                    {cat.createdAt
                      ? new Date(cat.createdAt).toLocaleString()
                      : "—"}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-center">
                    {editingId === cat._id ? (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleSaveEdit(cat._id)}
                          className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setEditingId(null);
                            setEditingImagePreview(null);
                          }}
                          className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            handleEditCategory(cat._id, cat.name, cat.image)
                          }
                          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(cat._id)}
                          className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
