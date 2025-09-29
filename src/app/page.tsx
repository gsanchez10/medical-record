import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Medical Record SaaS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete multi-tenant medical practice management system. 
            Secure, scalable, and designed for healthcare professionals.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="button">
              View Dashboard
            </Link>
            <Link href="/auth/signup" className="button button-secondary">
              Get Started
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold mb-3">Multi-Tenant</h3>
            <p className="text-gray-600">
              Complete isolation between medical practices with subdomain-based tenancy
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-3">Patient Management</h3>
            <p className="text-gray-600">
              Comprehensive patient records with medical history and demographics
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Professional Dashboard</h3>
            <p className="text-gray-600">
              Real-time statistics and quick actions for medical professionals
            </p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">🔒 Secure Multi-Tenancy</h3>
              <p className="text-gray-600 text-sm">Complete data isolation between medical practices</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">👨‍⚕️ Role-Based Access</h3>
              <p className="text-gray-600 text-sm">Admin, Doctor, Nurse, and Receptionist roles</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📱 Responsive Design</h3>
              <p className="text-gray-600 text-sm">Works perfectly on desktop and mobile devices</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🚀 Modern Tech Stack</h3>
              <p className="text-gray-600 text-sm">Built with Next.js 14, TypeScript, and Prisma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}