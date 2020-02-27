export interface Status {
  id?: number;
  name: string;
  active: boolean;
  level: number;
}

export interface Priority {
  id?: number;
  name: string;
  active: boolean;
  color: string;
}

export interface User {
  id?: number;
  login: string;
  password?: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Project {
  id?: number;
  created?: Date;
  identity?: string;
  name: string;
  description: string;
  active: boolean;
  users: User[];
}

export interface Task {
  id?: number;
  created?: Date;
  user?: User;
  theme: string;
  description: string;
  project: Project;
  status: Status;
  priority: Priority;
  type: string;
  estimatedExecutionTime?: number;
  actualExecutionTime?: number;
}
