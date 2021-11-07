var d = new Date();
document.write( '<footer class="footer">');
    document.write( '<p class="foo__text">Todos los derechos Reservados Normandy Wings</p>');
    document.write( '<p class="foo__text">'+ 
                        '<h3>'  + 
                                d.getDate() +'/' + d.getMonth() + '/' + d.getFullYear() +
                        '</h3>' +
                        '<h3>'  + 
                                d.getHours() +':' + d.getMinutes() + ':' + d.getSeconds()+
                        '</h3>' +
                    '</p>');
document.write( '</footer>');

