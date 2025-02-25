import { useState } from 'react';
import { useApi } from '@hooks/useApi';
import { getUserTasks, addUserTask, updateUserTask } from '@services/api';

export const Tasks = () => {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const { loading, error, data, fetch } = useApi(getUserTasks, {
		params: undefined,
		autoFetch: true,
	});

	const handleAddTask = async () => {
		if (!newTaskTitle.trim()) return;
		try {
			await addUserTask({ title: newTaskTitle });
			setNewTaskTitle('');
			fetch(undefined);
		} catch (err) {
			console.error('Error adding task:', err);
		}
	};

	const handleToggleTask = async (taskId: string, completed: boolean) => {
		try {
			await updateUserTask(taskId, { status: completed ? 'Terminado' : 'Pendiente' });
			fetch(undefined);
		} catch (err) {
			console.error('Error updating task:', err);
		}
	};

	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="section-container">
			<div className="flex flex-col gap-4">
				{/* Formulario minimalista para agregar tareas */}
				<div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-700 rounded-md shadow-md p-4 gap-4">
					<input
						type="text"
						placeholder="Añadir nueva tarea..."
						className="flex-1 bg-transparent outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-300"
						value={newTaskTitle}
						onChange={(e) => setNewTaskTitle(e.target.value)}
						onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
					/>
					<button
						type="button"
						onClick={handleAddTask}
						className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center 
                      hover:bg-blue-600 transition-colors disabled:opacity-50"
						disabled={!newTaskTitle.trim()}
					>
						+
					</button>
				</div>

				{/* Lista de tareas con checkboxes */}
				{data?.map((task) => (
					<div key={task._id} className="flex items-center bg-zinc-50 dark:bg-zinc-700 rounded-md shadow-md p-4 gap-4">
						<input
							type="checkbox"
							checked={task.status === 'Terminado'}
							onChange={(e) => handleToggleTask(task._id, e.target.checked)}
							className="w-5 h-5 mr-2 accent-blue-500 cursor-pointer"
						/>
						<div className="flex-1">
							<h3 className={`text-xl font-semibold ${task.status === 'Terminado' ? 'line-through opacity-50' : ''}`}>
								{task.title}
							</h3>
							<p className={`text-sm ${task.status === 'Terminado' ? 'line-through opacity-50' : ''}`}>
								<strong>Prioridad:</strong> {task.priority}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
