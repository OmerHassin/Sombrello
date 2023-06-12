import { RxActivityLog } from 'react-icons/rx'
import { TaskAttachments } from '../details/task-attachments'
import { TaskProps } from '../details/task-props'
import { TaskDescription } from './task-description'
import { TaskSidebar } from './task-sidebar'
import { TaskActivity } from './task-activity'

export function TaskGrid({
  members,
  task,
  board,
  group,
  hasAttachments,
  setCoverImg,
  coverImg,
  checklist,
}) {
  return (
    <div className="task-grid ">
      <div className="task-column">
        <TaskProps members={members} task={task} board={board} group={group} />
        <TaskDescription
          description={task?.desc}
          task={task}
          board={board}
          group={group}
        />

        <div className="attachments-section">
          <TaskAttachments
            attachments={task.attachments}
            task={task}
            coverImg={coverImg}
            board={board}
            group={group}
            setCoverImg={setCoverImg}
          />
        </div>
        <TaskActivity task={task} board={board} group={group} />
      </div>
      <div className="task-sidebar">
        <TaskSidebar
          board={board}
          group={group}
          task={task}
          checklist={checklist}
          hasAttachments={task?.attachments?.length > 0}
          width={hasAttachments ? '100px' : '165px'}
        />
      </div>
    </div>
  )
}
