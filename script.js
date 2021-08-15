document.getElementById('login-button').addEventListener('click',function(){


               const emailFeild=document.getElementById('user-email');
               const userEmail=emailFeild.value;
               //   console.log(userEmail);

               const passwordFeild=document.getElementById('user-password');
               const userPassword=passwordFeild.value;
               //  console.log(userPassword);
               if(userEmail=='tanisha@baap.com' && userPassword == 'tanisha'){
                              window.location.href= 'banking.html' ;
               }
}
)
