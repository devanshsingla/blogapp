const supabase = require('../db/db')

const createUser = async (params)=>{
    try{
        const { data, error } = await supabase
    .from('users') // Replace with your actual table name
    .insert([params]);
    return "created Succesfully"
}
    catch(error){
        return error
    }
}













const exisitngEmail = async (email)=>{
    try {
        
        const { data, error } = await supabase
          .from('user') 
          .select('email')
          .eq('email', email);
    
        if (error) {
          throw error;
        }
    
        // Check if the email exists
        const emailExists = data && data.length > 0;
    
        return emailExists ;
      } catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = exisitngEmail