import React from 'react';

function Players(){
    return(
        <section id="yearly_stats">
            <div className="container px-4">
                <div className="gx-4 justify-content-center">
                    <div className="col-xxl">
                        <h2>Yearly Player Stats</h2>
                        <p><i>Four dimentional scatterplots for player stat insight!</i></p>
                        <p><i>See recent player consistency (or not).</i></p>
                        <div>
                            <h4><span className = "badge bg-info">Years Available</span></h4>
                            <span className = "badge bg-primary">2019</span>
                            <span className = "badge bg-secondary">2018</span>
                            <span className = "badge bg-success">2017</span>
                            <span className = "badge bg-warning">2016</span>
                            <p></p>
                        </div>
                        <label for="years">Choose Year: </label>
                        <select className="form-select" data-style="btn-success" id="dropDown" >
                            <option value="NONE" selected>Choose...</option>
                            <option value="div1">2019</option>
                            <option value="div2">2018</option>
                            <option value="div3">2017</option>
                            <option value="div4">2016</option>
                        </select>
                        <hr/>

                        {
                          $('.drop-down-show-hide').hide();
                          var val0 = $('#dropDown').find("option").value
                            console.log('we made it')

                          $('#dropDown').change(function(){
                            $(this).find("option").each(function()
                            {
                              if (this.value != '')
                              {
                                $('#' + this.value).css("display", "none");
                              }
                            });
                            $('#' + this.value).css("display", "block");
                          });
                        }
                        
                        <script>
                          $(document).ready(function(){
                            $("select").change(function(){
                              $(this).find("option:selected").each(function(){
                                var optionValue = $(this).attr("value");
                                if(optionValue){
                                  $(".").not("." + optionValue).hide();
                                  $("." + optionValue).show();
                                } else{
                                  $(".").hide();
                                }
                              });
                            }).change();
                          });
                        </script>
                        <div id='chartAreaX'>
                            <div  id="div1" className="drop-down-show-hide">
                                <div className='tableauPlaceholder' id='viz1638491358761' style='position: relative'>
                                    <object className='tableauViz'  style='display:none;'>
                                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                        <param name='embed_code_version' value='3' />
                                        <param name='site_root' value='' />
                                        <param name='name' value='2019FantasyFootballStatsbyPlayer&#47;2019Dashboard' />
                                        <param name='tabs' value='no' />
                                        <param name='toolbar' value='yes' />
                                        <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2019FantasyFootballStatsbyPlayer&#47;2019Dashboard&#47;1.png' />
                                        <param name='animate_transition' value='yes' />
                                        <param name='display_static_image' value='yes' />
                                        <param name='display_spinner' value='yes' />
                                        <param name='display_overlay' value='yes' />
                                        <param name='display_count' value='yes' />
                                        <param name='language' value='en-US' />
                                        <param name='filter' value='publish=yes' />
                                        <param name='device' value='desktop'/>
                                    </object>
                                </div>
                                <script type='text/javascript'>
                                  var divElement = document.getElementById('viz1638491358761');
                                  var vizElement = divElement.getElementsByTagName('object')[0];
                                  console.log(divElement.offsetWidth)
                                  if ( divElement.offsetWidth > 800 ) {
                                    vizElement.style.width='100%';
                                    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                  } else if ( divElement.offsetWidth > 500 ) {
                                    vizElement.style.width='100%';
                                    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                  } else {
                                    vizElement.style.width='100%';
                                    vizElement.style.height='30%';
                                  }
                                  var scriptElement = document.createElement('script');
                                  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                                  vizElement.parentNode.insertBefore(scriptElement, vizElement);
                                </script>
                            </div>
                            <div  id="div2" className="drop-down-show-hide">
                                <div className='tableauPlaceholder' id='viz1638554391519' style='position: relative'>
                                    <object className='tableauViz'  style='display:none;'>
                                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                        <param name='embed_code_version' value='3' />
                                        <param name='site_root' value='' />
                                        <param name='name' value='2018FantasyFootballStatsbyPlayer&#47;2018Dashboard' />
                                        <param name='tabs' value='no' />
                                        <param name='toolbar' value='yes' />
                                        <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2018FantasyFootballStatsbyPlayer&#47;2018Dashboard&#47;1.png' />
                                        <param name='animate_transition' value='yes' />
                                        <param name='display_static_image' value='yes' />
                                        <param name='display_spinner' value='yes' />
                                        <param name='display_overlay' value='yes' />
                                        <param name='display_count' value='yes' />
                                        <param name='language' value='en-US' />
                                        <param name='filter' value='publish=yes' />
                                        <param name='device' value='desktop'/>
                                    </object>
                                </div>
                                <script type='text/javascript'>
                                  var divElement = document.getElementById('viz1638554391519');
                                  var vizElement = divElement.getElementsByTagName('object')[0];
                                  if ( divElement.offsetWidth > 800 ) {
                                    vizElement.style.width='100%';
                                    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                  } else if ( divElement.offsetWidth > 500 ) {
                                    vizElement.style.width='100%';
                                    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                  } else {
                                    vizElement.style.width='100%';
                                    vizElement.style.height='30%';
                                  }
                                  var scriptElement = document.createElement('script');
                                  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                                  vizElement.parentNode.insertBefore(scriptElement, vizElement);
                                </script>
                            </div>
                            <div  id="div3" className="drop-down-show-hide">
                              <div className='tableauPlaceholder' id='viz1638571965522' style='position: relative'>
                                <noscript>
                                    <a href='#'>
                                        <img alt='2017 Fantasy Football Stats by Player ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2017FantasyFootballStatsbyPlayer&#47;2017Dashboard&#47;1_rss.png' style='border: none' />
                                    </a>
                                </noscript>
                                <object className='tableauViz'  style='display:none;'>
                                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                    <param name='embed_code_version' value='3' />
                                    <param name='site_root' value='' />
                                    <param name='name' value='2017FantasyFootballStatsbyPlayer&#47;2017Dashboard' />
                                    <param name='tabs' value='no' />
                                    <param name='toolbar' value='yes' />
                                    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2017FantasyFootballStatsbyPlayer&#47;2017Dashboard&#47;1.png' />
                                    <param name='animate_transition' value='yes' />
                                    <param name='display_static_image' value='yes' />
                                    <param name='display_spinner' value='yes' />
                                    <param name='display_overlay' value='yes' />
                                    <param name='display_count' value='yes' />
                                    <param name='language' value='en-US' />
                                    <param name='filter' value='publish=yes' />
                                    <param name='device' value='desktop'/>
                                </object>
                              </div>
                              <script type='text/javascript'>
                                var divElement = document.getElementById('viz1638571965522');
                                var vizElement = divElement.getElementsByTagName('object')[0];
                                if ( divElement.offsetWidth > 800 ) {
                                  vizElement.style.width='100%';
                                  vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                } else if ( divElement.offsetWidth > 500 ) {
                                  vizElement.style.width='100%';
                                  vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                } else {
                                  vizElement.style.width='100%';
                                  vizElement.style.height='30%';
                                }
                                var scriptElement = document.createElement('script');
                                scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                                vizElement.parentNode.insertBefore(scriptElement, vizElement);
                              </script>
                            </div>
                            <div id="div4" className="drop-down-show-hide">
                              <div className='tableauPlaceholder' id='viz1638802062798' style='position: relative'>
                                <noscript>
                                  <a href='#'>
                                    <img alt='2016 Fantasy Football Stats by Player ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2016FantasyFootballStatsbyPlayer&#47;2016Dashboard&#47;1_rss.png' style='border: none' />
                                  </a>
                                </noscript>
                                <object className='tableauViz'  style='display:none;'>
                                  <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                                  <param name='embed_code_version' value='3' /> 
                                  <param name='site_root' value='' />
                                  <param name='name' value='2016FantasyFootballStatsbyPlayer&#47;2016Dashboard' />
                                  <param name='tabs' value='no' />
                                  <param name='toolbar' value='yes' />
                                  <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2016FantasyFootballStatsbyPlayer&#47;2016Dashboard&#47;1.png' /> 
                                  <param name='animate_transition' value='yes' />
                                  <param name='display_static_image' value='yes' />
                                  <param name='display_spinner' value='yes' />
                                  <param name='display_overlay' value='yes' />
                                  <param name='display_count' value='yes' />
                                  <param name='language' value='en-US' />
                                  <param name='filter' value='publish=yes' />
                                </object></div>                
                                <script type='text/javascript'>                    
                                  var divElement = document.getElementById('viz1638802062798');                   
                                  var vizElement = divElement.getElementsByTagName('object')[0];                    
                                  if ( divElement.offsetWidth > 800 ) { 
                                    vizElement.style.width='100%';
                                    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                  } else if ( divElement.offsetWidth > 500 ) { 
                                    vizElement.style.width='100%';
                                    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
                                  } else { 
                                    vizElement.style.width='100%';
                                    vizElement.style.height='30%';
                                  }                     
                                  var scriptElement = document.createElement('script');                    
                                  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
                                  vizElement.parentNode.insertBefore(scriptElement, vizElement);                
                                </script>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TableauSection;