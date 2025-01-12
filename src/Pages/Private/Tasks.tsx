import { useApi } from '@hooks/useApi';
import { getUserTasks } from '@services/api';

export const Tasks = () => {
	const { loading, error, data } = useApi(getUserTasks, { params: undefined, autoFetch: true });

	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="section-container">
			<h2 className="subtitle">Mis tareas</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{data?.map((task) => (
					<div key={task._id} className="bg-zinc-50 dark:bg-zinc-700 rounded-lg shadow-lg p-4">
						<h3 className="text-xl font-semibold">{task.title}</h3>
						<p className="text-gray-600">
							<strong>Prioridad:</strong> {task.priority}
						</p>
						<p className="text-gray-600">
							<strong>Estado:</strong> {task.status}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};
