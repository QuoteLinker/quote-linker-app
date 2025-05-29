import { NextResponse } from 'next/server'
import { z } from 'zod'
import clientPromise from '@/lib/mongodb'

const leadSchema = z.object({
  zipCode: z.string().regex(/^[0-9]{5}$/),
  coverageType: z.enum(['term', 'whole']),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]{10}$/),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = leadSchema.parse(body)
    
    const client = await clientPromise
    const db = client.db('quotelinker')
    
    // Add timestamp and status
    const lead = {
      ...validatedData,
      createdAt: new Date(),
      status: 'new',
      source: 'web_form',
      minneapolisZipCodes: ['55401', '55402', '55403', '55404', '55405', '55406', '55407', '55408', '55409', '55410', '55411', '55412', '55413', '55414', '55415', '55416', '55417', '55418', '55419', '55420', '55421', '55422', '55423', '55424', '55425', '55426', '55427', '55428', '55429', '55430', '55431', '55432', '55433', '55434', '55435', '55436', '55437', '55438', '55439', '55440', '55441', '55442', '55443', '55444', '55445', '55446', '55447', '55448', '55449', '55450', '55454', '55455', '55458', '55459', '55460', '55467', '55470', '55472', '55478', '55479', '55480', '55483', '55484', '55485', '55486', '55487', '55488'],
      isMinneapolisArea: true,
    }
    
    await db.collection('leads').insertOne(lead)
    
    // TODO: Integrate with Salesforce
    // TODO: Send welcome email
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
} 