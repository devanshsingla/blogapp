require('dotenv')
const { createClient } = require( '@supabase/supabase-js')
const supabaseUrl = 'https://akosydmdizdyjuwdkkqm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrb3N5ZG1kaXpkeWp1d2Rra3FtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTk2MDYzMCwiZXhwIjoyMDE1NTM2NjMwfQ.XdACm2BfOxyDkBq21s0fwr_nx6vsiXMlqHZFESue990'

const supabase = createClient(supabaseUrl, supabaseKey)


module.exports = supabase