/*  
思路：

    先初始化游戏面板数据，并随机生成2或者4的数字，并进行颜色的控制；
    在触发上下左右移动事件时，对于不同方向进行数据的处理，
    向左移动：
        ·只对2-4列进行操作，
        ·在移动前对于2-4列每列元素的前一列元素进行判断，
        ·如果前一元素为空，或者前一元素与当前元素值相同，则可以进行左移；
        ·左移的同时对相同元素进行加和后再进行显示；

    向右移动：
        ·只对1-3列进行操作；
        ·在移动前对于1-3列每列元素的后一列元素进行判断，
        ·如果后一元素为空，后一元素与当前元素值相同，则可进行右移；
        ·左移的同时对相同元素进行加和后显示；

    向上移动：
        ·只对2-4行进行操作；
        ·在移动前对于2-4行每行元素的上一行元素进行判断；
        ·如果上一元素为空，当前元素与上一元素值相同，则可进行上移；
        ·上移的同时对于相同元素进行加和后显示；

    向下移动：
        ·只对1-3列进行移动；
        ·在移动前对于1-3行每行元素的下一行元素进行判断；
        ·如果下一元素为空，或者下一元素与当前元素值相同，则可进行下移；
        ·下移的同时对于相同元素进行加和后显示；

    如果游戏面板全满，无法进行移动时，游戏结束；
*/
function Game(){
    var board = new Array();
    var score = 0;
    var hasConflicted = new Array();
    this.newGame = function (){
        //初始化棋盘格
        init();
        //在随机的两个格子生成数字
        creatNumber();
        creatNumber();
    }
    //初始化棋盘格
    this.init = function (){
        for(var i=0;i<4;i++){
            for(var j=0;j<4;j++){
                var boardCell = $("#game-cell-"+i+"-"+j);
                boardCell.css("top",getPosTop(i,j));
                boardCell.css("left",getPosLeft(i,j));
                updateScore1( score );
            }
        }
        for(var i=0;i<4;i++){
            board[i] = new Array();
            hasConflicted[i] = new Array();
            for(var j=0;j<4;j++){
                board[i][j] =0;
                hasConflicted[i][j] = false;
            }
        }
        updateBoardView();
        score = 0;
    }
}


$(document).ready(function () {
    var s = new Game();
    s.newGame();
});

// var newGame = function (){
//  //初始化棋盘格
//  init();
//  //在随机的两个格子生成数字
//  creatNumber();
//  creatNumber();
// }
//初始化棋盘格
// function init (){
//  for(var i=0;i<4;i++){
//      for(var j=0;j<4;j++){
//          var boardCell = $("#game-cell-"+i+"-"+j);
//          boardCell.css("top",getPosTop(i,j));
//          boardCell.css("left",getPosLeft(i,j));
//          updateScore1( score );
//      }
//  }
//  for(var i=0;i<4;i++){
//      board[i] = new Array();
//      hasConflicted[i] = new Array();
//      for(var j=0;j<4;j++){
//          board[i][j] =0;
//          hasConflicted[i][j] = false;
//      }
//  }
//  updateBoardView();
//     score = 0;
// }

function updateBoardView(){
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            $(".game-board").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
            var curNumerCell =$('#number-cell-'+i+'-'+j);
            if(board[i][j] == 0){
                curNumerCell.css("height","0px");
                curNumerCell.css("width","0px");
                curNumerCell.css("top",getPosTop(i,j)+35);
                curNumerCell.css("left",getPosLeft(i,j)+35);
            }else{
                curNumerCell.css("width","75px");
                curNumerCell.css("height","75px");
                curNumerCell.css("top",getPosTop(i,j));
                curNumerCell.css("left",getPosLeft(i,j));
                curNumerCell.css("background-color",getNumberBackgroundColor(board[i][j]));
                curNumerCell.css("color",getNumberColor(board[i][j]));
                curNumerCell.text(board[i][j]);
            }
            hasConflicted[i][j] = false;
        } 
         $('.number-cell').css('line-height','75px');
    }
}
function creatNumber(){
    if(nospace(board)){
        return false;
    }
    //随机一个位置
    var randX = parseInt(Math.floor(Math.random()*4));
    var randY = parseInt(Math.floor(Math.random()*4));

    while(true){
        if(board[randX][randY] == 0)
            break;
        randX = parseInt(Math.floor(Math.random()*4));
        randY = parseInt(Math.floor(Math.random()*4));
    }
    //随机一个数字
    var randNumber = Math.random() <0.5 ?2:4;

    //显示随机数字
    board[randX][randY] = randNumber;
    showNumberWithAnimation(randX,randY,randNumber);
    return true;
}

