const email = null;

try {
  
  const validatedEmail = validateEmail(email);
  if(validatedEmail instanceof Error){
    console.log(`Error: ${validatedEmail.message}`)
  } else {
    console.log(`valid email: ${email}`);
  }

} catch(err){
	console.log(`Error: ${err.message}`);
}

function validateEmail(email){
  return email.match(/@/)?email:new Error("invalid email");
}
