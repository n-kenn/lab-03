function checkValid()
{
  let pass = document.getElementById('pass')
  pass = pass.value
  let pass_val = document.getElementById('passVal')
  pass_val = pass_val.value
  let passLongEnough = (pass.length >= 8)
  let passEqual = (pass === pass_val)
  if(!passLongEnough)
  {
    if(!passEqual)
    {
      alert ("Your password isn't long enough and the two passwords don't match")
    }
    else
    {
      alert ("Your password isn't long enough")
    }
  }
  else if (!passEqual)
  {
    alert("Your passwords don't match")
  }
  else
  {
      alert("Password Validated")
  }
}
