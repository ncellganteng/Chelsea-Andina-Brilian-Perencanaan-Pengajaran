function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oOWLfloETC":
        Script1();
        break;
      case "6rCPBonDYbI":
        Script2();
        break;
  }
}

function Script1()
{
  window.print(); 
}

function Script2()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = day + "/" + month + "/" +year
player.SetVar("DateValue", newName);
}

