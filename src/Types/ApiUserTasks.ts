export interface ApiUserTasks {
	_id: string;
	title: string;
	status: string;
	priority: number;
	createdAt: string;
	updatedAt: string;
}

export interface ApiTaskCreate {
	title: string;
	priority?: string;
}

export interface ApiTaskUpdate {
	status?: 'Pendiente' | 'En Progreso' | 'Terminado';
	title?: string;
	priority?: string;
}
