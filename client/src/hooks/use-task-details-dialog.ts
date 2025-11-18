import { create } from "zustand";
import { TaskType } from "@/types/api.type";

interface TaskDetailsDialogStore {
  isOpen: boolean;
  task: TaskType | null;
  onOpen: (task: TaskType) => void;
  onClose: () => void;
}

const useTaskDetailsDialog = create<TaskDetailsDialogStore>((set) => ({
  isOpen: false,
  task: null,
  onOpen: (task) => set({ isOpen: true, task }),
  onClose: () => set({ isOpen: false, task: null }),
}));

export default useTaskDetailsDialog;
