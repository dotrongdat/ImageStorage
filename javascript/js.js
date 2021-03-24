var setIMGfzNumber=0;  
var menuShow=false;  
        function nextIMG(){
        	setIMGfzNumber+=document.documentElement.clientWidth;
            document.getElementById('fullsizeIMG').style.transform="translate("+(-setIMGfzNumber)+"px)";           
        }
        function prevIMG(){
            setIMGfzNumber-=document.documentElement.clientWidth;
        	document.getElementById('fullsizeIMG').style.transform="translate("+(-setIMGfzNumber)+"px)";
        }
        function showFSIMG(){
                  document.getElementById('nextIMG').style.display='';
                  document.getElementById('prevIMG').style.display='';
        	        document.getElementById('fullsizeIMG').style.display='';
              		document.getElementById('image-contain').style.display='none';
              		document.getElementById('barFixed').style.display='none';
              		document.getElementById('closeIMG').style.display='';
              		document.getElementById('nextbutton').style.display='';
              		document.getElementById('prevbutton').style.display='';
        }
        function closeFSIMG(){
              document.getElementById('nextIMG').style.display='none';
              document.getElementById('prevIMG').style.display='none';
              document.getElementById('fullsizeIMG').style.display='none';
               document.getElementById('image-contain').style.display='';
               document.getElementById('barFixed').style.display='';
               document.getElementById('closeIMG').style.display='none';
               document.getElementById('nextbutton').style.display='none';
               document.getElementById('prevbutton').style.display='none';
               document.getElementById('fullsizeIMG').style.transform="translate(0px)"; 
               setIMGfzNumber=0;
        }
        function menuCtrl(){
          if(menuShow){
             document.getElementById('bar').style.transform="translate(-"+200+"%)";
             document.getElementById('buttonCtrl').style.transform="rotate(0deg)";
               menuShow=false;
          }else{
            document.getElementById('bar').style.transform="translate(0px)";
            document.getElementById('buttonCtrl').style.transform="rotate(90deg)";
            menuShow=true;
          }
        }
        function rotate(id){
          document.getElementById(id).style.transform="rotate(-20deg)";
        }
        function unRotate(id){
          document.getElementById(id).style.transform="rotate(0deg)";
        }
        function FB(){
          window.location.href = 'https://www.facebook.com/timberlakedat.do';
        }
        function gmail(){
          alert("DatDTSE140920@fpt.edu.vn");
        }
        function phoneNumber(){
          alert("0377322919");
        }