$(document).keydown( function(event){

    switch (event.keyCode){
        case 37://left
            event.preventDefault();

            if(moveLeft()){
                setTimeout("creatNumber()",210);
                setTimeout(" isgameover()",300);
            }
            break;
        case 38://up
            event.preventDefault();
            if(moveUp()){
                setTimeout("creatNumber()",210);
                setTimeout(" isgameover()",300);
            }
            break;
        case 39://right
            event.preventDefault();
            if(moveRight()){
                setTimeout("creatNumber()",210);
                setTimeout(" isgameover()",300);
            }
            break;
        case 40://down
            event.preventDefault();
            if(moveDown()){
                setTimeout("creatNumber()",210);
                setTimeout(" isgameover()",300);
            }
            break;
        default ://default
            break;
    }
});

function isgameover(){
    if( nospace( board ) && nomove( board ) ){
        gameover();
    }
}

function gameover(){
    var printscore = "gameover!最高分："+score;
    alert(printscore);
}


function alt(board){

    if(board == 2048){
        var con =confirm( "提示：8196");
        if(con == true) {

        }else{
            newgame();
        }
    }
}

function moveLeft(){
    if( !canMoveLeft( board ))
    return false;

    for(var i = 0 ; i < 4 ; i ++ )
        for(var j = 1 ; j < 4 ; j ++ ) {
            if (board[i][j] != 0) {

                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, k, j, board)) {
                        //move
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicted[i][k]) {
                        //move
                        showMoveAnimation(i, j, i, k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        alt(board[i][k]);
                        //addscore
                        score += board[i][k];
                        updateScore(score);
                        updateRecord( score );
                        // hasConflicted[i][k] = true;

                        continue;

                    }

                }
            }
        }
    setTimeout("updateBoardView()",200);
 return true;
}

function moveRight(){
    if( !canMoveRight( board ) )
        return false;

    //moveRight
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2 ; j >= 0 ; j -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > j ; k -- ){

                    if( board[i][k] == 0 && noBlockHorizontal( i , j , k , board ) ){
                        //move
                        showMoveAnimation( i , j , i , k );
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[i][k] == board[i][j] && noBlockHorizontal( i , j , k , board ) ){
                       //move
                        showMoveAnimation(i, j, i, k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        alt(board[i][k]);
                        //addscore
                        score += board[i][k];
                        updateScore(score);
                        updateRecord( score );
                        // hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}

function moveUp(){

    if( !canMoveUp( board ) )
        return false;

    //moveUp
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ ){
            if( board[i][j] != 0 ){
                for( var k = 0 ; k < i ; k ++ ){

                    if( board[k][j] == 0 && noBlockVertical( j , k , i , board ) ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical( j , k , i , board ) ){
                      //move
                        showMoveAnimation(i, j, k, j);
                        //add

                        board[k][j] += board[i][j];
                        console.log(board[k][j]);
                        board[i][j] = 0;
                        alt(board[k][j]);
                        //addscore
                        score += board[k][j];
                        updateScore(score);
                        updateRecord( score );
                        // hasConflicted[k][j] = true;

                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}

function moveDown(){
    if( !canMoveDown( board ) )
        return false;

    //moveDown
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > i ; k -- ){

                    if( board[k][j] == 0 && noBlockVertical( j , i , k , board ) ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical( j , i , k , board ) ){
                       //move
                        showMoveAnimation(i, j, k, j);
                        //add
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        alt(board[k][j]);
                        //addscore
                        score += board[k][j];
                        updateScore(score);
                        updateRecord( score );
                        // hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}