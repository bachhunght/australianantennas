var wpcf7_redirect,$=jQuery.noConflict();function Wpcf7_redirect(){this.init=function(){this.wpcf7_redirect_mailsent_handler()},this.wpcf7_redirect_mailsent_handler=function(){document.addEventListener("wpcf7mailsent",function(e){var i,t;$(e.target);$(document.body).trigger("wpcf7r-mailsent",[e]),void 0!==e.detail.apiResponse&&e.detail.apiResponse&&(void(t=0)!==(i=e.detail.apiResponse).api_url_request&&i.api_url_request&&wpcf7_redirect.handle_api_action(i.api_url_request),void 0!==i.api_json_xml_request&&i.api_json_xml_request&&wpcf7_redirect.handle_api_action(i.api_json_xml_request),void 0!==i.FireScript&&i.FireScript&&(t=void 0!==i.FireScript.delay_redirect?i.FireScript.delay_redirect:t,window.setTimeout(function(){wpcf7_redirect.handle_javascript_action(i.FireScript)},t)),void 0!==i.popup&&i.popup&&wpcf7_redirect.handle_popups(i.popup),void 0!==i.redirect_to_paypal&&i.redirect_to_paypal&&(t=void 0!==i.redirect_to_paypal.delay_redirect?i.redirect_to_paypal.delay_redirect:t,window.setTimeout(function(){wpcf7_redirect.handle_redirect_action(i.redirect_to_paypal)},t)),void 0!==i.redirect&&i.redirect&&(t=void 0!==i.redirect.delay_redirect?i.redirect.delay_redirect:t,window.setTimeout(function(){wpcf7_redirect.handle_redirect_action(i.redirect)},t)))},!1),document.addEventListener("wpcf7invalid",function(e){$(e.target);$(document.body).trigger("wpcf7r-invalid",[e]),void 0!==e.detail.apiResponse&&e.detail.apiResponse&&(response=e.detail.apiResponse,response.invalidFields&&wpcf7_redirect.ninja_multistep_mov_to_invalid_tab(e,response))})},this.handle_popups=function(e){$(document.body).trigger("wpcf7r-before-open-popup",[event]),$.each(e,function(e,i){var t=$(i["popup-template"]);$(document.body).append(t),$(document.body).addClass(i["template-name"]),window.setTimeout(function(){t.addClass("is-open")},1e3),t.find(".close-button").on("click",function(){t.removeClass("is-open").addClass("fade"),window.setTimeout(function(){$(".wpcf7r-modal").remove(),$(document.body).trigger("wpcf7r-popup-removed",[t])},4e3)}),$(document.body).trigger("wpcf7r-popup-appended",[t])})},this.handle_api_action=function(send_to_api_result,request){$.each(send_to_api_result,function(k,v){v.result_javascript&&(response=void 0!==v.api_response?v.api_response:"",request=void 0!==v.request?v.request:"",eval(v.result_javascript))})},this.ninja_multistep_mov_to_invalid_tab=function(e,i){var t,r,n;$(".fieldset-cf7mls-wrapper").length&&(t=$(e.target),r=i.invalidFields[0],n=$(r.into).parents("fieldset"),t.find(".fieldset-cf7mls").removeClass("cf7mls_current_fs"),n.addClass("cf7mls_current_fs").removeClass("cf7mls_back_fs"),t.find(".cf7mls_progress_bar").length&&(t.find(".cf7mls_progress_bar li").eq(t.find("fieldset.fieldset-cf7mls").index(previous_fs)).addClass("current"),t.find(".cf7mls_progress_bar li").eq(t.find("fieldset.fieldset-cf7mls").index(current_fs)).removeClass("active current")))},this.handle_redirect_action=function(e){$(document.body).trigger("wpcf7r-handle_redirect_action",[e]),$.each(e,function(e,i){var t=void 0!==i.delay&&i.delay?i.delay:"";t*=1e3,window.setTimeout(function(e){var i=void 0!==e.redirect_url&&e.redirect_url?e.redirect_url:"",t=void 0!==e.type&&e.type?e.type:"";void 0!==e.form&&e.form?($("body").append(e.form),$("#cf7r-result-form").submit()):i&&"redirect"==t?window.location=i:i&&"new_tab"==t&&window.open(i)},t,i)})},this.handle_javascript_action=function(scripts){$(document.body).trigger("wpcf7r-handle_javascript_action",[scripts]),$.each(scripts,function(k,script){eval(script)})},this.htmlspecialchars_decode=function(e){var i={"&amp;":"&","&#038;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#039;":"'","&#8217;":"’","&#8216;":"‘","&#8211;":"–","&#8212;":"—","&#8230;":"…","&#8221;":"”"};return e.replace(/\&[\w\d\#]{2,5}\;/g,function(e){return i[e]})},this.init()}$(document).ready(function(){wpcf7_redirect=new Wpcf7_redirect});