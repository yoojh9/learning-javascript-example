function validateEmail(email){
  return email.match(/@/)?email:new Error("invalid email");
}

const email = "yoojh9@email.com";

const validatedEmail = validateEmail(email);

if(validatedEmail instanceof Error){
  console.log(`Error: ${validatedEmail.message}`)
} else {
  console.log(`valid email: ${email}`);
}