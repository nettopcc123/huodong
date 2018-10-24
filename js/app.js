function getData(size,page){
    j++;
    $.ajax({
      type: 'GET',
      url: 'js/data.json',
      dataType: 'json',
      success: function(reponse){
        console.log(reponse)
        var data = reponse.list;
        var sum = reponse.list.length;
        var str= '';
        sf = size*page;
        if(page>1){
            $('.toplist').html('');
         }
        if(sf <= sum){
            $.each(data,function(i,val){  //遍历二维数组
                 ci = i+1;
                 num = '';
                if(ci == 1){
                    ci = ci;
                }else if(ci == 2){
                    ci = ci;
                }else if(ci == 3){
                    ci = ci;
                }else{
                    num = i+1;
                    ci = '';
                }
                str += '<li><div class="topl"><span class="tico' + ci + '">'+ num +'</span><span class="tif">'+ val.name +'</span></div><span class="topr">'+ val.award +'</span></li>';
                if(i>=sf){
                    return false;
                };
                if(i>=sum-1){
                    $('.more').remove();
                }
            })
            $('.toplist').append(str);
        }
      },
      error: function(xhr, type){
        console.log('Ajax error!');
      }
    });
  }
  j = 1; 
  $('.more').on('click',function(){
    getData(5,j);
  });
  getData(5,j);
