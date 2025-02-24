

const image=document.getElementById('picture');
const Header=document.getElementById('head');
const ListElement=document.getElementById('list-elements');

function result(){
  const TittleInfor=document.getElementById('infor');
  const mode=document.getElementById('icons');
  if (mode.style.backgroundColor==='gainsboro' || mode.style.backgroundColor===''){
       mode.style.backgroundColor='black';
       Header.style.background='white'
       TittleInfor.style.color='gainsboro'
       ListElement.style.color='black'
       alert('You have switched to dark mode');
   } 
   else{
    mode.style.backgroundColor='gainsboro';
    Header.style.background='black'
    TittleInfor.style.color='black'
    ListElement.style.color='white'
    alert('You have switched to light mode');

   }

   
   
   
}
    
