import { supabase } from '../../lib/supabase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  try {
    // Check if email already exists
    const { data: existingUser } = await supabase
      .from('email')
      .select('email')
      .eq('email', email)
      .single()

    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' })
    }

    // Insert new email into waitlist
    const { data, error } = await supabase
      .from('email')
      .insert([
        {
          email: email
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({ message: 'Failed to add email to waitlist' })
    }

    return res.status(200).json({ 
      message: 'Successfully added to waitlist!',
      data: data[0]
    })

  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
