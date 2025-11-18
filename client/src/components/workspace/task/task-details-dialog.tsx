import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TaskPriorityEnum, TaskStatusEnum } from "@/constant";
import { getAvatarColor, getAvatarFallbackText, transformStatusEnum } from "@/lib/helper";
import { format } from "date-fns";
import useTaskDetailsDialog from "@/hooks/use-task-details-dialog";

const TaskDetailsDialog = () => {
  const { isOpen, task, onClose } = useTaskDetailsDialog();

  if (!task) return null;

  const assigneeName = task.assignedTo?.name || "Unassigned";
  const initials = getAvatarFallbackText(assigneeName);
  const avatarColor = getAvatarColor(assigneeName);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto border-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Task Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Task Code */}
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Task Code</label>
            <Badge variant="outline" className="mt-1 capitalize">
              {task.taskCode}
            </Badge>
          </div>

          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Title</label>
            <p className="mt-1 text-lg font-semibold dark:text-white">{task.title}</p>
          </div>

          {/* Description */}
          {task.description && (
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</label>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {task.description}
              </p>
            </div>
          )}

          {/* Project */}
          {task.project && (
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Project</label>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl">{task.project.emoji}</span>
                <span className="font-medium dark:text-white">{task.project.name}</span>
              </div>
            </div>
          )}

          {/* Assigned To */}
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Assigned To</label>
            <div className="mt-1 flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={task.assignedTo?.profilePicture || ""} alt={assigneeName} />
                <AvatarFallback className={avatarColor}>{initials}</AvatarFallback>
              </Avatar>
              <span className="font-medium dark:text-white">{assigneeName}</span>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Due Date</label>
            <p className="mt-1 font-medium dark:text-white">
              {task.dueDate ? format(task.dueDate, "PPP") : "No due date"}
            </p>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</label>
            <div className="mt-1">
              <Badge
                variant={TaskStatusEnum[task.status]}
                className="flex w-auto p-1 px-2 gap-1 font-medium shadow-sm uppercase border-0"
              >
                <span>{transformStatusEnum(task.status)}</span>
              </Badge>
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Priority</label>
            <div className="mt-1">
              <Badge
                variant={TaskPriorityEnum[task.priority]}
                className="flex w-auto p-1 px-2 gap-1 font-medium shadow-sm uppercase border-0"
              >
                <span>{transformStatusEnum(task.priority)}</span>
              </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailsDialog;
