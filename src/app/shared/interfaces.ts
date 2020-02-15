export interface Status {
  id?: number;
  name: string;
  isActive: boolean;
  order: number;
}

export interface Priority {
  id?: number;
  name: string;
  isActive: boolean;
}

export interface User {
  id?: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}
