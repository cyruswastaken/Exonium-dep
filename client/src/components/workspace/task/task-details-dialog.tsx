import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TaskPriorityEnum, TaskStatusEnum } from "@/constant";
import { getAvatarColor, getAvatarFallbackText, transformStatusEnum } from "@/lib/helper";
import { format, formatDistanceToNow } from "date-fns";
import useTaskDetailsDialog from "@/hooks/use-task-details-dialog";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCommentMutationFn, deleteCommentMutationFn, getCommentsQueryFn } from "@/lib/api";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { toast } from "@/hooks/use-toast";
import { Loader, Send, Trash2 } from "lucide-react";

const TaskDetailsDialog = () => {
  const { isOpen, task, onClose } = useTaskDetailsDialog();
  const [activeTab, setActiveTab] = useState<"details" | "comments">("details");
  const [commentText, setCommentText] = useState("");
  const workspaceId = useWorkspaceId();
  const queryClient = useQueryClient();

  // Fetch comments - MUST be called before any early returns
  const { data: commentsData, isLoading: commentsLoading } = useQuery({
    queryKey: ["comments", task?._id || ""],
    queryFn: () => getCommentsQueryFn({ workspaceId, taskId: task!._id }),
    enabled: isOpen && activeTab === "comments" && !!workspaceId && !!task,
    retry: false,
  });

  const comments = commentsData?.comments || [];

  // Create comment mutation - MUST be called before any early returns
  const { mutate: createComment, isPending: isCreatingComment } = useMutation({
    mutationFn: createCommentMutationFn,
    onSuccess: () => {
      if (task) {
        queryClient.invalidateQueries({ queryKey: ["comments", task._id] });
      }
      setCommentText("");
      toast({ title: "Success", description: "Comment added", variant: "success" });
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  // Delete comment mutation - MUST be called before any early returns
  const { mutate: deleteComment } = useMutation({
    mutationFn: deleteCommentMutationFn,
    onSuccess: () => {
      if (task) {
        queryClient.invalidateQueries({ queryKey: ["comments", task._id] });
      }
      toast({ title: "Success", description: "Comment deleted", variant: "success" });
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const handleSendComment = () => {
    if (!commentText.trim() || !task) return;
    createComment({ workspaceId, taskId: task._id, content: commentText });
  };

  // Early return AFTER all hooks
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

        {/* Tab Switcher */}
        <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button
            onClick={() => setActiveTab("details")}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
              activeTab === "details"
                ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("comments")}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
              activeTab === "comments"
                ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            Comments ({comments.length})
          </button>
        </div>

        {activeTab === "details" ? (
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
        ) : (
          <div className="space-y-4 py-4">
            {/* Comments List */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {commentsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader className="w-6 h-6 animate-spin text-blue-500" />
                </div>
              ) : comments.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  No comments yet. Be the first to comment!
                </div>
              ) : (
                comments.map((comment: any) => {
                  const commentUserName = comment.user?.name || "Unknown";
                  const commentInitials = getAvatarFallbackText(commentUserName);
                  const commentAvatarColor = getAvatarColor(commentUserName);

                  return (
                    <div
                      key={comment._id}
                      className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage
                          src={comment.user?.profilePicture || ""}
                          alt={commentUserName}
                        />
                        <AvatarFallback className={commentAvatarColor}>
                          {commentInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-sm dark:text-white truncate">
                            {commentUserName}
                          </span>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatDistanceToNow(new Date(comment.createdAt), {
                                addSuffix: true,
                              })}
                            </span>
                            <button
                              onClick={() =>
                                deleteComment({ workspaceId, commentId: comment._id })
                              }
                              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Add Comment Input */}
            <div className="flex gap-2 pt-2 border-t dark:border-gray-700">
              <Input
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendComment();
                  }
                }}
                className="flex-1"
                disabled={isCreatingComment}
              />
              <Button
                onClick={handleSendComment}
                disabled={!commentText.trim() || isCreatingComment}
                size="icon"
                className="flex-shrink-0"
              >
                {isCreatingComment ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailsDialog;
