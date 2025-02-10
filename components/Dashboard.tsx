import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ParserStatus from './ParserStatus'
import MessageLog from './MessageLog'

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Parser Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ParserStatus />
            <div className="mt-4">
              <Button>Start Parser</Button>
              <Button variant="outline" className="ml-2">Stop Parser</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Message Log</CardTitle>
          </CardHeader>
          <CardContent>
            <MessageLog />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
