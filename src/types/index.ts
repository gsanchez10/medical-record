// Database types matching Prisma schema

export enum UserRole {
  ADMIN = 'ADMIN',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  RECEPTIONIST = 'RECEPTIONIST'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export enum RecordType {
  CONSULTATION = 'CONSULTATION',
  DIAGNOSIS = 'DIAGNOSIS',
  TREATMENT = 'TREATMENT',
  PRESCRIPTION = 'PRESCRIPTION',
  LAB_RESULT = 'LAB_RESULT',
  IMAGING = 'IMAGING',
  SURGERY = 'SURGERY',
  FOLLOW_UP = 'FOLLOW_UP',
  EMERGENCY = 'EMERGENCY',
  VACCINATION = 'VACCINATION'
}

export enum RecordStatus {
  DRAFT = 'DRAFT',
  FINALIZED = 'FINALIZED',
  ARCHIVED = 'ARCHIVED'
}

export interface Tenant {
  id: string
  name: string
  subdomain: string
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  isActive: boolean
  tenantId: string
  createdAt: Date
  updatedAt: Date
}

export interface Patient {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  gender: Gender
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  emergencyContactName?: string
  emergencyContactPhone?: string
  emergencyContactRelation?: string
  bloodType?: string
  allergies?: string
  medications?: string
  medicalHistory?: string
  isActive: boolean
  tenantId: string
  createdById?: string
  updatedById?: string
  createdAt: Date
  updatedAt: Date
}

export interface MedicalRecord {
  id: string
  type: RecordType
  status: RecordStatus
  title: string
  description?: string
  notes?: string
  date: Date
  symptoms?: string
  diagnosis?: string
  treatment?: string
  prescription?: string
  followUpDate?: Date
  height?: number
  weight?: number
  bloodPressure?: string
  heartRate?: number
  temperature?: number
  tenantId: string
  patientId: string
  createdById?: string
  updatedById?: string
  createdAt: Date
  updatedAt: Date
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface DashboardStats {
  totalPatients: number
  totalRecords: number
  activeUsers: number
  recentActivity: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Form types
export interface CreatePatientForm {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: Gender
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  emergencyContactName?: string
  emergencyContactPhone?: string
  emergencyContactRelation?: string
  bloodType?: string
  allergies?: string
  medications?: string
  medicalHistory?: string
}

export interface CreateMedicalRecordForm {
  patientId: string
  type: RecordType
  title: string
  description?: string
  notes?: string
  symptoms?: string
  diagnosis?: string
  treatment?: string
  prescription?: string
  followUpDate?: string
  height?: number
  weight?: number
  bloodPressure?: string
  heartRate?: number
  temperature?: number
}

export interface LoginForm {
  email: string
  password: string
  subdomain?: string
}

export interface SignupForm {
  email: string
  password: string
  firstName: string
  lastName: string
  practiceName: string
  role: UserRole
}