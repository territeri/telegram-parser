import { Metadata } from 'next'
import Dashboard from '@/components/Dashboard'

export const metadata: Metadata = {
  title: 'Dashboard | Telegram Parser',
  description: 'Manage your Telegram parsing tasks',
}

export default function DashboardPage() {
  return <Dashboard />
}
