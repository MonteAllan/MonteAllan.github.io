let peq = document.querySelector('.pesq');
peq.addEventListener('mouseover', pesq)
peq.addEventListener('mouseout', limpe)

function pesq(){
    let input = document.querySelector('input').style.display = 'block';
    let pesq = document.querySelector('.pesq').style.width = "200px"
    let peq = document.querySelector('.pesq').style.backgroundColor = "white";
  
}

function limpe(){
  setTimeout(()=> {
    let pesq = document.querySelector('.pesq').style.width = "50px"
    let input = document.querySelector('input').style.display = 'none';
    let peq = document.querySelector('.pesq').style.backgroundColor = "transparent";
  },10000)
   
}
