import { useAuthContext } from "@/context/auth-provider";
import { Permissions } from "@/constant";
import { TaskType } from "@/types/api.type";

/**
 * Hook to check task-specific permissions for the current user
 */
export const useTaskPermissions = (task?: TaskType) => {
  const { user, hasPermission } = useAuthContext();

  const canEditTask = () => {
    if (!user || !task) return false;
    
    // Check if user has EDIT_TASK permission
    if (!hasPermission(Permissions.EDIT_TASK)) return false;
    
    // If user has admin-level permissions, they can edit any task
    if (hasPermission(Permissions.EDIT_PROJECT) || hasPermission(Permissions.DELETE_PROJECT)) {
      return true;
    }
    
    // If user is a member, they can only edit tasks assigned to them
    return task.assignedTo?._id === user._id;
  };

  const canDeleteTask = () => {
    if (!user || !task) return false;
    
    // Check if user has DELETE_TASK permission
    if (!hasPermission(Permissions.DELETE_TASK)) return false;
    
    // If user has admin-level permissions, they can delete any task
    if (hasPermission(Permissions.EDIT_PROJECT) || hasPermission(Permissions.DELETE_PROJECT)) {
      return true;
    }
    
    // If user is a member, they can only delete tasks assigned to them
    return task.assignedTo?._id === user._id;
  };

  return {
    canEditTask: canEditTask(),
    canDeleteTask: canDeleteTask()
  };
};

export default useTaskPermissions;