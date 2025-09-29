'use client'

import { useState, useEffect } from 'react'
import {useTranslations} from 'next-intl';

interface DashboardStats {
  totalPatients: number
  totalRecords: number
  recentActivity: number
  scheduledAppointments: number
}

export default function Dashboard() {
  const t = useTranslations('dashboard');
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
            <div className="logo">{t('logo')}</div>
            <div className="nav-links">
              <a href="/dashboard" className="nav-link">{t('navigation.dashboard')}</a>
              <a href="/patients" className="nav-link">{t('navigation.patients')}</a>
              <a href="/records" className="nav-link">{t('navigation.records')}</a>
              <a href="/users" className="nav-link">{t('navigation.users')}</a>
            </div>
            <div>
              <span className="text-gray-600">{t('userGreeting')}</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        {/* Statistics Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.totalPatients}</div>
            <div className="stat-label">{t('stats.totalPatients')}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">{stats.totalRecords}</div>
            <div className="stat-label">{t('stats.medicalRecords')}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">{stats.recentActivity}</div>
            <div className="stat-label">{t('stats.recentActivity')}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">{stats.scheduledAppointments}</div>
            <div className="stat-label">{t('stats.scheduledToday')}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">{t('quickActions.title')}</h2>
          <div className="quick-actions">
            <div className="action-card">
              <div className="action-icon">👤</div>
              <div className="action-title">{t('quickActions.addNewPatient.title')}</div>
              <div className="action-description">{t('quickActions.addNewPatient.description')}</div>
            </div>
            
            <div className="action-card">
              <div className="action-icon">📝</div>
              <div className="action-title">{t('quickActions.createRecord.title')}</div>
              <div className="action-description">{t('quickActions.createRecord.description')}</div>
            </div>
            
            <div className="action-card">
              <div className="action-icon">📅</div>
              <div className="action-title">{t('quickActions.scheduleAppointment.title')}</div>
              <div className="action-description">{t('quickActions.scheduleAppointment.description')}</div>
            </div>
            
            <div className="action-card">
              <div className="action-icon">👥</div>
              <div className="action-title">{t('quickActions.manageUsers.title')}</div>
              <div className="action-description">{t('quickActions.manageUsers.description')}</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold mb-6">{t('recentActivity.title')}</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">👤</span>
                </div>
                <div>
                  <div className="font-medium">{t('recentActivity.newPatientRegistered')}</div>
                  <div className="text-sm text-gray-500">{t('recentActivity.johnSmithAdded')}</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">{t('recentActivity.hoursAgo.2')}</div>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📝</span>
                </div>
                <div>
                  <div className="font-medium">{t('recentActivity.medicalRecordUpdated')}</div>
                  <div className="text-sm text-gray-500">{t('recentActivity.followUpNotes')}</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">{t('recentActivity.hoursAgo.4')}</div>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">👥</span>
                </div>
                <div>
                  <div className="font-medium">{t('recentActivity.newStaffMember')}</div>
                  <div className="text-sm text-gray-500">{t('recentActivity.drSarahJohnson')}</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">{t('recentActivity.hoursAgo.6')}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}