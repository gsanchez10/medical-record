import Link from 'next/link'
import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('homepage');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="button">
              {t('viewDashboard')}
            </Link>
            <Link href="/auth/signup" className="button button-secondary">
              {t('getStarted')}
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold mb-3">{t('features.multiTenant.title')}</h3>
            <p className="text-gray-600">
              {t('features.multiTenant.description')}
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-3">{t('features.patientManagement.title')}</h3>
            <p className="text-gray-600">
              {t('features.patientManagement.description')}
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">{t('features.professionalDashboard.title')}</h3>
            <p className="text-gray-600">
              {t('features.professionalDashboard.description')}
            </p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-6">{t('keyFeatures.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">{t('keyFeatures.secureMultiTenancy.title')}</h3>
              <p className="text-gray-600 text-sm">{t('keyFeatures.secureMultiTenancy.description')}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('keyFeatures.roleBasedAccess.title')}</h3>
              <p className="text-gray-600 text-sm">{t('keyFeatures.roleBasedAccess.description')}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('keyFeatures.responsiveDesign.title')}</h3>
              <p className="text-gray-600 text-sm">{t('keyFeatures.responsiveDesign.description')}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('keyFeatures.modernTechStack.title')}</h3>
              <p className="text-gray-600 text-sm">{t('keyFeatures.modernTechStack.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}