function validatelogin()
{
  var x=document.forms["login"]["email1"].value;
  var y=document.forms["login"]["pass1"].value;
  if(x==""||y=="")
  {
    alert("Field can't be empty");
  }
  if(y.length<4)
  {
    alert("Password too short");
  }
}
function validatesignup()
{
  var x=document.forms["signup"]["email2"].value;
  var y=document.forms["signup"]["pass2"].value;
  var z=document.forms["signup"]["name"].value;
  if(x==""||y==""||z=="")
  {
    alert("Field can't be empty");
  }
  if(z.length<4)
  {
    alert("Name too short");
  }
  if(y.length<4)
  {
    alert("Password too short");
  }
}
  var element=document.getElementById("one");
  var element1=document.getElementById("six");
  var position=0;
  var position1=0;
  var position2=0;
  var position3=0;
  var id=null;
  var id1=null;
  var id2=null;
  var id3=0;
  
  function start1()
  {
    if(id==null)
    {
   id=setInterval(move,1);
    }  // move function is called after 1mili seconds
  }
  function move()
  {
    if(position<700) // to stop the block
    {
    position+=50;
    element.style.left=position+'px';
    }
    else
    {
      position2=position;
      console.log(position);
    clearInterval(id);
    id=null;
    position=0;
    }
  }

  function start()
  {
    if(id1==null)
    {
   id1=setInterval(move1,1);
    }  // move function is called after 1mili seconds
  }

  function move1()
  {
    if(position1<700) // to stop the block
    {
    position1+=50;
    element1.style.right=position1+'px';
    }
    else
    {
      position3=position1;
    clearInterval(id1);
    id1=null;
    position1=0;
    }
  }

  function start2()
  {
    if(id==null)
    {
   id=setInterval(move2,1);
    }  // move function is called after 1mili seconds
  }

  function move2()
  {
    if(position2>0) // to stop the block
    {
    position2-=50;
    element.style.left=position2+'px';
    }
    else
    {
      console.log(position2);
    clearInterval(id);
    id=null;
    position2=0;
    }
  }

  function start3()
  {
    if(id1==null)
    {
   id1=setInterval(move3,1);
    }  // move function is called after 1mili seconds

  }
  function move3()
  {
    if(position3>0) // to stop the block
    {
    position3-=50;
    element1.style.right=position3+'px';
    }
    else
    {
    clearInterval(id1);
    id1=null;
    position3=0;
    }
  }
