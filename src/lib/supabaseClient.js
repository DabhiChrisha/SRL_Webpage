import { createClient } from '@supabase/supabase-js'

// Replace with your actual Supabase project URL and public API key
const supabaseUrl = 'https://pqstpndczyogghrfrwzj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxc3RwbmRjenlvZ2docmZyd3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNDAxNjQsImV4cCI6MjA4NjkxNjE2NH0.8gNrH6wZqv9jybifKGtm5YEYTS0DAuPZ_9u-iSsrOAA'

// Boolean flag for configuration validation
export const isSupabaseConfigured =
  Boolean(supabaseUrl && supabaseAnonKey)

// Create client only if configured
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null