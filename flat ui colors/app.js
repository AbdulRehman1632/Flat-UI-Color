let all_colors=['#FFC312','#C4E538','#12CBC4','#FDA7DF','#ED4C67','#F79F1F','#A3CB38','#1289A7','#D980FA','#B53471','#EE5A24','#009432','#0652DD','#9980FA','#833471','#EA2027','#006266','#1B1464','#5758BB','#6F1E51','#575fcf','#34e7e4','#ffa801','#ff3f34','#1e272e']

let box=document.querySelector("#box")      

function colorgenerator(){
    for (let i=0; i<all_colors.length;i++){
        
        
        box.innerHTML += `<div onclick="copy ('${all_colors[i]}')"  style="background-color:${all_colors[i]};" class="mini_box">
            ${all_colors[i]}
         </div>`

       
        }   
        
    }
    
    colorgenerator()
         
         function copy(a) {
             navigator.clipboard.writeText(a);
             Swal.fire({
                title: 'Color Copied!',
                text: `${a} `,
                icon: 'success',
                confirmButtonText: 'OK'
            });

             
            }
            
        
    



