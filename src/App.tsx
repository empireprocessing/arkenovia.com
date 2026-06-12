import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Pricing = lazy(() => import('./pages/Pricing'))
const RequestAccess = lazy(() => import('./pages/RequestAccess'))
const Login = lazy(() => import('./pages/Login'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Integrations = lazy(() => import('./pages/Integrations'))
const Security = lazy(() => import('./pages/Security'))
const Terms = lazy(() => import('./pages/legal/Terms'))
const Privacy = lazy(() => import('./pages/legal/Privacy'))
const Cookies = lazy(() => import('./pages/legal/Cookies'))
const Refund = lazy(() => import('./pages/legal/Refund'))
const Sla = lazy(() => import('./pages/legal/Sla'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function Fallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brassDark border-t-brass" />
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/security" element={<Security />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="/legal/sla" element={<Sla />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
