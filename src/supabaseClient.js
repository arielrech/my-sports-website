import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jcxgljbwxwkfrwgynbat.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjeGdsamJ3eHdrZnJ3Z3luYmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMzYwODIsImV4cCI6MjAzOTkxMjA4Mn0.7XC2jXd48mwTe9sX-9m2C0VGICEMeeR6Qcg2g0dv_m0';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
