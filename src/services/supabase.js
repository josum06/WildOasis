import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://akgcmljovdnbhjxmozgf.supabase.co' 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZ2NtbGpvdmRuYmhqeG1vemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NjIxMTMsImV4cCI6MjA0NjAzODExM30.RSuUIKHv7iZKG186soreSjum_8d0RiccgdeJPPIFVvc";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;



// https://akgcmljovdnbhjxmozgf.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg