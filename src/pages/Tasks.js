import React from 'react';

const dummyTasks = [
  { id: 1, title: 'Finish proposal draft', completed: false },
  { id: 2, title: 'Email client feedback', completed: true },
  { id: 3, title: 'Review financial report', completed: false },
  { id: 4, title: 'Update project roadmap', completed: true },
];

const Tasks = () => {
  return (
    <div style={{ padding: '16px' }}>
      <h2>Task List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dummyTasks.map(task => (
          <li key={task.id} style={{ margin: '8px 0' }}>
            <input type="checkbox" checked={task.completed} readOnly />
            <span style={{ marginLeft: '8px', textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
