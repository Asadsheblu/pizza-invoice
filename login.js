document.getElementById('login').addEventListener('click',function(){
    const emailInput=document.getElementById('email')
    const userEmailInput=emailInput.value ;
    
    const passInput=document.getElementById('pass')
    const userPassInput=passInput.value;



    if(userEmailInput=='pizzahat@gmail.com' && userPassInput=='pizza'){
        window.location.href='invoice.html'
    }


}) 