

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../batch.css"

function Batch() {
  const [batches, setBatches] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBatch, setNewBatch] = useState({
    batchName: "",
    isActive: 1,
  });

  // Get all batches
  const getAllBatches = async () => {
    try {
      let res = await axios.get("http://localhost:1111/admin/all-batch");
      setBatches(res.data.data || []);
    } catch (err) {
      toast.error("Error fetching batches");
      console.error(err);
    }
  };

  // Update batch status
  const updateBatchStatus = async (batchId, status) => {
    try {
      await axios.put(`http://localhost:1111/admin/update-batch-status/${batchId}`, {
        isActive: Number(status),
      });
      toast.success("Batch status updated");
      await getAllBatches();
    } catch (err) {
      toast.error("Failed to update batch status");
      console.error(err);
    }
  };

  // Add new batch
  const handleAddBatch = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1111/admin/add-batch", newBatch);
      toast.success("Batch added successfully");
      await getAllBatches();
      setIsModalOpen(false);
      setNewBatch({ batchName: "", isActive: 1 });
    } catch (err) {
      toast.error(err?.response?.data?.error || "Failed to add batch");
      console.error(err);
    }
  };

  useEffect(() => {
    getAllBatches();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Batches</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="add-btn bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:translate-y-[-2px] transition"
        >
          + Add Batch
        </button>
      </div>

      <div className="table-wrapper bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-5 py-3 text-left font-semibold">Sr. No</th>
              <th className="px-5 py-3 text-left font-semibold">Batch Id</th>
              <th className="px-5 py-3 text-left font-semibold">Batch Name</th>
              <th className="px-5 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr
                key={batch.batch_id}
                className="hover:bg-gray-50 transition text-gray-800"
              >
                <td className="px-5 py-3 border-b">{index + 1}</td>
                <td className="px-5 py-3 border-b">{batch.batch_id}</td>
                <td className="px-5 py-3 border-b">{batch.batch_name}</td>
                <td className="px-5 py-3 border-b">
                  <select
                    onChange={(e) =>
                      updateBatchStatus(batch.batch_id, e.target.value)
                    }
                    value={batch.is_active}
                    className="px-3 py-1.5 border rounded-lg text-sm focus:ring focus:ring-indigo-400 focus:border-indigo-500 transition"
                  >
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="modal-box bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-slideDown">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Add New Batch
            </h2>
            <form onSubmit={handleAddBatch} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Batch Name
                </label>
                <input
                  type="text"
                  value={newBatch.batchName}
                  onChange={(e) =>
                    setNewBatch({ ...newBatch, batchName: e.target.value })
                  }
                  className="w-full border rounded-xl px-4 py-2.5 focus:ring focus:ring-indigo-400 focus:border-indigo-500 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Status
                </label>
                <select
                  value={newBatch.isActive}
                  onChange={(e) =>
                    setNewBatch({
                      ...newBatch,
                      isActive: Number(e.target.value),
                    })
                  }
                  className="w-full border rounded-xl px-4 py-2.5 focus:ring focus:ring-indigo-400 focus:border-indigo-500 transition"
                >
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 border rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold shadow-md hover:translate-y-[-2px] hover:shadow-lg transition"
                >
                  Add Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Batch;
