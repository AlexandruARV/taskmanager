import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask as apiCreateTask } from "../../services/apiTasks";
export function useCreateTask() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createTask } = useMutation({
    mutationFn: apiCreateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { createTask, isCreating };
}
