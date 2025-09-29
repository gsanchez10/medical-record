'use client'

import { useState, useEffect } from 'react'

interface DashboardStats {
  totalPatients: number
  totalRecords: number
  recentActivity: number
  scheduledAppointments: number
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPatients: 0,
    totalRecords: 0,
    recentActivity: 0,
    scheduledAppointments: 0
  })

  useEffect(() => {
    // Simulate loading stats
    const timer = setTimeout(() => {
      setStats({
        totalPatients: 156,
        totalRecords: 342,
        recentActivity: 23,
        scheduledAppointments: 12
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">🏥 Demo Medical Clinic</div>
            <div className="nav-links">
              <a href="/dashboard" className="nav-link">Dashboard</a>
              <a href="/patients" className="nav-link">Patients</a>
              <a href="/records" className="nav-link">Records</a>
              <a href="/users" className="nav-link">Users</a>
            </div>
            <div>
              <span className="text-gray-600">Dr. Admin User</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your medical practice management system</p>
        </div>

        {/* Statistics Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.totalPatients}</div>
            <div className="stat-label">Total Patients</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">{stats.totalRecords}</div>
            <div className="stat-label">Medical Records</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">{stats.recentActivity}</div>
            <div className="stat-label">Recent Activity</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">{stats.scheduledAppointments}</div>
            <div className="stat-label">Scheduled Today</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="quick-actions">
            <div className="action-card">
              <div className="action-icon">👤</div>
              <div className="action-title">Add New Patient</div>
              <div className="action-description">Register a new patient in the system</div>
            </div>
            
            <div className="action-card">
              <div className="action-icon">📝</div>
              <div className="action-title">Create Record</div>
              <div className="action-description">Add a new medical record</div>
            </div>
            
            <div className="action-card">
              <div className="action-icon">📅</div>
              <div className="action-title">Schedule Appointment</div>
              <div className="action-description">Book a new appointment</div>
            </div>
            
            <div className="action-card">
              <div className="action-icon">👥</div>
              <div className="action-title">Manage Users</div>
              <div className="action-description">Add or edit staff members</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">👤</span>
                </div>
                <div>
                  <div className="font-medium">New patient registered</div>
                  <div className="text-sm text-gray-500">John Smith added to the system</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">2 hours ago</div>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📝</span>
                </div>
                <div>
                  <div className="font-medium">Medical record updated</div>
                  <div className="text-sm text-gray-500">Follow-up notes added for Jane Doe</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">4 hours ago</div>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">👥</span>
                </div>
                <div>
                  <div className="font-medium">New staff member added</div>
                  <div className="text-sm text-gray-500">Dr. Sarah Johnson joined as Doctor</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">6 hours ago</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}