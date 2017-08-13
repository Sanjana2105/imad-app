var button=document.getElementBYId('counter');
button.onClick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystatechange===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://ssanjanaindya.imad.hasura-app.io/counter',true);
};

