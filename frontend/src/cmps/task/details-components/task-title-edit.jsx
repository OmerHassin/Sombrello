import { IoIosCard } from 'react-icons/io';
import { updateBoard } from '../../../store/board.actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export function TaskTitleEdit({ task, group, taskId, board }) {
  console.log(task, group);
  const [taskTitle, setTaskTitle] = useState(null);
  const dispatch = useDispatch();
  function handleChange(ev) {
    setTaskTitle(ev.target.value);
  }
  function handleBlur() {
    if (taskTitle !== task.title) {
      // Check if the task title has changed
      const updatedTask = { ...task, title: taskTitle }; // Create an updatedTask object with the new title

      const updatedGroup = {
        ...group,
        tasks: group.tasks.map((t) => (t.id === taskId ? updatedTask : t)), // Replace the current task with the updatedTask
      };

      const updatedGroups = board.groups.map((g) => {
        if (g.id === group.id) {
          return updatedGroup;
        }
        return g;
      });

      const updatedBoard = { ...board, groups: updatedGroups };

      dispatch(updateBoard(updatedBoard)); // Dispatch the updateBoard action with the updatedBoard object
    }
  }
  return (
    <div className="details-grid">
      <IoIosCard className="icon-title" />
      <div className="group-id">
        {task ? (
          <textarea className="task-title-textarea" value={taskTitle} onChange={handleChange} onBlur={handleBlur}>
            {task.title}
          </textarea>
        ) : (
          'Loading'
        )}
        <p>in list: {group.title}</p>
      </div>
    </div>
  );
}
