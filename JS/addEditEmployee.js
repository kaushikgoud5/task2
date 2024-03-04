
define(function() {
  const handleAddEmployee = () => {
    localStorage.removeItem("updateEmp");
    window.location.href = "./addEmp.html"
  }
  
  return handleAddEmployee;
    
});