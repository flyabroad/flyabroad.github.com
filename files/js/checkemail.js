<script language="javascript">
function CheckEmail(form){ 
 var email = form.Email.value; 
 var pattern = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/; 
 flag = pattern.test(email); 
 if(!flag){ 
  alert("email格式不正确!"); 
  form.Email.focus(); 
  return false; 
 } 
 return (true); 
}
</script>
