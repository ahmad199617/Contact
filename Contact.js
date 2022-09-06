document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}
    
    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";}  
    
    
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    

                    
    




   
    {
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}    
   
    var lang=localStorage.getItem('lang');
    localStorage.getItem('lang');   
    if(lang==("en")){
    $('[lang="en"]').show();
    $('[lang="tr"]').hide();
    $('[lang="ar"]').hide();}
    
    
    if(lang==("tr")){
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}
    
    if(lang==("ar")){
    $('[lang="ar"]').show();
    $('[lang="en"]').hide();
    $('[lang="tr"]').hide();}});


    


    
    $(document).ready(function () {
        $('#switch-lang-en').click(function() {
            $('[lang="tr"]').hide();
            $('[lang="en"]').show();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'en');
        });
    });
    

    $(document).ready(function () {
        $('#switch-lang-tr').click(function() {
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');
        });
    });


    $(document).ready(function () {
        $('#switch-lang-ar').click(function() {
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');
        });
    });
            
    function setlangEN(){                   
            
        $('[lang="tr"]').hide();
        $('[lang="en"]').show();
        $('[lang="ar"]').hide();
        localStorage.setItem('lang', 'en');

        }
        function setlangTR(){
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');

        }

        function setlangAR(){
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');

        }

        function setTR (){
            document.querySelector(".TR_TMS").style.display="flex"
            document.querySelector(".QA_TMS").style.display="none"
            document.querySelector(".IC_TMS").style.display="none"

            document.querySelector(".NOT_TR").style.borderWidth="0px"
            document.querySelector(".NOT_TR").style.backgroundColor="#1A4990"
            document.querySelector(".NOT_AC_TEXT_TR").style.color = "#ffffff";

            document.querySelector(".NOT_QA").style.borderWidth="1px"
            document.querySelector(".NOT_QA").style.backgroundColor="#ffffff"
            document.querySelector(".NOT_AC_TEXT_QA").style.color = "#333";

            document.querySelector(".NOT_IC").style.borderWidth="1px"
            document.querySelector(".NOT_IC").style.backgroundColor="#ffffff"
            document.querySelector(".NOT_AC_TEXT_IC").style.color = "#333";


        }
        function setIC (){
            document.querySelector(".TR_TMS").style.display="none"
            document.querySelector(".QA_TMS").style.display="none"
            document.querySelector(".IC_TMS").style.display="flex"

            document.querySelector(".NOT_IC").style.borderWidth="0px"
            document.querySelector(".NOT_IC").style.backgroundColor="#1A4990"
            document.querySelector(".NOT_AC_TEXT_IC").style.color = "#ffffff";

            document.querySelector(".NOT_TR").style.borderWidth="1px"
            document.querySelector(".NOT_TR").style.backgroundColor="#ffffff"
            document.querySelector(".NOT_AC_TEXT_TR").style.color = "#333";

            document.querySelector(".NOT_QA").style.borderWidth="1px"
            document.querySelector(".NOT_QA").style.backgroundColor="#ffffff"
            document.querySelector(".NOT_AC_TEXT_QA").style.color = "#333";



        }
        function setQA (){
            document.querySelector(".TR_TMS").style.display="none"
            document.querySelector(".QA_TMS").style.display="flex"
            document.querySelector(".IC_TMS").style.display="none"


            document.querySelector(".NOT_QA").style.borderWidth="0px"
            document.querySelector(".NOT_QA").style.backgroundColor="#1A4990"
            document.querySelector(".NOT_AC_TEXT_QA").style.color = "#ffffff";

            document.querySelector(".NOT_IC").style.borderWidth="1px"
            document.querySelector(".NOT_IC").style.backgroundColor="#ffffff"
            document.querySelector(".NOT_AC_TEXT_IC").style.color = "#333";

            document.querySelector(".NOT_TR").style.borderWidth="1px"
            document.querySelector(".NOT_TR").style.backgroundColor="#ffffff"
            document.querySelector(".NOT_AC_TEXT_TR").style.color = "#333";

        }
        
        
