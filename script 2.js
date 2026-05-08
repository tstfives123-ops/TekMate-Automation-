const supabaseUrl = 'https://dxosiomkeqywmotxiuni.supabase.com';
const supabaseKey = 'dxosiomkeqywmotxiuni';

const client = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

async function signup() {

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })

  if(error){
    alert(error.message)
  } else {
    alert("Signup successful")
  }
}

async function login() {

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  if(error){
    alert(error.message)
  } else {
    alert("Login successful")
  }
}
