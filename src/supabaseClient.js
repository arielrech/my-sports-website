import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://maijoxtlffhucmhgiapj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1haWpveHRsZmZodWNtaGdpYXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NTcwNzIsImV4cCI6MjA2MzEzMzA3Mn0.esnXuzXUzjfAZKrhXh35D2HoCigwqCwXq5CjQEi2xjs';

console.log('✅ Supabase URL in use:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
