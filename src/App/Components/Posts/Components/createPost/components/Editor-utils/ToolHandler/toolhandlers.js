/* eslint-disable no-mixed-operators */
/* eslint-disable no-loop-func */


function supported(cmd){
    return document.queryCommandSupported(cmd.cmd);
}

var flg = false;
var Execute = function(cmd){
    if(supported(cmd)){
        if(document.execCommand){
            document.execCommand(cmd.cmd,false,(cmd.value||""));
        }
    }
};



var selection = document.getElementById('selectColor');

for(let i = 0 ; i<selection.children.length;i++){
    selection.children[i].addEventListener('click', function(e){
        Execute({cmd:!flg&&"foreColor"||flg&&"backColor",value:this.value});
    });

}

var tc = document.getElementById('tc');
var bc = document.getElementById('bc');

bc.addEventListener('click', function(e){
    flg=true;

}); 


tc.addEventListener('click', function(e){
    flg=false;
}); 

console.log("Editor File here..");